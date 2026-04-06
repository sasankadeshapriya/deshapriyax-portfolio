import React from 'react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my background, education, and expertise"
        />

        <div className="mt-12 flex flex-col space-y-12 text-center md:text-left">

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 inline-block">Who I Am</h3>
            <p className="text-gray-700 mb-4 leading-relaxed mx-auto md:mx-0">
              Motivated software engineer with industry experience in Laravel and PHP development. Skilled in building scalable and secure web applications, with hands-on expertise in performance optimization, caching, queue systems, and scheduling.
            </p>
            <p className="text-gray-700 leading-relaxed mx-auto md:mx-0">
              Proficient in MySQL, MongoDB, and Redis, with a strong focus on clean code, PSR-12 standards, and PHPUnit testing. A collaborative team player eager to contribute to innovative software solutions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 inline-block">Education</h3>
            <div className="mx-auto md:mx-0">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                <h4 className="font-semibold text-gray-900">University of Ruhuna (Awaiting Final Results)</h4>
                <span className="text-sm font-medium text-gray-500 mt-1 md:mt-0">Current</span>
              </div>
              <p className="text-gray-700">Bachelor of Information and Communication Technology (Honours)</p>
              <p className="text-gray-600 mt-1 text-sm bg-gray-100/50 inline-block px-2 py-1 rounded">Current GPA: 3.52/4.00</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 inline-block">Research</h3>
            <div className="mx-auto md:mx-0">
              <h4 className="font-medium text-gray-800 leading-relaxed text-sm">
                A Hybrid Machine Learning Model for Comprehensive Coconut Classification Using Image Processing and Vibration Analysis for CRIC 60 and CRIC 65 Varieties
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;