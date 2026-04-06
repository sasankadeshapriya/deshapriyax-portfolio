import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'Tools Web App',
      period: '2026',
      technologies: ['Laravel', 'MySQL', 'Tailwind CSS'],
      description: 'Developed an online platform with multiple web-based tools, allowing users to access utilities easily and fully customize the website through the admin dashboard.',
      imageUrl: '/tools_app.png',
      video: 'https://drive.google.com/file/d/1LLn20FwgIpSQ3Vxx0wksCv5FuUpK1vnD/view?usp=sharing'
    },
    {
      title: 'Classified Ads Web Application',
      period: '2026 – Present',
      technologies: ['Laravel/PHP', 'MySQL', 'Stripe/PayPal API'],
      description: 'Built an online platform for posting and browsing classified ads, with secure payment integration and full website customization through the admin dashboard',
      imageUrl: '/classified.png'
    },
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
    <>
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
                <div
                  className="h-48 overflow-hidden cursor-pointer relative group"
                  onClick={() => setSelectedImage(project.imageUrl)}
                >
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} project thumbnail`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 font-medium text-sm shadow-lg">
                      <Eye size={18} />
                      <span>Preview</span>
                    </div>
                  </div>
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

      {/* Image Preview Modal */}
      {
        selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transform hover:rotate-90 transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close preview"
            >
              <X size={32} />
            </button>
            <div
              className="max-w-7xl w-full max-h-full cursor-default flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Project Preview"
                className="rounded-lg shadow-2xl max-w-full max-h-[95vh] object-contain ring-1 ring-white/20 animate-fade-in"
              />
            </div>
          </div>
        )
      }
    </>
  );
};

export default Projects;
