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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/square.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: Kulki, ballWrapper, squareWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kulki\", function() { return Kulki; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballWrapper\", function() { return ballWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squareWrapper\", function() { return squareWrapper; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.ts\");\n\r\nvar Kulki = /** @class */ (function () {\r\n    function Kulki() {\r\n        var rows = document.getElementsByClassName(\"row\");\r\n        this.squares = new Array();\r\n        for (var i = 0; i < rows.length; i++) {\r\n            var row = new Array();\r\n            for (var j = 0; j < rows[i].children.length; j++) {\r\n                try {\r\n                    row.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"](rows[i].children[j], new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](j, i)));\r\n                }\r\n                catch (e) {\r\n                }\r\n            }\r\n            this.squares.push(row);\r\n        }\r\n        for (var i = 0; i < 10; i++) {\r\n            var x = Math.floor(Math.random() * 9);\r\n            var y = Math.floor(Math.random() * 9);\r\n            try {\r\n                while (!this.squares[y][x].putBall(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](Object(_square__WEBPACK_IMPORTED_MODULE_0__[\"randomColor\"])(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](x, y)))) {\r\n                    x = Math.floor(Math.random() * 9);\r\n                    y = Math.floor(Math.random() * 9);\r\n                }\r\n            }\r\n            catch (e) {\r\n            }\r\n        }\r\n    }\r\n    Kulki.prototype.findPath = function (sq) {\r\n        var path = new Array();\r\n        for (var i = 0; i < 9; i++) {\r\n            var row = new Array();\r\n            for (var j = 0; j < 9; j++) {\r\n                var arr = new Array();\r\n                row.push(arr);\r\n            }\r\n            path.push(row);\r\n        }\r\n    };\r\n    return Kulki;\r\n}());\r\n\r\nvar app = new Kulki();\r\nwindow.app = app;\r\nfunction ballWrapper(target, key, descriptor) {\r\n    var originalMethod = descriptor.value;\r\n    descriptor.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var result = originalMethod.apply(this, args);\r\n        app.clickedBall = this;\r\n    };\r\n    return descriptor;\r\n}\r\nfunction squareWrapper(target, key, descriptor) {\r\n    var originalMethod = descriptor.value;\r\n    descriptor.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var result = originalMethod.apply(this, args);\r\n        if (app.clickedBall != null) {\r\n            app.clickedSquare = this;\r\n            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x]);\r\n        }\r\n    };\r\n    return descriptor;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/square.ts":
/*!***********************!*\
  !*** ./src/square.ts ***!
  \***********************/
/*! exports provided: Square, Position, Ball, Color, randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\nvar Square = /** @class */ (function () {\r\n    function Square(element, pos) {\r\n        this.element = element;\r\n        this.element.onclick = this.onClick.bind(this);\r\n        this.occupied = false;\r\n        this.ball = null;\r\n        this.pos = pos;\r\n    }\r\n    Square.prototype.onClick = function (event) {\r\n        console.log(this);\r\n    };\r\n    Square.prototype.isOccupied = function () {\r\n        return this.occupied;\r\n    };\r\n    Square.prototype.putBall = function (ball) {\r\n        if (this.occupied)\r\n            return false;\r\n        this.ball = ball;\r\n        this.occupied = true;\r\n        this.element.appendChild(this.ball.element);\r\n        return true;\r\n    };\r\n    __decorate([\r\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"squareWrapper\"]\r\n    ], Square.prototype, \"onClick\", null);\r\n    return Square;\r\n}());\r\n\r\nvar Position = /** @class */ (function () {\r\n    function Position(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return Position;\r\n}());\r\n\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(color, pos) {\r\n        this.pos = pos;\r\n        this.color = color;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add(\"ball\");\r\n        this.element.style.backgroundColor = this.color;\r\n        this.element.onclick = this.onClick.bind(this);\r\n        this.clicked = false;\r\n    }\r\n    Ball.prototype.onClick = function (event) {\r\n        console.log(this);\r\n        event.stopPropagation();\r\n        this.clicked = !this.clicked;\r\n        return this;\r\n    };\r\n    __decorate([\r\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"ballWrapper\"]\r\n    ], Ball.prototype, \"onClick\", null);\r\n    return Ball;\r\n}());\r\n\r\nvar Color;\r\n(function (Color) {\r\n    Color[\"Red\"] = \"Red\";\r\n    Color[\"Green\"] = \"Green\";\r\n    Color[\"Blue\"] = \"Blue\";\r\n    Color[\"Yellow\"] = \"Yellow\";\r\n    Color[\"Cyan\"] = \"Cyan\";\r\n    Color[\"Magenta\"] = \"Magenta\";\r\n    Color[\"Grey\"] = \"Grey\";\r\n})(Color || (Color = {}));\r\nfunction randomColor() {\r\n    var keys = Object.keys(Color).filter(function (v) { return isNaN(Number(v)); });\r\n    var val = keys[Math.floor(Math.random() * keys.length)];\r\n    return val;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/square.ts?");

/***/ })

/******/ });