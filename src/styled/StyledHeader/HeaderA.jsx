import { styled } from "styled-components";

const HeaderA = styled.a`
  color: #fff;
  transition: font-weight 0.3s ease;

  &:hover {
    text-shadow: 0px 0px 1px #fff;
  }

  /*#e32521, #ef811b */

  &:after {
    display: block;
    content: "";
    height: 1px;
    margin-top: 2px;
    width: 0%;
    background-color: #ffffff;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after,
  &:focus:after {
    width: 100%;
  }
`;

export default HeaderA;
