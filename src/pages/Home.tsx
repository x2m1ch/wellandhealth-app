import { AboutUs } from "../modules/home/AboutUs";
import { Features } from "../modules/home/Features";
import { Header } from "../modules/home/Header";
import { Hero } from "../modules/home/Hero";
import { Information } from "../modules/home/Information";
import { OurProducts } from "../modules/home/OurProducts";

import "./styles/home.css";

export const Home = () => {
  return (
    <>
      <Header />

      <main className="home-body">
        <Hero />
        <AboutUs />
        <Features />
        <Information />
        <OurProducts />
      </main>
    </>
  );
};