import { styled } from "styled-components";
import background__map from "../../../components/Main/ThirdSection/img/background__map.png";

const StyledThirdSection = styled.section`
  margin: 0 auto;
  max-width: 1400px;
  min-height: 700px;
  background: url(${background__map});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: cover;
  background-size: 1240px 650px;
  background-position-x: 180px;
`;

export default StyledThirdSection;
