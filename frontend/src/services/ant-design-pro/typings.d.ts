// @ts-ignore
/* eslint-disable */

import { LoginTicket } from "@/shared/protocols/user/PtlLogin";


declare global {
  namespace API {
    type PageParams = {
      current?: number;
      pageSize?: number;
    };

    type RuleListItem = {
      key?: number;
      disabled?: boolean;
      href?: string;
      avatar?: string;
      name?: string;
      owner?: string;
      desc?: string;
      callNo?: number;
      status?: number;
      updatedAt?: string;
      createdAt?: string;
      progress?: number;
    };

    type RuleList = {
      data?: RuleListItem[];
      /** 列表的内容总数 */
      total?: number;
      success?: boolean;
    };

    type FakeCaptcha = {
      code?: number;
      status?: string;
    };

    type LoginParams = LoginTicket & { autoLogin: boolean };

    type ErrorResponse = {
      /** 业务约定的错误码 */
      errorCode: string;
      /** 业务上的错误信息 */
      errorMessage?: string;
      /** 业务上的请求是否成功 */
      success?: boolean;
    };

    type NoticeIconList = {
      data?: NoticeIconItem[];
      /** 列表的内容总数 */
      total?: number;
      success?: boolean;
    };
  }
}