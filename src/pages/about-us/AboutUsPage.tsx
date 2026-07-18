import { AboutUs } from "../../components/AboutUs";
import { Footer } from "../../components/Footer";
import { GetInTouch } from "../../components/GetInTouch";
import { GetStarted } from "../../components/GetStarted";
import { Founders } from "./sections/Founders";
import { OurHistory } from "./sections/OurHistory";
import { Video } from "./sections/Video";

export const AboutUsPage = () => {
  return (
    <>
      <section className="app-pages">
        <AboutUs />
        <Founders />
        <OurHistory />
        <Video />
        <GetStarted />
      </section>

      <GetInTouch />
      <Footer />
    </>
  );
};
