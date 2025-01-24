import React from 'react';

export default function Skills() {
  const frontendSkills = ['React', 'JavaScript', 'HTML', 'CSS'];
  const backendSkills = ['Node.js', 'Express', 'MongoDB', 'MySQL'];
  const programmingLanguages = ['Python', 'C++', 'Java', 'C'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="categories">
        {/* Frontend */}
        <div className="category">
          <h3>Frontend</h3>
          <ul>
            {frontendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="category">
          <h3>Backend</h3>
          <ul>
            {backendSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Programming Languages */}
        <div className="category">
          <h3>Programming Languages</h3>
          <ul>
            {programmingLanguages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
