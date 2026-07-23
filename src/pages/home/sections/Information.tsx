import { useState } from "react";

import image from "/home/information/image.png";

import "./styles/information.css";

interface Information {
  heading: string;
  description: string;
}

const BENEFITS: Information[] = [
  {
    heading: "Laboris consequat ad",
    description:
      "Consectetur excepteur elit ullamco incididunt voluptate tempor exercitation. Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur",
  },
  {
    heading: "Duis duis do labore pariatur",
    description:
      "Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo voluptate. Lorem id qui laborum aute voluptate",
  },
  {
    heading: "Deserunt ex",
    description:
      "Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis Lorem adipisicing et minim velit quis",
  },
];

const informationButtons = [
  "Benefits",
  "Ingredients",
  "How to use",
  "Reviews",
  "FAQs",
];

export const Information = () => {
  const [buttonActive, setButtonActive] = useState("Benefits");
  const [buttonHover, setButtonHover] = useState("");

  const buttons = () => {
    return informationButtons.map((button) => {
      const isActive = button === buttonActive;
      const isHover = button === buttonHover;
      const classSwitch = isActive ? "information-button-active" : undefined;

      return (
        <button
          key={button}
          className={classSwitch}
          onClick={() => setButtonActive(button)}
          onMouseMove={() => setButtonHover(button)}
          onMouseLeave={() => setButtonHover("")}
          style={isHover && isActive != true ? {color: "#565cc4"} : undefined}
        >
          {button}
        </button>
      );
    });
  };

  const information = () => {
    return buttonActive == "Benefits" ? (
      <div className="information-text">
        <h2 className="information-main-heading">Benefits</h2>

        <p>
          Consectetur excepteur elit ullamco incididunt voluptate tempor
          exercitation. Lorem commodo ullamco quis velit officia aute laboris
          elit sit exercitation ut esse pariatur occaecat quis
        </p>

        <div className="information-blocks">
          {BENEFITS.map((data) => (
            <div key={data.heading}>
              <h3 className="information-headings">{data.heading}</h3>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="information-text">
        <h2 className="information-main-heading">{buttonActive}</h2>

        <p>Content for this section will be added later.</p>
      </div>
    );
  };

  return (
    <section className="information">
      <section className="switch-information-buttons">{buttons()}</section>
      <section className="information-body">
        <section className="information-text">{information()}</section>
        <img src={image} alt="" />
      </section>
    </section>
  );
};
