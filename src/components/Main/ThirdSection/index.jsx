import React, { useEffect, useState } from "react";
import StyledThirdSection from "../../../styled/Main/StyledThirdSection";
import plus from "../ThirdSection/img/plus.png";
import minus from "../ThirdSection/img/minus.png";
import img1 from "../ThirdSection/img/2D.svg";
import img2 from "../ThirdSection/img/dev.svg";
import img3 from "../ThirdSection/img/3D.svg";
import img4 from "../ThirdSection/img/GUI.svg";
import img5 from "../ThirdSection/img/anima.svg";
import img6 from "../ThirdSection/img/local.svg";

function AccordionItem({ item, isActive, onClick }) {
  return (
    <div className={isActive ? "item show" : "item"} onClick={onClick}>
      <div className={isActive ? "item__title show" : "item__title"}>
        <p>{item.title}</p>
        <span>
          {isActive ? (
            <img src={minus} alt="Close" />
          ) : (
            <img src={plus} alt="Open" />
          )}
        </span>
      </div>

      <div className={isActive ? "item__content show" : "item__content"}>
        {item.content}
      </div>
    </div>
  );
}

function App() {
  const data = [
    {
      title: "2D-графика",
      content: (
        <p>
          Подготовим игровые объекты для 2D-проектов, сделаем концепты для
          3D-игр.Нарисуем персонажей, локации, архитектуру, технику. А еще
          иконки, иллюстрации, рекламные креативы и промоарты.
        </p>
      ),
      image: <img src={img1} className="accordion__image" alt="2D graphics" />,
    },
    {
      title: "Полный цикл разработки",
      content: (
        <p>
          Возьмем на себя полный цикл разработки игры на Unity и UE портируем на
          ПК, консоли и мобильные устройства. Eisvil - это то место, где идеи
          становятся игрой!
        </p>
      ),
      image: <img src={img2} className="accordion__image" alt="Development" />,
    },
    {
      title: "3D-графика",
      content: (
        <p>
          Разработаем как Hard Surface, так и low-poly модели. В зависимости от
          стиля проекта, подготовим реалистичные или hand-painted текстуры.
          Выгрузим под нужный движок и сэкономим время команде разработки.
        </p>
      ),
      image: <img src={img3} className="accordion__image" alt="3D graphics" />,
    },
    {
      title: "Интерфейс",
      content: (
        <p>
          Нарисуем интерфейс для вашей игры. Разработаем концепты, чтобы
          интерфейс идеально сидел в игре. Отрисуем каждый пиксель и адаптируем
          под разные разрешения экранов.
        </p>
      ),
      image: <img src={img4} className="accordion__image" alt="GUI" />,
    },
    {
      title: "Анимация",
      content: (
        <p>
          Оживляем 2D и 3D игры. Заставим персонажей бегать, танцевать и
          сражаться на мечах. Настроим риг, подготовим циклические анимации.
          Работаем в Spine 2D, After Effects, Maya и Unity.
        </p>
      ),
      image: <img src={img5} alt="Animation" />,
    },
    {
      title: "Локализация",
      content: (
        <p>
          Переведем игру на английский, испанский, французский и другие 14
          языков. В нашей команде работают только носители языков. Мы легко
          адаптируем все шутки или сложный наратив игры.
        </p>
      ),
      image: <img src={img6} alt="Localization" />,
    },
  ];

  const [activeItem, setActiveItem] = useState(0);
  const [activeImage, setActiveImage] = useState(data[0].image);

  const toggleItem = (index) => {
    if (activeItem === index) {
      // If the clicked item is already open, close it.
      setActiveItem(null);
      setActiveImage(null);
    } else {
      // Otherwise, open the clicked item.
      setActiveItem(index);
      setActiveImage(data[index].image);
    }
  };

  useEffect(() => {
    setActiveImage(data[activeItem]?.image || null);
  }, [activeItem, data]);

  return (
    <StyledThirdSection>
      <h2 className="h2">Услуги</h2>
      <div className="container">
        <div className="left-block">
          {activeImage && <div className="image">{activeImage}</div>}
        </div>
        <div className="right-block">
          {data.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isActive={activeItem === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </StyledThirdSection>
  );
}

export default App;
