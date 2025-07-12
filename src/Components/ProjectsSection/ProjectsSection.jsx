import { useInView } from 'react-intersection-observer';
import './ProjectsSection.css';
import {motion} from 'framer-motion';
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import Title from "../Title/Title.jsx";

export default function ProjectsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
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
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="projects-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="projects-card-image">
                        <img src="../../../public/HotelBookingImg.jpg" alt="project-card" />
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Hotel Booking</h2>
                        <div className="card-body">
                            <div className="card-description-container">
                                <p className="card-description">
                                    MVC Project with CRUD operations and external API calls with HTTP Client;
                                </p>
                            </div>
                            <div className="button-area">
                                <a className="projects-card-button" href="https://github.com/lyubomir2712/Hotel_Booking">View Code</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="projects-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    <div className="projects-card-image">
                        <img src="../../../public/StockApiImg.webp" alt="project-card" />
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Stock Exchange</h2>
                        <div className="card-body">
                            <div className="card-description-container">
                                <p className="card-description">
                                    Group Project in .NET where four API's work together through a Gateway. The business logic is implemented through a custom ORM technology.
                                </p>
                            </div>
                            <div className="button-area">
                                <a className="projects-card-button" href="https://github.com/MrArthur0507/StockAPI">View Code</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="projects-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                    <div className="projects-card-image">
                        <img src="../../../public/CarWashImg.jpeg" alt="project-card" />
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">GTR Car Wash</h2>
                        <div className="card-body">
                            <div className="card-description-container">
                                <p className="card-description">
                                    Full-Stack React/ASP.NET Web Application about a car wash with service.
                                </p>
                            </div>
                            <div className="button-area">
                                <a className="projects-card-button" href="">View Code</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="projects-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                >
                    <div className="projects-card-image">
                        <img src="../../../public/BoardGameImg.png" alt="project-card" />
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Board Game</h2>
                        <div className="card-body">
                            <div className="card-description-container">
                                <p className="card-description">
                                    Quiz themed JavaScript board game featuring questions about english works: "Hamlet" and "The Lord of The Rings".
                                </p>
                            </div>
                            <div className="button-area">
                                <a className="projects-card-button" href="">Open App</a>
                                <a className="projects-card-button" href="https://github.com/lyubomir2712/English_Literature_Board_Game">View Code</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}