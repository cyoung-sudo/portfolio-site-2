import "./Info.scss";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Info = () => {
  return(
    <div id="info">
      <a href="https://github.com/cyoung-sudo" target="_blank" rel="noreferrer"><FaGithub size={64}/></a>
      <a href="" target="_blank" rel="noreferrer"><FaLinkedin size={64}/></a>
      <a href="mailto:cyoungcs20@gmail.com" target="_blank" rel="noreferrer"><IoMdMail size={64}/></a>
    </div>
  );
};

export default Info;