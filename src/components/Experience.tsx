import React from 'react';
import SectionHeading from './SectionHeading';

interface Experience {
  title: string;
  company: string;
  project?: string;
  period: string;
  location?: string;
  description: string | string[];
  technologies?: string[];
  link?: {
    text: string;
    url: string;
  };
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Laravel Engineer Intern',
      company: 'iLabs PVT',
      project: 'Cloud of Goods',
      period: 'Jul 2025 – Jan 2026',
      location: 'Colombo, Sri Lanka · On-site',
      technologies: ['Laravel', 'PHP', 'JavaScript (jQuery, Ajax)', 'Redis', 'MySQL', 'Bootstrap', 'Go Lang (Microservices)', 'GitLab', 'Jira'],
      description: [
        'Developed and maintained a live, high-performing web application generating revenue for the company.',
        'Implemented Laravel features such as caching, queues, scheduled tasks, and security optimizations for enterprise-level performance.',
        'Ensured code quality with PSR-12 standards, clean architecture, and PHP Unit testing.',
        'Optimized system performance and applied security best practices for a scalable, production-ready platform.',
        'Collaborated effectively in a pod-based team structure, enhancing teamwork, communication, and project delivery.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and work experience"
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                <p className="text-lg font-medium text-gray-800 mt-1">{exp.company}</p>
                {exp.project && (
                  <p className="text-gray-700 font-medium mt-1">Project: <span className="text-gray-900">{exp.project}</span></p>
                )}
                <div className="mt-3 space-y-1">
                  <p className="text-gray-600 flex items-center text-sm">
                    <span className="font-semibold">{exp.period}</span>
                  </p>
                  {exp.location && (
                    <p className="text-gray-500 text-sm italic">{exp.location}</p>
                  )}
                </div>
                {exp.link && (
                  <a
                    href={exp.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-medium text-black border-b border-black hover:pb-1 transition-all"
                  >
                    {exp.link.text}
                  </a>
                )}
              </div>

              <div className="md:w-2/3">
                {Array.isArray(exp.description) ? (
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {exp.technologies && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 border border-gray-200 text-[11px] font-bold uppercase tracking-wider rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;