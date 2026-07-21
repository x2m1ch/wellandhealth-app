import Arrow from "/components/get-started/arrow.svg";
import Arrow2 from "/components/get-started/arrow2.svg";

import "./styles/get.css";
import { Link } from "react-router";

export const Get = (props: { heading: string }) => {
  return (
    <div className="get-started-area">
      <section>
        <h2>{props.heading}</h2>
        <section>
          <Link to="/login" className="get-started-area-button">
            {props.heading == "Getting started" ? "Sign Up" : "Contact Us"}
          </Link>
        </section>
      </section>
      <img
        className="get-started-area-image"
        src={props.heading == "Getting started" ? Arrow : Arrow2}
        alt=""
      />
    </div>
  );
};
