import React from 'react';
import './pages.css';
import Menu from '../components/Menu/Menu';
import Header from '../components/Header/Header';
import { useSelector } from "react-redux";
import { useState } from 'react';

function Profile() {
  const { users, session } = useSelector((state) => state.app.value);
  const user_data = users.filter((user) => user.id == 1)[0];
  return ( 
    <div>
        <Header />
        <div className="divclass">
          <h2>User Name : {user_data.name}</h2>
          <h2>User Email : {user_data.email}</h2>
        </div>
        <Menu />
    </div>
  );
}

export default Profile;
