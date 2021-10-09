export class StrUtil {
    /** 获取字符宽度（中文占2，英文占1） */
    static getStrWidth(str: string): number {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
                len += 2;
            } else {
                len++;
            }
        }
        return len;
    }
}