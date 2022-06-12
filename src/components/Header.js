import React from "react";

function Header(props) {
  return (
    <header>
      <h3>
        <a href="#">LOGO</a>
      </h3>
      <nav>
        <ul>
          <li className="underline">
            <a href="#">text</a>
          </li>
          <li>
            <a href="#">text</a>
          </li>
          <li>
            <a href="#">text</a>
          </li>
          <li>
            <a href="#">text</a>
          </li>
          <li>
            <a href="#">text</a>
          </li>
        </ul>
      </nav>
      <a href="#">Contact Me</a>
    </header>
  );
}

export default Header;
