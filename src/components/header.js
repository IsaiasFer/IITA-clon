import React from "react";
import "../styles/header.scss";
import NavBar from "./navBar";

function Header() {
  return (
    <nav className="header">
      <figure className="logoContainer">
        <img className="logo"
          src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2021/12/cropped-LogoITTA-versiones-01-02-02-1.png?fit=2605%2C977&ssl=1"
          alt="IITA-logo"
        />
      </figure>
      <NavBar/>
    </nav>
  );
}

export default Header;
