import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginUser } from '../features/User';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

function Login() {
const dispatch = useDispatch();
const { users, session } = useSelector((state) => state.app.value);
const [email, setEmail] = useState("");
const [password, SetPassword] = useState("");
const error = session.filter((error) => error.error !== '')[0];

  return (
    <div className='container'>
      <div className='login-form'>
      { !!error && <div className="alert alert-danger" role="alert"> {error.error} </div> }
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" onChange={(event) => {setEmail(event.target.value)}}  />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" onChange={(event) => {SetPassword(event.target.value)}}  />
          <label>Password</label>
        </div>

        <div className="checkbox mb-3">
        </div>
        <button className='btn btn-primary'  onClick={() => { dispatch(LoginUser({password: password, email: email}))}}>Login</button>
        <p></p>
        { !!error && <Link exact to="/password_change">Forgot password</Link> }
      </div>
  </div>
  
  );
}

export default Login;
