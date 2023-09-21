import "../../styled/StyledFooter/index.css";

import logo from "./img/logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__first-block">
            <img src={logo} alt="Logo" />

            <p>Информация о организации ооо или ИП оргин иннн и прочая херня</p>
          </div>

          <div className="footer__second-block">
            <div className="second-block__columns">
              <ul className="column">
                <li><a href="#">Наши игры</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Издательство</a></li>
                <li><a href="#">Карьера</a></li>
              </ul>

              <ul className="column">
                <li><a href="#">Пользовательское соглашение</a></li>
                <li><a href="#">Политика конфиденциальности</a></li>
              </ul>

              <ul className="column">
                <li><a href="#">Для прессы</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </div>

            <div></div>
          </div>

          <div className="footer__third-block"></div>
        </div>
      </footer>
    </>
  );
}
