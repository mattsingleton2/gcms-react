import React from "react";
import Nav from "react-bootstrap/Nav";
import "../App.css";

function Header(props) {
  return (
    <div className="cover-container d-flex w-100 h-75 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">GCMS</h3>
          <Nav className="nav nav-masthead justify-content-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/meetus">Meet the Team</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
