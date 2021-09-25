import React, { useState, useEffect} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from "../Data/database.json";
import styles from "../CSS/Experience.module.css";

function App() {

  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    setJobs(data)
  }, [])
 
 
  const { company, dates, duties, title } = data[value];
  return (



    <section id="experience" className={styles.section}>
      <div className={styles.title}>
        <h2>Experience</h2>
      </div>
      <div className={styles.jobs_center}>
        {/* btn container */}
        <div className={styles.btn_container}>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${styles.job_btn} ${index === value && `${styles.active_btn}` }`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className={styles.job_info}>
          <h3 style={{fontWeight:"550",
                      marginBottom:"1rem"
        }}  >{title}</h3>
          <h4 style={{ 
            letterSpacing:"0.1rem",
            lineHeight: '1.25',
            marginBottom: '0.75rem'
}} >{company}</h4>
          <p className={styles.job_date}>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className={styles.job_desc}>
                <FaAngleDoubleRight className={styles.job_icon}></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
