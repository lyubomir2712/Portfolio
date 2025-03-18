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
                    <a href={"https://github.com/lyubomir2712"}><i className="bi bi-github icon"></i></a>
                    <a href={"https://www.linkedin.com/in/lyubomir-georgiev-ab9116248/"}><i className="bi bi-linkedin icon"></i></a>
                </div>
                <a className={"cv-downloader"} href="LyubomirGeorgievGeorgievResume.pdf" download="LyubomirGeorgievResume.pdf">Download CV</a>
            </article>
            <article className={"tech-stack-article"}>
                <h3 className={"tech-stack"}>Tech Stack:</h3>
                <Typewriter />
            </article>
            </section>
    )
}

