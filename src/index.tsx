import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/* eslint-disable-next-line react/jsx-no-undef */}
    <App />
  </React.StrictMode>,
);
