import fs from "fs/promises";
import { ApiCall } from "tsrpc";
import { ReqUploadFile, ResUploadFile } from "../../shared/protocols/simple/PtlUploadFile";

export async function ApiUploadFile(call: ApiCall<ReqUploadFile, ResUploadFile>) {
    // Write to file, or push to remote OSS...
    await fs.writeFile('uploads/' + call.req.fileName, call.req.fileData);

    call.succ({
        url: '/uploads/' + call.req.fileName
    });
}