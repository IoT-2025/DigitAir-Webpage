"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const images = [
    {
      src: "SliderImages/registrazione.png",
      alt: "registrazione",
      caption: "Interfaccia di registrazione utente"
    },
    {
      src: "SliderImages/visualizzazione_mappa.png",
      alt: "mappa inquinanti",
      caption: "Interfaccia di visualizzazione dei dati ambientali su mappa"
    },
    {
      src: "SliderImages/simulazione_alberi.png",
      alt: "simulazione alberi",
      caption: "Simulazione della compensazione ambientale tramite alberi"
    },
    {
      src: "SliderImages/risultato_alberi.jpeg",
      alt: "risultato simulazione alberi",
      caption: "Risultato della precedente simulazione"
    },
    {
      src: "SliderImages/simulazione_health.png",
      alt: "simulazione health",
      caption: "Simulazione dell’impatto della qualità dell’aria sulla salute"
    },
    {
      src: "SliderImages/visualizzazione_grafici_inquinanti.png",
      alt: "grafici",
      caption: "Interfaccia di visualizzazione dei grafici"
    },
    {
      src: "SliderImages/admin_dashboard.png",
      alt: "Dashboard microservizi",
      caption: "Dashboard amministrativa (microservizi)"
    },
    {
      src: "SliderImages/admin_dashboard_2.png",
      alt: "Montagne",
      caption: "Gestione delle mail convenzionate"
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl p-4 mt-10">
      <div className="relative overflow-hidden bg-gray-900 shadow-2xl rounded-xl">
        
        <div className="relative aspect-[1800/928] w-full overflow-hidden">
          <img 
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="object-cover w-full h-full transition-all duration-500 ease-in-out"
          />
          
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <button 
          onClick={goToPrevious}
          className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 border rounded-full left-4 top-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-white/20 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={goToNext}
          className="absolute p-3 text-white transition-all duration-300 transform -translate-y-1/2 border rounded-full right-4 top-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-white/20 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75 hover:scale-110'
              }`}
            />
          ))}
        </div>

      </div>

      <div className="mt-4 text-center">
        <p className="mb-2 italic text-secondary">
          "{images[currentIndex].caption}"
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;