import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/* Browsers preserve scroll position across history entries, which is right for
   back/forward but wrong for following a link: navigate from the bottom of
   Projects to Contact and you land halfway down the new page.

   So reset only on PUSH (a link click). On POP the browser is restoring a
   position the user actually left, and stealing that is worse than the bug. */
export function useScrollToTop() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'POP') return;
    window.scrollTo(0, 0);
  }, [pathname, navigationType]);
}
