import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { UpdatePassword } from '../features/User';
import { useState } from 'react';

function PassRestore() {

const dispatch = useDispatch();
const { users, session } = useSelector((state) => state.app.value);
const [password, SetPassword] = useState("");
const [email, setEmail] = useState("");


  return (
    <div className='container'>
    <main>
    <div className='reset-pass-form'>
      <h1 className="h3 mb-3 fw-normal">Pleas add new password</h1>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingInput" onChange={(event) => {SetPassword(event.target.value)}}  />
        <label>Password</label>
      </div>
      <div className="checkbox mb-3">
      </div>
      <button className='btn btn-primary'  onClick={() => {dispatch(UpdatePassword({password: password}))}}>Set Password</button>
    </div>
  </main>
  </div>
  );
}

export default PassRestore;
