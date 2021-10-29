/// <reference types="node" />

import path from "path";
import { TsrpcConfig } from 'tsrpc-cli';

path.delimiter

const tsrpcConf: TsrpcConfig = {
    // Generate ServiceProto
    proto: [
        {
            ptlDir: 'src/shared/protocols', // Protocol dir
            output: 'src/shared/protocols/serviceProto.ts', // Path for generated ServiceProto
            apiDir: 'src/api',   // API dir
            // 自定义新协议模板（新建文件时自动填充）
            newPtlTemplate: (basename, ptlPath, ptlDir) => `import { BaseRequest, BaseResponse } from "./${path.relative(path.dirname(ptlPath), path.join(ptlDir, 'base')).replace(/\\/g, '/')}";

export interface Req${basename} extends BaseRequest {

}

export interface Res${basename} extends BaseResponse {

}`
        }
    ],
    // Sync shared code
    sync: [
        {
            from: 'src/shared',
            to: '../frontend/src/shared',
            type: 'symlink',     // Change this to 'copy' if your environment not support symlink
        }
    ],
    // Dev server
    dev: {
        autoProto: true,        // Auto regenerate proto
        autoSync: true,         // Auto sync when file changed
        autoApi: true,          // Auto create API when ServiceProto updated
        watch: 'src',           // Restart dev server when these files changed
        entry: 'src/index.ts',  // Dev server command: node -r ts-node/register {entry}
    },
    // Build config
    build: {
        autoProto: true,        // Auto generate proto before build
        autoSync: true,         // Auto sync before build
        autoApi: true,          // Auto generate API before build
        outDir: 'dist',         // Clean this dir before build
    }
}
export default tsrpcConf;