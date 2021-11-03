import { Modal } from 'antd';

export class UIUtil {

    static alert(content: React.ReactNode, options?: AlertOptions): Promise<void> {
        return new Promise(rs => {
            Modal[options?.type || 'info']({
                title: options?.title,
                content: content,
                okText: options?.okText || '确认',
                onOk() { rs() },
            });
        })
    }

    static confirm(content: React.ReactNode, options?: ConfirmOptions): Promise<boolean | undefined> {
        return new Promise(rs => {
            Modal.confirm({
                title: options?.title,
                content: content,
                okText: options?.okText || '确认',
                cancelText: options?.cancelText || '取消',
                onOk() { rs(true) },
                onCancel() { rs(false) }
            });
        })
    }

    // static async withLoading<T>(setLoading: (v: boolean) => void, func: () => Promise<T> | T, loadingKey = 'isLoading'): Promise<T> {
    //     setLoading(true);
    //     try {
    //         let res = await func();
    //         return res;
    //     }
    //     catch (e) {
    //         message.error(e.message);
    //         throw e;
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

}

export type AlertType = 'info' | 'success' | 'error' | 'warning';

export interface AlertOptions {
    type?: AlertType,
    okText?: React.ReactNode,
    title?: React.ReactNode
}

export interface ConfirmOptions {
    okText?: React.ReactNode,
    cancelText?: React.ReactNode,
    title?: React.ReactNode
}

(window as any).UIUtil = UIUtil;