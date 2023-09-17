import { styled } from "styled-components";

const CarouselDot = styled.div`
  margin-top: 35px;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  border: 1px solid #ef811b;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    width: 15px;
    height: 15px;
    background: #ef811b;
  }

  &.active {
    width: 15px;
    height: 15px;
    background: #ef811b;
  }
`;

export default CarouselDot;
