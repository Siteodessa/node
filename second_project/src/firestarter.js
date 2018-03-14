import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import './styles.css';
import './bootstrap.min.css';
var jQuery = require("jquery");
var $ = jQuery;
window.jQuery = require('jquery');
window.Tether = require('tether');
import css from 'jquery';
require('bootstrap') ;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import task from './print.js';


function drop_jsx(jsx_text_variable, target_node, paste_type) {
function pushjsx() {
  var element = document.createElement('div');
  element.innerHTML += jsx_text_variable;
  return element;
}
let jsx_object = pushjsx();
if(paste_type == 'append') target_node.appendChild(jsx_object);
if(paste_type == 'prepend') target_node.prepend(jsx_object);

}

new drop_jsx(task, document.body, 'append');

const block0= 'Получилось, теперь есть вторая страница';
const block1 = '<button id="amd_test" class="btn btn-primary btn-lg">Кнопочка</button>';
const block2 = 'Очередн ой блок';

const jsx_object2 = `<div href="#" class="jumbotron my-4">${block2}</div>`;new drop_jsx(jsx_object2, document.getElementById('homestart'), 'prepend');
const jsx_object1 = `<div href="#" class="jumbotron my-4">${block1}</div>`;new drop_jsx(jsx_object1, document.getElementById('homestart'), 'prepend');
const jsx_object0 = `<div href="#" class="jumbotron my-4">${block0}</div>`;new drop_jsx(jsx_object0, document.getElementById('homestart'), 'prepend');



//---------------------------------------------------------------BABEL features collecting here
const constant = 'constant';
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f());



//---------------------------------------------------------------BABEL features collecting here
if (module.hot) {
 module.hot.accept('./print.js', function() {
   console.log('Accepting the updated printMe module!');
   document.body.removeChild(element);
   element = component(); // Re-render the "component" to update the click handler
   document.body.appendChild(element);
 })
}
