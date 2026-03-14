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
                                    <span className="skill-tag">PROYECTISTA ARQ.</span>
                                    <span className="skill-tag">ANALISIS DE DESARROLLOS INMOBILIARIOS</span>
                                    <span className="skill-tag">MODELADOR 3D</span>
                                    <span className="skill-tag">MODELADOR BIM</span>
                                    <span className="skill-tag">RENDERING</span>
                                    <span className="skill-tag">LIDERAZGO</span>
                                </div>
                            </div>

                            {/* Experiencia */}
                            <div className="resume-category">
                                <h3 className="resume-category-title">Experiencia</h3>
                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-item-year">2020 — ACT.</div>
                                        <div className="resume-item-content">
                                            <h4>BUILDING INNOVATIONS SA</h4>
                                            <p><strong>GERENTE DEL ÁREA DE "NUEVOS PROYECTOS"</strong><br/>
                                            GERENCIA - PROYECTISTA - ANALISTA - MODELADOR 3D - RENDERING</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">-</div>
                                        <div className="resume-item-content">
                                            <h4>INDEPENDIENTE</h4>
                                            <p>PROYECTISTA - ANALISTA - MODELADOR BIM / 3D - RENDERING</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2019</div>
                                        <div className="resume-item-content">
                                            <h4>BIAU 2019</h4>
                                            <p><strong>PARTICIPANTE EXPOSITOR</strong><br/>
                                            ÁREA ACADÉMICA - PROYECTO TECMODULE<br/>
                                            PABELLÓN DEL PARAGUAY - CONSTRUCCIÓN</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2019</div>
                                        <div className="resume-item-content">
                                            <h4>BIOCONS ARQUITECTURA</h4>
                                            <p><strong>PROYECTISTA</strong><br/>
                                            PROYECTISTA - MODELADOR 2D - MODELADOR 3D - RENDERING</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2018</div>
                                        <div className="resume-item-content">
                                            <h4>CONCURSO FA</h4>
                                            <p><strong>PROYECTISTA</strong><br/>
                                            COLABORADOR DEL EQUIPO DE TRABAJO CON LOS ARQUITECTOS NICOLAS MORALES Y PABLO BARBADILLO</p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2018</div>
                                        <div className="resume-item-content">
                                            <h4>LUJAN CONSTRUCCIONES</h4>
                                            <p><strong>PROYECTISTA</strong><br/>
                                            MODELADOR 2D - MODELADOR 3D - RENDERING</p>
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
                                            <h4>MASTER</h4>
                                            <p>CAMPUS POLITECNICO NUEVAS TECNOLOGÍAS - MADRID<br/><strong>MASTER EN VISUALIZACIÓN ARQUITECTÓNICA 3D</strong></p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2016 — 2022</div>
                                        <div className="resume-item-content">
                                            <h4>EDUCACIÓN SUPERIOR</h4>
                                            <p>UNIVERSIDAD NACIONAL DE ASUNCIÓN<br/>FACULTAD DE ARQUITECTURA DISEÑO Y ARTE - <strong>ARQUITECTURA</strong></p>
                                        </div>
                                    </div>
                                    <div className="resume-item">
                                        <div className="resume-item-year">2013 — 2015</div>
                                        <div className="resume-item-content">
                                            <h4>EDUCACIÓN TÉCNICA/MEDIA</h4>
                                            <p>ESCUELA NACIONAL DE COMERCIO Nº 2<br/><strong>BACHILLERATO TÉCNICO EN ADMINISTRACIÓN DE NEGOCIOS</strong></p>
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
                                    <span className="skill-tag">AUTODESK REVIT</span>
                                    <span className="skill-tag">AUTOCAD</span>
                                    <span className="skill-tag">3D MAX</span>
                                    <span className="skill-tag">SKETCHUP</span>
                                    <span className="skill-tag">D5 RENDER</span>
                                    <span className="skill-tag">CORONA RENDER</span>
                                    <span className="skill-tag">ADOBE PHOTOSHOP</span>
                                    <span className="skill-tag">ADOBE ILUSTRATOR</span>
                                    <span className="skill-tag">UNREAL ENGINE</span>
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
