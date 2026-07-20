import { Footer } from "../../components/Footer";
import { Get } from "../../components/Get";
import { GetInTouch } from "../../components/GetInTouch";
import { Ask } from "./sections/Ask";

export const FaqPage = () => {
  return <>
    <Ask />
    <section className="app-pages">
      <Get heading="Still have question?"/>
    </section>
    <GetInTouch />
    <Footer />
  </>;
};
