import ds from "./img/discord.svg";
import vk from "./img/vk.svg";
import tw from "./img/tw.svg";
import tg from "./img/tg.svg";
import inl from "./img/in.svg";
import fb from "./img/fb.svg";

export default function SixthSection() {
  return (
    <>
      <section className="social__wrapper">
        <h2>Наши сообщества</h2>
        <div
          className="sm__wrapper
            "
        >
          <div className="sc__link-wrapper">
            <p className="sc__link__title">DISCORD</p>
            <a href="#" className="sc__link">
              <img src={ds} className="ds" alt="Discord" />
            </a>
          </div>

          <div className="sc__link-wrapper">
            <p className="sc__link__title">VKONTAKTE</p>
            <a href="#" className="sc__link">
              <img src={vk} className="vk" alt="VKонтакте" />
            </a>
          </div>

          <div className="sc__link-wrapper">
            <p className="sc__link__title">TELEGRAM</p>
            <a href="#" className="sc__link">
              <img src={tg} className="tg" alt="Telegram" />
            </a>
          </div>

          <div className="sc__link-wrapper">
            <p className="sc__link__title">LINKEDIN</p>
            <a href="#" className="sc__link">
              <img src={inl} className="inl" alt="LinkedIn" />
            </a>
          </div>

          <div className="sc__link-wrapper">
            <p className="sc__link__title">FACEBOOK</p>
            <a href="#" className="sc__link">
              <img src={fb} className="fb" alt="Facebook" />
            </a>
          </div>

          <div className="sc__link-wrapper">
            <p className="sc__link__title">TWITTER</p>
            <a href="#" className="sc__link">
              <img src={tw} className="tw" alt="Twitter" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
