import React from "react";
import './Skills.css';
const Skills = () =>{
    <>
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills--container">
                    <div className="container">
                    <h3>Frontend</h3>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    </div>
                    <div className="container">
                    <h3>Backend</h3>
                    <p>Django</p>
                    <p>Python</p>
                    <p>Node.js</p>
                    <p>REST APIs</p>
                    <p>JAVA</p>
                    <p>SpringBoot</p>
                    </div>
                    <div className="container">
                    <h3>Other Technologies</h3>
                    <p>Android Development</p>
                    <p>AI/ML</p>
                    <p>Git</p>
                    <p>PostgreSQL</p>
                    <p>MYSQL</p>
                    </div>
            </div>
        </section>
    </>

};
export default Skills;