import { useState, useEffect, useRef } from "react";

import StyledSecondSection from "../../../styled/Main/StyledSecondSection";
import banner__taptap from "../SecondSection/img/banner__taptap.jpg";
import banner__purrfectacademy from "../SecondSection/img/banner_purrfect-academy.png";
import banner__lastsurvivor from "../SecondSection/img/banner_last-survivor.png";
import banner__chaindungeons from "../SecondSection/img/banner__chain-dungeons.png";
import banner__homelesslife from "../SecondSection/img/banner__homeless-life.png";
import banner__station from "../SecondSection/img/banner__station.png";

import icon__ps from "../SecondSection/img/icon__ps.svg";
import icon__appstore from "../SecondSection/img/icon__app-store.svg";
import icon__playmarket from "../SecondSection/img/icon__play-market.svg";

import Carousel from "../../../styled/Main/StyledSecondSection/Carousel/Carousel";
import CarouselBlock from "../../../styled/Main/StyledSecondSection/Carousel/CarouselBlock";
import CarouselImage from "../../../styled/Main/StyledSecondSection/Carousel/CarouselImage";
import CarouselTextBlock from "../../../styled/Main/StyledSecondSection/Carousel/CarouselTextBlock";
import CarouselInsideBlock from "../../../styled/Main/StyledSecondSection/Carousel/CarouselInsideBlock";
import CarouselH5P from "../../../styled/Main/StyledSecondSection/Carousel/CarouselH5P";
import CarouselIconsWrapper from "../../../styled/Main/StyledSecondSection/Carousel/CarouselIconsWrapper";
import CarouselDotWrapper from "../../../styled/Main/StyledSecondSection/Carousel/CarouselDotWrapper";
import CarouselDot from "../../../styled/Main/StyledSecondSection/Carousel/CarouselDot";

export default function SecondSection() {
  // const [isDragging, setIsDragging] = useState(false);
  // const [startX, setStartX] = useState(null);
  // const [scrollLeft, setScrollLeft] = useState(0);
  // const carouselRef = useRef(null);

  // const handleMouseDown = (e) => {
  //   e.preventDefault(); // Предотвращаем стандартное листание

  //   setIsDragging(true);
  //   setStartX(e.pageX);
  //   setScrollLeft(carouselRef.current.scrollLeft);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;

  //   const x = e.pageX;
  //   const deltaX = x - startX;
  //   carouselRef.current.scrollLeft = scrollLeft - deltaX;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [numButtons, setNumButtons] = useState(0); // Добавляем состояние для количества кнопок
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const carouselRef = useRef(null);

  const itemWidth = 358; // Замените на ширину одной картинки в вашей карусели
  const itemsToScroll = 4; // Количество элементов для прокрутки

  useEffect(() => {
    if (carouselRef.current) {
      // Инициализируем scrollLeft и кол-во кнопок после загрузки компонента
      setScrollLeft(carouselRef.current.scrollLeft);
      setNumButtons(
        Math.ceil(carouselRef.current.scrollWidth / (itemWidth * itemsToScroll))
      );
    }

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateActiveButton);
      return () => {
        carouselRef.current.removeEventListener("scroll", updateActiveButton);
      };
    }
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX;
    const deltaX = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // const scrollToPosition = (position) => {
  //   if (carouselRef.current) {
  //     const newPosition = position * (itemWidth * itemsToScroll);
  //     carouselRef.current.scrollTo({
  //       left: newPosition,
  //       behavior: "smooth",
  //     });
  //     setScrollLeft(newPosition);
  //   }
  // };

  const scrollToPosition = (position) => {
    if (carouselRef.current) {
      const newPosition = position * (itemWidth * itemsToScroll);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setActiveButtonIndex(position);
    }
  };

  // const renderButtons = () => {
  //   const buttons = [];

  //   for (let i = 0; i < numButtons; i++) {
  //     buttons.push(
  //       <button key={i} onClick={() => scrollToPosition(i)}>
  //         {}
  //       </button>
  //     );
  //   }

  //   return buttons;
  // };

  const updateActiveButton = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const buttonIndex = Math.round(
        scrollPosition / (itemWidth * itemsToScroll)
      );
      setActiveButtonIndex(buttonIndex);
    }
  };

  const renderButtons = () => {
    const buttons = [];

    for (let i = 0; i < numButtons; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => scrollToPosition(i)}
          className={i === activeButtonIndex ? "active" : ""}
        >
          {}
        </button>
      );
    }

    return buttons;
  };

  // НАВЕДЕНИЕ
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <StyledSecondSection>
        <h2 className="h2">Наши игры</h2>

        <div>
          <Carousel
            className="carousel"
            id="carousel"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>

              <div
                className="image-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <CarouselImage
                  src={banner__taptap}
                  alt="Game image"
                  className={`hover-image ${isHovered ? "hovered" : ""}`}
                />
                {isHovered && <button className="hover-button">Button</button>}
              </div>

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">TAP TAP ARENA</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock>
              <div className="triangle2"></div>
              <CarouselImage src={banner__purrfectacademy} alt="Game image" />

              <CarouselTextBlock className="carousel__item" id="carousel__item">
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">PURRFECT ACADEMY</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__lastsurvivor} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">LAST SURVIVOR</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__chaindungeons} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">CHAIN DUNGEONS</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__homelesslife} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">HOMELESS LIFE</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__station} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <CarouselH5P>
                    <h5 className="h5_carousel">STATION</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </CarouselH5P>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__taptap} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">TAP TAP ARENA</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__purrfectacademy} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">PURRFECT ACADEMY</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__lastsurvivor} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">LAST SURVIVOR</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__chaindungeons} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">CHAIN DUNGEONS</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__homelesslife} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">HOMELESS LIFE</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>

            <CarouselBlock className="carousel__item" id="carousel__item">
              <div className="triangle2"></div>
              <CarouselImage src={banner__station} alt="Game image" />

              <CarouselTextBlock>
                <CarouselInsideBlock>
                  <div>
                    <h5 className="h5_carousel">STATION</h5>
                    <p className="p_carousel">Приятной игры</p>
                  </div>

                  <CarouselIconsWrapper>
                    <a link="#1">
                      <img src={icon__ps} alt="For gamepads" />
                    </a>
                    <a link="#1">
                      <img src={icon__appstore} alt="For IOS" />
                    </a>
                    <a link="#1">
                      <img src={icon__playmarket} alt="For Android" />
                    </a>
                  </CarouselIconsWrapper>
                </CarouselInsideBlock>
              </CarouselTextBlock>
            </CarouselBlock>
          </Carousel>

          <div className="carousel-buttons">{renderButtons()}</div>
        </div>
      </StyledSecondSection>
    </>
  );
}
