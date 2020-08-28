import React from "react";
import PivochainLogo from "../../assets/pivotchain-logo-1.webp";

const Header = (props) => {
  const menuItemArray = [
    "home",
    "product",
    "careers",
    "about us",
    "contact",
    "covid-19",
  ];

  const menuList = menuItemArray.map((item, key) => {
    return (
      <li key={key} className="nav-item ">
        <a className="nav-link" href="#">
          {item}
        </a>
      </li>
    );
  });

  return (
    <div className="headerWrap" >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">
            <img
              src={PivochainLogo}
              width="130"
              height="auto"
              alt="PivotChain Logo"
              loading="lazy"
              alt="PivotChain Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">{menuList}</ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
