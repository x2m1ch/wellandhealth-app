import { useState } from "react";

import line from "/home/information/line.svg";
import image from "/home/information/image.png";

import "./styles/information.css";

interface Information {
  heading: string
  description: string
}

const BENEFITS: Information[] = [
  {
    heading: "Laboris consequat ad",
    description: "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur"
  },
  {
    heading: "Duis duis do labore pariatur",
    description: "Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo voluptate. Lorem id qui laborum aute voluptate"
  },
  {
    heading: "Deserunt ex",
    description: "Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis Lorem adipisicing et minim velit quis"
  },
]

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
            <img src={line} alt="" />
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

  const information = () => {
    switch (buttonState) {
      case "Benefits": return <>
        <h2 className="information-main-heading">Benefits</h2>
        <p>Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur occaecat quis</p>
        {BENEFITS.map((data) => (
          <article className="information-blocks">
            <h3 className="information-headings">{data.heading}</h3>
            <p>{data.description}</p>
          </article>
        ))}
      </>
    }
  }

  return (
    <section className="information">
      <section className="switch-information-buttons">{buttons()}</section>
      <section className="information-body">
        <section className="information-text">
          {information()}
        </section>
        <img src={image} alt="" />
      </section>
    </section>
  );
};
