import { BrowserRouter, Outlet, Route, Routes } from "react-router";

import { HomePage } from "../pages/home";
import { SiteHeader } from "../shared/ui/site-header";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
