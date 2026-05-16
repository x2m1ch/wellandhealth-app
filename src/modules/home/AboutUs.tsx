import line from "/home/about-us/line.svg";
import eiusmod from "/home/about-us/eiusmod.png";

import "./styles/about-us.css";

export const AboutUs = () => {
  return (
    <section className="about-us">
      <section className="about-us-body">
        <section className="about-us-head">
          <p className="description">
            Dolore dolore voluptate aliqua ut mi
          </p>
          <h2>About Us</h2>
          <img src={line} alt="" />
        </section>
        <p className="about-us-text">
          Pranovista is a holistic wellness company dedicated to promoting a
          balanced and healthy lifestyle through the ancient practices of yoga
          and Ayurveda. With a deep-rooted commitment to well-being, Pranovista
          offers personalized wellness solutions that blend traditional wisdom
          with modern needs. Our expert-guided programs focus on enhancing
          physical, mental, and spiritual harmony, empowering individuals to
          achieve optimal health naturally
        </p>
        <button className="button-learn-more">Learn more</button>
      </section>
      <img src={eiusmod} alt="" />
    </section>
  );
};
