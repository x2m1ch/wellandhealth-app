import { useState } from "react";

import passiveArrow from "/faq/asks/passive.svg";
import activeArrow from "/faq/asks/active.svg";

import "./styles/asks.css";

interface Ask {
  heading: string;
  description: string;
}

const ASKS = {
  general: [
    {
      heading: "Excepteur esse sit sit eiusmod cillum nostr ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      heading: "Est ad incididunt sint magna incididunt?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      heading: "Proident irure officia anim ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
    {
      heading: "Id anim nisi ut magna ut ?",
      description:
        "Esse consectetur nisi consequat ea do aliquip minim nostrud est incididunt excepteur esse cillum aliquip reprehenderit amet",
    },
  ] as Ask[],
};

const buttons = ["General", "Companies", "Members", "Society"];

export const Asks = () => {
  const [buttonActive, setButtonActive] = useState("General");
  const [stateButtonSwitchDescription, setStateButtonSwitchDescription] =
    useState("Excepteur esse sit sit eiusmod cillum nostr ?");

  const viewAsks = () => {
    switch (buttonActive) {
      case "General":
        return ASKS.general.map((values) => {
          const isActive = stateButtonSwitchDescription === values.heading;

          return (
            <article>
              <div>
                <h3>{values.heading}</h3>
                <img
                  style={{ userSelect: "none" }}
                  onClick={() => {
                    setStateButtonSwitchDescription(values.heading);
                  }}
                  src={isActive ? activeArrow : passiveArrow}
                />
              </div>
              <p>{isActive ? values.description : undefined}</p>
            </article>
          );
        });
    }
  };

  const buttonsView = () => {
    return buttons.map((button) => {
      const isActive = button === buttonActive;
      const classSwitch = isActive ? "asks-button-active" : "asks-button";

      return (
        <button
          className={classSwitch}
          onClick={() => {
            setButtonActive(button);
          }}
        >
          {button}
        </button>
      );
    });
  };

  return (
    <section className="asks">
      <section className="asks-buttons">{buttonsView()}</section>
      <section className="asks-info">{viewAsks()}</section>
    </section>
  );
};
