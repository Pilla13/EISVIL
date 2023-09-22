// import { useEffect } from "react";

// import StyledThirdSection from "../../../styled/Main/StyledThirdSection";

// import plus from "../ThirdSection/img/plus.png";
// import minus from "../ThirdSection/img/minus.png";

// import img1 from "../ThirdSection/img/2D.png";
// import img2 from "../ThirdSection/img/dev.png";
// import img3 from "../ThirdSection/img/3D.png";
// import img4 from "../ThirdSection/img/GUI.png";
// import img5 from "../ThirdSection/img/anima.png";
// import img6 from "../ThirdSection/img/local.png";

// import { useState } from "react";
// import Details from "../../../styled/Main/StyledThirdSection/Accordion/Details";
// import Summary from "../../../styled/Main/StyledThirdSection/Accordion/Summary";

// export default function ThirdSection() {
//   const [activeItem, setActiveItem] = useState(null);
//   const [activeImage, setActiveImage] = useState(null);

//   const toggleItem = (index) => {
//     setActiveItem(activeItem === index ? null : index);
//     setActiveImage(index === activeItem ? null : data[index].image);
//   };

//   return (
//     <>
//       <StyledThirdSection>
//         <h2 className="h2">Услуги</h2>

//         <AccordeonWrapper>
//           <div className="row">
//             <div className="left-block">
//               {data.map((item, index) => (
//                 <div
//                   key={index}
//                   className={
//                     activeImageIndex === index ? "image show" : "image"
//                   }
//                 >
//                   {item.image}
//                 </div>
//               ))}
//             </div>

//             <div className="accordion">
//               {data.map((item, i) => (
//                 <div
//                   className={activeItem === i ? "item show" : "item"}
//                   key={i}
//                 >
//                   <div
//                     className={
//                       activeItem === i ? "item__title show" : "item__title"
//                     }
//                     onClick={() => toggleItem(i)}
//                   >
//                     <p>{item.title}</p>
//                     <span>
//                       {activeItem === i ? (
//                         <img src={minus} alt="Close" />
//                       ) : (
//                         <img src={plus} alt="Open" />
//                       )}
//                     </span>
//                   </div>

//                   <div
//                     className={
//                       activeItem === i ? "item__content show" : "item__content"
//                     }
//                   >
//                     <p>{item.content}</p>
//                   </div>

//                   <div
//                     className={
//                       activeItem === i ? "item__image show" : "item__image"
//                     }
//                   >
//                     {item.image}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </AccordeonWrapper>
//       </StyledThirdSection>
//     </>
//   );
// }


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
        <p>{item.content}</p>
      </div>
    </div>
  );
}

function App() {
  const data = [
    {
      title: "2D-графика",
      content:
        "Подготовим игровые объекты для 2D-проектов, сделаем концепты для 3D-игр.Нарисуем персонажей, локации, архитектуру, технику. А еще иконки, иллюстрации, рекламные креативы и промоарты.",
      image: <img src={img1} alt="2D graphics" />,
    },
    {
      title: "Полный цикл разработки",
      content:
        "Возьмем на себя полный цикл разработки игры на Unity и UE портируем на ПК, консоли и мобильные устройства. Eisvil - это то место, где идеи становятся игрой!",
      image: <img src={img2} alt="Development" />,
    },
    {
      title: "3D-графика",
      content:
        "Разработаем как Hard Surface, так и low-poly модели. В зависимости от стиля проекта, подготовим реалистичные или hand-painted текстуры. Выгрузим под нужный движок и сэкономим время команде разработки.",
      image: <img src={img3} alt="3D graphics" />,
    },
    {
      title: "Интерфейс",
      content:
        "Нарисуем интерфейс для вашей игры. Разработаем концепты, чтобы интерфейс идеально сидел в игре. Отрисуем каждый пиксель и адаптируем под разные разрешения экранов.",
      image: <img src={img4} alt="GUI" />,
    },
    {
      title: "Анимация",
      content:
        "Оживляем 2D и 3D игры. Заставим персонажей бегать, танцевать и сражаться на мечах. Настроим риг, подготовим циклические анимации. Работаем в Spine 2D, After Effects, Maya и Unity.",
      image: <img src={img5} alt="Animation" />,
    },
    {
      title: "Локализация",
      content:
        "Переведем игру на английский, испанский, французский и другие 14 языков. В нашей команде работают только носители языков. Мы легко адаптируем все шутки или сложный наратив игры.",
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