import line from "/home/information/line.svg";

import "./styles/information.css";

const informationButtons = [
  "Benefits",
  "Ingredients",
  "How to use",
  "Reviews",
  "FAQs",
];

export const Information = () => {
  const buttons = () => {
    return informationButtons.map((buttons) => {
      if (buttons[4]) {
        return (
          <>
            <button>{buttons}</button>
            <img src={line} alt="" />
          </>
        );
      } else {
        return <button>{buttons}</button>;
      }
    });
  };

  return (
    <section className="information">
      <section className="switch-information-buttons">{buttons()}</section>
    </section>
  );
};
