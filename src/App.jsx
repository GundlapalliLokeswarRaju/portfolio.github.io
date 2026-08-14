import About from './components/About.jsx';
import Background from './components/Background.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Stats from './components/Stats.jsx';
import { useHashScroll } from './hooks/useHashScroll.js';

export default function App() {
  useHashScroll();

  return (
    <>
      <Background />
      <Header />

      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
