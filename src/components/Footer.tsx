import { Link } from "react-router";
import { type Links } from "../shared/ui/site-header/SiteHeader";
import { infoMap } from "../pages/home/HomePage";

import "./styles/footer.css";

interface Column {
  heading: string;
  links: Links[];
}

const images = [
  "/components/footer/twitter.png",
  "/components/footer/facebook.png",
  "/components/footer/linkedin.png",
  "/components/footer/youtube.png",
];

const LINKS = {
  about: [
    {
      to: "/",
      body: "Home",
    },
    {
      to: "/",
      body: "Shop",
    },
    {
      to: "/",
      body: "Our Story",
    },
    {
      to: "/",
      body: "Blogs",
    },
  ],
  help: [
    {
      to: "/",
      body: "Shipping & Returns",
    },
    {
      to: "/",
      body: "Track Order",
    },
    {

      body: "FAQs",
    },
  ],
};

const COLUMNS: Column[] = [
  {
    heading: "About",
    links: LINKS.about,
  },
  {
    heading: "Help",
    links: LINKS.help,
  },
];

export const Footer = () => {
  const renderColumns = () =>
    COLUMNS.map((columns) => (
      <section className="footer-sections">
        <h2 className="footer-headings">{columns.heading}</h2>
        {columns.links.map((link) => (
          <Link to={link.to}>{link.body}</Link>
        ))}
      </section>
    ));

  return (
    <footer>
      <section>
        {renderColumns()}
        <section className="footer-sections">
          <h2 className="footer-headings">Contact</h2>
          <h3>Phone:</h3>
          <p className="footer-contacts">(+1) 123 456 7893</p>
          <h3>Email:</h3>
          <p className="footer-contacts">name@email.com</p>
        </section>
      </section>

      <section className="footer-sections">
        <section className="subscribe-input-and-title">
          <h2 style={{ fontSize: 24 }}>Receive new promotions</h2>
          <p>Duis ea tempor commodo amet reprehende</p>
          <div className="subscribe-input">
            <div className="subscribe-input-body">
              <img src="/components/footer/mail.svg" alt="" />
              <input
                className="subscribe-input-text subscribe-input-items"
                placeholder="Input your email"
                type="email"
              />
            </div>
            <button className="subscribe-input-button subscribe-input-items">
              Subscribe
            </button>
          </div>
        </section>

        <section className="contacts-logos">
          {images.map((images) => (
            <Link to="/">
              <img className="contacts-logos-items" src={images} alt="" />
            </Link>
          ))}
        </section>

        <section className="footer-info">
          <p>© 2022 Brand, Inc.</p>
          {infoMap("dark")}
        </section>
      </section>
    </footer>
  );
};
