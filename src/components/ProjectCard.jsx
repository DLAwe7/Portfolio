import useMediaQuery from "../hooks/useMediaQuery";
import ProjectCardDesktop from "./ProjectCardDesktop";
import ProjectCardMobile from "./ProjectCardMobile";





function ProjectCard({ project }) {

    const isMobile = useMediaQuery("(max-width: 850px)");


    return isMobile ? (<ProjectCardMobile project={project} />) : (<ProjectCardDesktop project={project} />);



}

export default ProjectCard;