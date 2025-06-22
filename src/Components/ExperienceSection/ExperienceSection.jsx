import Card from "../Card/Card.jsx";
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import Title from "../Title/Title.jsx";
import LaptopHero from "./LaptopHero.jsx";
import "./ExperienceSection.css";
import ExperienceBackgroundSvg from "./ExperienceBackgroundSvg.jsx";

export default function ExperienceSection() {
    return (
        <section className="experience-section">
            <ExperienceBackgroundSvg/>
                <DivisionLine />
            <br/><br/>
            <Title title={"Experience"}/>
            <br/><br/>
            <div className="experience-section-container">
                <div className="experience-section-cell1">
                    <LaptopHero/>
                </div>

                <div className="experience-section-cell2">
                <Card date={"07/2022 - 07/2024"} title={"System and Network Administrator"} text={"\"Здраве Консорциум 2014\" ДЗЗД "} />
                    <br/>
                <Card date={"07/2024 - 01/2025"} title={"Full-Stack React .NET Developer"} text={"St. Cyril and St. Methodius University of Veliko Tarnovo\n"}/>
                </div>
            </div>
        </section>
    )
}