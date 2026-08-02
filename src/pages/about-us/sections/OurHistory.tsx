import dateLine from "/about-us/our-history/date-line.svg";
import decorOne from "/about-us/our-history/decor2.svg";
import decorTwo from "/about-us/our-history/decor.svg";

import "./styles/our-history.css";

interface ActionByDate {
  date: number;
  action: string;
}

const ACTIONS: ActionByDate[] = [
  {
    date: 2018,
    action:
      "Ut non dolor anim cupidatat sunt pariatur labore ex excepteur labore laborum sit Lorem. Dolor non proident amet in exercitation aute anim reprehende",
  },
  {
    date: 2020,
    action:
      "Ut non dolor anim cupidatat sunt pariatur labore ex excepteur labore laborum sit Lorem. Dolor non proident amet in exercitation aute anim reprehende",
  },
  {
    date: 2022,
    action:
      "Ut non dolor anim cupidatat sunt pariatur labore ex excepteur labore laborum sit Lorem. Dolor non proident amet in exercitation aute anim reprehende",
  },
];

export const OurHistory = () => {
  return (
    <section className="our-history">
      <section className="our-history-head">
        <p className="description">Dolore dolore voluptate aliqua ut mi</p>
        <h2>Our History</h2>
      </section>
      <section className="our-history-body">
        <img src={decorOne} alt="" />
        <section className="our-history-items">
          <img src={dateLine} alt="" />
          <section>
            {ACTIONS.map((action) => (
              <div className="date-action">
                <h3>{action.date}</h3>
                <p>{action.action}</p>
              </div>
            ))}
          </section>
        </section>
        <img src={decorTwo} alt="" />
      </section>
    </section>
  );
};
