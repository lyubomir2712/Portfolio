import './IntroductionSection.css'

export default function IntroductionSection() {
    return (
        <section className={"introduction-section"}>
            <article className={"introduction-article"}>
                <h3 className={"introduction"}>Hi, I'm Lyubo</h3>
                <p className={"introduction-description"}>I'm a <span>full-stack developer</span> from Veliko Tarnovo,<br/>Bulgaria.</p>
                <div className={"introduction-socials"}>
                    <a href={"#"}>GitHub</a>
                    <a href={"#"}>LinkedIn</a>
                </div>
                <a className={"cv-downloader"} href="" download="LyubomirGeorgievCV.pdf">Download CV</a>
            </article>
            <article className={"tech-stack-article"}>
                <h3 className={"tech-stack"}>Tech Stack:</h3>
            </article>
        </section>
    )
}