import './style.css';
import { setRoutes, setupRouter } from './router.js';

// Import page modules
import Home from './pages/home.js';
import About from './pages/about.js';
import NotFound from './pages/404.js';

// Define the routes
const routes = {
  '/': Home,
  '/about': About,
  '/404': NotFound
};

// Set up the router
setRoutes(routes);
setupRouter();