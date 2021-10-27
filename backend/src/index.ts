import 'k8w-extend-native';
import * as path from "path";
import { HttpServer } from "tsrpc";
import { Global } from './models/Global';
import { serveStaticFiles } from "./models/serveStaticFiles";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// 扩展 Call 自定义字段
declare module 'tsrpc' {
    export interface ApiCall {
        /** 当前登录的用户 uid（未登录为 ''） */
        currentUid: string;
    }
}

// Entry function
async function main() {
    // Extends Flow
    // Static file server for '/uploads/*'
    await serveStaticFiles(server, '/uploads/', 'uploads')

    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // Init Global
    await Global.init();

    await server.start();
};

main().catch(e => {
    // Exit if any error during the startup
    server.logger.error(e);
    process.exit(-1);
});