import { apiClient } from "@/models/apiClient/apiClient";
import { useScopedClient } from "@/models/tsrpc-react/useScopedClient";
import { ResUploadFile } from "@/shared/protocols/simple/PtlUploadFile";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { useState } from "react";

export default (props: {
    /** 上传成功后返回的 URL */
    value?: string | undefined,
    onChange?: (value: string | undefined) => void,
}) => {
    const client = useScopedClient(apiClient);
    const [fileList, setFileList] = useState<UploadFile<ResUploadFile>[]>(props.value ? [{
        uid: '-1',
        response: { url: props.value },
        name: props.value,
        status: 'done'
    }] : []);

    // 点击预览打开的 URL
    fileList.forEach(v => {
        v.url = v.response?.url
    })

    return <Upload
        maxCount={1}
        fileList={fileList}
        onChange={e => {
            setFileList(e.fileList);
            // 只上报已上传完成的
            props.onChange?.(e.fileList.find(v => v.status === 'done')?.response?.url);
        }}
        // 自定义上传网络请求，改为接入 TSRPC
        customRequest={async req => {
            // 将文件读取为 UintArray
            let file = req.file as File;
            let buf = await file.arrayBuffer();

            // 调用上传接口（与普通接口无异）
            client.callApi('simple/UploadFile', {
                fileName: file.name,
                fileData: new Uint8Array(buf)
            }).then(ret => {
                if (ret.isSucc) {
                    req.onSuccess?.(ret.res, undefined as any);
                }
                else {
                    req.onError?.(ret.err as any)
                }
            })
        }}
    ><Button icon={<UploadOutlined />}>上传文件</Button></Upload >

}