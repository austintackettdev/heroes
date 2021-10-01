import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <header id="hero-header">
      <Link to="/">
        <h1 className="header-title">Heroes and Villains</h1>
      </Link>
    </header>
  );
};

export default Header;
