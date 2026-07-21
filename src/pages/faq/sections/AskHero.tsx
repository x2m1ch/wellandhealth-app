import search from "/faq/ask-hero/search.svg";
import background from "/faq/ask-hero/background.png";

import "./styles/ask-hero.css";

export const Ask = () => {
  return (
    <section className="ask-hero">
      <img src={background} alt="" />
      <section className="ask-hero-body">
        <h2>Frequently asked questions</h2>
        <div>
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </section>
    </section>
  );
};
