import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { HomePage } from "../pages/home";
import { AboutUsPage } from "../pages/about-us/AboutUsPage";
import { SiteHeader } from "../shared/ui/site-header";
import { PricingPage } from "../pages/pricing/PricingPage";
import { FaqPage } from "../pages/faq/FaqPage";

import "./styles/global.css";
import "./styles/reset.css";

const AppLayout = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
