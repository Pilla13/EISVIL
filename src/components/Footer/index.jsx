import "../../styled/StyledFooter/index.css";

import logo from "./img/logo.svg";

import i1 from "./img/1.svg";
import i2 from "./img/2.svg";
import i3 from "./img/3.svg";
import i4 from "./img/4.svg";
import i5 from "./img/5.svg";
import i6 from "./img/6.svg";
import i7 from "./img/7.svg";
import i8 from "./img/8.svg";
import i9 from "./img/9.svg";
import i10 from "./img/10.svg";

import help from "./img/help.svg";
import arrow from "./img/arrow.svg";

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
                <li>
                  <a href="#">Наши игры</a>
                </li>
                <li>
                  <a href="#">Услуги</a>
                </li>
                <li>
                  <a href="#">Издательство</a>
                </li>
                <li>
                  <a href="#">Карьера</a>
                </li>
              </ul>

              <ul className="column">
                <li>
                  <a href="#">Пользовательское соглашение</a>
                </li>
                <li>
                  <a href="#">Политика конфиденциальности</a>
                </li>
              </ul>

              <ul className="column">
                <li>
                  <a href="#">Для прессы</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>

            <div className="second-block__rules">
              <p> Esvil. 2023. Все права защищены</p>
            </div>
          </div>

          <div className="footer__third-block">
            <div>
              <p>Мы на платформах</p>

              <div className="third-block__icons">
                <div>
                  <a href="#">
                    <img src={i1} alt="" />
                  </a>
                  <a href="#">
                    <img src={i2} alt="" />
                  </a>
                  <a href="#">
                    <img src={i3} alt="" />
                  </a>
                  <a href="#">
                    <img src={i4} alt="" />
                  </a>
                  <a href="#">
                    <img src={i5} alt="" />
                  </a>
                </div>

                <div>
                  <a href="#">
                    <img src={i6} alt="" />
                  </a>
                  <a href="#">
                    <img src={i7} alt="" />
                  </a>
                  <a href="#">
                    <img src={i8} alt="" />
                  </a>
                  <a href="#">
                    <img src={i9} alt="" />
                  </a>
                  <a href="#">
                    <img src={i10} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="third-block__bottom">
              <a href="#">
                <img src={help} alt="" />
              </a>

              <div className="footer__language">
                <p>RU</p>
                <img src={arrow} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
