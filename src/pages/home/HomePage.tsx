import { AboutUs } from "./sections/AboutUs";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Information } from "./sections/Information";
import { OurProducts } from "./sections/OurProducts";

import "./styles/home-page.css";

export const HomePage = () => {
  return (
    <main className="home-body">
      <Hero />
      <AboutUs />
      <Features />
      <Information />
      <OurProducts />
    </main>
  );
};
