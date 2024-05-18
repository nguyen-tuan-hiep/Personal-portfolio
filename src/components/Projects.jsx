import React from 'react';

const projects = [
  { title: 'Computer Store Database Management', description: 'Richard was hired to create a corporate identity. We were very pleased with the work...', icon: 'fas fa-database' },
  { title: 'Detect Obesity Levels using ML Models', description: 'Richard was hired to create a corporate identity. We were very pleased with the work...', icon: 'fas fa-brain' },
];

const Projects = () => (
  <section className="ml-72 p-8">
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <i className={`${project.icon} text-primary text-3xl mb-4`}></i>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
