import React from "react";
import "../styles/Nav.css";

const NavBar = () => {

  return (
    <>
      <div className="nav-container">
        <h1 className="nav-logo">MYAPP</h1>
        <div className="nav">
          <h2>Home</h2>
          <h2>Catalogo</h2>
          <h2>About us</h2>
          <h2>Contacto</h2>
        </div>
      </div>
    </>
  );
};

export default NavBar;