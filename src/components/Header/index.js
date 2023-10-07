import logo from "../../components/Header/img/logo.svg";
import arrow from "../../components/Header/img/arrow.svg";

import "../../../src/styled/StyledHeader/index.css"

export default function Header() {
  return (
    <>
      <header className="styledHeader">
        <div className="headerContainer">
          <a href="#">
            <img src={logo} alt="logo" />{" "}
          </a>

          <nav className="styledNav">
            
          </nav>

          <div className="headerLanguageButton">
            Ru <img src={arrow} alt="arrow" />
          </div>
        </div>
      </header>
    </>
  );
}
