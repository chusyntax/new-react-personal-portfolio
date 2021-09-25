import GitHub from '../assets/card-images/website-white.png';
import Website from '../assets/card-images/github-white.png';
import styles from '../CSS/Projects.module.css';


function Card(props) {
  
    return (
     
  <div className={styles.card}>
  <div className={styles.cardBody}>


    <div className={styles.imageOverlay}>
    <img className={styles.imageOverlayImg} src={props.cardImage} alt="Project screenshot" />
      <div className={styles.imageOverlayDescription}>

        <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
        <img src={GitHub} alt="GitHub Icon" /> 
        </a>

        <a href={props.liveSite} target="_blank" rel="noopener noreferrer">
        <img src={Website} alt="liveSite Icon" /> 
        </a> 
       
      </div>
    </div>

      <h2 style={{display:"block"}}  className={styles.cardTitle}>{props.heading}</h2>
      <p className={styles.cardDescription}>{props.description}</p>
  </div>
 
 <button className={styles.cardButton} onClick={props.onClick}>More Information</button>
 

</div>
    
    );
  }
  
  export default Card;
  