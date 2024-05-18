import React from 'react';

const services = [
  { title: 'Web Design', description: 'The most modern and high-quality design made at a professional level.', icon: 'fas fa-paint-brush' },
  { title: 'Web Development', description: 'High-quality development of sites at the professional level.', icon: 'fas fa-code' },
  { title: 'Mobile Apps', description: 'Professional development of applications for iOS and Android.', icon: 'fas fa-mobile-alt' },
  { title: 'Photography', description: 'I make high-quality photos of any category at a professional level.', icon: 'fas fa-camera' },
];

const Services = () => (
  <section className="ml-80 p-8">
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8">What I'm Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="bg-cardBg p-6 rounded-lg shadow-lg">
            <i className={`${service.icon} text-primary text-3xl mb-4`}></i>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
