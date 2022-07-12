import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import Scroll from './components/Scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
    {/* <Scroll/> */}
  </BrowserRouter>,
  document.getElementById('root')
);

