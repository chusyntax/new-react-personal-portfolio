import AboutStyles from '../CSS/About.module.css'
import icons from '../assets/icons/Icons.js'

function About(){
return(

<section>

    <h1 className={AboutStyles.heading}>About Me</h1>

    <div className={AboutStyles.aboutGrid}>
        <div>
        <h4 style={
               { 
                  fontWeight: "600",
    display:"flex",
    fontSize:"2rem",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '0.5rem',
}}
> Summary:</h4>
        <div className={AboutStyles.information}>
            <p>I am a Front End Developer with a very creative mind. I enjoy writing code, developing web apps/pages and learning new
technologies/languages. I am also progress-driven, a
quick learner, and highly collaborative.</p>

<p>I am also more than happy to relocate as this would give me the oppotunity to work with new and different people, experience different cultures and explore different countries and terrains, while learning the newest techologies and keeping up with industry standards.</p>

<p>In my free time I love to play with my dogs, game and spend time with my friends.</p>
        </div>
        </div>
       
       <div>
           <h4 style={
               { 
    fontWeight: "600",
    display:"flex",
    fontSize:"2rem",
    alignItems: "center",
    justifyContent: "center",
    padding:"20px",
    marginTop:'-3rem'
}
    
    }>Tech and Tools I use:</h4>

           {/*First Row*/}
       <div className={AboutStyles.iconGrid}>
            <div className={AboutStyles.icon}>
                <img src={icons.html5} alt="HTML 5" />
                <span>HTML 5</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.css3} alt="CSS 3" />
                <span>CSS 3</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.bootstrap} alt="Bootstrap" />
                <span>Bootstrap</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.materialize} alt="Materialize" />
                <span>Materialize</span>
            </div>
                    {/*Second Row*/}
            <div className={AboutStyles.icon}>
                <img src={icons.js} alt="HTML 5" />
                <span>JavaScript/ES6</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.jquery} alt="CSS 3" />
                <span>JQuery</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.react} alt="React" />
                <span>React</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.typescript} alt="TypeScript" />
                <span>TypeScript</span>
            </div>
                {/*Third Row*/}
                <div className={AboutStyles.icon}>
                <img src={icons.wordpress} alt="WordPress" />
                <span>WordPress</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.figma} alt="Figma" />
                <span>Figma</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.webpack} alt="Webpack" />
                <span>Webpack</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.sass} alt="SASS" />
                <span>SASS</span>
            </div>
           
                    {/*Forth Row*/}
            <div className={AboutStyles.icon}>
                <img src={icons.npm} alt="NPM" />
                <span>NPM</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.vscode} alt="VS Code" />
                <span>VS Code</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.git} alt="Git/Version Control" />
                <span>Git/Version Control</span>
            </div>
            <div className={AboutStyles.icon}>
                <img src={icons.github} alt="Github" />
                <span>GitHub</span>
            </div>
        </div>
       </div>
       
    </div>
</section>

);
}

export default About;