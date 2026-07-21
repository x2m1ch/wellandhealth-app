import { Link } from "react-router";

import { Footer } from "../../components/Footer";
import { AboutUs } from "../../components/AboutUs";
import { Blog } from "./sections/Blog";
import { Features } from "./sections/Features";
import { Get } from "../../components/Get";
import { Hero } from "./sections/Hero";
import { Information } from "./sections/Information";
import { Marquee } from "./sections/Marquee";
import { OurProducts } from "./sections/OurProducts";
import { GetInTouch } from "../../components/GetInTouch";

interface Info {
  name: string;
  to: string;
}

const info: Info[] = [
  {
    name: "Privacy",
    to: "/privacy",
  },
  {
    name: "Terms",
    to: "/terms",
  },
  {
    name: "Sitemap",
    to: "/sitemap",
  },
];

export const infoMap = (textColor: "white" | "dark") => {
  return info.map((info) => (
    <>
      <p>•</p>
      <Link
        style={textColor == "white" ? { color: "white" } : { color: "dark" }}
        to={info.to}
      >
        {info.name}
      </Link>
    </>
  ));
};

export const HomePage = () => {
  return (
    <>
      <Hero />

      <main className="app-pages">
        <AboutUs />
        <Features />
        <OurProducts />
        <Marquee />
        <Information />
        <Blog />
        <Get heading="Getting started"/>
      </main>

      <GetInTouch />
      <Footer />
    </>
  );
};
