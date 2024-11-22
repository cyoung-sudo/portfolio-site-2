import "./ProjectShow.scss";
// Types
import { IProject } from "../../types/index.ds";

interface ProjectShowProps {
  project: IProject;
  setShowProject: (project: IProject | null) => void;
}

const ProjectShow: React.FC<ProjectShowProps> = ({project, setShowProject}) => {
  return(
    <div id="projectShow">
      <div className="projectShow-header">
        {project.name}
      </div>
      <button onClick={() => setShowProject(null)}>Back</button>
    </div>
  )
};

export default ProjectShow;