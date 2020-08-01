import { setCookie, getCookie, removeCookie } from "./storage";

const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);

const options = { expires };

export const COOKIE_ACCOUNT = "acc";
export const COOKIE_TOKEN = "tk";
export const COOKIE_REFRESH_TOKEN = "rtk";

export const setAccount = (account) =>
  setCookie(COOKIE_ACCOUNT, account, options);

export const getAccount = () => getCookie(COOKIE_ACCOUNT);

export const removeAccount = () => removeCookie(COOKIE_ACCOUNT);

export const setToken = (token) => setCookie(COOKIE_TOKEN, token);
export const getToken = (token) => getCookie(COOKIE_TOKEN, token);

export const setRefreshToken = (refreshtoken) =>
  setCookie(COOKIE_REFRESH_TOKEN, refreshtoken, options);
export const getRefreshToken = (refreshtoken) =>
  getCookie(COOKIE_REFRESH_TOKEN, refreshtoken);
