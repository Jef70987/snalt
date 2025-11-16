import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    // eslint-disable-next-line no-unused-vars
    const [activeProject, setActiveProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "ATRIUM - Beauty Parlour Management System",
            description: "A comprehensive Parlour/Spa management system with automated no-overlaps bookings, E-commerce integration, Inventory and staff management. .",
            url: "https://atriumparlour.com",
            image: "https://atriumparlour.com",
            techStack: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
            features: [
                "Real-time Bookings",
                "E-commerce integration",
                "Secure client data management",
                "Mobile-responsive design",
                "Automated appointment scheduling",
                "Inventory and Staff management"
            ]
        },
        
        {
            id: 2,
            title: "JAWABU - School Management System",
            description: "A Joint Advanced Web Analytic and Behavioral Unit with machine learning for career and budget recommendation based on student and school expenditure respectively.",
            url: "https://cybersecurity-platform.example.com",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["Python", "ELK Stack", "React", "Docker", "Kubernetes"],
            features: [
                "Real-time Updates and analysis",
                "Instant Messaging",
                "Secure role-based login",
                "Compliance reporting",
                "Custom alert system"
            ]
        },
        {
            id: 3,
            title: "Mobile Fee-Payment Application",
            description: "Secure and intuitive mobile fee payment app with digital receipts.",
            url: "https://mobile-banking.example.com",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS"],
            features: [
                "Biometric/PIN authentication",
                "Real-time transactions",
                "Payment tracking",
                "Budget planning tools"
            ]
        },
        {
            id: 4,
            title: "Community Shield - IoT Smart Security System",
            description: "Comprehensive IoT platform for smart security serveillance with real-time monitoring and security alerts.",
            url: "https://smart-home.example.com",
            image: "https://images.unsplash.com/photo-1558002038-1055897?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            techStack: ["React", "Node.js", "MQTT", "MongoDB", "Raspberry Pi"],
            features: [
                "Device automation",
                "Live surveillance",
                "Security alerts",
                "Motion Detection integration"
            ]
        }
    ];

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