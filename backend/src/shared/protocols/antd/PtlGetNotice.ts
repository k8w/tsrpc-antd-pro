export interface ReqGetNotice {

}

export interface ResGetNotice {
    data: NoticeIconItem[]
}

export type NoticeIconItemType = 'notification' | 'message' | 'event';

export type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
};

// export const conf = {}