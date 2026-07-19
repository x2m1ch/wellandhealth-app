import { PLANS, type PlanCardType } from "../plans";

import check from "/pricing/plans/check.svg";
import paper from "/pricing/plans/paper.svg";

import "./styles/flexible-plans.css";
import "../styles/plans.css";

const switchCardDescriptionByType = (type: PlanCardType) => {
  switch (type) {
    case "Starter":
      return "Perfect for personal use";
    case "Professional":
      return "Perfect for small teams";
    default:
      return "Perfect for organizations";
  }
};

const switchColorByType = (type: PlanCardType) => {
  switch (type) {
    case "Professional":
      return { backgroundColor: "#2C35E0", color: "white" };
    default:
      return { backgroundColor: "#F2F2FD" };
  }
};

const switchTextColorByType = (type: PlanCardType) => {
  switch (type) {
    case "Professional":
      return { color: "#F2F2FD" };
    default:
      return { color: "#9095A0" };
  }
};

const viewAdvantages = (advantages: string[] | undefined) => {
  if (advantages) {
    return advantages.map((advantage) => (
      <div>
        <img src={check} alt="" />
        <p>{advantage}</p>
      </div>
    ));
  } else {
    return;
  }
};

export const FlexiblePlans = () => {
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
        {PLANS.map((plan) => (
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
                  {switchCardDescriptionByType(plan.type)}
                </p>
              </section>
              <section className="flexible-plans-card-advantages">
                {viewAdvantages(plan.advantages)}
              </section>
            </section>
            {plan.type == "Organization" ? (
              <button className="plans-card-button">
                <img src={paper} />
                Contact Sale
              </button>
            ) : (
              <button className="plans-card-button">Get Started</button>
            )}
          </article>
        ))}
      </section>
    </section>
  );
};
