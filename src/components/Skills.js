import React from 'react';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill">
          <FaJava size={50} className="icon" />
          <p>Java (Intermediate)</p>
        </div>
        <div className="skill">
          <FaPython size={50} className="icon" />
          <p>Python (Basics)</p>
        </div>
        <div className="skill">
          <FaHtml5 size={50} className="icon" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3Alt size={50} className="icon" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaReact size={50} className="icon" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaGitAlt size={50} className="icon" />
          <p>Git</p>
        </div>
      </div>
    </section>
  );
}

export default Skills; // This ensures that the component is exported as default.