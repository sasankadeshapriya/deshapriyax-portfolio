import React from 'react';
import SectionHeading from './SectionHeading';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Backend',
      skills: ['Laravel', 'PHP', 'Go', 'RESTful APIs', 'MVC Architecture']
    },
    {
      name: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'AJAX']
    },
    {
      name: 'Databases & Caching',
      skills: ['MySQL', 'MongoDB', 'Redis']
    },
    {
      name: 'Tools & Workflow',
      skills: ['Git', 'GitLab', 'Jira', 'Postman']
    },
    {
      name: 'Testing & Standards',
      skills: ['PHPUnit', 'PSR-12 Coding Standards']
    },
    {
      name: 'Development Practices',
      skills: ['Agile']
    },
    {
      name: 'Soft Skills',
      skills: ['Team Collaboration', 'Communication', 'Problem-Solving', 'Debugging', 'Fast Learner', 'SEO']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Core Skills"
          subtitle="My professional toolkit and areas of expertise"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;