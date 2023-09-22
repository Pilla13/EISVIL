import "../../../styled/Main/StyledSeventhSection/index.css";
// import smi from "./img/smi.png";
// import smi2 from "./img/smi2.png";

export default function SeventhSection() {
  return (
    <>
      <section className="seventhsection">
        <h2>Сми или блогер</h2>

        <div className="mailing__wrapper">
          <div className="mailing__text">
            <p>
              Журналисты или подтверждённые блогеры{" "}
              <span className="first">ПЕРВЫМИ</span> узнают о тестировании игры
            </p>
          </div>

          <div className="mailing__img">
            <div className="mailing__btn-form">
              <div className="btn-incline__mailing">
                <div className="cube_top__mailing"></div>
                <a href="#1" className="link link__mailing">
                  Заполнить форму
                </a>
                <div className="cube_bottom__mailing"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
