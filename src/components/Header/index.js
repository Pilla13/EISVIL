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

          <div className="nav__wrapper">
            <div className="styledNav__gradient-left"></div>

            <nav className="styledNav">
              <div className="styledNav__border"></div>

              <li className="styledNav__link-wrapper">
                <a href="#" className="styledHav__a">
                  НАШИ ИГРЫ
                </a>
              </li>

              <div className="styledNav__border"></div>

              <li className="styledNav__link-wrapper">
                <a href="#" className="styledHav__a">
                  УСЛУГИ
                </a>
              </li>

              <div className="styledNav__border"></div>

              <li className="styledNav__link-wrapper">
                <a href="#" className="styledHav__a">
                  ИЗДАТЕЛЬСТВО
                </a>
              </li>

              <div className="styledNav__border"></div>

              <li className="styledNav__link-wrapper">
                <a href="#" className="styledHav__a">
                  КАРЬЕРА
                </a>
              </li>

              <div className="styledNav__border"></div>

              <li className="styledNav__link-wrapper">
                <a href="#" className="styledHav__a">
                  КОНТАКТЫ
                </a>
              </li>

              <div className="styledNav__border"></div>
            </nav>
            <div className="styledNav__gradient-right"></div>
          </div>

          <div className="headerLanguageButton">
            Ru <img src={arrow} alt="arrow" />
          </div>
        </div>
      </header>
    </>
  );
}
