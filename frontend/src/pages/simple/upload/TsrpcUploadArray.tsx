import { ResUploadFile } from "@/shared/protocols/simple/PtlUploadFile";
import { apiClient } from "@/utils/apiClient/apiClient";
import { useScopedClient } from "@/utils/tsrpc-react/useScopedClient";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { useState } from "react";

export default (props: {
    /** 上传成功后返回的 URL */
    value?: string[],
    onChange?: (value: string[]) => void,
}) => {
    const client = useScopedClient(apiClient);
    const [fileList, setFileList] = useState<UploadFile<ResUploadFile>[]>(props.value?.map(v => ({
        uid: '-1',
        response: { url: v },
        name: v,
        status: 'done'
    })) ?? []);

    // 预览的 URL，加上域名前缀
    fileList.forEach(v => {
        v.url = v.response?.url
    })

    return <Upload
        multiple
        fileList={fileList}
        onChange={e => {
            setFileList(e.fileList);
            // 只上报已上传完成的
            props.onChange?.(e.fileList.filter(v => v.status === 'done').map(v => v.response.url));
        }}
        customRequest={async req => {
            // 将文件读取为 UintArray
            let file = req.file as File;
            let buf = await file.arrayBuffer();

            client.callApi('simple/UploadFile', {
                fileName: file.name,
                fileData: new Uint8Array(buf)
            }).then(ret => {
                if (ret.isSucc) {
                    // @ts-ignore (ANTD 类型定义 BUG)
                    req.onSuccess?.(ret.res);
                }
                else {
                    // @ts-ignore (ANTD 类型定义 BUG)
                    req.onError?.(ret.err)
                }
            })
        }}
    ><Button icon={<PlusOutlined />}>上传文件</Button></Upload >

}