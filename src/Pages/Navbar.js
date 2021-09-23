import React, { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { social } from '../Data/NavbarData.js';
import styles from "../CSS/Navbar.module.css";
import Resume from '../assets/Resume - Thabo Theko.pdf';


const Navbar = () => {
const [showLinks, setShowLinks] = useState(false);
const handleClick=(e)=>{
e.preventDefault();
const target = e.target.getAttribute('href');
const location = document.querySelector(target).offsetTop;
console.log(location);
window.scrollTo({
  left:0,
  top:location -150
})
}

return <nav>
  <div className={styles.nav_center}>
    <div className={styles.nav_header}>
      <h4 className={styles.logo}>CHUSYNTAX</h4> 
      <button className={styles.nav_toggle} onClick={()=>setShowLinks(!showLinks)}>
        <FaBars />
      </button>
    </div>
    <div className={`${showLinks ? `${styles.links_container && styles.show_container}`  : `${styles.links_container}` }`}>
      <ul className={styles.links}>
        <li>
          <a href="#home" onClick={handleClick}>Home</a>
        </li>
        <li>
          <a href="#projects"  onClick={handleClick}>Projects</a>
        </li>
        <li>
          <a href="#experience"  onClick={handleClick}>Experience</a>
        </li>
        <li>
          <a href="#contact"  onClick={handleClick}>Contact</a>
        </li>
        <li>
          <a href={Resume} download>Download Resume</a>
        </li>
      </ul>
    </div>
    <ul className={styles.social_icons}>
     {social.map((socialIcons)=>{
  const {id,url,icon} = socialIcons;  
  return <li key={id}>
    <a href={url} target="_blank" rel="noopener noreferrer" >
      {icon}
    </a>
  </li>

     })}
    </ul>
  </div>
</nav>
}

export default Navbar;
