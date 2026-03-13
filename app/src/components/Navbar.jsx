import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const links = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Proyectos', href: '#proyectos' },
        { label: 'Sobre mi', href: '#sobre-mi' },
        { label: 'Contacto', href: '#contacto' },
    ];

    return (
        <motion.nav
            className="dock"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <a href="#inicio" className="dock-logo" onClick={(e) => handleLinkClick(e, '#inicio')}>
                MF<span>.</span>
            </a>

            <div className="dock-divider" />

            <ul className={`dock-links ${menuOpen ? 'open' : ''}`}>
                {links.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="dock-divider" />

            <a
                href="#contacto"
                className="dock-cta"
                onClick={(e) => handleLinkClick(e, '#contacto')}
            >
                Hablemos →
            </a>

            <button
                className={`dock-menu-toggle ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>
        </motion.nav>
    );
};

export default Navbar;
