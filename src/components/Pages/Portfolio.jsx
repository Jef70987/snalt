import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    // eslint-disable-next-line no-unused-vars
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AI-Powered Healthcare Platform",
            description: "A comprehensive healthcare solution using machine learning for early disease detection and personalized treatment recommendations.",
            url: "https://healthcare-platform.example.com",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
            features: [
                "Real-time health monitoring",
                "AI-powered diagnostics",
                "Secure patient data management",
                "Mobile-responsive design"
            ]
        },
        {
            id: 2,
            title: "Blockchain Supply Chain System",
            description: "Decentralized supply chain management platform providing transparency and security for global logistics operations.",
            url: "https://blockchain-supplychain.example.com",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["Ethereum", "Solidity", "Web3.js", "React", "IPFS"],
            features: [
                "Smart contract implementation",
                "Real-time tracking",
                "Fraud prevention",
                "Multi-party verification"
            ]
        },
        {
            id: 3,
            title: "Cybersecurity Threat Intelligence",
            description: "Advanced threat detection and response system using behavioral analytics and machine learning algorithms.",
            url: "https://cybersecurity-platform.example.com",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["Python", "ELK Stack", "React", "Docker", "Kubernetes"],
            features: [
                "Real-time threat monitoring",
                "Automated incident response",
                "Compliance reporting",
                "Custom alert system"
            ]
        },
        {
            id: 4,
            title: "Mobile Banking Application",
            description: "Secure and intuitive mobile banking app with advanced features for modern financial management.",
            url: "https://mobile-banking.example.com",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
            features: [
                "Biometric authentication",
                "Real-time transactions",
                "Investment tracking",
                "Budget planning tools"
            ]
        },
        {
            id: 5,
            title: "E-commerce AI Recommendation Engine",
            description: "Intelligent product recommendation system that increases conversion rates through personalized shopping experiences.",
            url: "https://ecommerce-ai.example.com",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["Python", "React", "FastAPI", "Redis", "PostgreSQL"],
            features: [
                "Personalized recommendations",
                "Real-time analytics",
                "A/B testing framework",
                "Scalable microservices"
            ]
        },
        {
            id: 6,
            title: "IoT Smart Home Platform",
            description: "Comprehensive IoT platform for smart home automation with energy optimization and security features.",
            url: "https://smart-home.example.com",
            image: "https://images.unsplash.com/photo-1558002038-1055897?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["React", "Node.js", "MQTT", "MongoDB", "Raspberry Pi"],
            features: [
                "Device automation",
                "Energy monitoring",
                "Security alerts",
                "Voice control integration"
            ]
        }
    ];

    const founderInfo = {
        name: "Masinde Japheth",
        title: "Chief Technology Officer & Founder",
        image: "./cot.jpg",
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
                company: "Synaptik Analytiks Softwares.",
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

    const handleViewProject = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const renderProjectPreview = (project) => {
        return (
            <div className="project-preview">
                <div className="preview-placeholder">
                    <i className="fas fa-laptop-code" style={{ fontSize: '48px', marginBottom: '10px' }}></i>
                    <div>{project.title} Preview</div>
                </div>
                <div className="project-overlay">
                    
                </div>
            </div>
        );
    };

    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-section-title">
                <h2>Our Featured Projects</h2>
                <p>Explore our latest work in software development, AI, cybersecurity, and innovative technology solutions</p>
            </div>

            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project--card">
                        {renderProjectPreview(project)}
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            {/* <div className="tech-stack">
                                {project.techStack.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div> */}
                            
                            <ul className="project-features">
                                {project.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            
                            <button 
                                className="view-project-btn"
                                onClick={() => handleViewProject(project.url)}
                            >
                                <i className="fas fa-external-link-alt"></i>
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
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
    );
};

export default Portfolio;