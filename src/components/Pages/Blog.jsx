import React, { useEffect } from 'react';
import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Revolutionizing Healthcare with AI-Powered Diagnostics",
            excerpt: "Our latest AI model can detect early-stage diseases with 95% accuracy, transforming patient outcomes and reducing diagnostic costs.",
            category: "AI/ML",
            categoryClass: "ai-ml",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "June 15, 2023",
            readTime: "5 min read"
        },
        {
            id: 2,
            title: "Advanced Threat Detection: Our New Cybersecurity Framework",
            excerpt: "Implementing zero-trust architecture and behavioral analytics to protect against sophisticated cyber threats in real-time.",
            category: "Cybersecurity",
            categoryClass: "cybersecurity",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "May 28, 2023",
            readTime: "7 min read"
        },
        {
            id: 3,
            title: "Building Scalable Android Apps with Modern Architecture Patterns",
            excerpt: "Leveraging MVVM, Jetpack Compose, and Kotlin Coroutines for maintainable and testable mobile applications.",
            category: "Android Development",
            categoryClass: "android",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "May 10, 2023",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "Microservices Architecture: Best Practices for Enterprise Applications",
            excerpt: "How we helped a Fortune 500 company transition from monolith to microservices with zero downtime.",
            category: "Software Development",
            categoryClass: "web-dev",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "April 22, 2023",
            readTime: "8 min read"
        },
        {
            id: 5,
            title: "Machine Learning Model Deployment at Scale",
            excerpt: "Our automated MLOps pipeline reduces deployment time from weeks to hours while maintaining model performance.",
            category: "AI/ML",
            categoryClass: "ai-ml",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "April 5, 2023",
            readTime: "6 min read"
        },
        {
            id: 6,
            title: "Secure Cloud Migration: Our Multi-Cloud Strategy",
            excerpt: "Implementing robust security protocols while migrating critical infrastructure to hybrid cloud environments.",
            category: "Cloud Computing",
            categoryClass: "cloud",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            date: "March 18, 2023",
            readTime: "7 min read"
        }
    ];

    useEffect(() => {
        // Animation for blog cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all blog cards
        const cards = document.querySelectorAll('.blog-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (
        <section className="blog-section">
            <div className="section-title">
                <h2>Tech Insights & Development Updates</h2>
                <p>Stay updated with our latest projects in software development, AI/ML, cybersecurity, and mobile technologies</p>
            </div>
            
            <div className="blog-grid">
                {blogPosts.map(post => (
                    <article key={post.id} className="blog-card">
                        <div className="card-img">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div className="card-content">
                            <span className={`category ${post.categoryClass}`}>
                                {post.category}
                            </span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <div className="card-meta">
                                <span>
                                    <i className="far fa-calendar"></i>
                                    {post.date}
                                </span>
                                <span>
                                    <i className="far fa-clock"></i>
                                    {post.readTime}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Blog;