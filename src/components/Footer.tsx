import { Link } from "react-router";
import { type Links } from "./Header";

import "./styles/footer.css";

interface Column {
  heading: string;
  links: Links[];
}

const images = [
  "/home/footer/twitter.png",
  "/home/footer/facebook.png",
  "/home/footer/linkedin.png",
  "/home/footer/youtube.png",
];

const footerInfo = ["Privacy", "Terms", "Sitemap"];

const links = {
  about: [
    {
      to: "/",
      body: "Home",
    },
    {
      to: "/shop",
      body: "Shop",
    },
    {
      to: "/story",
      body: "Our Story",
    },
    {
      to: "/blogs",
      body: "Blogs",
    },
  ],
  help: [
    {
      to: "/shipping",
      body: "Shipping & Returns",
    },
    {
      to: "/track",
      body: "Track Order",
    },
    {
      to: "/help",
      body: "FAQs",
    },
  ],
};

const columns: Column[] = [
  {
    heading: "About",
    links: links.about,
  },
  {
    heading: "Help",
    links: links.help,
  },
];

const renderColumns = () => {
  return columns.map((columns) => (
    <section className="footer-sections">
      <h2 className="footer-headings">{columns.heading}</h2>
      {columns.links.map((link) => (
        <Link to={link.to}>{link.body}</Link>
      ))}
    </section>
  ));
};

export const Footer = () => {
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
              <img src="/home/footer/mail.svg" alt="" />
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
            <img className="contacts-logos-items" src={images} alt="" />
          ))}
        </section>

        <section className="footer-info">
          <p>© 2022 Brand, Inc.</p>
          {footerInfo.map((info) => (
            <>
              <p>•</p>
              <p>{info}</p>
            </>
          ))}
        </section>
      </section>
    </footer>
  );
};
