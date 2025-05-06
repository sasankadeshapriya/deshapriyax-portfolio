import React from 'react';
import SectionHeading from './SectionHeading';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Fiverr',
      period: '2023 – Present',
      description: 'Specializing in web development with modern technologies while maintaining excellent client relationships and project delivery.',
      link: {
        text: 'Fiverr Profile',
        url: 'https://www.fiverr.com/deshapriyad/'
      }
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey and work experience"
        />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-700">{exp.company}</p>
                <p className="text-gray-600 mt-1">{exp.period}</p>
                {exp.link && (
                  <a 
                    href={exp.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium hover:underline"
                  >
                    {exp.link.text}
                  </a>
                )}
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-700 max-w-lg mx-auto md:mx-0 text-center md:text-left">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;