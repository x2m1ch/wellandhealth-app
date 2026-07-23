import { Footer } from "../../components/Footer";
import { GetInTouch } from "../../components/GetInTouch";
import { Contacts } from "./sections/Contacts";

export const ContactUsPage = () => {
  return (
    <>
      <section className="app-pages">
        <Contacts />
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};
