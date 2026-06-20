import { Link } from "react-router";

import "./styles/site-header.css";

interface NavLink {
  to: string;
  body: string;
}

const LINKS: NavLink[] = [
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

export const SiteHeader = () => {
  return (
    <header className="header">
      <h1>Ayuvista</h1>

      <div className="nav-and-auth">
        <nav className="header-nav">
          {LINKS.map((link) => (
            <Link className="links" to={link.to} key={link.to}>
              {link.body}
            </Link>
          ))}
        </nav>
        <div className="auth">
          <button className="auth-items login">Login</button>
          <button className="auth-items get-free">Try for free</button>
        </div>
      </div>
    </header>
  );
};
