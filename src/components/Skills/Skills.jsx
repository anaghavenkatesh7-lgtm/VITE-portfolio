import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 90
    },
    {
      name: "CSS",
      level: 80
    },
    {
      name: "JavaScript",
      level: 60
    },
    {
      name: "React",
      level: 70
    },
    {
      name: "Python",
      level: 90
    }
  ];

  return (
    <section id="skills" className="skill-section">
      <h2>My Skills</h2>

      <div className="skill-grid">
        {skills.map((skill) => (
          <div
            className="skill-item"
            key={skill.name}
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;