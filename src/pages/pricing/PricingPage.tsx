import { Footer } from "../../components/Footer";
import { GetInTouch } from "../../components/GetInTouch";
import { ComparePlans } from "./sections/ComparePlans";
import { FlexiblePlans } from "./sections/FlexiblePlans";

export const PricingPage = () => {
  return (
    <>
      <section className="app-pages">
        <FlexiblePlans />
        <ComparePlans />
      </section>
      <GetInTouch />
      <Footer />
    </>
  );
};
