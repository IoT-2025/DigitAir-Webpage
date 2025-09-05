
const navlinks = [
    {
        text: 'Presentazione',
        link: '/#about'
    },
    {
        text: 'Architettura',
        link: '/#architettura'
    },    
    {
        text: 'Hardware',
        link: '/#tecnologie'
    },
    {
        text: 'Funzionalità',
        link: '/#funzionalita'
    },
    {
        text: 'Team',
        link: '/#contacts'
    },
]

const contents = {
    about: `Il controllo della qualità dell’aria rappresenta una delle priorità ambientali più importanti del nostro tempo. Con l’intensificarsi dell’urbanizzazione, dell’industrializzazione e dei cambiamenti climatici, il monitoraggio preciso e tempestivo degli inquinanti atmosferici è diventato fondamentale 
            per la tutela della salute pubblica e la sostenibilità ambientale.

            Nel contesto territoriale pugliese, il progetto "DigitAIR" è stato ideato per superare i limiti dei tradizionali sistemi di monitoraggio, grazie all’implementazione di tecnologie innovative come l’Internet of Things (IoT) e l’Intelligenza Artificiale (AI) con l'obiettivo di sviluppare una rete di controllo della qualità dell’aria ad alta densità, in grado di fornire dati accurati e tempestivi per supportare decisioni informate in materia di salute pubblica e politiche ambientali.`,

    architettura: `Il sistema adotta un’architettura modulare che assicura affidabilità e scalabilità, ripartendo le funzioni tra Edge Device, Frontend Web e Backend.
                    Sul lato backend è stata adottata un’architettura a microservizi che comunicano attraverso il protocollo AMQP implementato con RabbitMQ, così da favorire l’indipendenza dei componenti.
                    Il frontend segue un approccio a micro-frontend, separando la parte di presentazione del servizio dalla webapp principale, più complessa e con maggiori requisiti computazionali.
                    L’applicazione è predisposta a ricevere misure sia dai dispositivi singoli sia da nodi intermedi che aggregano dati da più sorgenti, al fine di ridurre il numero di handshakes nei messaggi scambiati tramite broker MQTT.
                    
                    Le principali componenti in cui si articola il sistema sono:`,
    
    tecnologie: ` Al centro del sistema ci sono le Smartbox, dispositivi intelligenti costruiti attorno al microcontrollore ESP32 DevKit-C, che rappresentano i sensori distribuiti sul territorio per rilevare gli inquinanti atmosferici.
                
                Questi dispositivi sono progettati per funzionare in modo autonomo e intelligente: ogni Smartbox è dotata di connettività Wi-Fi integrata e può essere configurata facilmente dagli utenti attraverso un web server incorporato, accessibile semplicemente collegandosi all'indirizzo IP del dispositivo tramite un normale browser web. Una volta configurate, le Smartbox operano secondo un ciclo regolare, pubblicando automaticamente le misurazioni degli inquinanti ogni ora, precisamente al 50° minuto, utilizzando il protocollo MQTT.`,

    funzionalita: `Il sistema offre una serie di funzionalità avanzate per il monitoraggio della qualità dell'aria e visualizzazione dei dati accessibile a tutti. 
                    La piattaforma, caratterizzata da un’interfaccia user-friendly, offre strumenti di visualizzazione intuitivi, mappe interattive per ogni inquinante e funzionalità di analisi storica dei dati, rendendo le informazioni ambientali comprensibili e utilizzabili anche da utenti non specializzati. Particolare attenzione è stata dedicata al settore accademico e alla pubblica amministrazione: per gli studenti universitari, i ricercatori e gli enti pubblici non solo è garantito l’accesso gratuito dei dati raccolti consultando le mappe, ma anche l’utilizzo di funzionalità avanzate di simulazione. Queste includono modelli predittivi per valutare l’impatto attuale e futuro dell’inquinamento sulla salute e strumenti per stimare la riduzione degli inquinanti in seguito ad interventi di forestazione urbana.`,
}


export {
    navlinks,
    contents
}