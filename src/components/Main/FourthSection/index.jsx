import React, { useState } from "react";
import StyledFourthSection from "../../../styled/Main/StyledFourthSection/index";
import consoles from "./img/console.png";
import pc_mac from "./img/pc_mac.png";
import phones from "./img/phone.png";

const Carousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [phones, pc_mac, consoles];
  const totalImages = images.length;

  const categories = [
    {
      title: "Смартфоны",
      description: (
        <p>
          Наша цель – предоставить разработчикам творческую свободу и помогать в
          решении конкретных и индивидуальных для каждой команды задач. <br />
          Мы отвечаем за полный цикл подготовки и продвижения игры.
          <br /> Делаем всё: Аналитика, продюсирование, продвижение, локализация
          и поддержка, партнёрство и размещение на платформах.
        </p>
      ),
    },
    {
      title: "ПК и МАК",
      description: (
        <p>
          Делаем всё: Аналитика, продюсирование, продвижение, локализация и
          поддержка, партнёрство и размещение на платформах.
        </p>
      ),
    },
    {
      title: "Консоли",
      description: (
        <p>
          Наша цель – предоставить разработчикам творческую свободу и помогать в
          решении конкретных и индивидуальных для каждой команды задач. <br />
          Мы отвечаем за полный цикл подготовки и продвижения игры.
        </p>
      ),
    },
  ];

  const getCorrectedIndex = (index) => {
    if (index < 0) {
      return totalImages - 1;
    } else if (index >= totalImages) {
      return 0;
    }
    return index;
  };

  const handleThumbClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <StyledFourthSection>
      <h2>Издательство</h2>
      <div className="carousel-container">
        <div className="information-block">
          <div className="carousel-middle">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleThumbClick(index)}
                className={`carousel-thumb ${
                  index === selectedIndex ? "active" : ""
                }`}
              >
                <span className="carousel-thumb-label">
                  {index === 0 && "Смартфоны"}
                  {index === 1 && "ПК и МАК"}
                  {index === 2 && "Консоли"}
                </span>
              </div>
            ))}
          </div>

          <div className="info-container">
            <p>{categories[selectedIndex].description}</p>
          </div>
        </div>

        <div className="carousel-right">
          {[-1, 0, 1].map((offset) => {
            const index = getCorrectedIndex(selectedIndex + offset);
            const imageClasses = [
              "carousel-image",
              index === selectedIndex ? "active" : "",
              offset === -1
                ? "prev"
                : offset === 1 || (offset === -2 && selectedIndex === 0)
                ? "next"
                : "",
            ].join(" ");

            return (
              <img
                key={index}
                className={imageClasses}
                src={images[index]}
                alt={`${index + 1}`}
                onClick={() => handleThumbClick(index)}
              />
            );
          })}
        </div>
      </div>
    </StyledFourthSection>
  );
};

export default Carousel;
