import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="contact-section" id="contacto">
            <div className="container">
                <motion.div
                    className="contact-massive-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2>¿Tenés un proyecto?</h2>
                    <h2>
                        Hablemos.
                        <a href="https://wa.me/595992787331" target="_blank" rel="noopener noreferrer" className="contact-arrow-btn" aria-label="Contactar por WhatsApp">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </h2>
                </motion.div>

                <div className="footer-content">
                    <div className="footer-col">
                        <div className="social-icons">
                            <a href="https://www.instagram.com/matiferreq/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/matiasferreira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://wa.me/595992787331" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.47 2.53A11.9 11.9 0 0 0 12.05.04C5.49.04.13 5.4.13 11.96c0 2.11.55 4.17 1.6 5.99L.02 24l6.2-1.63a11.94 11.94 0 0 0 5.82 1.49h.01c6.55 0 11.92-5.37 11.92-11.93 0-3.18-1.24-6.18-3.5-8.4zM12.06 21.8a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.37A9.9 9.9 0 0 1 2.17 12c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 6.99 2.9a9.85 9.85 0 0 1 2.9 7 9.92 9.92 0 0 1-9.9 9.9zm5.42-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07a8.16 8.16 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.07c-.17-.3 0-.45.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51H8.7c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.1 4.5.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                                </svg>
                            </a>
                        </div>
                        <div className="footer-links">
                            <a href="#inicio">Inicio</a>
                            <span className="footer-separator">/</span>
                            <a href="#proyectos">Proyectos</a>
                            <span className="footer-separator">/</span>
                            <a href="#contacto">Contacto</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <span className="footer-label">WhatsApp</span>
                        <a href="https://wa.me/595992787331" target="_blank" rel="noopener noreferrer" className="footer-value">
                            +595 992 787331
                        </a>

                        <span className="footer-label" style={{ marginTop: '24px' }}>Email</span>
                        <a href="mailto:matias@email.com" className="footer-value">
                            matias@email.com
                        </a>
                    </div>

                    <div className="footer-col">
                        <span className="footer-label">LinkedIn</span>
                        <a href="https://linkedin.com/in/matiasferreira" target="_blank" rel="noopener noreferrer" className="footer-value">
                            Matias Ferreira
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
