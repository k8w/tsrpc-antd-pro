import fs from "fs/promises";
import 'k8w-extend-native';
import * as path from "path";
import { HttpConnection, HttpServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    cors: '*'
});

// Flow: Serve static files
server.flows.preRecvBufferFlow.push(async v => {
    let conn = v.conn as HttpConnection;
    if (conn.httpReq.method === 'GET') {
        if (conn.httpReq.url?.startsWith('/uploads/')) {
            let file = await fs.readFile(decodeURIComponent(conn.httpReq.url.replace(/^\//, ''))).catch(e => { });
            if (file) {
                server.logger.log('GET', conn.httpReq.url);
                conn.httpRes.end(file);
                return undefined;
            }
        }

        conn.httpRes.statusCode = 404;
        conn.httpRes.end('<h1>File Not Found</h1>')
        return undefined;
    }

    return v;
})

// Entry function
async function main() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // Init upload dir
    if (await fs.access('uploads').catch(() => true)) {
        await fs.mkdir('uploads');
    }

    await server.start();
};

main().catch(e => {
    // Exit if any error during the startup
    server.logger.error(e);
    process.exit(-1);
});