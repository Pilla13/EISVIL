import logo from "../../components/Header/img/logo.svg";
import arrow from "../../components/Header/img/arrow.svg";

import "../../../src/styled/StyledHeader/index.css";

export default function Header() {
  return (
    <>
      <header className="styledHeader">
        <div className="headerContainer">
          <a href="#">
            <img src={logo} alt="logo" />{" "}
          </a>

          <nav className="styledNav">
            <div className="styledNav__gradient-left"></div>

            <li className="styledNav__wrapper">
              <a href="#" className="styledHav__a">
                НАШИ ИГРЫ
              </a>
            </li>

            <li className="styledNav__wrapper">
              <a href="#" className="styledHav__a">
                УСЛУГИ
              </a>
            </li>

            <li className="styledNav__wrapper">
              <a href="#" className="styledHav__a">
                ИЗДАТЕЛЬСТВО
              </a>
            </li>

            <li className="styledNav__wrapper">
              <a href="#" className="styledHav__a">
                КАРЬЕРА
              </a>
            </li>

            <li className="styledNav__wrapper">
              <a href="#" className="styledHav__a">
                КОНТАКТЫ
              </a>
            </li>

            <div className="styledNav__gradient-right"></div>
          </nav>

          <div className="headerLanguageButton">
            Ru <img src={arrow} alt="arrow" />
          </div>
        </div>
      </header>
    </>
  );
}
