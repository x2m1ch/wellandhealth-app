import { FeatureCard } from "../../components/home/features/FeatureCard";
import "./styles/features.css";

export const Features = () => {
  return (
    <section className="features">
      <section className="features-head">
        <p className="description">Dolore dolore voluptate aliqua ut mi</p>
        <h2>Features</h2>
      </section>
      <section className="features-body">
        <FeatureCard textColor="#1BA18D" color="#BAF3EB"/>
        <FeatureCard textColor="#2C35E0" color="#CED0F8"/>
        <FeatureCard textColor="#E1602C" color="#F8DBD0"/>
        <FeatureCard textColor="#E02862" color="#FDF1F5"/>
      </section>
    </section>
  );
};
