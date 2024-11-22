import "./ProjectsList.scss";
// React
import { useState, useEffect } from "react";
// Hooks
import usePagination from "../../hooks/usePagination";
// Types
import { IProject } from "../../types/index.ds";
// Data
import { projectsData } from "../../data/projectsData";

interface ProjectsListProps {
  setShowProject: (project: IProject | null) => void;
  section2Ref: React.MutableRefObject<HTMLDivElement | null>;
}

type pageDir = "prev" | "next";

const ProjectsList: React.FC<ProjectsListProps> = ({setShowProject, section2Ref}) => {
  // Pagination
  const [pageContent, setPageContent] = useState<IProject[] | null>(null);
  // Hooks
  const pagi = usePagination(projectsData, 6);

  useEffect(() => {
    let temp = pagi.currentData();
    setPageContent(temp);
  }, [pagi.currentPage]);

  const toggleMode = (project: IProject) => {
    setShowProject(project);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView();
  };

  const handlePagi = (pageDir: pageDir) => {
    if(pageDir === "prev") {
      pagi.prevPage();
    } else {
      pagi.nextPage();
    }
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView();
  }

  return(
    <div id="projectsList">
      <div className="projectsList-header">
        Projects
      </div>

      {pageContent &&
        <div className="projectsList-projects">
          {pageContent.map((project, idx) => (
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
      }

      <div className="projectsList-pagination">
        <div className="projectsList-pagination-content">
          <button className="projectsList-prev" onClick={() => handlePagi("prev")}>Prev</button>
          <div>{pagi.currentPage} / {pagi.totalPages}</div>
          <button className="projectsList-next" onClick={() => handlePagi("next")}>Next</button>
        </div>
      </div>
    </div>
  )
};

export default ProjectsList;