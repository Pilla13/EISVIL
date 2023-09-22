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
            {/* <img src={smi} alt="Mailing" /> */}
          </div>
        </div>
      </section>
    </>
  );
}
