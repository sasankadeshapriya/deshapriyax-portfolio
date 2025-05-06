import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center py-16 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dimuthu Sasanka Deshapriya
            </h1>
            <div className="w-20 h-1 bg-black mb-6 mx-auto md:mx-0"></div>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Full-Stack Developer</h2>
            <p className="text-gray-700 mb-10 max-w-xl mx-auto md:mx-0">
              Creating elegant, efficient, and user-focused web applications with modern technologies.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button href="/cv.pdf" download>
                View CV
              </Button>
              <Button 
                variant="secondary" 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-full overflow-hidden w-60 h-60 md:w-80 md:h-80 border-4 border-black shadow-lg">
              <img 
                src="/avatar.png" 
                alt="Dimuthu Sasanka Deshapriya" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;