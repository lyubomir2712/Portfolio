import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';
import {motion} from 'framer-motion';
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import Title from "../Title/Title.jsx";
import {useState} from "react";

const projectsData = [
    {
        img: "src/assets/HotelBookingImg.jpg",
        title: "Hotel Booking",
        description: "MVC Project with CRUD operations and external API calls with HTTP Client;",
        codeLink: "https://github.com/lyubomir2712/Hotel_Booking",
        openLink: null,
        delay: 0.2
    },
    {
        img: "src/assets/StockApiImg.webp",
        title: "Stock Exchange",
        description: "Group Project in .NET where four API's work together through a Gateway. The business logic is implemented through a custom ORM technology.",
        codeLink: "https://github.com/MrArthur0507/StockAPI",
        openLink: null,
        delay: 0.4
    },
    {
        img: "src/assets/CarWashImg.jpeg",
        title: "GTR Car Wash",
        description: "Full‑Stack React/ASP.NET Web Application about a car wash with service.",
        codeLink: " ",
        openLink: null,
        delay: 0.6
    },
    {
        img: "src/assets/BoardGameImg.png",
        title: "Board Game",
        description: "Quiz themed JavaScript board game featuring questions about english works: \"Hamlet\" and \"The Lord of The Rings\".",
        codeLink: "https://github.com/lyubomir2712/English_Literature_Board_Game",
        openLink: " ",
        delay: 0.8
    }
];

export default function ProjectsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredCard, setHoveredCard] = useState(null);


    return (
        <section id="projects-section" className="projects-section" ref={ref}>

            <br/><br/>

            <DivisionLine/>

            <Title title={"Projects"}/>

            <br/><br/>

            <motion.div
                className="projects-container"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, ease: "easeOut" }}>

                {projectsData.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="projects-card relative bg-[#1a1d35] rounded-[0.5rem] h-[27rem] w-[13.8rem] flex flex-col overflow-hidden transform origin-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 1, ease: "easeOut", delay: project.delay }}
                        onHoverStart={() => setHoveredCard(idx)}
                        onHoverEnd={() => setHoveredCard(null)}
                    >
                        <div className="projects-card-image">
                            <motion.img
                                src={project.img}
                                alt={`${project.title} card`}
                                animate={{ scale: hoveredCard === idx ? 1.1 : 1 }}
                                transition={{ duration: 0.01 }}
                            />
                        </div>

                        <div className="projects-card-content">
                            <h2 className="card-title">{project.title}</h2>
                            <div className="card-body">
                                <div className="card-description-container">
                                    <p className="card-description">{project.description}</p>
                                </div>

                                <div className="button-area">
                                    {project.openLink && (
                                        <a className="projects-card-button" href={project.openLink}>Open App</a>
                                    )}
                                    {project.codeLink && (
                                        <a className="projects-card-button" href={project.codeLink}>View Code</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}