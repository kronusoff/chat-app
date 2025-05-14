import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем новый способ импорта
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаём корневой элемент

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
