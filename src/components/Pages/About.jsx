import React from "react";
import './About.css'
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/Contact');
    };

    const founderInfo = {
        name: "Masinde Japheth",
        title: "Chief Technology Officer & Founder",
        image: "./cot2.jpg",
        bio: "With over 4+ years of experience in software development and technology leadership, Japheth has been at the forefront of digital innovation. His passion for creating impactful solutions has led to the development of cutting-edge applications used by millions worldwide.",
        skills: {
            "Frontend Development": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
            "Backend Development": ["Node.js", "Python", "Java", "PostgreSQL"],
            "AI/ML & Data Science": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"],
            "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
            "Mobile Development": ["React Native", "Flutter", "iOS", "Android"]
        },
        experience: [
            {
                period: "2022 - Present",
                role: "Founder & CTO",
                company: "Syntelsafe softwares.",
                description: "Leading technology strategy and development of innovative software solutions for global clients. Grew the company from 2 to 50+ employees."
            },
            
        ],
        social: [
            { name: "LinkedIn", icon: "fab fa-linkedin-in", url: "#" },
            { name: "GitHub", icon: "fab fa-github", url: "#" },
            { name: "Twitter", icon: "fab fa-twitter", url: "#" },
            { name: "Medium", icon: "fab fa-medium", url: "#" }
        ]
    };
    return (
        <>
            {/* -----About section----- */}
                <section id="about" className="about">
                    <div className="about--container">
                        <h2 className="about-section-title">About Syntelsafe</h2>
                        <div className="about-content">
                            <div className="about-text">
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
                    {/* Founder Section */}
                    <div className="founder-section">
                        <div className="founder-content">
                            <div className="founder-image">
                                <img 
                                    src={founderInfo.image} 
                                    alt={founderInfo.name}
                                    className="founder-img"
                                />
                                <h3 className="founder-name">{founderInfo.name}</h3>
                                <p className="founder-title">{founderInfo.title}</p>
                                
                                <div className="founder-social">
                                    {founderInfo.social.map(social => (
                                        <a 
                                            key={social.name}
                                            href={social.url} 
                                            className="founder-social-link"
                                            aria-label={social.name}
                                        >
                                            <i className={social.icon}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="founder-details">
                                <h3>About the Founder</h3>
                                <p className="founder-bio">{founderInfo.bio}</p>
                                
                                <div className="skills-section">
                                    <h4>Technical Expertise</h4>
                                    <div className="skills-grid">
                                        {Object.entries(founderInfo.skills).map(([category, skills]) => (
                                            <div key={category} className="skill-category">
                                                <h5>{category}</h5>
                                                <div className="skill-items">
                                                    {skills.map(skill => (
                                                        <span key={skill} className="skill-item">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="experience-section">
                                    <h4>Professional Experience</h4>
                                    <div className="experience-timeline">
                                        {founderInfo.experience.map((exp, index) => (
                                            <div key={index} className="experience-item">
                                                <div className="experience-period">{exp.period}</div>
                                                <div className="experience-role">{exp.role}</div>
                                                <div className="experience-company">{exp.company}</div>
                                                <p className="experience-description">{exp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};
export default About;