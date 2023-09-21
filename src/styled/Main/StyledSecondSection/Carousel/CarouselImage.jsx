import { styled } from "styled-components";

const CarouselImage = styled.img`
  position: relative;
  width: 328px;
  height: 160px;
  transition: 0.2s;

  &:hover {
    filter: blur(2px) brightness(85%);
  }
`;

export default CarouselImage;
