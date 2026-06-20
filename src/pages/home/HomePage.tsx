import { AboutUs } from "./sections/AboutUs";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Information } from "./sections/Information";
import { Marquee } from "./sections/Marquee";
import { OurProducts } from "./sections/OurProducts";

import "./styles/home-page.css";

export const HomePage = () => {
  return (
    <main className="home-body">
      <Hero />
      <AboutUs />
      <Features />
      <OurProducts />
      <Marquee />
      <Information />
    </main>
  );
};
