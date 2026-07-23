import { buttonHover } from "../PricingPage";
import { PLANS, type PlanCardType } from "../plans";

import check from "/pricing/plans/check.svg";

import "./styles/flexible-plans.css";
import "../styles/plans.css";

export const FlexiblePlans = () => {
  const switchColorByType = (type: PlanCardType) =>
    type == "Professional"
      ? { backgroundColor: "#2C35E0", color: "white" }
      : { backgroundColor: "#F2F2FD" };

  const switchTextColorByType = (type: PlanCardType) =>
    type == "Professional" ? { color: "#F2F2FD" } : { color: "#9095A0" };

  const viewAdvantages = (advantages: string[] | undefined) =>
    advantages
      ? advantages.map((advantage) => (
          <div>
            <img src={check} alt="" />
            <p>{advantage}</p>
          </div>
        ))
      : undefined;

  return (
    <section className="flexible-plans">
      <section className="flexible-plans-head">
        <h2>Flexible Plans</h2>
        <p>
          Consectetur dolor labore laborum ipsum pariatur culpa dolor duis
          dolore nulla. Labore aute sunt mollit sunt commodo labore occaecat
        </p>
      </section>
      <section className="flexible-plans-cards">
        {PLANS.map((plan) => {
          return (
            <article
              className="flexible-plans-card"
              style={switchColorByType(plan.type)}
            >
              <section>
                <section className="plans-card-head">
                  <h3
                    className="plans-heading"
                    style={switchColorByType(plan.type)}
                  >
                    {plan.type}
                  </h3>
                  <div className="plans-card-price">
                    <span>${plan.price}</span>
                    <p style={switchTextColorByType(plan.type)}>/month</p>
                  </div>
                  <p style={switchTextColorByType(plan.type)}>
                    {plan.type == "Starter"
                      ? "Perfect for personal use"
                      : plan.type == "Professional"
                        ? "Perfect for small teams"
                        : "Perfect for organizations"}
                  </p>
                </section>
                <section className="flexible-plans-card-advantages">
                  {viewAdvantages(plan.advantages)}
                </section>
              </section>
              {plan.type == "Organization" ? (
                buttonHover()
              ) : (
                <button className="plans-card-button">Get Started</button>
              )}
            </article>
          );
        })}
      </section>
    </section>
  );
};
