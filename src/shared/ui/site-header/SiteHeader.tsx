import { Link } from "react-router";

import "./styles/site-header.css";

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
    to: "/pricing",
    body: "Pricing"
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
    to: "/faq",
    body: "FAQs",
  },
];

export const SiteHeader = () => {
  return (
    <header className="header">
      <Link to="/"><h1>Ayuvista</h1></Link>

      <div className="nav-and-auth">
        <nav className="header-nav">
          {LINKS.map((link) => (
            <Link className="links" to={link.to} key={link.to}>
              {link.body}
            </Link>
          ))}
        </nav>
        <div className="auth">
          <Link to="/" className="auth-items login">Login</Link>
          <Link to="/" className="auth-items get-free">Try for free</Link>
        </div>
      </div>
    </header>
  );
};
