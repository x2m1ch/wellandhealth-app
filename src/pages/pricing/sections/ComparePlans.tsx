import { type PlanCardType, PLANS, advantages } from "../plans";

import "./styles/compare-plans.css";
import "../styles/plans.css";

import paper from "/pricing/plans/paper.svg";
import cheak from "/pricing/plans/check2.svg";

const namesRows = [
  "30-day free trial",
  "Team libraries",
  "Smart analytics platform",
  "Chat support 24/7",
  "System analytics",
  "Advanced support services",
];

const checksView = () => {
  return (
    <div className="compare-checks">
      <article className="compare-check">
        <img src={cheak} alt="" />
      </article>
      <article className="compare-check">
        <img src={cheak} alt="" />
      </article>
      <article className="compare-check">
        <img src={cheak} alt="" />
      </article>
    </div>
  );
};

const switchButtons = (type: PlanCardType) => {
  switch (type) {
    case "Starter":
      return <button className="plans-card-button">Get Started</button>;
    case "Organization":
      return (
        <button className="plans-card-button">
          <img src={paper} alt="" />
          <p>Contact Sale</p>
        </button>
      );
    default:
      return (
        <button className="plans-card-button-professional">Get Started</button>
      );
  }
};

export const ComparePlans = () => {
  return (
    <section className="compare-plans">
      <section className="compare-plans-head">
        <h2>Compare Plans</h2>
        {PLANS.map((plan) => (
          <article className="plans-card-head">
            <h3 className="plans-heading">{plan.type}</h3>
            <div className="plans-card-price">
              <span>${plan.price}</span>
              <p>/month</p>
            </div>
            {switchButtons(plan.type)}
          </article>
        ))}
      </section>
      <section className="compare-plans-info">
        {namesRows.map((row) => {
          switch (row) {
            case "30-day free trial":
              return (
                <>
                  <article className="compare-plans-info-rows">
                    <section>
                      <h3>{row}</h3>
                      <p>
                        Laborum minim cillum sit labore adipisicing lorem non
                        incididunt irure Ipsum labore
                      </p>
                    </section>
                    {checksView()}
                  </article>
                </>
              );
            default:
              return (
                <article className="compare-plans-info-rows">
                  <section>
                    <h3>{row}</h3>
                  </section>
                  {checksView()}
                </article>
              );
          }
        })}
      </section>
    </section>
  );
};
