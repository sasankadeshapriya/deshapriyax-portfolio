import React from 'react';
import SectionHeading from './SectionHeading';

interface SkillCategory {
  name: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Front-end',
      skills: ['React.js', 'Bootstrap', 'HTML5', 'CSS3']
    },
    {
      name: 'Back-end',
      skills: ['Node.js', 'Express.js', 'Laravel', 'RESTful APIs']
    },
    {
      name: 'Languages',
      skills: ['JavaScript (ES6+)', 'PHP', 'Java']
    },
    {
      name: 'Databases',
      skills: ['MySQL', 'MS SQL', 'Sequelize ORM']
    },
    {
      name: 'Version Control',
      skills: ['Git', 'GitHub']
    },
    {
      name: 'Tools',
      skills: ['Figma (UI/UX)', 'VS Code', 'Postman']
    },
    {
      name: 'Cloud Platforms & CMS',
      skills: ['Azure', 'cPanel', 'WordPress']
    },
    {
      name: 'Methodologies',
      skills: ['Agile', 'Scrum']
    },
    {
      name: 'Other Skills',
      skills: ['Debugging', 'Code Optimization', 'Team Collaboration', 'Problem-Solving', 'SEO']
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