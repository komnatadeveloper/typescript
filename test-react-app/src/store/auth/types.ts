




// Auth Action Strings
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT = 'LOGOUT';


export interface AuthState {
  token: string | null
  isAuthenticated: boolean | null
  loading: boolean
  user: Object | null
}

interface LoginAction {
  email: string
  password: string
}

interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS
  payload: {
    token: string
  }
}
interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  payload: string
}
interface ClearProfile {
  type: typeof CLEAR_PROFILE  
}
interface LoginFail {
  type: typeof LOGIN_FAIL  
}
interface RegisterFail {
  type: typeof REGISTER_FAIL  
}

interface LogOutAction {
  type: typeof LOGOUT
}

export type AuthActionTypes =
  LoginSuccess
  | RegisterSuccess
  | ClearProfile
  | LogOutAction
  | LoginFail
  | RegisterFail
  // | LoginAction; 