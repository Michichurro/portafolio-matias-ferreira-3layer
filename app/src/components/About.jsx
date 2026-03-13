import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="resume-section" id="sobre-mi">
            <div className="container">
                <div className="resume-content">
                    <motion.div 
                        className="resume-column-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div 
                            className="resume-header"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2>
                                Un poco <br />
                                <span className="serif-italic accent-text">sobre mi</span>
                            </h2>
                        </motion.div>
                        <div className="resume-image-wrapper">
                            <img 
                                src="/images/arquitecto matias ferreira/WhatsApp Image 2026-03-03 at 3.50.01 PM.jpeg" 
                                alt="Matias Ferreira"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="resume-column-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="resume-categories">
                            
                            {/* Experiencia Laboral */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Experiencia Laboral</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2020 — Pres.</div>
                                        <div className="resume-item-content">
                                            <h4>Arquitecto Proyectista Senior</h4>
                                            <p>Estudio de Arquitectura Placeholder. Liderazgo en el diseño y desarrollo de proyectos residenciales de gran escala.</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2016 — 2020</div>
                                        <div className="resume-item-content">
                                            <h4>Arquitecto Junior</h4>
                                            <p>Constructora Placeholder. Asistencia en dirección de obra y confección de planos ejecutivos para edificios corporativos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Estudios */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Estudios</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2010 — 2016</div>
                                        <div className="resume-item-content">
                                            <h4>Título de Arquitecto</h4>
                                            <p>Universidad Nacional de Placeholder. Mención de honor por proyecto final de carrera.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cursos */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Cursos y Especializaciones</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2023</div>
                                        <div className="resume-item-content">
                                            <h4>Desarrollo Inmobiliario Avanzado</h4>
                                            <p>Asociación de Desarrolladores Inmobiliarios. Especialización en análisis financiero y factibilidad de proyectos urbanos.</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2021</div>
                                        <div className="resume-item-content">
                                            <h4>Renderizado Fotorealista y Modelado 3D</h4>
                                            <p>Academia Placeholder. Experto en V-Ray, Corona Renderer, y 3ds Max.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Habilidades */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Herramientas</h3>
                                <div className="skills-grid">
                                    <span className="skill-tag">AutoCAD</span>
                                    <span className="skill-tag">Revit</span>
                                    <span className="skill-tag">SketchUp</span>
                                    <span className="skill-tag">V-Ray</span>
                                    <span className="skill-tag">Lumion</span>
                                    <span className="skill-tag">Photoshop</span>
                                    <span className="skill-tag">Illustrator</span>
                                    <span className="skill-tag">Gestión BIM</span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
