import "./ProjectCard.scss";
// Types
import { IProject } from "../../types/index.ds";
// Animations
import { motion } from "motion/react";

interface ProjectCardProps {
  project: IProject;
  toggleMode: (project: IProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project, toggleMode}) => {
  return(
    <motion.div 
      className="projectCard"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <img src={project.images[0]}/>
      <div className="projectCard-text">
        <div className="projectCard-name">
          {project.name}
          {project.deployed && <span>Live</span>}
        </div>
        <div className="projectCard-about">{project.about}</div>
      </div>
      <div className="projectCard-btns">
        <button onClick={() => toggleMode(project)}>View</button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;