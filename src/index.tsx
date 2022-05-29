import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');

if(rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

