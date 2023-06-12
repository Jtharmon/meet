import React from 'react';
import { render } from 'react-dom';
import './index.css';
import  App  from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';

const root = document.getElementById('root');
render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    root
);

serviceWorkerRegistration.register();

reportWebVitals();

atatus.config('e2d3840504684d2ea1b503144542152a').install();