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

            
        </section>
    );
};

export default Portfolio;