import { useState } from 'react';
import './styles/App.css';
import Download from './components/Download';
import CV from './components/CV';

export default function App() {
  return (
    <div className="app">
      <Download />
      <CV />
    </div>
  );
}
