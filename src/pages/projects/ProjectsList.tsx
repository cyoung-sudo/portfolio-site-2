import "./ProjectsList.scss";
// Types
import { IProject } from "../../types/index.ds";
// Data
import { projectsData } from "../../data/projectsData";

interface ProjectsListProps {
  setShowProject: (project: IProject | null) => void;
  section2Ref: React.MutableRefObject<HTMLDivElement | null>;
}

const ProjectsList: React.FC<ProjectsListProps> = ({setShowProject, section2Ref}) => {
  const toggleMode = (project: IProject) => {
    setShowProject(project);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView();
  };

  return(
    <div id="projectsList">
      <div className="projectsList-header">
        Projects
      </div>

      <div className="projectsList-projects">
        {projectsData.map((project, idx) => (
          <div className="projectsList-project" key={idx}>
            <img src={project.images[0]}/>
            <div className="projectsList-text">
              <div className="projectsList-name">
                {project.name}
                {project.deployed && <span>Live</span>}
              </div>
              <div className="projectsList-about">{project.about}</div>
            </div>
            <div className="projectsList-btns">
              <button onClick={() => toggleMode(project)}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ProjectsList;