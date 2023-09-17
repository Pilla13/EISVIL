import { styled } from "styled-components";
import banner from "./img/banner.jpg";

const StyledFirstSection = styled.section`
  height: 760px;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 150px;
`;

export default StyledFirstSection;
