import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react';

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'deshapriyad.sasanka@gmail.com',
      link: 'mailto:deshapriyad.sasanka@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+94 76 175 1414',
      link: 'tel:+94761751414'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: '14/2 Balagolla, Maeliya, Kurunegala'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'sasankadeshapriya',
      link: 'https://github.com/sasankadeshapriya'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'dimuthu-deshapriya',
      link: 'https://www.linkedin.com/in/dimuthu-deshapriya'
    },
    {
      icon: <Globe size={20} />,
      label: 'Portfolio',
      value: 'sasankadeshapriya.live',
      link: 'https://sasankadeshapriya.live'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get in touch for collaborations, opportunities, or just to say hello"
        />
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out through any of the following contact methods.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-2 bg-black text-white rounded-full mr-4 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-700 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;