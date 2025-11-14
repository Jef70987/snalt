import React from "react";
import "./Dashboard.css"
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {

    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/Portfolio');
    };
    

    return (
        <div id="home" className="main--container">
            
            {/* main--content Hero--section*/}
           <div className="main--content">
                
                <div className="hero--section">
                    <div className="hero--text">
                        <h1>SYNAPTIK ANALYTICS SOFTWARES</h1>
                         <h4><p><i>Building Security, Bridging solutions</i></p></h4>
                        <div className="hero--content">
                            <p>In a digital world of constant connection, security is not a fetaure, it's the foundation.
                                We don't just build systems, we build trust, we create intelligence. We engineer systems where security is intrinsic, not an afterthought. Our focus is building security
                                that stands up to modern threats.
                                
                            </p>
                            <p><b>Let's build something secure, together.</b></p>
                        </div>
                        
                        <button className="hero--button" onClick={handleNavigate}>
                            view our work
                        </button>
                        <div className="achievements">
                            <div className="success">
                                <h2>20+</h2>
                                <p>projects completed</p>
                            </div>
                            <div className="success">
                                <h2>35 +</h2>
                                <p>clients served</p>
                            </div>
                            <div className="success">
                                <h2>5+</h2>
                                <p>Years of experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero--image">
                        <img src="./icon.jpg" alt="image"/>
                    </div>
                </div>
           </div>
            
        </div>
    );
};

export default Dashboard;