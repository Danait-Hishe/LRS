import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import Admin from '../src/components/pages/Admin'
import User from '../src/components/pages/User'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <User/>
  </React.StrictMode>
);


