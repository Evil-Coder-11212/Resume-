import React from "react";
import GithubIcon from "../images/Github-icon.png";
function Intro() {
  return (
    <div className="medium">
      <section>
        <h1>
          Hi, I’m <b className="name blue-text-shadow">Evil Coder</b>
          <br />a Software Developer. Passionate Programmer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim
        </p>
        <a href="#">
          <img src={GithubIcon}></img>
        </a>
        <a href="#">
          <img src={GithubIcon}></img>
        </a>
      </section>
    </div>
  );
}

export default Intro;
