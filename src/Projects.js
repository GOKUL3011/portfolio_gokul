import React from 'react';


export default function Projects() {
  const projects = [
    { name: 'AUTOMATIC ATTENDANCE USING FACE RECOGNITION | Python connectivity with MYSQL ', description: 'Developed an attendance system using Python, OpenCV, and face_recognition library that automatically takes attendance by recognizing faces in HSC' },
    { name: 'HOUSE PRICE PREDICTION | Python using ML    ', description: 'Developed a machine learning model in Python to predict house prices using scikit-learn. This project demonstrates skills in data analysis, machine learning, and Python programming, providing valuable insights for real estate valuation. ' },
    { name : 'INSURANCE POLICY MANAGEMENT | Java connectivity with MYSQL' , description: 'Created an insurance policy management system using Java and MySQL. This project includes features for managing policyholder information, policy details, and claims processing. It demonstrates skills in Java programming, database connectivity, and CRUD operations.'}
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">    
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

