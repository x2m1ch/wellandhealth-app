import { Hero } from "./sections/Hero";
import { Info } from "./sections/Info";

export const HelpCenterPage = () => {
  return <>
    <Hero />
    <section className="app-pages">
        <Info />
    </section>
  </>;
};
