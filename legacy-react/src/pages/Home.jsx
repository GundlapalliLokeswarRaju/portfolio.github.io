import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';

/* The landing page keeps the hero and the headline numbers together — they're
   one pitch, and splitting them would leave the hero with nothing under it. */
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
}
