/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("svg = document.getElementById(\"svg\");\r\n\r\nfunction clock() {\r\n    const date = new Date();\r\n    let hour = date.getHours();\r\n    let minute = date.getMinutes();\r\n    let seconds = date.getSeconds();\r\n\r\n    while (svg.lastChild) {\r\n        svg.removeChild(svg.lastChild);\r\n    }\r\n    drawStatic();\r\n    drawLine((hour*30)+(minute/60)*30,140,3,'black');\r\n    drawLine(minute*6+(seconds/60)*6,120,2,'blue');\r\n    drawLine(seconds*6,100,1,'red');\r\n}\r\nfunction drawLine(angle,height,width,color) {\r\n    let element = document.createElementNS('http://www.w3.org/2000/svg', 'line');\r\n    element.setAttribute('x1', '250');\r\n    element.setAttribute('y1', '250');\r\n    element.setAttribute('x2', '250');\r\n    element.setAttribute('y2', height);\r\n    element.setAttribute('transform', 'rotate(' + angle + ' 250 250)');\r\n    element.setAttribute('style', 'stroke:'+color+'; stroke-width:'+ width+';');\r\n    document.querySelector('svg').appendChild(element);\r\n}\r\n\r\nfunction drawStatic() {\r\n    const clock_frame = document. createElementNS(\"http://www.w3.org/2000/svg\", \"circle\");\r\n    clock_frame.setAttribute(\"cx\", \"250\");\r\n    clock_frame.setAttribute(\"cy\", \"250\");\r\n    clock_frame.setAttribute(\"r\", \"150\");\r\n    clock_frame.setAttribute(\"style\", \"fill:none;stroke:black; stroke-width:2px\");\r\n    document.querySelector('svg').appendChild(clock_frame);\r\n    for(let i = 1; i <= 12; i++) {\r\n        let el = document.createElementNS('http://www.w3.org/2000/svg', 'line');\r\n        el.setAttribute('x1', '250');\r\n        el.setAttribute('y1', '100');\r\n        el.setAttribute('x2', '250');\r\n        el.setAttribute('y2', '110');\r\n        el.setAttribute('transform', 'rotate(' + (i*360/12) + ' 250 250)');\r\n        el.setAttribute('style', 'stroke: black; stroke-width:3px;');\r\n        document.querySelector('svg').appendChild(el);\r\n    }\r\n    for(let j = 1; j <= 12; j++) {\r\n        let text = document.createElementNS('http://www.w3.org/2000/svg', 'text');\r\n        text.setAttribute('x', '240');\r\n        text.setAttribute('y', '90');\r\n        text.setAttributeNS(null,'font-size','20');\r\n        text.setAttribute('transform', 'rotate(' + (j*360/12) + ' 250 250)');\r\n        text.setAttribute('style', 'stroke: black; stroke-width:3px;');\r\n        // text.setAttribute('transform','translate(0, 150)');\r\n        // text.setAttribute('transform', 'rotate(' + (j*360/12) + ' 0 0)');\r\n        text.innerHTML = ''+j+'';\r\n        document.querySelector('svg').appendChild(text);\r\n    }\r\n\r\n}\r\n\r\nsetInterval('clock()', 500);\r\n\n\n//# sourceURL=webpack:///./src/init.js?");

/***/ })

/******/ });