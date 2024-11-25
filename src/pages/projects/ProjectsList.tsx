import "./ProjectsList.scss";
// React
import { useState, useEffect } from "react";
// Components
import ProjectCard from "../../components/cards/ProjectCard";
// Types
import { IProject } from "../../types/index.ds";
// Data
import { projectsData } from "../../data/projectsData";

interface ProjectsListProps {
  setShowProject: (project: IProject | null) => void;
  section2Ref: React.MutableRefObject<HTMLDivElement | null>;
}
type filter = "all" | "live";

const ProjectsList: React.FC<ProjectsListProps> = ({setShowProject, section2Ref}) => {
  // Filter
  const [filterMode, setFilterMode] = useState<filter>("all");
  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageContent, setPageContent] = useState<IProject[] | null>(null);
  // Loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Filter content
    let filteredContent;
    if(filterMode === "all") {
      filteredContent = projectsData;
    } else {
      filteredContent = projectsData.filter(t => t.deployed === true);
    }
    // Set total pages
    setTotalPages(Math.ceil(filteredContent.length / 6))
    // Set page content
    let temp = getPageContent(filteredContent, 6);
    setPageContent(temp);
    // Loaded
    setLoading(false);
  }, [filterMode, page]);

  const toggleMode = (project: IProject) => {
    setShowProject(project);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const getPageContent = (content: IProject[], itemsPerPage: number) => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return content.slice(begin, end);
  };

  const handleFilter = (filter: filter) => {
    setLoading(true);
    setFilterMode(filter);
    setPage(1);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const prevPage = () => {
    setLoading(true);
    setPage(page - 1);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const nextPage = () => {
    setLoading(true);
    setPage(page + 1);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <div id="projectsList">
      <div className="projectsList-header">
        Projects
      </div>

      <div className="projectsList-filters">
        <div className="projectsList-filters-content">
          <div>Filters</div>
          <button
            className={(filterMode === "all") ? "active-filter" : ""}
            onClick={() => handleFilter("all")}>
            All
          </button>
          <button
            className={(filterMode === "live") ? "active-filter" : ""}
            onClick={() => handleFilter("live")}>
            Live
          </button>
        </div>
      </div>

      {pageContent && !loading &&
        <div className="projectsList-projects">
          {pageContent.map((project, idx) => (
            <ProjectCard
              key={idx}
              project={project}
              toggleMode={toggleMode}/>
          ))}
        </div>
      }

      {!loading &&
        <div className="projectsList-pagination">
          <div className="projectsList-pagination-content">
            <button 
              className="projectsList-prev"
              disabled={(page <= 1) ? true: false}
              onClick={() => prevPage()}>
              Prev
            </button>
            <div>{page} / {totalPages}</div>
            <button 
              className="projectsList-next"
              disabled={(page >= totalPages) ? true: false}
              onClick={() => nextPage()}>
              Next
            </button>
          </div>
        </div>
      }
    </div>
  )
};

export default ProjectsList;