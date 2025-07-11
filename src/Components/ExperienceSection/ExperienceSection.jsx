import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Card from "../Card/Card.jsx";
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import Title from "../Title/Title.jsx";
import "./ExperienceSection.css";
import ExperienceBackgroundSvg from "./ExperienceBackgroundSvg.jsx";
import LaptopSvg from "./LaptopSvg.jsx";

export default function ExperienceSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id={"experience-section"} className="experience-section" ref={ref}>
            <ExperienceBackgroundSvg/>
                <DivisionLine />
            <br/><br/>
            <Title title={"Experience"}/>
            <br/><br/>
            <div className="experience-section-container">
                <motion.div className="experience-section-cell1"
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 1.75 }}
                    >
                        <LaptopSvg/>
                </motion.div>

                <div className="experience-section-cell2">
                    <motion.div
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <Card date={"07/2022 - 07/2024"} title={"System and Network Administrator"} text={"\"Здраве Консорциум 2014\" ДЗЗД "} />
                    </motion.div>
                    <br/>
                    <motion.div
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Card date={"07/2024 - 01/2025"} title={"Full-Stack React .NET Developer"} text={"St. Cyril and St. Methodius University of Veliko Tarnovo\n"}/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}