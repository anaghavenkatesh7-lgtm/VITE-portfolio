import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Outfit Planner",
      description:
        "A stylish outfit planning application where users can organize clothes, create outfits, and plan their looks.",
      category: "Lifestyle",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/outfit planner.png"
    },

    {
      id: 2,
      name: "Movie Night Planner",
      description:
        "A movie discovery application where users can search for movies, view ratings and details, and create a personal watchlist.",
      category: "Entertainment",
      tech: ["React", "API", "JavaScript"],
      image: "/movie planner.png"
    },

    {
      id: 3,
      name: "Music Player",
      description:
        "A responsive music player that allows users to play, pause, skip, and control songs while displaying album artwork and track information.",
      category: "Music",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/music.png"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <div className="project-card-image">
              <img
                src={project.image}
                alt={project.name}
              />
            </div>

            <div className="project-card-body">
              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((technology) => (
                  <span
                    className="tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="#" className="btn btn-primary">
                  Live Demo
                </a>

                <a href="#" className="btn btn-secondary">
                  Github
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;