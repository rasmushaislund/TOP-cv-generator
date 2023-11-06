import React from 'react';
import ReactDOM from 'react-dom/client';
import GithubLink from './components/GithubLink.jsx';
import App from './App.jsx';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GithubLink />
    <App />
  </React.StrictMode>,
);
