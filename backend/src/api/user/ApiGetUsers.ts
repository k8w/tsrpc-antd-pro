import { ApiCall } from "tsrpc";
import { ReqGetUsers, ResGetUsers } from "../../shared/protocols/user/PtlGetUsers";

export async function ApiGetUsers(call: ApiCall<ReqGetUsers, ResGetUsers>) {
    call.succ({
        users: [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
            },
        ]
    })
}