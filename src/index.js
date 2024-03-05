import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'; // Assuming 'nav' is a React component
import gifBackground from './bg.gif';
import Nav from './nav';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <div className="bg-cover bg-center flex flex-col items-center gap-5 p-5 bg-orange-900" style={{ backgroundImage: `url(${gifBackground})` }}>
      <Nav/>
      <Home />
      <Footer/>

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
