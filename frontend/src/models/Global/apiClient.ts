import { HttpClient } from "tsrpc-browser";
import { globalConfig } from "../../configs/globalConfig";
import { serviceProto } from "../../shared/protocols/serviceProto";

export const apiClient = new HttpClient(serviceProto, {
    server: globalConfig.server,
    logger: console
});