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
                <div className={"education-cell-one"}>
                    <SvgEducation/>
                </div>
                <div className={"education-cell-two"}>
                    <Card date={"09/2022 - 01/2026"} title={"Software Engineering/Bachelor"} text={"University of Veliko Tarnovo"}/>
                </div>
            </div>
        </section>
    )
}