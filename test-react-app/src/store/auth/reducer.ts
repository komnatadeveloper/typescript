import { AuthState, AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from './types';


const initialState : AuthState = {
  token: "",
  isAuthenticated: null,
  loading: true,
  user: null
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
) : AuthState => {
  switch (action.type) {

    case REGISTER_SUCCESS: 
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,        
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true
      }

    case CLEAR_PROFILE:
    case LOGOUT:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      }

    default:
      return state;

  }
}

