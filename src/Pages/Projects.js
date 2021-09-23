import { Modal } from 'react-responsive-modal';
import  Card from './Cards.js';
import React, { useState } from 'react';
import styles from '../CSS/Projects.module.css';
import Images from '../assets/card-images/Images';



const Projects = () => {
         
const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);
const [open3, setOpen3] = useState(false);
const [open4, setOpen4] = useState(false);
const [open5, setOpen5] = useState(false);
const [open6, setOpen6] = useState(false);
const [open7, setOpen7] = useState(false);
const [open8, setOpen8] = useState(false);

  
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);

  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);

  const onOpenModal6 = () => setOpen6(true);
  const onCloseModal6 = () => setOpen6(false);

  const onOpenModal7 = () => setOpen7(true);
  const onCloseModal7 = () => setOpen7(false);

  const onOpenModal8 = () => setOpen8(true);
  const onCloseModal8 = () => setOpen8(false);

  return (
<section className={styles.projectsSection}>

<h1 className={styles.title}>My Projects</h1>

<div className={styles.cardWrapper}>


<div>
<Card heading="Personal Portfolio"
description="My new personal portfolio made with React.js. Here you can get to know more about me and the skills I have aquired,view all my projects and message me as well."
gitHub="https://github.com/chusyntax/new-react-personal-portfolio"
liveSite="https://chusyntax.netlify.app/"
onClick={onOpenModal8}
cardImage={Images.card8}
>
</Card>
<Modal open={open8} onClose={onCloseModal8} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card8Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Personal Portfolio</h1>
    <p >This is my personal portfolio made with React.js. I used the useState hook for the Navbar, Experience page and for the modals as well. Here you can view more of my projects and download my resume as well. </p>
    {/* <p>The biggest challenge with this project was with the modals and opening one at one time. My solution was the then use the Responsive Modal Library which came with its own styles. It also allowed me to create state for every modal so that different modals would not open at the same time.</p> */}
    <p>Made with: React.js</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="https://github.com/chusyntax/new-react-personal-portfolio" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="https://chusyntax.netlify.app/" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>

</Modal>
</div>





<div>

<Card heading="What's Going On"
description="A website that displays  the latest stories and top 13 books from the New York Times. You can also read the description of a book and go straight to purchasing it on Amazon."
gitHub="https://github.com/chusyntax/svg-and-api-website"
liveSite="https://whatsgoingon.netlify.app/"
onClick={onOpenModal1}
cardImage={Images.card1}
>
</Card>
  <Modal open={open1} onClose={onCloseModal1}  center className={styles.customOverlay}>
  <div className={styles.modalWrapper}>
  
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card1Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}  >What's Going On</h1>
    <p>A website that displays  the latest stories and top 13 books from the New York Times. You can also read the description of a book and go straight to purchasing it on Amazon. I used Webpack to compile the pages together as each page has its own JavaScript file and fetch request.</p>
    <p>Made with: HTML, CSS, JavaScript, New York Times API and Webpack.</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="https://github.com/chusyntax/svg-and-api-website" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="https://whatsgoingon.netlify.app/" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
  </Modal> 
</div>

 <div>
 <Card heading="Skweeky Klean"
description="This is a pool cleaning company. It has a calm and tranquil aesthitic and color scheme which resembles that of the ocean and multiple pages to view as well. "
gitHub="https://github.com/chewyscode/skweeky-klean"
liveSite="https://skeeky-klean.netlify.app/"
onClick={onOpenModal2}
cardImage={Images.card2}
>
</Card>
  <Modal open={open2} onClose={onCloseModal2} center >

  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card2Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Skweeky Klean</h1>
    <p>This page is for a pool cleaning company. It uses a video background that matches and compliments the rest of the website's aesthitic and vibe. It also uses SCSS for its styling and has multiple pages that you can access through the Navbar to explore and view.</p>
    <p>Made with: HTML, SCSS, AOS library and JavaScript.</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="https://github.com/chewyscode/skweeky-klean" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="https://skeeky-klean.netlify.app/" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
  </Modal>
</div>

