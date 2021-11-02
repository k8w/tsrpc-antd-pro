import 'k8w-extend-native';
import * as path from "path";
import { HttpServer } from "tsrpc";
import { serveStaticFiles } from "./models/flows/serveStaticFiles";
import { userAndRoles } from './models/flows/userAndRoles';
import { Global } from './models/Global';
import { CurrentUser } from './shared/data/CurrentUser';
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});



// Entry function
async function main() {
    // Extends Flow
    // 扩展 call.currentUser，自动检测登录和权限
    await userAndRoles(server);
    // 静态文件服务（访问上传的文件）
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