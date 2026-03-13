import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
};

const item = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }
    }
};

const Hero = () => {
    return (
        <section className="hero" id="inicio">
            {/* Hero Background Image */}
            <div className="hero-background" style={{ overflow: 'hidden' }}>
                <motion.img
                    src="/images/arquitecto matias ferreira/IMAGEN SECCION HERO.png"
                    alt="Matias Ferreira"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.div 
                    className="hero-background-overlay" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </div>

            <div className="container" style={{ position: 'relative', height: '100%', zIndex: 2 }}>
                <motion.div
                    className="hero-content left-align"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Title */}
                    <motion.h1 variants={item}>
                        Matías<br />
                        <span className="serif-italic" style={{ color: '#0d0d0d' }}>Ferreira</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2 
                        variants={item} 
                        style={{ 
                            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
                            fontWeight: 500, 
                            color: '#1a1a1a', 
                            marginBottom: '24px',
                            maxWidth: '500px'
                        }}
                    >
                        Desarrollo estratégico para <br />
                        proyectos inmobiliarios.
                    </motion.h2>

                    {/* Description / Value Proposition */}
                    <motion.p className="hero-description" variants={item} style={{ margin: '0 0 40px 0', maxWidth: '400px', color: '#4a4a4a', fontWeight: '500' }}>
                        Arquitecto con 8 años de experiencia<br />
                        diseñando espacios que combinan<br />
                        visión, funcionalidad y valor.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
