import "../styles/feature-card.css";

export const FeatureCard = (props: { color: string, textColor: string }) => {
  return (
    <article
      className="feature-card"
      style={{
        backgroundColor: props.color,
        textDecorationColor: props.textColor
      }}
    >
      <section className="feature-card-head">
        <h3 className="feature-card-heading">Feature</h3>
        <p className="feature-card-body">
          Labore proident nisi fugiat <br /> nostrud sint mollit aliqua ipsum
          <br /> ad veniam cupidatat
        </p>
      </section>
      <button className="button-feature-card">Try now</button>
    </article>
  );
};
