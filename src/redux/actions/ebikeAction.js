/**
 * action 类型
 */
import { SWITCH_MENU } from "../actions/actionTypes";

 //菜单点击切换，修改面包屑名称
export const switchMenu = (menuName) => ({
 	type: SWITCH_MENU,
 	menuName
 });
