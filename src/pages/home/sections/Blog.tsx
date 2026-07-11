import buttonActive from "/home/blog/active.svg";
import buttonPassive from "/home/blog/passive.svg";

import "./styles/blog.css";
import { Link } from "react-router";

interface blogCards {
  src: string;
}

const CARDS: blogCards[] = [
  {
    src: "/home/blog/cardsImages/one.png",
  },
  {
    src: "/home/blog/cardsImages/two.png",
  },
  {
    src: "/home/blog/cardsImages/three.png",
  },
];

export const Blog = () => {
  return (
    <section className="blog">
      <section className="blog-information">
        <section className="blog-information-body">
          <p style={{ fontSize: 12 }}>Dolore dolore voluptate aliqua ut mi</p>
          <h2 className="blog-information-name">Blog</h2>
          <p className="blog-information-body-description">
            Laborum dolore aute et incididunt commodo consectetur eiusmod magna.
          </p>
          <Link className="blog-link" to="/blog">
            View more
          </Link>
        </section>

        <div className="blog-cards-switch-buttons">
          <button>
            <img src={buttonPassive} alt="" />
          </button>
          <button>
            <img src={buttonActive} alt="" />
          </button>
        </div>
      </section>

      <section className="blog-cards">
        {CARDS.map((card) => (
          <article className="blog-card">
            <img className="blog-card-image" src={card.src} alt="" />
            <section className="blog-card-body">
              <p className="blog-card-up-heading">Subtitle</p>
              <h3 className="blog-card-heading">Blog title</h3>
              <p className="blog-card-description">
                Description about the product: quis nostrud exercitation ullamco
              </p>
              <section className="blog-ladels">
                <div className="ladel-one blog-ladels-items">Label 1</div>
                <div className="ladel-two blog-ladels-items">Label 2</div>
              </section>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};
