import "./styles/hero.css";

import background from "/home/hero/background.png";

export const Hero = () => {
  return (
    <section className="hero">
      <img src={background} alt="" />
      <section className="hero-body">
        <h2 className="hero-heading">
          Pranovista <div style={{ fontSize: 50 }}>Wellness for you</div>
        </h2>
        <button className="button-auth-hero">Sign up</button>
      </section>
    </section>
  );
};
