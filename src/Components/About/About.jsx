import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import portfolio_profile from "../../assets/portfolio_profile.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={portfolio_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a Full-Stack Developer Intern at Pixonix Software Technology,
              passionate about building dynamic and efficient web applications.{" "}
            </p>
            <p>
              I enjoy solving complex problems, creating seamless user
              experiences, and continuously learning new technologies to enhance
              my development skills.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS, Tailwind CSS, JavaScript,React.js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node.js & Express.js, Java ,C,C++</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB, MySQL,CRUD Operations</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Git & GitHub, Problem Solving & Data Structure</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>0.5++</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5++</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15++</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
