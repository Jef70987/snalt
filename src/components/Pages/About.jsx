import React from "react";
import './About.css'
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/Contact');
    };
    return (
        <>
            {/* -----About section----- */}
                <section id="about" className="about">
                    <div className="about--container">
                        <h2 className="about-section-title">About SYNALT</h2>
                        <div className="about-content">
                            <div className="about-text fade-in">
                                <p>We are a premier software company focused on the architecture of secure and analytical systems. Our name reflects our method; We create smart, synaptic links across your technology stack while 
                                    performing deep analytics to identify and fortify vulnerabilities.
                                </p>
                                <p>Our slogan, "<b>building security, bridging solutions</b>",is our engineering mantra. It means we don't just implement security protocols, We build them directly into the DNA of your software. From secure-by-design 
                                    development to proactive analytical monitoring, we provide the certainity you need in an uncertain digital world.
                                </p>
                                <p>We don't just promise security, We engineer it.</p>
                                <a onClick={handleNavigate} className="btn btn-outline">Get In Touch..</a>
                            </div>
                        </div>
                    </div>

                </section>
        </>
    );
};
export default About;