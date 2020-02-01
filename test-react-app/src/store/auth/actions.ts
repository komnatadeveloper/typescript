


import { AuthActionTypes, AuthState, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_PROFILE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import {Dispatch} from 'redux'


export const loginSuccess = (token: string): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: token  
})

export const registerSuccess = (data: {token: string}): AuthActionTypes => ({
  type: REGISTER_SUCCESS,
  payload: data  
})

export const loginFail = (): AuthActionTypes => ({
  type: LOGIN_FAIL 
})
export const registerFail = (): AuthActionTypes => ({
  type: REGISTER_FAIL 
})

export const clearProfile = (): AuthActionTypes => ({
  type: CLEAR_PROFILE 
})
export const logoutAction = (): AuthActionTypes => ({
  type: LOGOUT 
})


export const register = (
  {email, password
  
  }  :   {
    email:string,
    password: string
  } ) => {
  return (dispatch: Dispatch<AuthActionTypes>, getState: () => AuthState) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      // const res = await axios.post('/api/auth', body, config);
      console.log(`This is your register request header config: ${config}`)  
      
      const testRegisterAccount = {
        email: 'register@test.com',
        password: '123456'
      }

      // This IF is for test purpose
      if (
        email === testRegisterAccount.email &&
        password === testRegisterAccount.password
      ) {
        const res = {
          data: {
            token: `You have been registered. This is Your Auth Token. Also your Email is: ${email}. password is: ${password}`
          }
        };
        console.log(res);

        dispatch(registerSuccess(res.data));
      } else {
        // Test REGISTER Fail
        const res = {
          msg: ` Email ${email} and password ${password} INVALID CREDENTIALS!`
        };
        console.log(res);

        dispatch(registerFail());
      }

    } catch (err) {
      console.log(err)
    }
  }  

} // End of Register

export const login = (
  {email, password
  
  }  :   {
    email:string,
    password: string
  } ) => {
  return async (dispatch: Dispatch<AuthActionTypes>, getState: () => AuthState) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    // const body = JSON.stringify({email, password})

    try {
      // Async Axios Requests
      // const res = await axios.post('/api/auth', body, config);
      console.log(`This is your login request header config: ${config}`)  
      
      const testAccount = {
        email: 'test@test.com',
        password: '123456'
      }

      // This IF is for test purpose
      if(email === testAccount.email && password === testAccount.password) {

        const res = {
          token: `This is Your Auth Token. Also your Email is: ${email}. password is: ${password}`
        };
        console.log(res)
  
        dispatch(
          loginSuccess(res.token)
        );
      } else {   // Test Login Fail
          const res = {
            msg: ` Email ${email} and password ${password} INVALID CREDENTIALS!`
          };
          console.log(res)

    
          dispatch(
            loginFail()
          );
      }

    } catch (err) {
      console.log(err)
    }
  }  
} // End of Login



// Example for triggering multiple actions in one function
export const logout = ( ) => {
  return (dispatch: Dispatch<AuthActionTypes>, getState: () => AuthState) => {
    dispatch(clearProfile());
    dispatch(logoutAction());    
  }  
} // End of logout



