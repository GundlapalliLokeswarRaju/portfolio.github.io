import { Outlet, useLocation } from 'react-router-dom';
import Background from './Background.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import { useScrollToTop } from '../hooks/useScrollToTop.js';

/* The persistent shell. Background, header and footer live here so they are
   never unmounted on navigation — the aurora keeps drifting and the matrix
   canvas keeps its state as you move between pages.

   Only <Outlet /> swaps. Keying it on the pathname restarts the page-enter
   animation on every navigation; without the key React reuses the DOM and the
   transition only ever plays once. */
export default function Layout() {
  const { pathname } = useLocation();

  useScrollToTop();

  return (
    <>
      <Background />
      <Header />

      <main className="page" key={pathname}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
