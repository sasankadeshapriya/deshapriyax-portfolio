import React from 'react';
import SectionHeading from './SectionHeading';

interface Project {
  title: string;
  period: string;
  technologies: string[];
  description: string;
  github?: string;
  website?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Micro Job Site',
      period: 'April 2025 – Present',
      technologies: ['Laravel', 'PHP', 'React.js', 'MySQL', 'Stripe/PayPal API'],
      description: 'Developing an online platform for users to post and complete microservices like data entry and content writing, with integrated payment gateways and an admin dashboard for management.',
      github: 'https://github.com/sasankadeshapriya/minimoola-micro-jobs-webapp'
    },
    {
      title: 'Forex Institute Course Platform',
      period: '2025',
      technologies: ['Laravel', 'PHP', 'Tailwind', 'HTML5', 'CSS3'],
      description: 'Developed a platform for a Forex Institute allowing users to browse, purchase, and complete courses, while providing admins tools to manage content and payments.',
      website: 'https://thecrtcrew.com',
      github: 'https://github.com/sasankadeshapriya/forex-institute'
    },
    {
      title: 'Order Processing System',
      period: '2024',
      technologies: ['Flutter/Dart', 'Laravel', 'Bootstrap', 'Node.js', 'Express.js'],
      description: 'Developed a system with three components: a mobile app for delivery boys to track stores, generate bills, and manage stock; a Laravel web dashboard for admins to assign products, manage orders, and track stock; and a Node.js API for data exchange.',
      github: 'https://github.com/sasankadeshapriya?tab=repositories&q=order-processing&type=&language=&sort='
    },
    {
      title: 'Management Information System',
      period: '2023',
      technologies: ['Java Swing', 'MySQL'],
      description: 'Developed a University Management Information System using Java Swing and MySQL to manage student, course, and faculty data.',
      github: 'https://github.com/sasankadeshapriya/tecmis'
    },
    {
      title: 'PrimeHome.lk',
      period: '2023',
      technologies: ['WordPress', 'WooCommerce'],
      description: 'Set up a WordPress WooCommerce store, customized the theme, SEO, optimized, and added custom features for a smooth user experience.',
      website: 'https://primehome.lk/'
    },
    {
      title: 'Doctor Appointment Management System',
      period: '2022',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
      description: 'Developed a system using React.js, Node.js, and MySQL for managing doctor appointments and patient data.',
      github: 'https://github.com/sasankadeshapriya/hospital-management-system'
    },
    {
      title: 'TechItem.lk',
      period: '2022',
      technologies: ['WordPress', 'WooCommerce'],
      description: 'Set up a WordPress WooCommerce store, customized the theme, and fixed bugs for improved functionality.',
      website: 'https://techitem.lk/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work and ongoing projects"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-sm text-gray-600">{project.period}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
              
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;