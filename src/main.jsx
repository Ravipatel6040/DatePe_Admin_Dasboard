import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material'; // Importing MUI's CssBaseline for consistent base styling
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for routing functionality

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline /> {/* Provides a consistent base style */}
    <Router> {/* Wrap the entire App component in Router for routing functionality */}
      <App />
    </Router>
  </React.StrictMode>
);
