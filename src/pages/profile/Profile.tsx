import "./Profile.scss";
// Animations
import { motion } from "motion/react";

const Profile = () => {
  return(
    <div id="profile">
      <div className="profile-left">
        <img src="casual-male-avatar-silhouette-2.webp"/>
        <div className="profile-name">Christopher Young</div>
      </div>

      <div className="profile-right">
        <div>University of California, Santa Cruz</div>
        <div>Computer Science, B.S.</div>
        <div>Graduated (March 2020)</div>
        <div>GPA 3.46</div>
      </div>
    </div>
  );
}

export default Profile;