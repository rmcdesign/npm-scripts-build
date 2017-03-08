(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var variable = 123;

exports.variable = variable;

},{}],2:[function(require,module,exports){
"use strict";

var _module = require("./module");

//import $ from "jquery";


var out = document.getElementById("output");

//console.log($);

//$("#output").on("click", (e) => console.log($(this)));


//out.addEventListener("click", (e) => console.log(e.target.innerHTML));

},{"./module":1}]},{},[2])
//# sourceMappingURL=bundle.js.map
