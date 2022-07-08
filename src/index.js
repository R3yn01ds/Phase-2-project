// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './about';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react"
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

//component
import TodoContainer from "./Components/TodoContainer"

//stylesheet
import "./App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App.css />
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename={process.env.PUBLIC_URL}>
//       <TodoContainer />
//     </Router>  
//   </React.StrictMode>, 
//   document.getElementById("root")
// );