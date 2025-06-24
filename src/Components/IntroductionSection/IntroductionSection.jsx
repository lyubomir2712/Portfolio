import './IntroductionSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Typewriter from "./TypeWriter.jsx";
import {motion} from 'framer-motion';
import GreetingsCodeComponent from "./GreetingsCodeComponent.jsx";

export default function IntroductionSection() {
    return (
        <section id="introduction-section" className={"introduction-section"}>
            <article className={"introduction-article"}>
                <motion.h3
                    className="introduction"
                    initial={{opacity: 0, x: -30}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.75, ease: "easeOut"}}
                >
                    Hello 👋, this is <span className="name">Lyubomir</span>
                </motion.h3>

                <motion.p
                    className="introduction-description"
                    initial={{opacity: 0, x: -30}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.75, ease: "easeOut"}}
                >
                    I am a <span>full-stack developer</span> from Veliko Tarnovo,<br/>Bulgaria.
                </motion.p>

                <div className={"introduction-socials"}>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2, ease: "easeOut", delay: 0.2}}
                    >
                        <a href="https://www.linkedin.com/in/lyubomir-georgiev-ab9116248/">
                            <i className="bi bi-linkedin icon"></i>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.3, ease: "easeOut", delay: 0.4}}
                    >

                        <a href="https://github.com/lyubomir2712">
                            <i className="bi bi-github icon"></i>
                        </a>
                    </motion.div>
                </div>
                {/*<motion.a*/}
                {/*    className="cv-downloader"*/}
                {/*    href="LyubomirGeorgievGeorgievResume.pdf"*/}
                {/*    download="LyubomirGeorgievResume.pdf"*/}
                {/*    initial={{opacity: 0, y: 20}}*/}
                {/*    animate={{opacity: 1, y: 0}}*/}
                {/*    transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}*/}
                {/*>*/}
                {/*    Download CV*/}
                {/*</motion.a>*/}

                <div className="introduction-button-group flex-row justify-center items-center">
                <a className="w-50 block bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
                   href="#contact">
                    <button
                        className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                        <span>Contact me</span>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16"
                             width="16" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM20 17H24V19H20V17ZM17 12H24V14H17V12ZM19 7H24V9H19V7Z"></path>
                        </svg>
                    </button>
                </a>

                <a className="flex items-center w-48 h-15 gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                   role="button" target="_blank" href=""><span>Get Resume</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16"
                         width="16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
                    </svg>
                </a>
                </div>
            </article>

            <article className="tech-stack-article">
                {/*<motion.h3*/}
                {/*    className="tech-stack"*/}
                {/*    initial={{ opacity: 0, x: 30 }}*/}
                {/*    animate={{ opacity: 1, x: 0 }}*/}
                {/*    transition={{ duration: 1.75, ease: "easeOut" }}*/}
                {/*>*/}
                {/*    Tech Stack:*/}
                {/*</motion.h3>*/}

                <motion.div
                    initial={{opacity: 0, x: 30}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1.75, ease: "easeOut"}}
                >

                    {/*<Typewriter />*/}
                    <GreetingsCodeComponent/>
                </motion.div>
            </article>
            </section>
    )
}

