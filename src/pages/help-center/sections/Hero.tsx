import background from "/help-center/hero/background.png";
import search from "/help-center/hero/search.svg";

import "./styles/hero.css";

export const Hero = () => {
  return (
    <section className="help-hero">
      <section>
        <h2>Help Center</h2>
        <div className="help-hero-input">
          <img src={search} alt="" />
          <input placeholder="I have trouble with" type="text" />
        </div>
      </section>
      <img src={background} alt="" />
    </section>
  );
};
