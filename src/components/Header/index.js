import StyledHeader from "../../styled/StyledHeader";
import logo from "../../components/Header/img/logo.svg";
import arrow from "../../components/Header/img/arrow.svg";

import HeaderContainer from "../../styled/StyledHeader/HeaderContainer";
import StyledNav from "../../styled/StyledHeader/StyledNav";
import HeaderA from "../../styled/StyledHeader/HeaderA";
import HeaderLanguageButton from "../../styled/StyledHeader/Language";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <a href="#">
            <img src={logo} alt="logo" />{" "}
          </a>

          <StyledNav>
            <li className="header__li">
              <HeaderA href="#1">Наши игры</HeaderA>
            </li>

            <li className="header__li">
              <HeaderA href="#1">Услуги</HeaderA>
            </li>

            <li className="header__li">
              <HeaderA href="#1">Издательство</HeaderA>
            </li>

            <li className="header__li">
              <HeaderA href="#1">Карьера</HeaderA>
            </li>

            <li className="header__li">
              <HeaderA href="#1">Контакты</HeaderA>
            </li>
          </StyledNav>

          <HeaderLanguageButton>
            Ru <img src={arrow} alt="arrow" />
          </HeaderLanguageButton>
        </HeaderContainer>
      </StyledHeader>
    </>
  );
}
