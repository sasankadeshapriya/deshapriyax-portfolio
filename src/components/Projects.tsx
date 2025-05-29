import React from 'react';
import SectionHeading from './SectionHeading';

interface Project {
  title: string;
  period: string;
  technologies: string[];
  description: string;
  imageUrl: string;
  github?: string;
  website?: string;
  video?: string;          
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Forex Institute Course Platform',
      period: '2025',
      technologies: ['Laravel', 'PHP', 'Tailwind', 'HTML5', 'CSS3'],
      description: 'Developed a platform for a Forex Institute allowing users to browse, purchase, and complete courses, while providing admins tools to manage content and payments.',
      imageUrl: '/2.png',
      website: 'https://thecrtcrew.com',
      github: 'https://github.com/sasankadeshapriya/forex-institute'
    },
    {
      title: 'Order Processing System',
      period: '2024',
      technologies: ['Flutter/Dart', 'Laravel', 'Bootstrap', 'Node.js', 'Express.js'],
      description: 'Developed a system with three components: a mobile app for delivery boys to track stores, generate bills, and manage stock; a Laravel web dashboard for admins to assign products, manage orders, and track stock; and a Node.js API for data exchange.',
      imageUrl: '/3.png',
      github: 'https://github.com/sasankadeshapriya?tab=repositories&q=order-processing&type=&language=&sort=',
      video: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7221528048989343745?compact=1'
    },
    {
      title: 'Management Information System',
      period: '2023',
      technologies: ['Java Swing', 'MySQL'],
      description: 'Developed a University Management Information System using Java Swing and MySQL to manage student, course, and faculty data.',
      imageUrl: '/4.png',
      github: 'https://github.com/sasankadeshapriya/tecmis',
      video: 'https://youtu.be/Gtv_FFkblIQ'
    },
    {
      title: 'Micro Job Site',
      period: 'May 2025 – Present',
      technologies: ['Laravel', 'PHP', 'React.js', 'MySQL', 'Stripe/PayPal API'],
      description: 'Developing an online platform for users to post and complete microservices like data entry and content writing, with integrated payment gateways and an admin dashboard for management.',
      imageUrl: '/1.png',
      github: 'https://github.com/sasankadeshapriya/minimoola-micro-jobs-webapp'
    },
    {
      title: 'PrimeHome.lk',
      period: '2023',
      technologies: ['WordPress', 'WooCommerce'],
      description: 'Set up a WordPress WooCommerce store, customized the theme, SEO, optimized, and added custom features for a smooth user experience.',
      imageUrl: '/5.png',
      website: 'https://primehome.lk/'
    },
    {
      title: 'Doctor Appointment Management System',
      period: '2025',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
      description: 'Developed a system using React.js, Node.js, and MySQL for managing doctor appointments and patient data.',
      imageUrl: '/6.png',
      github: 'https://github.com/sasankadeshapriya/hospital-management-system'
    },
    {
      title: 'TechItem.lk',
      period: '2024',
      technologies: ['WordPress', 'WooCommerce'],
      description: 'Set up a WordPress WooCommerce store, customized the theme, and fixed bugs for improved functionality.',
      imageUrl: '/7.png',
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
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={`${project.title} project thumbnail`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
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
                
                <p className="text-gray-700 mb-4 text-sm flex-grow">{project.description}</p>
                
                <div className="flex gap-4 mt-auto flex-wrap">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.website && (
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Website
                    </a>
                  )}
                  {project.video && (
                    <a 
                      href={project.video} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
