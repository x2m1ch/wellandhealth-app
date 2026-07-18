import Arrow from "/components/get-started/arrow.svg";

import "./styles/get-started.css";
import { Link } from "react-router";

export const GetStarted = () => {
  return (
    <div className="get-started-area">
      <section>
        <h2>Getting Started</h2>
        <section>
          <Link to="/sign-up" className="get-started-area-button">Sign Up</Link>
        </section>
      </section>
      <img className="get-started-area-image" src={Arrow} alt="" />
    </div>
  );
};
