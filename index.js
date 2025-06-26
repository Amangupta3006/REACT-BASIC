import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from "react";
import Button from './App';
import {My} from './App';
import Garbage from './Arrowfxn.js';
import App_2 from './Const.js';
import App from './Const.js';
import Mycars from './Obj.js';
import Myapp from './Counter.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Button />
    <My/>
    <Garbage/>
    <Mycars/>
    <App_2/>
    <App/>
    <Myapp/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 