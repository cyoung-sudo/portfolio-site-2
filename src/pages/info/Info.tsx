import "./Info.scss";
// Animations
import { motion } from "motion/react";
// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Info = () => {
  return(
    <motion.div 
      id="info"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}>
      <a href="https://github.com/cyoung-sudo" target="_blank" rel="noreferrer"><FaGithub size={64}/></a>
      <a href="" target="_blank" rel="noreferrer"><FaLinkedin size={64}/></a>
      <a href="mailto:cyoungcs20@gmail.com" target="_blank" rel="noreferrer"><IoMdMail size={64}/></a>
    </motion.div>
  );
};

export default Info;