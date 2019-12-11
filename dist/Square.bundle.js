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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kulki\", function() { return Kulki; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballWrapper\", function() { return ballWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squareWrapper\", function() { return squareWrapper; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar Kulki = /** @class */ (function () {\n    function Kulki() {\n        var rows = document.getElementsByClassName(\"row\");\n        this.squares = new Array();\n        for (var i = 0; i < rows.length; i++) {\n            var row = new Array();\n            for (var j = 0; j < rows[i].children.length; j++) {\n                try {\n                    row.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"](rows[i].children[j], new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](j, i)));\n                }\n                catch (e) {\n                }\n            }\n            this.squares.push(row);\n        }\n        for (var i = 0; i < 10; i++) {\n            var x = Math.floor(Math.random() * 9);\n            var y = Math.floor(Math.random() * 9);\n            try {\n                while (!this.squares[y][x].putBall(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](Object(_square__WEBPACK_IMPORTED_MODULE_0__[\"randomColor\"])(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](x, y)))) {\n                    x = Math.floor(Math.random() * 9);\n                    y = Math.floor(Math.random() * 9);\n                }\n            }\n            catch (e) {\n            }\n        }\n    }\n    Kulki.prototype.clearPaths = function () {\n        for (var i = 0; i < 9; i++) {\n            for (var j = 0; j < 9; j++) {\n                this.squares[j][i].path = new Array();\n            }\n        }\n    };\n    Kulki.prototype.findPath = function (sq) {\n        var _this = this;\n        var path = new Array();\n        for (var i = 0; i < 9; i++) {\n            var row = new Array();\n            for (var j = 0; j < 9; j++) {\n                var arr = new Array();\n                row.push(arr);\n            }\n            path.push(row);\n        }\n        var queue = new Array();\n        queue.push(sq);\n        while (queue.length != 0) {\n            var square = queue.shift();\n            path[square.pos.y][square.pos.x] = square.path;\n            if (square == this.clickedSquare) {\n                break;\n            }\n            if (square.pos.x + 1 < 9)\n                if (!this.squares[square.pos.y][square.pos.x + 1].isOccupied() && path[square.pos.y][square.pos.x + 1].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y][square.pos.x + 1].pos);\n                    this.squares[square.pos.y][square.pos.x + 1].path = newPath;\n                    queue.push(this.squares[square.pos.y][square.pos.x + 1]);\n                }\n            if (square.pos.x - 1 >= 0)\n                if (!this.squares[square.pos.y][square.pos.x - 1].isOccupied() && path[square.pos.y][square.pos.x - 1].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y][square.pos.x - 1].pos);\n                    this.squares[square.pos.y][square.pos.x - 1].path = newPath;\n                    queue.push(this.squares[square.pos.y][square.pos.x - 1]);\n                }\n            if (square.pos.y + 1 < 9)\n                if (!this.squares[square.pos.y + 1][square.pos.x].isOccupied() && path[square.pos.y + 1][square.pos.x].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y + 1][square.pos.x].pos);\n                    this.squares[square.pos.y + 1][square.pos.x].path = newPath;\n                    queue.push(this.squares[square.pos.y + 1][square.pos.x]);\n                }\n            if (square.pos.y - 1 >= 0)\n                if (!this.squares[square.pos.y - 1][square.pos.x].isOccupied() && path[square.pos.y - 1][square.pos.x].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y - 1][square.pos.x].pos);\n                    this.squares[square.pos.y - 1][square.pos.x].path = newPath;\n                    queue.push(this.squares[square.pos.y - 1][square.pos.x]);\n                }\n        }\n        console.log(this.clickedSquare.path);\n        this.clickedSquare.path.forEach(function (el, i) {\n            _this.squares[el.y][el.x].element.style.backgroundColor = \"pink\";\n        });\n        var finalPath = __spreadArrays(this.clickedSquare.path);\n        setTimeout(function () {\n            console.log(finalPath);\n            finalPath.forEach(function (el, i) {\n                _this.squares[el.y][el.x].element.style.backgroundColor = \"white\";\n            });\n        }, 1000);\n        if (queue.length != 0) {\n            this.squares[this.clickedBall.pos.y][this.clickedBall.pos.x].removeBall();\n            this.clickedSquare.putBall(this.clickedBall);\n        }\n        this.clearPaths();\n    };\n    return Kulki;\n}());\n\nvar app = new Kulki();\nwindow.app = app;\nfunction ballWrapper(target, key, descriptor) {\n    var originalMethod = descriptor.value;\n    descriptor.value = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var result = originalMethod.apply(this, args);\n        app.clickedBall = this;\n    };\n    return descriptor;\n}\nfunction squareWrapper(target, key, descriptor) {\n    var originalMethod = descriptor.value;\n    descriptor.value = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var result = originalMethod.apply(this, args);\n        if (app.clickedBall != null) {\n            app.clickedSquare = this;\n            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x]);\n        }\n    };\n    return descriptor;\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/square.ts":
/*!***********************!*\
  !*** ./src/square.ts ***!
  \***********************/
/*! exports provided: Square, Position, Ball, Color, randomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nvar Square = /** @class */ (function () {\n    function Square(element, pos) {\n        this.element = element;\n        this.element.onclick = this.onClick.bind(this);\n        this.occupied = false;\n        this.ball = null;\n        this.pos = pos;\n        this.path = new Array();\n    }\n    Square.prototype.onClick = function (event) {\n        console.log(this);\n    };\n    Square.prototype.isOccupied = function () {\n        return this.occupied;\n    };\n    Square.prototype.removeBall = function () {\n        this.occupied = false;\n        this.ball = null;\n    };\n    Square.prototype.putBall = function (ball) {\n        if (this.occupied)\n            return false;\n        this.ball = ball;\n        ball.pos = this.pos;\n        this.occupied = true;\n        this.element.appendChild(this.ball.element);\n        return true;\n    };\n    __decorate([\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"squareWrapper\"]\n    ], Square.prototype, \"onClick\", null);\n    return Square;\n}());\n\nvar Position = /** @class */ (function () {\n    function Position(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Position;\n}());\n\nvar Ball = /** @class */ (function () {\n    function Ball(color, pos) {\n        this.pos = pos;\n        this.color = color;\n        this.element = document.createElement('div');\n        this.element.classList.add(\"ball\");\n        this.element.style.backgroundColor = this.color;\n        this.element.onclick = this.onClick.bind(this);\n        this.clicked = false;\n    }\n    Ball.prototype.onClick = function (event) {\n        console.log(this);\n        event.stopPropagation();\n        this.clicked = !this.clicked;\n        return this;\n    };\n    __decorate([\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"ballWrapper\"]\n    ], Ball.prototype, \"onClick\", null);\n    return Ball;\n}());\n\nvar Color;\n(function (Color) {\n    Color[\"Red\"] = \"Red\";\n    Color[\"Green\"] = \"Green\";\n    Color[\"Blue\"] = \"Blue\";\n    Color[\"Yellow\"] = \"Yellow\";\n    Color[\"Cyan\"] = \"Cyan\";\n    Color[\"Magenta\"] = \"Magenta\";\n    Color[\"Grey\"] = \"Grey\";\n})(Color || (Color = {}));\nfunction randomColor() {\n    var keys = Object.keys(Color).filter(function (v) { return isNaN(Number(v)); });\n    var val = keys[Math.floor(Math.random() * keys.length)];\n    return val;\n}\n\n\n//# sourceURL=webpack:///./src/square.ts?");

/***/ })

/******/ });