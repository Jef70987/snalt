import React from "react";
import './Project.css';
const Project = () =>{
    return(
        <>
            <section id="project"className="project"  >
                <div className="project--container">
                    <h2>Projects</h2>
                    <div className="project--sample">
                        <div className="sample">
                            <h4>ATriUM Parlour</h4>
                            <h5>Beauty Parlour Management System</h5>
                            <div className="project--description">
                                <p>A complete multi-tenant Software as a service plartform for  beauty parlour with booking system, 
                                    ,service page, gallery and reviews for clients feedback. Has E-commerce integration where clients can buy beauty products alongside getting spa service</p>
                            </div>
                            <a href="https://www.atriumparlour.com">click to view</a>
                            <div className="technologies--used">
                                <h5>Technologies</h5>
                            <p>Built with React frontend,Django backend and PostgresSQL for database</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Project;