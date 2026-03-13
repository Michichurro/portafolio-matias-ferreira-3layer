import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import Contact from './components/Contact';

import About from './components/About';

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <ProjectsGrid />
                <About />
                <Contact />
            </main>
        </>
    );
}

export default App;
