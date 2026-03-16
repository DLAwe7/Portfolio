import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../assets/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactPage.css"





function ContactPage() {


    return (

        <main className="contact-main">

            <section className="contact-wrapper">

                <div className="contact-text-wrapper">

                    <h1 className="contact-h1-title">Welcome!</h1>

                    <div className="contact-text-container">

                        <p>
                            Hi, I'm <strong className="blue">Kevin Sanchez</strong>, a self-taught front-end developer focused on
                            building clean, responsive, and user-friendly interfaces.
                        </p>

                        <p>
                            My main stack includes <strong className="orange">HTML</strong>,
                            <strong className="blue"> CSS</strong>, <strong className="yellow">JavaScript</strong>, and <strong className="green">React</strong>.
                            I enjoy creating projects that combine clean design, reusable structure, and thoughtful user interaction.
                        </p>

                        <p>
                            Through larger personal projects, I've been strengthening my skills in component architecture, UI refinement, and front-end problem solving.
                        </p>

                    </div>

                    <div className="contact-text-container">



                        <p>
                            Recently, I've been deepening my <strong className="green">React</strong> skills while improving how I approach accessibility, component architecture, and overall UI quality.
                        </p>

                        <p>
                            I plan to expand into <strong className="yellow">TypeScript</strong> and <strong className="orange">Tailwind</strong> as part of my next step in front-end development.
                        </p>

                    </div>


                    <div className="contact-text-container">

                        <h2 className="pink">Feel free to reach out!</h2>

                        <ul className="contact-li-wrapper">

                            <li className="contact-li">


                                <a href="https://github.com/DLAwe7" target="_blank" rel="noopener noreferrer" className="contact-flex-wrapper">

                                    <FontAwesomeIcon icon={faGithub} className="blue" aria-hidden="true" />
                                    <span>Check-out my Github!</span>

                                </a>

                                <div className="contact-flex-wrapper">

                                    <FontAwesomeIcon icon={faPhone} className="green" aria-hidden="true" />
                                    <p>Phone available on request</p>

                                </div>



                            </li>

                            <li className="contact-li">

                                <div className="contact-flex-wrapper">

                                    <a href="mailto:kevinsanchez070@hotmail.com"
                                        aria-label="Send me an email to: kevinsanchez070@hotmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} className="green" aria-hidden="true" />
                                    </a>

                                    <p>kevinsanchez070@hotmail.com</p>

                                </div>




                            </li>


                        </ul>

                    </div>


                </div>


                <section className="contact-image-container">

                    <img src={Avatar} className="contact-img" alt="My Profile Image" />

                </section>

            </section>

        </main>


    );



}



export default ContactPage;