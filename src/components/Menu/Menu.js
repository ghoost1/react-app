import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector } from "react-redux";

function Menu() {
  const { users, theme } = useSelector((state) => state.app.value);
  const current_theme = theme.filter((theme) => theme.id == 1)[0];
  const menu_theme = current_theme.theme_darck ?  'user-menu-dark' : 'user-menu';
  const link_theme = current_theme.theme_darck ?  'nav-dark' : 'nav-item';

  return (
  <div className={ "col-md-2 d-none d-md-block bg-light sidebar " + menu_theme }>
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className={"nav-item " + link_theme }>
          <Link exact to="/"><i className="fa fa-bar-chart" aria-hidden="true"></i> Dashboard</Link>
        </li>
        <li className={"nav-item " + link_theme }>
          <Link exact to="/settings"><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link>
        </li>
        <li className={"nav-item " + link_theme }>
          <Link exact to="/profile"><i className="fa fa-user" aria-hidden="true"></i> Profile</Link>
        </li>
        <li className={"nav-item " + link_theme }>
          <Link exact to="/faq"><i className="fa fa-info" aria-hidden="true"></i> FAQ</Link>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Menu;
