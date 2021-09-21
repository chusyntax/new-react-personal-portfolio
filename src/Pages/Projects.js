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

<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal1}
cardImage={Images.card1}
>
</Card>
  <Modal open={open1} onClose={onCloseModal1}  center className={styles.customOverlay}>
  <div className={styles.modalWrapper}>
  
 <img style={{height:"100%", width:"100%"}} src={Images.card1Mobile} alt="A Landscape" width="100%" height="100%"/>

 <div className={styles.modalContent}>
     <h1 style={{fontSize:"2rem"}}  >Heading</h1>
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
 <Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal2}
cardImage={Images.card2}
>
</Card>
  <Modal open={open2} onClose={onCloseModal2} center >

  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card2Mobile} alt="A Landscape" width="100%" height="100%"/>

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
 <Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal3}
cardImage={Images.card3}
>
</Card>
  <Modal open={open3} onClose={onCloseModal3} center>
  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card3Mobile} alt="A Landscape" width="100%" height="100%"/>

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
<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal4}
cardImage={Images.card4}
>
</Card>
  <Modal open={open4} onClose={onCloseModal4} center>
  <div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card4Mobile} alt="A Landscape" width="100%" height="100%"/>

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

<div className={styles.cardWrapper}>

<div>

<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal5}
cardImage={Images.card5}
>
</Card>
<Modal open={open5} onClose={onCloseModal5} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card5Mobile} alt="A Landscape" width="100%" height="100%"/>

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
<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal6}
cardImage={Images.card6}
>
</Card>
<Modal open={open6} onClose={onCloseModal6} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card6Mobile} alt="A Landscape" width="100%" height="100%"/>

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
<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal7}
cardImage={Images.card7}
>
</Card>
<Modal open={open7} onClose={onCloseModal7} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card7Mobile} alt="A Landscape" width="100%" height="100%"/>

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
<Card heading="Wassup"
description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus perferendis ad aperiam esse, repudiandae sit nam blanditiis a alias nostrum porro itaque omnis amet suscipit facere?"
gitHub="https://github.com/chusyntax"
liveSite="https://github.com/chusyntax"
onClick={onOpenModal8}
cardImage={Images.card8}
>
</Card>
<Modal open={open8} onClose={onCloseModal8} center>
<div className={styles.modalWrapper}>
 
 <img style={{height:"100%", width:"100%"}} src={Images.card8sMobile} alt="A Landscape" width="100%" height="100%"/>

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