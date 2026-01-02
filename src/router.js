// A simple vanilla JS router.
// This is not a full-featured router, but it is enough for this project.

const app = document.getElementById('app');

// Will be populated with page modules
const routes = {}; 

/**
 * Sets the routes for the application.
 * @param {object} routeConfig - An object where keys are paths and values are page modules.
 */
export function setRoutes(routeConfig) {
  for (const path in routeConfig) {
    routes[path] = routeConfig[path];
  }
}

/**
 * Renders the page content into the app container.
 * @param {string} path - The path of the page to render.
 */
async function route() {
  const path = window.location.pathname;
  // Find a matching route. Support for path variables could be added here if needed.
  const page = routes[path] || routes['/404']; // Fallback to a 404 page

  if (app && page) {
    // The page module should have a render function that returns HTML string or a DOM element
    const content = await page.render();
    app.innerHTML = ''; // Clear previous content
    if (typeof content === 'string') {
      app.innerHTML = content;
    } else {
      app.appendChild(content);
    }
    // The page module can optionally have an after_render function
    if (page.after_render) {
      await page.after_render();
    }
  }
}

/**
 * Navigates to a new path and updates the history.
 * @param {string} path - The path to navigate to.
 */
export function navigate(path) {
  window.history.pushState({}, path, window.location.origin + path);
  route();
}

/**
 * Sets up the router event listeners.
 */
export function setupRouter() {
  // Handle navigation via browser back/forward buttons
  window.addEventListener('popstate', route);

  document.addEventListener('DOMContentLoaded', () => {
    // Handle clicks on internal links
    document.body.addEventListener('click', e => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.matches('[href^="/"]')) {
        e.preventDefault();
        navigate(anchor.getAttribute('href'));
      }
    });

    // Initial route on page load
    route();
  });
}
