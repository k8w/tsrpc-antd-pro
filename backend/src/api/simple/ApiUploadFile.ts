import { ApiCall } from "tsrpc";
import { ReqUploadFile, ResUploadFile } from "../../shared/protocols/simple/PtlUploadFile";

export async function ApiUploadFile(call: ApiCall<ReqUploadFile, ResUploadFile>) {
    // TODO
    call.error('API Not Implemented');
}