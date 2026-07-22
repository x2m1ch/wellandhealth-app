import { Footer } from "../../components/Footer";
import { Get } from "../../components/Get";
import { Hero } from "./sections/Hero";
import { Info } from "./sections/Info";

export const HelpCenterPage = () => {
  return <>
    <Hero />
    <section className="app-pages">
        <Info />
        <Get heading="Lorem ea irure commod"/>
    </section>
    <Footer />
  </>;
};
