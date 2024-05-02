import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/main.css';
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";


// window.addEventListener("load", () => {
//   setTimeout(() => {
//     if (typeof yotpoWidgetsContainer !== "undefined") {
//       yotpoWidgetsContainer.initWidgets();
//       console.log("loaded");
//     } else {
//       console.log("yotpoWidgetsContainer not found, no widgets to initialize");
//     }
//   }, 1000);
// });


// import React, { useEffect } from 'react';
// const MyComponent = () => {
//   useEffect(() => {
//     const handleLoad = () => {
//       // Perform actions after the component has fully loaded
//     };
//     window.addEventListener('load', handleLoad);
//     return () => {
//       window.removeEventListener('load', handleLoad);
//     };
//   }, []);
//   return <div>My Component</div>;
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
