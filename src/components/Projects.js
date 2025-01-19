import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'My Portfolio',
      description: "My Portfolio website serves as a comprehensive showcase of my skills, projects, and experiences in web development. The portfolio highlights my journey as a developer, featuring detailed descriptions of my previous projects, the technologies I've worked with, and my accomplishments. It includes interactive features, animations, and a contact form where visitors can reach out to me. This website is designed to reflect my professional skills and provides potential clients or employers with an overview of my capabilities. I used HTML, CSS, React, and Bootstrap to develop and design the portfolio, focusing on a user-friendly and visually appealing layout.",
      imageUrl: 'assets/portfolio.jpg', // Replace with the path to your image
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;