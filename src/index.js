import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {disableReactTools} from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV==='production') disableReactTools();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

