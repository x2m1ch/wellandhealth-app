import {
  type PlanCardType,
  PLANS,
  advantagesChecks,
  namesRows,
} from "../plans";

import "./styles/compare-plans.css";
import "../styles/plans.css";

import paper from "/pricing/plans/paper.svg";
import cheak from "/pricing/plans/check2.svg";

const checksView = (nameRow: string) => {
  const currentAdvantage = advantagesChecks.find((adv) => adv.name == nameRow);

  return (
    <div className="compare-checks">
      {PLANS.map((plan) => {
        const planKey = plan.type.toLowerCase() as
          | "starter"
          | "professional"
          | "organization";

        const hasAdvantage = currentAdvantage
          ? currentAdvantage[planKey]
          : false;

        return (
          <>
            <div className="compare-checks">
              {hasAdvantage ? (
                <img src={cheak} className="compare-icon" />
              ) : (
                <span style={{ paddingRight: 6 }}>-</span>
              )}
            </div>
          </>
        );
      })}
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
                    {checksView(row)}
                  </article>
                </>
              );
            default:
              return (
                <article className="compare-plans-info-rows">
                  <section>
                    <h3>{row}</h3>
                  </section>
                  {checksView(row)}
                </article>
              );
          }
        })}
      </section>
    </section>
  );
};
