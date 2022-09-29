//import $ from 'jquery';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import MyProfile from './features/myprofile/MyProfile';

//import Popper from 'popper.js';
//REACT STRAP
//import 'bootstrap/dist/css/bootstrap.css'

//import './css/bootstrap.css'
import './css/animate.css'
import './css/icomoon.css'
import './css/style.css'
//import './js/jquery.easing.1.3.js'
//import './js/bootstrap.min.js'
//import './js/jquery.waypoints.min.js'
//import './js/jquery.stellar.min.js'
//import './js/jquery.easypiechart.min.js'



//import './js/main.js'





const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyProfile/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
