import { Link } from "react-router";

import "./styles/features.css";

interface Feature {
  id: number;
  title: string;
  description: string;
  color: "mint" | "lavender" | "peach" | "pink";
  icon?: string;
}

const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Feature",
    description:
      "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat",
    color: "mint",
  },
  {
    id: 2,
    title: "Feature",
    description:
      "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla",
    color: "lavender",
  },
  {
    id: 3,
    title: "Feature",
    description:
      "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat ullamco ulla",
    color: "peach",
    icon: "/home/features/image-one.svg",
  },
  {
    id: 4,
    title: "Feature",
    description:
      "Labore proident nisi fugiat nostrud sint mollit aliqua ipsum ad veniam cupidatat",
    color: "pink",
    icon: "/home/features/image-two.svg",
  },
];

export const Features = () => {
  return (
    <section className="features">
      <section className="features-head">
        <p className="features-label">Dolore dolore voluptate aliqua ut mi</p>
        <h2 className="features-title">Features</h2>
      </section>

      <section className="features-grid">
        {FEATURES.map((feature) => (
          <section
            key={feature.id}
            className={`feature-card feature-card--${feature.color}`}
          >
            <section className="feature-card-content">
              <section className="feature-card-head">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">
                  {feature.description}
                </p>
              </section>
              <Link to="/features" className="feature-card-link">
                Try now
              </Link>
            </section>

            <section></section>
            {feature.icon && (
              <img src={feature.icon} className="feature-card-icon" alt="" />
            )}
          </section>
        ))}
      </section>
    </section>
  );
};
