import { createBrowserHistory } from 'history';
import { CurrentUser } from '../../shared/protocols/user/CurrentUser';

export class Global {

    static currentUser: CurrentUser | undefined = {
        _id: 'TEST',
        nickname: 'TEST NICKNAME',
        roles: []
    };

    static history = createBrowserHistory();

    // static get query(): { [key: string]: string | undefined } {
    //     let search = new URLSearchParams(this.history.location.search);
    //     let output: { [key: string]: string | undefined } = {};
    //     search.forEach((v, k) => {
    //         output[k] = v;
    //     })
    //     return output;
    // }

    // static get href(): string {
    //     return this.history.createHref(this.history.location);
    // }

}

if (process.env.NODE_ENV === 'development') {
    (window as any).Global = Global;
}
