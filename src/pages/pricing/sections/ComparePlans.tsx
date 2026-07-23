import { buttonHover } from "../PricingPage";
import {
  type PlanCardType,
  PLANS,
  advantagesChecks,
  namesRows,
} from "../plans";

import "./styles/compare-plans.css";
import "../styles/plans.css";

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
              ) : undefined}
            </div>
          </>
        );
      })}
    </div>
  );
};

const switchButtons = (type: PlanCardType) =>
  type == "Organization" ? (
    buttonHover()
  ) : (
    <button className="plans-card-button">Get Started</button>
  );
  
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
        {namesRows.map((row) =>
          row == "30-day free trial" ? (
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
          ) : (
            <article className="compare-plans-info-rows">
              <section>
                <h3>{row}</h3>
              </section>
              {checksView(row)}
            </article>
          ),
        )}
      </section>
    </section>
  );
};
