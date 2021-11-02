import { CurrentUser } from "./shared/data/CurrentUser";

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {

  };
}
