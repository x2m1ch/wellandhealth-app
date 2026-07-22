import card from "/help-center/info/card.svg";
import others from "/help-center/info/others.svg";
import partnership from "/help-center/info/partnership.svg";
import security from "/help-center/info/security.svg";
import settings from "/help-center/info/settings.svg";
import teamPlan from "/help-center/info/team-plan.svg";

import "./styles/info.css";

interface InfoBlock {
  icon: string;
  heading: string;
  description: string;
}

const BLOCKS: InfoBlock[] = [
  {
    icon: `${settings}`,
    heading: "Settings",
    description: "Labore proident nisi fugiat nostrud",
  },
  {
    icon: `${teamPlan}`,
    heading: "Team plan",
    description: "Labore proident nisi fugiat nostrud",
  },
  {
    icon: `${partnership}`,
    heading: "Partnership",
    description: "Labore proident nisi fugiat nostrud",
  },
  {
    icon: `${security}`,
    heading: "Security",
    description: "Labore proident nisi fugiat nostrud ",
  },
  {
    icon: `${card}`,
    heading: "Feature request",
    description: "Labore proident nisi fugiat nostrud ",
  },
  {
    icon: `${others}`,
    heading: "Others",
    description: "Labore proident nisi fugiat nostrud ",
  },
];

export const Info = () => {
  return (
    <>
      <section className="help-info">
        {BLOCKS.map((block) => (
          <article className="help-info-block">
            <img src={block.icon} alt="" />
            <div>
              <h2>{block.heading}</h2>
              <p>{block.description}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};
