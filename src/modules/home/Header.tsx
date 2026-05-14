import { Link } from "react-router";

import "./styles/header.css";

export const Header = () => {
  return (
    <header>
      <h1>Ayuvista</h1>
      <section className="nav-and-auth">
        <nav>
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/about">
            About us
          </Link>
          <Link className="links" to="/yoga">
            Yoga
          </Link>
          <Link className="links" to="/ayurvedic">
            Ayurvedic
          </Link>
          <Link className="links" to="/pricing">
            Pricing
          </Link>
          <Link className="links" to="/helpcenter">
            Help Center
          </Link>
          <Link className="links" to="/contacts">
            Contact us
          </Link>
          <Link className="links" to="/help">
            FAQs
          </Link>
        </nav>
        <section className="auth">
          <p className="auth-items login">Login</p>
          <button className="auth-items get-free">Try for free</button>
        </section>
      </section>
    </header>
  );
};
