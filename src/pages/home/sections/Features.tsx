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
          <article
            className={`feature-card feature-card--${feature.color}`}
            key={feature.id}
          >
            <div className="feature-card-content">
              <div className="feature-card-head">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>

              <Link className="feature-card-link" to="/">
                Try now
              </Link>
            </div>

            {feature.icon && (
              <img className="feature-card-icon" src={feature.icon} alt="" />
            )}
          </article>
        ))}
      </section>
    </section>
  );
};
