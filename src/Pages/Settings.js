import React from 'react';
import './pages.css';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { UpdateUser, ChangeTheme } from '../features/User'

function Settings() {
  const dispatch = useDispatch();
  const { users, theme } = useSelector((state) => state.app.value);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, SetPassword] = useState("");

    return (
        <div> 
        <Header />
        <Menu />
        <div className="divclass">
          <form>
            <div className="form-floating">
              <input type="text" className="form-control" onChange={(event) => {setName(event.target.value)}} />
              <label for="floatingInput">New User Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" onChange={(event) => {setEmail(event.target.value)}} />
              <label for="floatingInput">New Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" onChange={(event) => {SetPassword(event.target.value)}} />
              <label for="floatingPassword">New Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={() => { dispatch(UpdateUser({name: name, password: password, email: email}))}} >Update User Data</button>
          </form>
          <p></p>
          <div>
          <div className="form-check form-switch">
            <input checked={ theme.filter((theme) => theme.id == 1)[0].theme_darck } className="form-check-input" type="checkbox" onChange={(event) => {dispatch(ChangeTheme({theme_darck: event.target.value }))}}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Switch to Dark mode</label>
          </div>
          </div>
        </div>
        </div>
    );
}

export default Settings;
