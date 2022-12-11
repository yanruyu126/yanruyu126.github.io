import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './App';

const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

