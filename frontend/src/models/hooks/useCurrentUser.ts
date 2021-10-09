import { useEffect, useState } from "react";
import { CurrentUser } from "../../shared/protocols/user/CurrentUser";
import { Global } from "../Global/Global";

export function useCurrentUser(): CurrentUser | undefined {
    const [currentUser, setCurrentUser] = useState(Global.currentUser);

    // 监听 CurrentUser 变化
    useEffect(() => {
        console.log(setCurrentUser);
        // const handler = Global.on('currentUserChange', user => {
        //     setCurrentUser(user);
        // });
        // return Global.off('currentUserChange', handler);
    }, []);

    return currentUser;
}