/**
 * Lightweight Client-Side Router Helper
 * Zero-dependency routing for Vite SPA with browser back/forward support.
 */

// Custom event for internal route changes
const ROUTE_CHANGE_EVENT = 'app_route_change';

export function getCurrentPath() {
  if (typeof window === 'undefined') return '/';
  const path = window.location.pathname.toLowerCase();
  // Strip trailing slash except for root
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1);
  }
  return path || '/';
}

export function navigateTo(path, hash = '') {
  if (typeof window === 'undefined') return;
  const target = hash ? `${path}${hash}` : path;
  
  if (window.location.pathname !== path || window.location.hash !== hash) {
    window.history.pushState({}, '', target);
    window.dispatchEvent(new Event(ROUTE_CHANGE_EVENT));
  }

  if (hash) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function usePathListener(callback) {
  if (typeof window === 'undefined') return () => {};

  const handlePop = () => callback(getCurrentPath());
  const handleCustom = () => callback(getCurrentPath());

  window.addEventListener('popstate', handlePop);
  window.addEventListener(ROUTE_CHANGE_EVENT, handleCustom);

  return () => {
    window.removeEventListener('popstate', handlePop);
    window.removeEventListener(ROUTE_CHANGE_EVENT, handleCustom);
  };
}
