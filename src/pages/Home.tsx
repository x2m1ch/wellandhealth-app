import { AboutUs } from "../modules/home/AboutUs";
import { Header } from "../modules/home/Header";
import { Hero } from "../modules/home/Hero";

import "./styles/home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
    </>
  );
};
