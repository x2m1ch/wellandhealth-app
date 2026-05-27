import line from "/home/information/line.svg";

import "./styles/information.css";
import { useState } from "react";

const informationButtons = [
  "Benefits",
  "Ingredients",
  "How to use",
  "Reviews",
  "FAQs",
];

export const Information = () => {
  const [buttonState, setButtonState] = useState("Benefits");

  const buttons = () => {
    return informationButtons.map((buttons) => {
      const isActive = buttons === buttonState;
      const classSwitch = isActive ? "information-button-active" : "";

      if (buttons[4]) {
        return (
          <>
            <button
              className={classSwitch}
              onClick={() => {
                setButtonState(buttons);
              }}
            >
              {buttons}
            </button>
            {isActive ? "": <img src={line} alt="" />}
          </>
        );
      } else {
        return (
          <button
            className={classSwitch}
            onClick={() => {
              setButtonState(buttons);
            }}
          >
            {buttons}
          </button>
        );
      }
    });
  };

  return (
    <section className="information">
      <section className="switch-information-buttons">{buttons()}</section>
    </section>
  );
};