<div>
<Card heading="Molding Messengers"
description="A publishing firm's  website  made in WordPress. Here, a client hired me to create new pages for the site and make changes to existing pages."
gitHub="https://github.com/chusyntax"
liveSite="https://www.moldingmessengers.com"
onClick={onOpenModal4}
cardImage={Images.card4}
>
</Card>
  <Modal open={open4} onClose={onCloseModal4} center>
  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card4Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Molding Messengers</h1>
    <p>A publishing firm's  website  made in WordPress. My job was to create the "BOOKS" page and and all existing books to it, update the NavBar to have the Books tab on it, create new pages for three new books and add their links and information, update the sliding gallary on the homepage with the three new books, update links on the Navbar and change content on the homepage.</p>
    <p>Made with: WordPress</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="https://www.moldingmessengers.com" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="https://www.moldingmessengers.com" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
  </Modal>
</div>


</div>

<div className={styles.cardWrapper}>

<div>
 <Card heading="Kool Kicks"
description="This is an eCommerce store for shoes. It is intended to work as a fully functioning shoe sales platform. It also has a 3D image carousel(Best Sellers Page)"
gitHub="https://github.com/chewyscode/eCommerce"
liveSite="https://kool-kicks.netlify.app/"
onClick={onOpenModal3}
cardImage={Images.card3}
>
</Card>
  <Modal open={open3} onClose={onCloseModal3} center>
  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card3Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique? Tenetur laborum incidunt aspernatur accusantium itaque commodi rem est ea. Odio commodi omnis non veniam saepe consectetur quibusdam. Dolorum, iusto.</p>
    <p>Made with</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
  </Modal>
</div>

<div>

<Card heading="Github Search"
description="This website uses the GitHub API to get data about any GitHub user that is searched and display that data in a neat format. You also then view their personal website/blog."
gitHub="https://github.com/chusyntax/JQuery-AJAX-Project"
liveSite="https://chus-finder-app.netlify.app/"
onClick={onOpenModal5}
cardImage={Images.card5}
>
</Card>
<Modal open={open5} onClose={onCloseModal5} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%", objectFit:"contain"}} src={Images.card5Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique? Tenetur laborum incidunt aspernatur accusantium itaque commodi rem est ea. Odio commodi omnis non veniam saepe consectetur quibusdam. Dolorum, iusto.</p>
    <p>Made with</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
</Modal> 
</div>

<div>
<Card heading="Gymnasia"
description="This is a gym website with membership options, sign up/in pages and a trainers page and the different gym locations page. It also includes a mock card payment methods page"
gitHub="https://gymnasia1.netlify.app/"
liveSite="https://github.com/chewyscode/gym-website"
onClick={onOpenModal6}
cardImage={Images.card6}
>
</Card>
<Modal open={open6} onClose={onCloseModal6} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%",objectFit:"contain"}} src={Images.card6Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique? Tenetur laborum incidunt aspernatur accusantium itaque commodi rem est ea. Odio commodi omnis non veniam saepe consectetur quibusdam. Dolorum, iusto.</p>
    <p>Made with</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
</Modal>
</div>

<div>
<Card heading="Pot Party"
description="This is an eCommerce site that sells pots for small to medium sized businesses. Websites also consists of smooth on-scroll animations from the AOS library."
gitHub="https://pot-a-party.netlify.app/"
liveSite="https://github.com/chusyntax/pot-a-party"
onClick={onOpenModal7}
cardImage={Images.card7}
>
</Card>
<Modal open={open7} onClose={onCloseModal7} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%",objectFit:"contain"}} src={Images.card7Mobile} alt="Mobile snapshot of the project." width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}>Heading</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, similique? Tenetur laborum incidunt aspernatur accusantium itaque commodi rem est ea. Odio commodi omnis non veniam saepe consectetur quibusdam. Dolorum, iusto.</p>
    <p>Made with</p>
     <div className={styles.buttonLayout}>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">View Code</a></button>
     <button className={styles.innerModalButton}><a href="#!" target="_blank" rel="noreferrer">Live Site</a></button>
     </div>
 </div>

</div>
</Modal>
</div>




</div> 
<div className={styles.wave}>
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
    </svg>
</div>

</section>


    
  );
 };

export default Projects