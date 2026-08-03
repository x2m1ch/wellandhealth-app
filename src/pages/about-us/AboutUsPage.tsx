import { AboutUs } from "../../components/AboutUs";
import { Footer } from "../../components/Footer";
import { GetInTouch } from "../../components/GetInTouch";
import { Get } from "../../components/Get";
import { Founders } from "./sections/Founders";
import { OurHistory } from "./sections/OurHistory";
import { Video } from "./sections/Video";

export const AboutUsPage = () => {
  return (
    <>
      <section className="app-pages">
        <AboutUs />
        <Founders />
      </section>
      <OurHistory />
      <section className="app-pages about-us-bottom">
        <Video />
        <Get heading="Getting started" />
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};
