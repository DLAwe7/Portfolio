import { projectsList } from "../data/projectsList";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css"




function ProjectsPage() {

    const projects = projectsList;

    return (


        <main className="projects-container">

            <h1 className="second-title">List of Projects</h1>

            <ul className="projects-list">

                {projects.map((project) => (

                    <ProjectCard key={project.id} project={project} />

                ))}

            </ul>

        </main>


    );
}



export default ProjectsPage;