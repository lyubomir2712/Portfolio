import './ContactSection.css'
import GithubIcon from "./GithubIcon.jsx";
import LinkedInIcon from "./LinkedInIcon.jsx";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section id="contact-section" className="contact-section" ref={ref}>
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-container">
                <motion.div
                    className="contact-cell1"
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 1.75 }}
                >
                <form className="contact-form">
                    <div className="contact-form-content">

                        <div className="input-container">
                            <input className="username-input" type="text" placeholder=" "/>
                            <div className="label-line">Username *</div>
                        </div>

                        <div className="input-container">
                            <input className="email-input" type="email" placeholder=" "/>
                            <div className="label-line">Email *</div>
                        </div>

                        <div className="textarea-container">
                            <textarea className="message-input" placeholder=" "/>
                            <div className="label-line">Message *</div>
                        </div>

                    </div>
                    <button
                        className="flex mt-5 mx-auto ml-auto items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                        role="button"><span className="flex items-center gap-1 cursor-pointer">Send Message<svg stroke="currentColor"
                                                                                                 fill="none"
                                                                                                 strokeWidth="2"
                                                                                                 viewBox="0 0 24 24"
                                                                                                 strokeLinecap="round"
                                                                                                 strokeLinejoin="round"
                                                                                                 height="20" width="20"
                                                                                                 xmlns="http://www.w3.org/2000/svg"><path
                        stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path
                        d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path
                        d="M18 15l3 3l-3 3"></path></svg></span></button>
                </form>
                </motion.div>


                <div className="contacts-cell2" >
                    <div className="contacts-mini-title-container">
                        <motion.div
                            className="bg-[#1a1443] w-38 h-10 inline-block text-white rotate-90 p-2 px-3 text-xl rounded-md contacts-mini-title"
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                        >
                            CONTACTS
                        </motion.div>
                        <div className="flex flex-col gap-5">
                            <motion.a
                                href="https://www.linkedin.com/in/lyubomir-georgiev-ab9116248/"
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <i className="bi bi-linkedin"></i>
                            </motion.a>
                            <motion.a
                                href="https://github.com/lyubomir2712"
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <i className="bi bi-github"></i>
                            </motion.a>
                            <motion.a
                                href="https://x.com/0xGeorgiev"
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <i className="bi bi-twitter-x"></i>
                            </motion.a>
                        </div>
                    </div>
                    <div className="contacts-buttons-container pl-[45%] w-[100%] ">
                        <div className="email-location-container gap-5 flex flex-col">

                    <motion.p
                        className="text-sm md:text-xl flex items-center gap-3"
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                             className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                        </svg>
                        <span>lyubomirgeorgiev2712@gmail.com</span></motion.p>

                    <motion.p
                        className="text-sm md:text-xl flex items-center gap-3"
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                             className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                            <g id="Location_On">
                                <g>
                                    <path
                                        d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                                    <path
                                        d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                                </g>
                            </g>
                        </svg>
                        <span>Sofia, Bulgaria</span></motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}