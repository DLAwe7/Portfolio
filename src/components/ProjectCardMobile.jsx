import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { iconMap } from "../data/icons";

function ProjectCardMobile({ project }) {




    return (

        <li className="project-row">


            <div className="project-redirection" >

                <div className="project-wrapper">

                    <h3 className="project-title">

                        {project.icon && <FontAwesomeIcon icon={iconMap[project.icon]} aria-hidden="true" />}{" "}
                        <span>{project.name}</span>

                    </h3>

                    <div className="tools">

                        <p className="project-description">
                            {project.tools.introduction}
                        </p>

                        <ul className="tools-container">

                            {project.tools.toolsUsed.map((tool, index) => (


                                <li key={index} className={`${tool.color} tool`}>

                                    <FontAwesomeIcon icon={iconMap[tool.icon]} aria-hidden="true" />
                                    <span>{tool.name}</span>


                                </li>



                            ))}

                        </ul>

                    </div>

                    <Link to={`/projects/${project.id}`} className="click-more">

                        <span>Click <strong>HERE</strong> to see more</span>
                        <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />

                    </Link>


                </div>

                <div className="preview-wrapper">

                    <img src={project.previewImage} className="projects-preview" alt="Youtube Recreation Preview" />

                </div>


            </div>


        </li>)



}

export default ProjectCardMobile;