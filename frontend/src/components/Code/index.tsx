import { HTMLProps } from 'react';
import style from './index.less';

export default (props: HTMLProps<any>) => {
    return <div className={style.Code} {...props}>
        {props.children}
    </div>
}