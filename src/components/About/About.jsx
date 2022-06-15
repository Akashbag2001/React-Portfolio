import "./about.css";

import React from "react";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a Full-stack developer and a college student. Currently working on
          @RadyTogo Travels as a web developer Intern. I love to play guitar
          watch Anime and football as a hobby.
        </p>
        <p className="a-desc">
          -Languages learned: C, C++, Python, Javascript, Java(Beginner)
          <br />
          -Development: Basic: HTML, CSS , Javascript Framework: React.js,
          <br />
          Bootstrap Backend: Node.js, Express Database: MongoDB, AWS Competetive
          <br />
          <a
            href="https://www.codechef.com/users/akashbag_2001"
            target="_blank"
            rel="noreferrer"
          >
            Programming: 2 star in Codechef(C++)
          </a>
          <br />
          <a
            href="https://github.com/Akashbag2001"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <br />
          <a
            href="https://drive.google.com/file/d/12cKuPcGIZrwX_C2lnATn-FQys16IzcOS/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
