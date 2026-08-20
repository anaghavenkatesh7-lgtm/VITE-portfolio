import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>

      <div className="about-content">
        <figure className="profile-figure">
          <img
            src="/my pic.jpeg"
            alt="Anagha Venkatesh"
          />

          <figcaption>Anagha Venkatesh</figcaption>
        </figure>

        <div className="about-text">
          <p>
            I am interested in learning and building new things
            and look forward to working hard and improving my
            skills.
          </p>

          <p>
            I am passionate about web development and enjoy
            creating interactive and user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;