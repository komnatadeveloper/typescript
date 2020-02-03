import React, {useState} from 'react'
import {connect} from 'react-redux'
import { login } from '../../store/auth/actions'
import {RootState} from '../../store'
import { AuthState } from '../../store/auth/types'

interface LoginProps {
  auth: AuthState;
  login: typeof login
}

interface FormData {
  email: string;
  password: string;
}


const Login: React.FC<LoginProps> = ({
  auth,
  login
}) => {

  // Destructure as an example
  const { isAuthenticated, user} = auth

  const [ formData, setFormData ] = useState<FormData>( {
    email: '',
    password: ""
  })
  const {email, password} = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  })

  return (
    <div>
      <h4>Login Form</h4>
      <form action="">
        <input 
          type="email" 
          name="email" 
          value={email}
          required
          onChange = { e => onChange(e)}  
          placeholder="Email"      
        />
        <input 
          type="password" 
          name="password" 
          value={password}
          required
          onChange = { e => onChange(e)}  
          placeholder="Password"      
        />
      </form>
    </div>
  )
}

const mapStateToProps = ( state: RootState ) => ({
  auth: state.auth
})



export default connect(mapStateToProps, {login})(Login)
