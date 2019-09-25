import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const firebase = require("firebase");
require("firebase/firestore");


firebase.initializeApp({
  apiKey: "AIzaSyCKSV0vuqezFgXRl0DDIbUSMa_wrMd_lrk",
  authDomain: "chatapplication-4aa76.firebaseapp.com",
  databaseURL: "https://chatapplication-4aa76.firebaseio.com",
  projectId: "chatapplication-4aa76",
  storageBucket: "chatapplication-4aa76.appspot.com",
  messagingSenderId: "487829345511",
  appId: "1:487829345511:web:502abd82b6ab960ef33e42",
  measurementId: "G-VXFGJT8TV3"
  });

ReactDOM.render(<div>HELLO WORLD!!</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
