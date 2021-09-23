import styles from "../CSS/ContactPage.module.css";
import { useForm} from '@formspree/react';

function ContactPage() {

  const [state, handleSubmit] = useForm("xeqvvrkn");
  if (state.succeeded) {
      return <p className={styles.submit}>Thank you for your submission. I will React to it shortly :)</p>;
  }

    return (
        <section>
          <h1 style={{

fontWeight: '900',
fontSize:'4rem',
textAlign: 'center',
marginTop:'0.5rem'

          }}>Contact Me</h1>
        <div className={styles.container}>
          
          <span className={styles.bigCircle}></span>
          <img src="img/shape.png" className={styles.square} alt="" />
          <div className={styles.form}>
            <div className={styles.contactInfo}>
              <h3 className={styles.title}>Let's get in touch</h3>
              <p className={styles.text}>
                I would love to hear from you. You can contact me anytime for any oppotunites or collaborations and I will respond to you ASAP.
              </p>
    
              <div className={styles.info}>
                <div className={styles.information}>
                  <p>Birchleigh North, Kempton Park,South Africa</p>
                </div>

                <div className={styles.information}>
                  <p>Email:ttheko101@gmail.com</p>
                </div>
               
                <div className={styles.information}>
                  <p>Phone:+27 84 833 1276</p>
                </div>
              </div>
    
              <div className={styles.socialMedia}>
                <p className={styles.information}>Follow Me On Social Media :</p>
                <div className={styles.socialIcons}>
                  <a href="https://github.com/chusyntax">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/in/thabotheko">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/chusyntax/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
    
            <div className={styles.contactForm}>
              <span className={`${styles.circle} ${styles.one}`}></span>
              <span className={`${styles.circle} ${styles.two}`}></span>
    
              <form  onSubmit={handleSubmit} autocomplete="on">
                <h3 className={styles.title}>Message Me</h3>
                <div className={styles.inputContainer}>
                  <input type="text" name="name" className={`${styles.input} required  ${styles.focus}`} placeholder="Name" />
                  
                </div>
                <div className={styles.inputContainer}>
                  <input type="email" name="email" className={styles.input}  placeholder="E-mail"/>

                </div>
                <div className={styles.inputContainer}>
                  <input type="tel" name="phone" className={styles.input} placeholder="Phone (optional)"/>

                </div>
                <div className={`${styles.inputContainer} ${styles.textarea}`}>
                  <textarea id="message" name="message" placeholder="Message" className={styles.input}></textarea>

                </div>

                <button type="submit" disabled={state.submitting} className={styles.btn}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactPage
;