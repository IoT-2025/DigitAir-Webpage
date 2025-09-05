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
        <div className="relative w-full mt-20">
            <div className="mx-auto ">
                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-bold text-secondary">
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
                            className="relative z-10 flex items-center px-4 py-2 transition-all duration-300 rounded-lg shadow-sm group bg-primary hover:bg-secondary hover:shadow-lg"
                        >
                            <IoLogoGithub className="w-4 h-4 mr-2 transition-colors duration-300 text-secondary group-hover:text-primary" />
                            <span className="font-medium transition-colors duration-300 text-md text-secondary group-hover:text-primary">
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