import { faChevronRight, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectDetailsPage.css"
import { projectsList } from "../data/projectsList";
import { useParams } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { iconMap } from "../data/icons";
import scrollToSection from "../helpers/scrollToSection";



function ProjectDetailsPage() {

    const isMobile = useMediaQuery("(max-width: 450px)");

    const { projectId } = useParams();

    const project = projectsList.find(item => item.id === projectId);

    if (!project) return <p>Project not found</p>;



    return (



        <main className="project-container">

            <article className="project-article">

                <div className="project-details-title">

                    <h1>{project.name}</h1>
                    {project.icon && iconMap[project.icon] && <FontAwesomeIcon icon={iconMap[project.icon]} aria-hidden="true" />}

                </div>

                <section className="project-video-wrapper">

                    <iframe src={project.embeddedVideo} title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen className="embedded-video">

                    </iframe>

                </section>

                <section className="project-tools">

                    <ul className="tools-used-wrapper">

                        {project.tools.toolsUsed.map((tool, index) => (

                            <li key={index} className={`${tool.color} tool-used`}>

                                <FontAwesomeIcon icon={iconMap[tool.icon]} aria-hidden="true" />
                                <span>{tool.name}</span>

                            </li>

                        ))}

                    </ul>

                    <a className="github-redirect" href={project.github} rel="noopener noreferrer" target="_blank">

                        <div className="github-project-wrapper">

                            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                            {!isMobile && <strong className="blue">Open GitHub repository</strong>}

                        </div>

                    </a>


                </section>

                <section className="project-details-description">




                    <div className="project-content-wrapper">

                        <p className="project-text introduction">

                            {project.shortDescription.content.resume}

                        </p>

                        <p className="">

                            {project.shortDescription.content.introduction}

                        </p>




                        <a className="github-redirect" href={project.liveDemo} target="_blank" rel="noopener noreferrer">




                            <div className="redirect-project-wrapper blue">

                                <FontAwesomeIcon icon={faPowerOff} aria-hidden="true" />{" "}

                                <span className="blue"><strong>Visit live demo</strong></span>

                            </div>

                        </a>


                        <a className="github-redirect" href={project.video} target="_blank" rel="noopener noreferrer">


                            <div className="redirect-project-wrapper green">

                                <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />{" "}

                                <span className="green"><strong>Watch video walkthrough </strong></span>

                            </div>

                        </a>

                        <nav className="project-toc" aria-label="Sections Navigation">

                            <h2>Content Navigation:</h2>

                            <ul className="sections-navigation">

                                {project.sections.map((item) => (

                                    <li key={item.id}>

                                        <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
                                        <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}>{item.title}</a>

                                    </li>

                                ))}

                            </ul>

                        </nav>




                    </div>

                    {project.sections.map((item) => (

                        <section key={item.id} className="project-text-wrapper">

                            <h3 id={item.id} className={`project-header`}>{item.title}</h3>

                            <div className="project-content-wrapper">

                                <p className="project-text-introduction">{item.introduction}</p>

                                <ul className="project-ul-wrapper">

                                    {item.content.map((content) => (


                                        <li key={content.id} className="project-li-icon">

                                            {content.icon && iconMap[content.icon] && <FontAwesomeIcon className={content.className || ""} icon={iconMap[content.icon]} aria-hidden="true" />}
                                            <p><strong className={`${item.color}`}>{content.title}</strong> - {content.description}</p>


                                        </li>))
                                    }

                                </ul>

                                {item.closer && <p className="project-text-closer">{item.closer}</p>}



                            </div>

                        </section>

                    ))}


                </section >


            </article>



        </main >


    );
}



export default ProjectDetailsPage;



