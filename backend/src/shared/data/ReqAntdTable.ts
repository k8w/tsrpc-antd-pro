/** ANTD 表格标准请求参数 */
export interface ReqAntdTable {
    /**
    * 页码，从 1 开始
    * @defaultValue 1
    */
    current?: number;
    /**
     * 分页大小
     * @defaultValue 20
     */
    pageSize?: number;
}