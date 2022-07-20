import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const element = "TESTE";
const element2 = <h1>SALVE SALVE</h1>;

function soma(a, b)  {
  alert(a + b)
}


/*
function Apps(){

  return(
    <div className='App'>
      HELLO HELLO
      
      <Button onClick={() => soma(10, 20)} name="Felipe Barbosa"/>
      <ComponentA>
        <ComponentB>
        <Button onClick={() => soma(60, 20)} name="Aurea Barbosa"/>
        </ComponentB>
      </ComponentA>
    </div>
  )
}
*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
