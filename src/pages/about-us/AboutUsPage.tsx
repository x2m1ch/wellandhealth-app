import { AboutUs } from "../../components/AboutUs";
import { Founders } from "./sections/Founders";
import { OurHistory } from "./sections/OurHistory";

export const AboutUsPage = () => {
  return (
    <>
      <section className="app-pages">
        <AboutUs />
        <Founders />
        <OurHistory />
      </section>
    </>
  );
};
