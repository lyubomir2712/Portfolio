import './ProjectsSection.css'

export default function ProjectsSection() {
    return (
        <section id="projects-section" className="projects-section">
            <h2 className="projects-title">Projects</h2>

            <div className="projects-container">
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/HotelBookingImg.jpg" alt="project-card"/>
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Hotel Booking</h2>
                        <div className="card-body">
                            <div className="card-description-container">
                                <p className="card-description">
                                    MVC Project with CRUD operations and external API calls with HTTP Client;
                                </p>
                            </div>
                        <div className="button-area">
                            <a href="">Open App</a>
                            <a href="">View Code</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/StockApiImg.webp" alt="project-card"/>
                    </div>
                    <div className="projects-card-content">
                        <h2 className="card-title">Stock Exchange</h2>
                        <div className="card-body">
                            <div className="card-description-container">

                            <p className="card-description">
                            Group Project in .NET where four API's work together through a Gateway. The business logic is implemented through a custom ORM technology.
                        </p>
                            </div>
                        <div className="button-area">
                            <a href="">Open App</a>
                            <a href="">View Code</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/CarWashImg.jpeg" alt="project-card"/>
                    </div>
                        <div className="projects-card-content">
                            <h2 className="card-title">GTR Car Wash</h2>
                                <div className="card-body">
                                    <div className="card-description-container">
                                        <p className="card-description">
                                            Full-Stack React/ASP.NET Web Application about a car wash with service and self service.
                                        </p>
                                    </div>

                                <div className="button-area">
                                    <a href="">Open App</a>
                                    <a href="">View Code</a>
                                </div>
                            </div>
                        </div>

                </div>
                <div className="projects-card">
                    <div className="projects-card-image">
                        <img src="../../../public/BoardGameImg.png" alt="project-card"/>
                    </div>
                        <div className="projects-card-content">
                            <h2 className="card-title">Board Game</h2>
                            <div className="card-body">
                                <div className="card-description-container">
                                    <p className="card-description">
                                        Quiz themed JavaScript board game featuring questions about english works: "Hamlet" and "The Lord of The Rings".
                                    </p>
                                </div>

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