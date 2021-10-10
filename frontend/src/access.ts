import { CurrentUser } from "./shared/data/CurrentUser";
import { UserRole } from "./shared/data/UserRole";

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.role.includes(UserRole.管理员),
    canCallApi: function (apiName: string) {
      console.log('canCallApi', arguments);
      return true
    },

    
  };
}
