import search from "/faq/ask/search.svg";
import background from "/faq/ask/background.png";

import "./styles/ask.css";

export const Ask = () => {
  return (
    <section className="ask">
      <img src={background} alt="" />
      <section className="ask-body">
        <h2>Frequently asked questions</h2>
        <div>
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </section>
    </section>
  );
};
