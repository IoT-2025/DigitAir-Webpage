import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

export default function ProfileCards() {

  const profiles = [
    {
      id: 1,
      name: "Andrea Andrenucci",
      email: "andrea.andrenucci@studenti.unisalento.it",
      github: "github.com/andrea-andrenucci",
      githubUrl: "https://github.com/andrea-andrenucci"
    },
    {
      id: 2,
      name: "Martina De Gaetanis", 
      email: "martina.degaetanis@studenti.unisalento.it",
      github: "github.com/MartinaDega",
      githubUrl: "https://github.com/MartinaDega"
    }
  ];

  return (
<div className="min-h-[300px] py-6 flex items-center justify-center">
  <div className="grid w-full max-w-6xl grid-cols-1 mx-auto gap-28 lg:grid-cols-2 justify-items-center">
    {profiles.map((profile) => (
      <div 
        key={profile.id}
        className="flex items-start justify-center min-h-[250px] h-auto px-4 py-6 transition-all duration-300 w-[410px] text-secondary shadow-default-card unselectable bg-primary 2xl:text-xl rounded-2xl lg:px-6 hover:shadow-lg hover:scale-[1.01]"
      >
        <div className="flex flex-col justify-center w-full h-full px-3 py-5">
          <div className="space-y-3 sm:space-y-4">
            {/* Nome */}
            <div>
              <h2 className="mb-1 text-xl font-bold leading-tight sm:text-2xl">
                {profile.name}
              </h2>
            </div>
            
            {/* Email */}
            <div className="flex items-center space-x-3 group">
              <Mail className="flex-shrink-0 w-4 h-4 transition-opacity sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100" />
              <a 
                href={`mailto:${profile.email}`}
                className="break-all transition-all duration-200 text-md md:text-secondary hover:underline hover:text-white/90"
                aria-label={`Invia email a ${profile.name}`}
              >
                {profile.email}
              </a>
            </div>
            
            {/* GitHub */}
            <div className="flex items-center space-x-3 group">
              <Github className="flex-shrink-0 w-4 h-4 transition-opacity sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100" />
              <a 
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 break-all transition-all duration-200 text-md md:text-secondary hover:underline hover:text-white/90"
                aria-label={`Visita il profilo GitHub di ${profile.name}`}
              >
                <span>{profile.github}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}