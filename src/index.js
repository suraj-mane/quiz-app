import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheet/index.css';
import App from './componet/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
