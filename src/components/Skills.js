import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'animate.css';
import jsLogo from '../assets/images/js-icon.svg';
import reactIcon from '../assets/images/reactjs-icon.svg';
import gitIcon from '../assets/images/git-icon.svg';
import nodeIcon from '../assets/images/nodejs-icon.svg';
import htmlIcon from '../assets/images/html-icon.svg';
import cssIcon from '../assets/images/css-icon.svg';
import mysqlIcon from '../assets/images/mysql-icon.svg';


const Skills = () => {
    const skills = [
        {
          name: "React.js",
          icon: reactIcon,
          description: " Proficient in React.js: components, Hooks, API integration, routing.",
        },
        {
          name: "JavaScript",
          icon: jsLogo,
          description: "Proficient in JavaScript (ES6+), DOM manipulation, async/await, and event handling",
        },
        {
          name: "Node.js",
          icon: nodeIcon,
          description: "Proficient in Node.js, Express.js, REST APIs, and async handling.",
        },
        {
          name: "HTML/CSS",
          icon: htmlIcon,
          description: "Proficient in HTML5, CSS3, with experience using Bootstrap and Tailwind CSS to build responsive, mobile-first interfaces.",
        },
        {
          name: "Git",
          icon: gitIcon,
          description: "Comfortable using GitHub for managing code, tracking changes, and working with teams.",
        },
        {
          name: "Database",
          icon: mysqlIcon,
          description: "Familiar with MySQL and MongoDB for managing and integrating data in full-stack projects. Able to design simple schemas and perform basic CRUD operations.",
        },
      ];
    

    return (
        
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="animate__animated animate__jello">Skills</h2>
                            <p> <strong><em>"Always open to learning and embracing new technologies to improve my development skills."</em></strong>
                            </p>
                            <div className="skill-grid">
                                {skills.map((skill, index) => (
                                    <div className="skill-card" key={index}>
                                        <div className="skill-icon">
                                            <img  src={skill.icon} atl="#"/>
                                        </div>
                                        <h4 className="skill-name">{skill.name}</h4>
                                        <p className="skill-desc">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    )
}
export default Skills;