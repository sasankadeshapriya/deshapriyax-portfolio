import React from 'react';
import { Github, Linkedin, Globe, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/sasankadeshapriya' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/dimuthu-deshapriya' },
    { icon: <Globe size={18} />, href: 'https://sasankadeshapriya.live' },
    { icon: <Mail size={18} />, href: 'mailto:deshapriyad.sasanka@gmail.com' },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">DIMUTHU.</h2>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dimuthu Sasanka Deshapriya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;