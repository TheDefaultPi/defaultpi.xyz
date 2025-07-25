import React from 'react';

const SocialLinks = () => {
  const links = [
    {
      name: 'Discord',
      url: 'https://discord.com/users/defaultpi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TheDefaultPi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/user/31hyvtutxb75y6jekjnmy2hibxzm',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      ),
    },
    {
      name: 'NameMC',
      url: 'https://namemc.com/profile/shylr',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h2v2h2V2h2v2h2V2h2v2h2V2h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H6v-2H4v2H2v-2h2v-2H2v-2h2v-2H2v-2h2v-2H2v-2h2V6H2V4h2V2zm2 4v2h2V6H6zm2 2v2h2V8H8zm2-2v2h2V6h-2zm2 2v2h2V8h-2zm2-2v2h2V6h-2zm2 2v2h2V8h-2zM4 8v2h2V8H4zm0 4v2h2v-2H4zm2 2v2h2v-2H6zm2 2v2h2v-2H8zm2 2v2h2v-2h-2zm2 0h2v-2h-2v2zm2-2h2v-2h-2v2zm2-2h2v-2h-2v2zm-6-2v2h2v-2h-2zm-2 0v2h2v-2H8zm-2-2v2h2v-2H6zm12 0v2h2v-2h-2z" />
        </svg>
      ),
    }
  ];

   name: 'NameMC',
      url: 'https://namemc.com/profile/defaultpi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2h2v2h2V2h2v2h2V2h2v2h2V2h2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H6v-2H4v2H2v-2h2v-2H2v-2h2v-2H2v-2h2v-2H2v-2h2V6H2V4h2V2zm2 4v2h2V6H6zm2 2v2h2V8H8zm2-2v2h2V6h-2zm2 2v2h2V8h-2zm2-2v2h2V6h-2zm2 2v2h2V8h-2zM4 8v2h2V8H4zm0 4v2h2v-2H4zm2 2v2h2v-2H6zm2 2v2h2v-2H8zm2 2v2h2v-2h-2zm2 0h2v-2h-2v2zm2-2h2v-2h-2v2zm2-2h2v-2h-2v2zm-6-2v2h2v-2h-2zm-2 0v2h2v-2H8zm-2-2v2h2v-2H6zm12 0v2h2v-2h-2z" />
        </svg>
      ),
    }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg p-8 shadow-2xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gray-700 rounded-full text-blue-400 hover:text-yellow-400 transition-colors duration-300">
                <div className="flex items-center justify-center w-10 h-10">{link.icon}</div>
              </div>
              <span className="mt-3 text-base font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
