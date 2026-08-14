import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';

/* Vite injects BASE_URL ('/portfolio.github.io/' here, '/' on a custom domain),
   so the router's basename follows the deploy target automatically instead of
   being hardcoded in two places. */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
