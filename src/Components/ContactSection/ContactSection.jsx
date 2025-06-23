import './ContactSection.css'

export default function ContactSection() {
    return (
        <section id="contact-section" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <div className="contact-container">
                <div className="contact-cell1">
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
                    {/*<button className="contact-btn" type="submit">Send</button>*/}
                    <button
                        className="flex mt-5 mx-auto ml-auto items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                        role="button"><span className="flex items-center gap-1">Send Message<svg stroke="currentColor"
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
                </div>

                <div className="contacts-container">
                    <p className="text-sm md:text-xl flex items-center gap-3">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                             className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="36" width="36" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                        </svg>
                        <span>lyubomirgeorgiev2712@gmail.com</span></p>

                    <p className="text-sm md:text-xl flex items-center gap-3">
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
                        <span>Sofia, Bulgaria</span></p>

                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10"><a target="_blank"
                                                                                        href="https://github.com/0xopsdev">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                             className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
                        </svg>
                    </a><a target="_blank" href="https://t.me/its0xopsdev">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512"
                             className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                        </svg>
                    </a><a target="_blank" href="https://x.com/0xopsdev">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                             className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                             height="48" width="48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                    </a></div>

                    <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">CONTACT</span>
                </div>
            </div>
        </section>
    )
}