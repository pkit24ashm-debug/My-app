import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">SUSHMA THAPA</div>

      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};