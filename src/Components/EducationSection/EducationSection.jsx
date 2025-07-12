import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import "./EducationSection.css"
import Card from "../Card/Card.jsx";
import SvgEducation from "./SvgEducation.jsx";
import Title from "../Title/Title.jsx";
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import EducationBackgroundSvg from "./EducationBackgroundSvg.jsx";
export default function EducationSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section className="education-section" ref={ref}>
            <DivisionLine />
            <br/> <br/>

            <Title title={"Education"}/>

            <EducationBackgroundSvg />

            <div className="education-main">
                <motion.div
                    className="education-cell-one"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 1.75 }}
                >
                    <SvgEducation/>
                </motion.div>
                <motion.div
                    className="education-cell-two"
                    initial={{ opacity: 0, x: 60 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <Card date={"09/2022 - 01/2026"} title={"Software Engineering/Bachelor"} text={"University of Veliko Tarnovo"}/>
                </motion.div>
            </div>
        </section>
    )
}