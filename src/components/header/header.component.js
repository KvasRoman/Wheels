import React from "react";
import './header.component.scss'
import logo from './logo.svg';
import saved from './saved.svg';
import chat from './chat.svg'
import notification from './notification.svg'
import user from './user.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
export default function MyHeader(props) {


  const [openRegister, setRegisterOpen] = React.useState(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);

  const [openLogin, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const switchToRegister = () => {

    handleLoginClose();
    handleRegisterOpen();
  }
  const switchToLogin = () => {
    handleRegisterClose()
    handleLoginOpen()
  }
  const handleLoginSubmit = (e) => {
    console.log(e);
    console.log('sss');
    e.preventDefault();
  }
  const handleRegisterSubmit = (e) => {
    console.log(e);
    console.log('sss');
    e.preventDefault();
  }
  return (
    <header>
      <Modal
        open={openLogin}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Login">
          <form action="" onSubmit={handleRegisterSubmit}>
            <div className="wrapper">
              <div className="title">Вхід на сайт <span>Wheels.com</span></div>
              <div className="form">
                <input type="text" placeholder="Введіть телефон або e-mail" id="Llogin"/>
                <input type="password" placeholder="Введіть пароль" id="Lpassword"/>
                <div className="keepLogIn">
                  <div>

                    <input type='checkbox' name='keepLogData' id='keepLogData' />
                    <label htmlFor='logLogin'>Запам’ятати мене</label>
                  </div>
                  <span>Забули пароль?</span>
                </div>
                <input type="submit" value={'Увійти'} className="button" />
                <div className="orRegister" onClick={switchToRegister}>
                  <p >Зареєструватися на Wheels.com</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={openRegister}
        onClose={handleRegisterClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Login">
          <form action="">
            <div className="wrapper">
              <div className="title">Реєстрація на сайті <span>Wheels.com</span></div>
              <div className="form">
                <input type="text" placeholder="Введіть ваше ім’я" id="Rname"/>
                <input type="text" placeholder="Введіть ваше прізвище" id="Rsurname"/>
                <input type="text" placeholder="Введіть телефон або e-mail" id="RphoneOrEmail"/>
                <input type="password" placeholder="Введіть пароль" id="Rpassword"/>

                <div className="agreement">
                  <div>

                    <input type='checkbox' name='agreement' id='UserAgreement' />
                    <label htmlFor='UserAgreement'>Я згоден(на) з умовами <span className="rules">Угоди про надання послуг</span></label>
                  </div>

                </div>
                <div className="partOfAgreement">
                  Ваші персональні дані будуть оброблені та захищені згідно з  <span>Політикою приватності</span>
                </div>
                <input type="submit" value={'Зареєструватися'} className="button" onSubmit={handleLoginSubmit}/>
                
                <div className="orRegister" onClick={switchToLogin}>
                  <p >Вже зареєстовані?</p>
                </div>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
      <nav>
        <ul className="navList">
          <Link to={'/'}><img src={logo} alt="Logo" /></Link>
          <li className="navItem"><Link className="navLink transparentLink" to={'/Search'}>Купити</Link></li>
          <li className="navItem"><Link className="navLink transparentLink" to={'/SellVehicle'}>Продати</Link></li>
          <li className="navItem"><Link className="navLink transparentLink">Фінанси</Link></li>
          <li className="navItem"><Link className="navLink transparentLink">ТОП-100</Link></li>
        </ul>
        <div className="headerRightSide">
          <ul className="userNotificationList">
            <li ><img src={saved} alt="saved" /></li>
            <li ><img src={chat} alt="chat" /></li>
            <li ><img src={notification} alt="notification" /></li>
          </ul>
          <button onClick={handleLoginOpen}>
            <img src={user} alt="user" />
            <p>Особистий кабінет</p>
          </button>
        </div>

      </nav>
    </header>
  );
}