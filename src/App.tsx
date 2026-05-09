import { BrowserRouter, Route, Routes } from "react-router";

import "./global.css";
import "./reset.css";

import { Home } from "./pages/Home";

export const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};
