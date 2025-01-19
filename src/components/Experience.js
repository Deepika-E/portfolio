import React from 'react';
import '../App.scss'; // Ensure this imports the styles

function Experience() {
  const experiences = [
    {
      role: 'Full Stack Web Development Intern',
      company: 'Brainery Spot Technology',
      period: 'Jun 2024 - Jul 2024 | Coimbatore, On-Site',
      description: `Collaborated with a team to design and develop web applications using HTML, CSS, JavaScript, and React.js for the front-end, and Node.js and Express for the back-end. Optimized code for performance and scalability, adhering to industry best practices in software development. Utilized Git and GitHub for version control and collaboration on projects.
      
      Workshop on Full Stack Web Development:
      In-depth sessions on front-end and back-end technologies, including responsive design, RESTful APIs, and database integration. Participated in hands-on labs, where real-world scenarios were simulated to apply the concepts learned.`,
      imageUrl: 'assets/brainery.jpg', // Replace with the correct image path
    },
  ];

  return (
    <section id="experience" className="experience">
      <h2>𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img
              src={exp.imageUrl}
              alt={exp.company}
              className="experience-image"
            />
            <div className="experience-details">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;