import React from 'react';
import ReactDOM from 'react-dom';

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hey There</h1>
  <p> Current Date is = {currDate} </p>
  <p> Current Time is = {currTime} </p>
  </>,
document.getElementById('root')
);