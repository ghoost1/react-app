import React from 'react';
import '../Header/Header.css'
import { useSelector, useDispatch } from "react-redux";
import { LoguotUser } from '../../features/User';

function TopMenu() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.app.value);
  const current_theme = theme.filter((theme) => theme.id == 1)[0];
  const dark_theme = current_theme.theme_darck ?  'dark-mode-body' : '';

  return (
    <div>
      <nav className={"navbar  bg-white sticky-top bg-dark flex-md-nowrap p-0 " + dark_theme}>
        <h1 className="navbar-brand col-sm-3 col-md-2 mr-0" >React Test App</h1>
        <ul>
          <button className="btn btn-primary logout" onClick={() => { dispatch(LoguotUser())}} >Logout</button>
        </ul>
      </nav>
    </div>
  );
}

export default TopMenu;
