"use client";

import React from 'react';

const CardGrid = () => {
  
  const cardData = [
    "Frontend\nL'interfaccia web permette agli utenti di visualizzare le mappe degli inquinanti sull'intero territorio pugliese o, a scelta, solo su Lecce. In base al ruolo, gli utenti possono eseguire simulazioni, mentre la gestione dell'applicazione è riservata esclusivamente all'Admin.",
    "Gateway\nI microservizi sono stati connessi al frontend utilizzando KrakenD, un gateway con configurazione basata su JSON.",
    "User Service\nIl microservizio User Service gestisce gli utenti del sistema, occupandosi di registrazione, autenticazione, gestione degli account e dei domini affiliati da parte dell’Admin. Utilizza token JWT per garantire un accesso sicuro alle risorse e interagisce con il Notification Service per l’invio di email.",
    "Notification\nIl microservizio gestisce l’invio delle email e comunica con il microservizio UserService tramite il protocollo AMQP, implementato con RabbitMQ.",
    "Smartbox\nLa Smartbox, basata su ESP32 DevKit-C, rileva inquinanti e invia al broker MQTT le misure al minuto 50 di ogni ora, destinate a un microservizio. Gestisce inoltre disconnessioni e malfunzionamenti tramite messaggi e API dedicate.",
    "Device Indexer\nIl microservizio Device Indexer mantiene il registro dei dispositivi, traccia lo stato di connessione, riceve e inoltra le misurazioni al Data Processor. Inoltre espone API per la gestione dei dispositivi e la loro disconnessione in caso di anomalie.",
    "Data Processor\nIl Data Processor si occupa direttamente del post processing dei dati, della generazione delle immagini e della gestione delle simulazioni. Esegue interpolazioni per generare mappe di distribuzione degli inquinanti e supporta simulazioni ambientali e sanitarie, fornendo inoltre API per l’accesso alle immagini e metriche.",
    "Client MQTT\nUn client Python simula l’invio concorrente di misurazioni da più dispositivi, generando dati realistici basati sulla distribuzione geografica delle province pugliesi.",
    ];

    const formatText = (text) => {
        const [title, ...content] = text.split('\n');

        return (
            <>
            <strong className="text-lg font-bold">{title}</strong>
            <br />
            {content.map((line, i) => (
                <span key={i}>
                {line}
                <br />
                </span>
            ))}
            </>
        );
    };

    return (
    <div className="container px-6 mx-auto mb-10 lg:pt-0 pt-32">
        <div className="grid grid-cols-1 grid-rows-2 gap-6 xl:pt-20 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
            <div 
            key={index}
            className={` shadow-default-card unselectable ${index<=3? 
                    index%2==0  ? 'bg-primary text-white':' bg-secondary text-primary' 
                    : 
                    index%2==0 ? 'bg-secondary text-primary' : 'bg-primary text-white'
                }  items-start flex justify-center 2xl:text-xl rounded-2xl px-4 lg:px-6 py-4 lg:py-2 h-[355px] 2xl:h-[350px]`}
            >
            <div className='pt-4 whitespace-pre-line'>
                {formatText(card || "Lorem ipsum dolor sit amet", index)}
            </div>
            </div>
        ))}
        </div>
    </div>
    );
};

export default CardGrid;