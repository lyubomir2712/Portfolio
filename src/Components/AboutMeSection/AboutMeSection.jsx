import "./AboutMeSection.css"

export default function AboutMeSection() {
    return (
        <section className="about-me-section ">
            <h1 className="about-me-header text-2xl mb-4 text-[#16F2B3] text-left">WHO I AM?</h1>
            <div className="about-me-container grid grid-cols-1 md:grid-cols-2 gap-4 ">

                <div className="about-me-container text-left text-lg">
                    I am a 21-year-old junior fullstack engineer with expertise in React and .NET, currently in my third year of a Software Engineering degree at the University of Veliko Tarnovo. With two years of experience as a system administrator, I have transitioned over the past few months into software engineering, where I work as a junior fullstack engineer. I am highly proficient in version control systems, Agile methodologies, and CI/CD pipelines. My experience extends to real-world projects, where I’ve developed a strong understanding of software craftsmanship. Additionally, I possess solid knowledge in object-oriented programming (OOP), design patterns, as well as data structures and algorithms. I am always eager to embrace new challenges and opportunities that allow me to grow and contribute to innovative projects.
                </div>

                <div className="about-me-cell2 about-me-profile grid [grid-template-columns:3fr_1fr]   justify-items-end">
                    <img
                        className="profile-img w-75 h-auto rounded-lg grayscale hover:grayscale-0 hover:scale-105 transition duration-700 ease-in-out"
                        src="src/assets/profile.jpeg" alt="profile"/>

                    <span
                        className="bg-[#1a1443] w-38 h-10 inline-block text-white rotate-90 mt-14 p-2 px-3 text-xl rounded-md">
                        ABOUT ME
                    </span>
                </div>

            </div>


        </section>
    )
}