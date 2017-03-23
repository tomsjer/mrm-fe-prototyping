(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _main = require('./main.js');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _main2.default(); // Es posible usar todas las funcionalidades de ES6
// http://es6-features.org/
// 
// Babel transpila nuestro codigo fuente a la versión
// de JS soportada por los navegadores actuales.
// 
// Aún asi, gulp-sourcemaps nos permite debuguear el código
// fuente original sin transpilar ;)
// 
// Se recomienda que el index.js sea un lugar para importar 
// los modulos principales de la aplicacion e inicializar.

},{"./main.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.unaPropiedad = (0, _utils.unaFuncion)();
    this.unMetodo();
  }

  _createClass(Main, [{
    key: 'unMetodo',
    value: function unMetodo() {
      console.log('Bienvenidos a: ' + this.unaPropiedad);
    }
  }]);

  return Main;
}();

exports.default = Main;

},{"./utils.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function unaFuncion() {
    return "\n  ______  _____   __  \n |  ____|/ ____| / /  \n | |__  | (___  / /_  \n |  __|  \\___ \\| '_ \\ \n | |____ ____) | (_) |\n |______|_____/ \\___/ \n                      \n";
}
exports.unaFuncion = unaFuncion;

},{}]},{},[1]);

//# sourceMappingURL=build.js.map
