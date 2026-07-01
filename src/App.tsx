import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { GlowBackground } from './components/GlowBackground';
import { ScrollIndicator } from './components/ScrollIndicator';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', zIndex: 0 }}>
      <ScrollIndicator />
      <CustomCursor />
      <GlowBackground />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Stats />
        <About />
        <Education />
        <Skills selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
        <ArchitectureDiagram />
        <Experience />
        <Projects selectedSkill={selectedSkill} />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
