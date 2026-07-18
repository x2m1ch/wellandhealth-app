import check from "/pricing/flexible-plans/check.svg";
import paper from "/pricing/flexible-plans/paper.svg";

import "./styles/flexible-plans.css";

type PlanCardType = "Starter" | "Professional" | "Organization";

interface PlanCard {
  type: PlanCardType;
  price: number;
  advantages: string[];
}

const advantages = {
  starter: [
    "Up to 1 users",
    "Analytics platform",
    "30-day free trial",
    "Team libraries",
  ],
  professional: [
    "Up to 20 users",
    "Smart analytics platform",
    "30-day free trial",
    "Team libraries",
    "Chat support 24/7",
  ],
  organization: [
    "Unlimited users",
    "System analytics",
    "30-day free trial",
    "Team libraries",
    "Chat support 24/7",
    "Advanced support services",
  ],
};

const CARDS: PlanCard[] = [
  {
    type: "Starter",
    price: 9,
    advantages: advantages.starter,
  },
  {
    type: "Professional",
    price: 12,
    advantages: advantages.professional,
  },
  {
    type: "Organization",
    price: 20,
    advantages: advantages.organization,
  },
];

const switchCardDescriptionByType = (type: PlanCardType) => {
  switch (type) {
    case "Starter":
      return "Perfect for personal use";
    case "Professional":
      return "Perfect for small teams";
    case "Organization":
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

const switchButtonByType = (type: PlanCardType) => {
  switch (type) {
    case "Organization":
      return (
        <button>
          <img src={paper} />
          Contact Sale
        </button>
      );
    default:
      return <button>Get Started</button>;
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
        {CARDS.map((card) => (
          <article
            className="flexible-plans-card"
            style={switchColorByType(card.type)}
          >
            <section>
              <section className="flexible-plans-card-head">
                <h3 style={switchColorByType(card.type)}>{card.type}</h3>
                <div className="flexible-plans-card-price">
                  <span>${card.price}</span>
                  <p style={switchTextColorByType(card.type)}>/month</p>
                </div>
                <p style={switchTextColorByType(card.type)}>
                  {switchCardDescriptionByType(card.type)}
                </p>
              </section>
              <section className="flexible-plans-card-advantages">
                {card.advantages.map((advantages) => (
                  <div>
                    <img src={check} alt="" />
                    <p>{advantages}</p>
                  </div>
                ))}
              </section>
            </section>
            {switchButtonByType(card.type)}
          </article>
        ))}
      </section>
    </section>
  );
};
