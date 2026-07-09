import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top of the page whenever the route changes.
 * Place this once inside the router (inside BrowserRouter).
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
