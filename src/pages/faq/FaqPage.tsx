import { Footer } from "../../components/Footer";
import { Get } from "../../components/Get";
import { GetInTouch } from "../../components/GetInTouch";
import { Ask } from "./sections/AskHero";
import { Asks } from "./sections/Asks";

export const FaqPage = () => {
  return <>
    <Ask />
    <section className="app-pages">
      <Asks />
      <Get heading="Still have question?"/>
    </section>
    <GetInTouch />
    <Footer />
  </>;
};
