import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HomePage.css"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png"
import ProjectCard from "../components/ProjectCard";
import { projectsList } from "../data/projectsList";
import { Link } from "react-router-dom";
import CV from "../assets/CVENPN.pdf"






function HomePage() {

    const projects = projectsList;

    return (


        <main className="sections">

            <section className="first">

                <section className="personal">

                    <div className="personal-description">

                        <div className="icon-box">

                            <a href="https://github.com/DLAwe7" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">

                                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />

                            </a>


                            {/* Intentionally commented out until the LinkedIn profile is ready to be public. */}
                            {/* <a href="https://www.linkedin.com/in/kevin-sanchez-dl7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">

                                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />

                            </a> */}

                        </div>

                        <div className="text-box">

                            <h1>Hi, my name is <strong className="blue">Kevin</strong></h1>

                            <h1>I'm a Front-End Developer</h1>

                        </div>

                    </div>

                    <div className="contact">

                        <a href={CV} className="download-button" download
                            aria-label="Download my Curriculum Vitae">

                            <span>Download CV</span>
                            <FontAwesomeIcon icon={faDownload} aria-hidden="true" />

                        </a>

                        <Link to="/contact" className="about-redirect" aria-label="Go to About/Contact page">

                            <span>Know more about me!</span>
                            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />

                        </Link>

                    </div>


                </section>

                <section className="image-container">

                    <img src={avatar} className="personal-image" alt="My Profile Image" aria-hidden="true" />

                </section>

            </section>

            <section className="second">

                <h2 className="second-title" id="projects-highlight">Projects Highlights</h2>

                <ul className="projects-list">

                    {projects.map(project => (

                        <ProjectCard key={project.id} project={project} />

                    ))}

                </ul>

                <div className="more-projects">

                    <Link to="/projects" className="more-projects-anchor">
                        <span>See more projects</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </Link>

                </div>


            </section>

        </main>







    )



}



export default HomePage;