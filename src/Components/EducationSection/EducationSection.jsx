import { motion } from "framer-motion";
import "./EducationSection.css"
import Card from "../Card/Card.jsx";
import SvgEducation from "./SvgEducation.jsx";
import Title from "../Title/Title.jsx";
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import EducationBackgroundSvg from "./EducationBackgroundSvg.jsx";
export default function EducationSection() {
    return (
        <section className="education-section">
            <DivisionLine />
            <br/> <br/>

            <Title title={"Education"}/>

            <EducationBackgroundSvg />

            <div className="education-main">
                <motion.div
                    className="education-cell-one"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    <SvgEducation/>
                </motion.div>
                <motion.div
                    className="education-cell-two"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.75 }}
                >
                    <Card date={"09/2022 - 01/2026"} title={"Software Engineering/Bachelor"} text={"University of Veliko Tarnovo"}/>
                </motion.div>
            </div>
        </section>
    )
}