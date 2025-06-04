import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: 'fa-discord',
      url: '#',
      color: 'bg-indigo-600 hover:bg-indigo-700',
    },
    {
      name: 'Spotify',
      icon: 'fa-spotify',
      url: '#',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'NameMC',
      icon: 'fa-cube',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'GitHub',
      icon: 'fa-github',
      url: '#',
      color: 'bg-gray-700 hover:bg-gray-800',
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link.color} p-4 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 hover:shadow-glow group`}
            data-aos="fade-up"
            data-aos-delay={100 * index}
          >
            <i className={`fab ${link.icon} text-3xl mb-2 group-hover:animate-bounce`}></i>
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
      
      {/* Mobile Quick Links */}
      <div className="mt-8 flex justify-center md:hidden">
        {socialLinks.map((link) => (
          <a
            key={`mobile-${link.name}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-3xl hover:text-blue-400 transition-colors"
          >
            <i className={`fab ${link.icon}`}></i>
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
