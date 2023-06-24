import React from "react";
import './header.component.scss'
import logo from './logo.svg';
import saved from './saved.svg';
import chat from './chat.svg'
import notification from './notification.svg'
import user from './user.svg'
export default function MyHeader(props){



    return (
    <header>
      <nav>
        <ul className="navList">
            <img src={logo} alt="Logo" />
          <li className="navItem"><a href="#" className="navLink">Купити</a></li>
          <li className="navItem"><a href="#" className="navLink">Продати</a></li>
          <li className="navItem"><a href="#" className="navLink">Фінанси</a></li>
          <li className="navItem"><a href="#" className="navLink">ТОП-100</a></li>
        </ul>
        <div className="headerRightSide">
        <ul className="userNotificationList">
            <li ><img src={saved} alt="saved" /></li>
            <li ><img src={chat} alt="chat" /></li>
            <li ><img src={notification} alt="notification" /></li>
        </ul>
        <button>
            <img src={user} alt="user" />
            <p>Особистий кабінет</p>
        </button>
        </div>
        
      </nav>
    </header>
  );
}