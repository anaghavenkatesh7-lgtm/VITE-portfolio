import React from "react";
import "./Hero.css";

function Hero() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <section className="hero-section" id="hero">
      <h1>
        {greeting}, I'm Anagha Venkatesh 👋
      </h1>

      <p className="tagline">
        <b>I am a passionate web developer from Bangalore</b>
      </p>

      <div className="hero-button">
        <a href="#projects" className="btn btn-primary">
          View My Projects
        </a>

        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;