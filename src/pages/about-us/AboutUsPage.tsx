import { AboutUs } from "../../components/AboutUs";
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
      </section>
    </>
  );
};
