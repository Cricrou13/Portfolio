import React, { Suspense } from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/index.scss';
import './i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Chargement des langues...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
