import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="project-card"
            layout
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
        >
            <div className="project-card-image-wrapper">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                    loading="lazy"
                />
            </div>
            <div className="project-card-info">
                <div className="project-card-category">{project.category}</div>
                <h3 className="project-card-title">{project.title}</h3>
            </div>
            <div className="project-card-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
