import { USER_DATA, LOGIN_DATA } from "./actionTypes";

export const userAction = (state) => ({ type: USER_DATA, state });

export const loginAction = (state) => ({ type: LOGIN_DATA, state });
