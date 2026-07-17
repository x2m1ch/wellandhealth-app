import { Link } from "react-router";

import "./styles/header.css";

export interface Links {
  to: string;
  body: string;
}

const LINKS: Links[] = [
  {
    to: "/",
    body: "Home",
  },
  {
    to: "/about",
    body: "About us",
  },
  {
    to: "/yoga",
    body: "Yoga",
  },
  {
    to: "/ayurvedic",
    body: "Ayurvedic",
  },
  {
    to: "/helpcenter",
    body: "Help Center",
  },
  {
    to: "/contacts",
    body: "Contact us",
  },
  {
    to: "/help",
    body: "FAQs",
  },
];

export const Header = () => {
  return (
    <header>
      <h1>Ayuvista</h1>
      <section className="nav-and-auth">
        <nav>
          {LINKS.map((link) => (
            <Link className="links" to={link.to}>
              {link.body}
            </Link>
          ))}
        </nav>
        <section className="auth">
          <p className="auth-items login">Login</p>
          <button className="auth-items get-free">Try for free</button>
        </section>
      </section>
    </header>
  );
};
