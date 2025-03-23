import './IntroductionSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Typewriter from "./TypeWriter.jsx";
import {motion} from 'framer-motion';

export default function IntroductionSection() {
    return (
        <section id="introduction-section" className={"introduction-section"}>
            <article className={"introduction-article"}>
                <motion.h3
                    className="introduction"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.75, ease: "easeOut" }}
                >
                    Hi, I'm Lyubo
                </motion.h3>

                <motion.p
                    className="introduction-description"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.75, ease: "easeOut"}}
                >
                    I am a <span>full-stack developer</span> from Veliko Tarnovo,<br />Bulgaria.
                </motion.p>

                <div className={"introduction-socials"}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                    >
                        <a href="https://github.com/lyubomir2712">
                            <i className="bi bi-github icon"></i>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
                    >
                        <a href="https://www.linkedin.com/in/lyubomir-georgiev-ab9116248/">
                            <i className="bi bi-linkedin icon"></i>
                        </a>
                    </motion.div>
                </div>
                    <motion.a
                        className="cv-downloader"
                        href="LyubomirGeorgievGeorgievResume.pdf"
                        download="LyubomirGeorgievResume.pdf"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    >
                        Download CV
                    </motion.a>
            </article>

            <article className="tech-stack-article">
                    <motion.h3
                        className="tech-stack"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.75, ease: "easeOut" }}
                    >
                        Tech Stack:
                    </motion.h3>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.75, ease: "easeOut"}}
                    >

                        <Typewriter />
                    </motion.div>
                </article>
            </section>
    )
}

