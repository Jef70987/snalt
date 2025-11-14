import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Replace with your actual contact information
    const contactInfo = {
        whatsapp: '+254718364879',
        email: 'synaltsoftwares@gmail.com',
        phone: '+254-718-364-89',
        address: 'Kenya, Nairobi',
        businessHours: {
            weekdays: '9:00 AM - 6:00 PM',
            weekends: '10:00 AM - 4:00 PM',
            timezone: 'EST'
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        try {
            // TODO: Replace with your actual backend endpoint
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                subject: '',
                message: ''
            });
            
            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const openWhatsApp = () => {
        const message = "Hello! I'm interested in your services and would like to discuss a project.";
        const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const openEmail = () => {
        window.location.href = `mailto:${contactInfo.email}`;
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="section-title">
                    <h2>Get In Touch</h2>
                    <p>Ready to start your project? Contact us today and let's build something amazing together.</p>
                </div>

                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        
                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="method-icon">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <div className="method-details">
                                    <h4>WhatsApp</h4>
                                    <p>Quick responses</p>
                                    <a 
                                        href="#" 
                                        className="method-link"
                                        onClick={openWhatsApp}
                                    >
                                        Start Conversation 
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Email Us</h4>
                                    <p>{contactInfo.email}</p>
                                    <a 
                                        href="#" 
                                        className="method-link"
                                        onClick={openEmail}
                                    >
                                        Send Email 
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Call Us</h4>
                                    <p>{contactInfo.phone}</p>
                                    <a 
                                        href={`tel:${contactInfo.phone}`} 
                                        className="method-link"
                                    >
                                        Call Now 
                                        <i className="fas fa-phone"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="method-details">
                                    <h4>Visit Us</h4>
                                    <p>{contactInfo.address}</p>
                                    <a 
                                        href="#" 
                                        className="method-link"
                                    >
                                        Get Directions 
                                        <i className="fas fa-directions"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="business-hours">
                            <h4>Business Hours</h4>
                            <p><strong>Weekdays:</strong> {contactInfo.businessHours.weekdays}</p>
                            <p><strong>Weekends:</strong> {contactInfo.businessHours.weekends}</p>
                            <p><strong>Timezone:</strong> {contactInfo.businessHours.timezone}</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form">
                        <h3>Send Message</h3>
                        
                        {isSubmitted && (
                            <div className="success-message">
                                <i className="fas fa-check-circle"></i>
                                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="form-input"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Enter company name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tell us about your project requirements, timeline, and budget..."
                                    rows="5"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-paper-plane"></i>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;