import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            icon: 'fas fa-shield-alt',
            title: 'Secure System Architecture',
            description: 'End-to-end secure system design and implementation with robust security protocols and threat mitigation strategies.',
            features: [
                'Zero-trust architecture implementation',
                'End-to-end encryption protocols',
                'Regular security audits and penetration testing',
                'Compliance with industry security standards',
                'Real-time threat monitoring and response'
            ],
            securityLevel: 'Enterprise Grade'
        },
        {
            id: 2,
            icon: 'fas fa-brain',
            title: 'AI & Machine Learning Solutions',
            description: 'Intelligent systems that learn and adapt to your business needs while maintaining data privacy and security.',
            features: [
                'Custom AI model development',
                'Predictive analytics and insights',
                'Natural language processing',
                'Computer vision applications',
                'Secure data processing pipelines'
            ],
            securityLevel: 'Advanced Encryption'
        },
        {
            id: 3,
            icon: 'fas fa-mobile-alt',
            title: 'Secure Mobile Applications',
            description: 'Cross-platform mobile solutions with built-in security features and robust data protection mechanisms.',
            features: [
                'Secure offline data storage',
                'Biometric authentication integration',
                'Encrypted communication channels',
                'Regular security updates',
                'App store compliance assurance'
            ],
            securityLevel: 'Military Grade'
        },
        {
            id: 4,
            icon: 'fas fa-cloud',
            title: 'Cloud Infrastructure & Security',
            description: 'Scalable cloud solutions with multi-layered security and continuous monitoring for optimal protection.',
            features: [
                'Multi-cloud security strategies',
                'Automated backup and disaster recovery',
                'Identity and access management',
                'Network security configuration',
                'Compliance certification support'
            ],
            securityLevel: 'Enterprise Grade'
        },
        {
            id: 5,
            icon: 'fas fa-lock',
            title: 'Cybersecurity Services',
            description: 'Comprehensive cybersecurity solutions to protect your digital assets from evolving threats.',
            features: [
                '24/7 security monitoring',
                'Vulnerability assessment',
                'Incident response planning',
                'Security awareness training',
                'Regulatory compliance support'
            ],
            securityLevel: 'Advanced Protection'
        },
        {
            id: 6,
            icon: 'fas fa-code',
            title: 'Custom Software Development',
            description: 'Tailored software solutions built with security-first approach and industry best practices.',
            features: [
                'Secure development lifecycle',
                'Code review and quality assurance',
                'Performance optimization',
                'Scalable architecture design',
                'Ongoing maintenance and support'
            ],
            securityLevel: 'Enterprise Grade'
        }
    ];

    const handleServiceInquiry = (serviceTitle) => {
        // This would typically open a contact form or modal
        alert(`Thank you for your interest in our ${serviceTitle} service! Our team will contact you shortly.`);
    };

    return (
        <section className="services-section" id="services">
            <div className="section-title">
                <h2>Our Secure Technology Services</h2>
                <p>Enterprise-grade solutions built with security as our foundation</p>
            </div>

            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-card">
                        <div className="service-icon">
                            <i className={service.icon}></i>
                        </div>
                        
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        
                        <ul className="service-features">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        
                        <div className="security-badge">
                            <i className="fas fa-lock"></i> {service.securityLevel} Security
                        </div>
                        
                        <button 
                            className="service-cta"
                            onClick={() => handleServiceInquiry(service.title)}
                        >
                            Learn More
                            <i className="fas fa-arrow-right" style={{marginLeft: '8px'}}></i>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;