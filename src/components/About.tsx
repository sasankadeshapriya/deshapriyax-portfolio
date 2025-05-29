import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and expertise"
        />
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed mx-auto md:mx-0 max-w-lg">
              I am a passionate full-stack developer and a final-year Information and Communication Technology student at the University of Ruhuna. I enjoy learning new technologies and continuously improving my skills.
            </p>
          </div>
          
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="mb-4 mx-auto md:mx-0 max-w-lg">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-1">
                <h4 className="font-semibold">University of Ruhuna</h4>
                <span className="text-sm text-gray-600">Current</span>
              </div>
              <p className="text-gray-700">B.Sc. in Information and Communication Technology</p>
              <p className="text-gray-600">CGPA: 3.52/4.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;