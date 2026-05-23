import { AboutUs } from "../modules/home/AboutUs";
import { Features } from "../modules/home/Features";
import { Header } from "../modules/home/Header";
import { Hero } from "../modules/home/Hero";
import { OurProducts } from "../modules/home/OurProducts";

import "./styles/home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="home-body">
        <AboutUs />
        <Features />
        <OurProducts />
      </section>
    </>
  );
};
