import { styled } from "styled-components";

const Carousel = styled.ul`
  /* position: relative;

  display: flex;
  flex-direction: row;
  gap: 29px;

  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  overflow: hidden;

  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;

  scroll-behavior: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
*/
  &::-webkit-scrollbar {
    display: none;
  } 

  display: flex;
  flex-direction: row;
  gap: 29px;
  
  position: relative;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  transition: all 0.2s;

  will-change: transform;
  user-select: none;
  cursor: pointer;

  &.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }
`;

export default Carousel;
