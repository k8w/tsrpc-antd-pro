import fs from "fs/promises";
import path from "path";
import { HttpConnection, HttpServer } from "tsrpc";

/** 将 GET 请求解析为本地静态文件 */
export async function serveStaticFiles(server: HttpServer, urlPrefix: string, staticDir: string) {
    // Flow: Serve static files
    server.flows.preRecvBufferFlow.push(async v => {
        let conn = v.conn as HttpConnection;
        if (conn.httpReq.method === 'GET') {
            let url = decodeURIComponent(conn.httpReq.url ?? '/');
            if (url.startsWith(urlPrefix)) {
                let filepath = path.resolve(staticDir, path.relative(urlPrefix, url))
                let file = await fs.readFile(filepath).catch(e => { });
                if (file) {
                    server.logger.log('GET', url);
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

    // Ensure dir
    if (await fs.access(staticDir).catch(() => true)) {
        await fs.mkdir(staticDir).catch();
        await fs.access(staticDir);
    }
}