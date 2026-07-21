import { useState } from "react";
import { Footer } from "../../components/Footer";
import { GetInTouch } from "../../components/GetInTouch";
import { ComparePlans } from "./sections/ComparePlans";
import { FlexiblePlans } from "./sections/FlexiblePlans";

import whitePaper from "/pricing/plans/whitePaper.svg";
import bluePaper from "/pricing/plans/bluePaper.svg";

export const buttonHover = () => {
  let [isFocus, setFocus] = useState(false);

  return (
    <button
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}
      className="plans-card-button"
    >
      <img src={isFocus ? whitePaper : bluePaper} alt="" />
      <p>Contact Sale</p>
    </button>
  );
};

export const PricingPage = () => {
  return (
    <>
      <section className="app-pages">
        <FlexiblePlans />
        <ComparePlans />
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};
