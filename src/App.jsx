import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import NotFound from './components/NotFound.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
