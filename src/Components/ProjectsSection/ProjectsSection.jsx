import './ProjectsSection.css'

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">Projects</h2>

            <div className="projects-container">
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/testImage.jpeg" alt="project-card"/>
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Name</h2>
                        <p className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur aut consequatur
                        </p>

                        <div className="button-area">
                            <a href="">Open App</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/testImage.jpeg" alt="project-card"/>
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Name</h2>
                        <p className="card-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur aut consequatur
                        </p>

                        <div className="button-area">
                            <a href="">Open App</a>
                            <a href="">View Code</a>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/testImage.jpeg" alt="project-card"/>
                        <div className="projects-card-content">
                            <h2 className="card-title">Name</h2>
                            <p className="card-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur aut consequatur
                            </p>

                            <div className="button-area">
                                <a href="">Open App</a>
                                <a href="">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/testImage.jpeg" alt="project-card"/>
                        <div className="projects-card-content">
                            <h2 className="card-title">Name</h2>
                            <p className="card-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores aspernatur aut consequatur
                            </p>

                            <div className="button-area">
                                <a href="">Open App</a>
                                <a href="">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}