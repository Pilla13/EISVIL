import warrior from "./img/warrior.png";

export default function FifthSection() {
  return (
    <>
      <div className="fifth_container">
        <div className="relative_block">
          <div className="triangle">
            <h2>Карьера</h2>
          </div>

          <div className="rectangle">
            <div className="rectangle__text">
              <h4>
                Присоединяйтесь к нам и станьте частью команды, которая создает
                самые увлекательные игры!
              </h4>
              <p>
                Мы предлагаем дружественную и профессиональную обстановку, где
                вы сможете реализовать свой потенциал и работать над уникальными
                проектами вместе с единомышленниками.
              </p>

              <div className="btn-incline__rectangle">
                <div className="cube_top__rectangle"></div>
                <a href="#1" className="link link__rectangle">
                  Все вакансии
                </a>
                <div className="cube_bottom__rectangle"></div>
              </div>
            </div>
          </div>

          <img src={warrior} className="warrior" alt="warrior" />
        </div>
      </div>
    </>
  );
}
