import ds from "./img/discord.svg";
import vk from "./img/vk.svg";
import tw from "./img/tw.svg";
import tg from "./img/tg.svg"
import inl from "./img/in.svg";
import fb from "./img/fb.svg"

export default function SixthSection() {
  return (
    <>
      <section className="social__wrapper">
        <h2>Наши сообщества</h2>
        <div
          className="sm__wrapper
            "
        >
          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>DISCORD</p>
              <img src={ds} className="ds" alt="Discord" />
            </div>
          </a>

          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>VKONTAKTE</p>
              <img src={vk} className="vk" alt="VKонтакте" />
            </div>
          </a>

          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>TELEGRAM</p>
              <img src={tg} className="tg" alt="Telegram" />
            </div>
          </a>

          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>LINKEDIN</p>
              <img src={inl} className="inl" alt="LinkedIn" />
            </div>
          </a>

          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>FACEBOOK</p>
              <img src={fb} className="fb" alt="Facebook" />
            </div>
          </a>

          <a href="#" className="sc__link">
            <div className="sc__link-wrapper">
              <p>TWITTER</p>
              <img src={tw} className="tw" alt="Twitter" />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
