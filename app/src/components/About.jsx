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
                            
                            {/* Habilidades Principales */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Habilidades</h3>
                                <div className="skills-grid" style={{ marginBottom: '2rem' }}>
                                    <span className="skill-tag">Proyectista Arq.</span>
                                    <span className="skill-tag">Análisis de Desarrollos Inmobiliarios</span>
                                    <span className="skill-tag">Modelador 3D</span>
                                    <span className="skill-tag">Modelador BIM</span>
                                    <span className="skill-tag">Rendering</span>
                                    <span className="skill-tag">Liderazgo</span>
                                </div>
                            </div>

                            {/* Experiencia */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Experiencia</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2020 — Act.</div>
                                        <div className="resume-item-content">
                                            <h4>Building Innovations SA</h4>
                                            <p><strong>Gerente del Área de "Nuevos Proyectos"</strong><br/>
                                            Gerencia - Proyectista - Analista - Modelador 3D - Rendering</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">-</div>
                                        <div className="resume-item-content">
                                            <h4>Independiente</h4>
                                            <p>Proyectista - Analista - Modelador BIM / 3D - Rendering</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2019</div>
                                        <div className="resume-item-content">
                                            <h4>BIAU 2019</h4>
                                            <p><strong>Participante Expositor</strong><br/>
                                            Área Académica - Proyecto Tecmodule<br/>
                                            Pabellón del Paraguay - Construcción</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2019</div>
                                        <div className="resume-item-content">
                                            <h4>Biocons Arquitectura</h4>
                                            <p><strong>Proyectista</strong><br/>
                                            Proyectista - Modelador 2D - Modelador 3D - Rendering</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2018</div>
                                        <div className="resume-item-content">
                                            <h4>Concurso FADA</h4>
                                            <p><strong>Proyectista</strong><br/>
                                            Colaborador del equipo de trabajo con los arquitectos Nicolás Morales y Pablo Barbadillo</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2018</div>
                                        <div className="resume-item-content">
                                            <h4>Lujan Construcciones</h4>
                                            <p><strong>Proyectista</strong><br/>
                                            Modelador 2D - Modelador 3D - Rendering</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Estudios */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Educación</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2023</div>
                                        <div className="resume-item-content">
                                            <h4>Master</h4>
                                            <p>Campus Politécnico Nuevas Tecnologías - Madrid<br/><strong>Master en Visualización Arquitectónica 3D</strong></p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2016 — 2022</div>
                                        <div className="resume-item-content">
                                            <h4>Educación Superior</h4>
                                            <p>Universidad Nacional de Asunción<br/>Facultad de Arquitectura, Diseño y Arte - <strong>Arquitectura</strong></p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2013 — 2015</div>
                                        <div className="resume-item-content">
                                            <h4>Educación Técnica / Media</h4>
                                            <p>Escuela Nacional de Comercio Nº 2<br/><strong>Bachillerato Técnico en Administración de Negocios</strong></p>
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
                                <h3 className="resume-category-title">Software</h3>
                                <div className="skills-grid">
                                    <span className="skill-tag">Autodesk Revit</span>
                                    <span className="skill-tag">AutoCAD</span>
                                    <span className="skill-tag">3ds Max</span>
                                    <span className="skill-tag">SketchUp</span>
                                    <span className="skill-tag">D5 Render</span>
                                    <span className="skill-tag">Corona Renderer</span>
                                    <span className="skill-tag">Adobe Photoshop</span>
                                    <span className="skill-tag">Adobe Illustrator</span>
                                    <span className="skill-tag">Unreal Engine</span>
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
