import StyledFirstSection from "../../../styled/Main/StyledFirstSection";
import eisvil from "../FirstSection/img/eisvil.png";
import FSBlock from "../../../styled/Main/StyledFirstSection/FSBlock";
import FSTextBlock from "../../../styled/Main/StyledFirstSection/FSTextBlock";

export default function FirstSection() {
  return (
    <>
      <StyledFirstSection>
        <FSBlock>
          <FSTextBlock>
            <img src={eisvil} className="img__main" alt="eisvil" />
            <p>МЕСТО, ГДЕ ИДЕЯ СТАНОВИТСЯ ИГРОЙ</p>
          </FSTextBlock>

          <div className="btn-incline">
            <div className="cube_top"></div>
            <a href="#1" className="link link__main">
              Создать новый мир
            </a>
            <div className="cube_bottom"></div>
          </div>
        </FSBlock>
      </StyledFirstSection>
    </>
  );
}
