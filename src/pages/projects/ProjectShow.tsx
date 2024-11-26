import "./ProjectShow.scss";
// Types
import { IProject } from "../../types/index.ds";
// Animations
import { motion } from "motion/react";
// Carousel
import Slider from "react-slick";
// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectShowProps {
  project: IProject;
  setShowProject: (project: IProject | null) => void;
  section2Ref: React.MutableRefObject<HTMLDivElement | null>;
}

const ProjectShow: React.FC<ProjectShowProps> = ({project, setShowProject, section2Ref}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    adaptiveHeight: true
  };

  const toggleMode = () => {
    setShowProject(null);
    // Scroll to projects-segment
    if(section2Ref.current) section2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <div id="projectShow">
      <div className="projectShow-header">
        {project.name}
        {project.deployed && <span>Live</span>}
      </div>

      <div className="projectShow-carousel">
        <Slider {...settings}>
          {project.images.map((image, idx) => (
            <img src={image} key={idx}/>
          ))}
        </Slider>
      </div>

      <motion.div 
      className="projectShow-info"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
        <div className="projectShow-info-content">
          <div className="projectShow-about">{project.about}</div>
          {project.website && 
            <div>Website: <a href={project.website} target="_blank">{project.website}</a></div>
          }
          <div className="projectShow-tech">
            Tech:
            {project.tech.map((t, idx) => (
              <div key={idx}>{t}</div>
            ))}
          </div>
          {project.repos.client &&
            <div>Client Repo: <a href={project.repos.client} target="_blank">{project.repos.client}</a></div>
          }
          {project.repos.server &&
            <div>Server Repo: <a href={project.repos.server} target="_blank">{project.repos.server}</a></div>
          }

          <div className="projectShow-btns">
            <button onClick={toggleMode}>Back to Projects</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
};

export default ProjectShow;