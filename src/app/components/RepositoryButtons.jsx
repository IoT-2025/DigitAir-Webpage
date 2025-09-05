import { IoLogoGithub } from "react-icons/io5";

const RepositoryButtons = () => {

    const repositories = [
        {
            id: 1,
            name: "Frontend",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-Frontend-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 2,
            name: "Gateway",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-Gateway-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 3,
            name: "User Service",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-UserService-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 4,
            name: "Notification",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-Notification-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 5,
            name: "Smartbox",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-Smartbox-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 6,
            name: "Device Indexer",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-DeviceIndexer-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 7,
            name: "Data Processor",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-DeviceDataProcessor-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 8,
            name: "Client MQTT",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-MqttClient-AndreaAndrenucci-MartinaDeGaetanis"
        },
        {
            id: 9,
            name: "AI Health Models",
            url: "https://github.com/UniSalento-IDALab-IoTCourse-2024-2025/wot-project-ModelloHealth-AndreaAndrenucci-MartinaDeGaetanis"
        }
    ];

    return (
        <div className="w-full mb-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-secondary mb-2">
                        Repository GitHub
                    </h2>
                    <p className="text-secondary/70">
                        Esplora le componenti del nostro progetto open source
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3">
                    {repositories.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 group flex items-center px-4 py-2 bg-primary rounded-lg hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-lg"
                        >
                            <IoLogoGithub className="w-4 h-4 text-secondary group-hover:text-primary mr-2 transition-colors duration-300" />
                            <span className="text-md font-medium text-secondary group-hover:text-primary transition-colors duration-300">
                                {repo.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RepositoryButtons;