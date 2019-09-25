import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


const firebase = require("firebase");
require("firebase/firestore");


firebase.initializeApp({
    apiKey: "AIzaSyDmPMLTjlx3h85ygoP9utNOuHyylPrtGG0",
    authDomain: "chatapplication-319f3.firebaseapp.com",
    databaseURL: "https://chatapplication-319f3.firebaseio.com",
    projectId: "chatapplication-319f3",
    storageBucket: "chatapplication-319f3.appspot.com",
    messagingSenderId: "1013676921051",
    appId: "1:1013676921051:web:8ce81ca432d9bb749cbcfe",
    measurementId: "G-WPDDDD3244"
  });

ReactDOM.render(<div>HELLO WORLD!!</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
