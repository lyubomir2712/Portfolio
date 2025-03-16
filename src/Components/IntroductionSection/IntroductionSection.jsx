import './IntroductionSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Typewriter from "./TypeWriter.jsx";

export default function IntroductionSection() {
    return (
        <section id="introduction-section" className={"introduction-section"}>
            <article className={"introduction-article"}>
                <h3 className={"introduction"}>Hi, I'm Lyubo</h3>
                <p className={"introduction-description"}>I am a <span>full-stack developer</span> from Veliko Tarnovo,<br/>Bulgaria.</p>
                <div className={"introduction-socials"}>
                    <a href={"#"}><i className="bi bi-github icon"></i></a>
                    <a href={"#"}><i className="bi bi-linkedin icon"></i></a>
                </div>
                <a className={"cv-downloader"} href="" download="LyubomirGeorgievCV.pdf">Download CV</a>
            </article>
            <article className={"tech-stack-article"}>
                <h3 className={"tech-stack"}>Tech Stack:</h3>
                <Typewriter />
                    <img src="https://readme-typing-svg.demolab.com/?lines=ASP.NET;C%23;SQL;JavaScript;React;TypeScript;HTML;CSS;Docker;Azure&font=Fira%20Code&center=true&width=400&height=100&color=6370e2&vCenter=true&pause=1000&size=50&weight=600" />
            </article>
            </section>
    )
}

