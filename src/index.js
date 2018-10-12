// import React from 'react';
// import ReactDOM from'react-dom';
// import App from './app.jsx';
// // import _ from 'lodash';
// //
// // function component() {
// //   let element = document.createElement('div');
// //
// //   // Lodash, currently included via a script, is required for this line to work
// //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// //
// //   return element;
// // }
// //
// // document.body.appendChild(component());
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(<App/>, document.getElementById("root"));
// })
import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
