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
    <div className="min-h-[300px] p-6 items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        
        {profiles.map((profile) => (
          <div 
            key={profile.id}
            className="text-secondary shadow-default-card unselectable bg-primary items-start flex justify-center 2xl:text-xl rounded-2xl px-4 lg:px-6 py-6 h-auto hover:shadow-lg transition-all duration-300 hover:scale-105 lg:min-w-[300px]"
          >
            <div className="w-full py-5 px-3 flex flex-col justify-center h-full">
              
              <div className="space-y-3 sm:space-y-4">
                {/* Nome */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-1 leading-tight">
                    {profile.name}
                  </h2>
                </div>
                
                {/* Email */}
                <div className="flex items-center space-x-3 group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-md md:text-secondary hover:underline break-all transition-all duration-200 hover:text-white/90"
                    aria-label={`Invia email a ${profile.name}`}
                  >
                    {profile.email}
                  </a>
                </div>
                
                {/* GitHub */}
                <div className="flex items-center space-x-3 group">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <a 
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md md:text-secondary hover:underline break-all transition-all duration-200 hover:text-white/90 flex items-center space-x-1"
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