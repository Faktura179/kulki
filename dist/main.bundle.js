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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: Color, Kulki, app, ballWrapper, squareWrapper, highlightPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kulki\", function() { return Kulki; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballWrapper\", function() { return ballWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squareWrapper\", function() { return squareWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highlightPath\", function() { return highlightPath; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n\nvar Color;\n(function (Color) {\n    Color[\"Red\"] = \"Red\";\n    Color[\"Green\"] = \"Green\";\n    Color[\"Blue\"] = \"Blue\";\n    Color[\"Yellow\"] = \"Yellow\";\n    Color[\"Cyan\"] = \"Cyan\";\n    Color[\"Magenta\"] = \"Magenta\";\n    Color[\"Grey\"] = \"Grey\";\n})(Color || (Color = {}));\nfunction randomColor() {\n    var keys = Object.keys(Color); //.filter(v => isNaN(Number(v)))\n    var val = keys[Math.floor(Math.random() * keys.length)];\n    return val;\n}\nfunction Pozdrowionko(name) {\n    console.log('-- decorator factory invoked --');\n    return function (constructor) {\n        console.log('-- decorator invoked --');\n        constructor.prototype.pozdrowionko = function () {\n            return \"Pozdrawiam \" + name;\n        };\n    };\n}\nfunction aboveZero() {\n    var value;\n    return function (target, propertyKey) {\n        Object.defineProperty(target, propertyKey, {\n            configurable: true,\n            enumerable: true,\n            get: function () {\n                // Return the scoped value\n                return value;\n            },\n            set: function (newValue) {\n                // Update the scoped value with max(newValue, min)\n                if (newValue < 0)\n                    console.log(\"changing value to 0\");\n                value = (newValue >= 0\n                    ? newValue\n                    : 0);\n            }\n        });\n    };\n}\nvar Kulki = /** @class */ (function () {\n    function Kulki() {\n        this.points = 0;\n        document.getElementById(\"pts\").innerText = this.points.toString();\n        var rows = document.getElementsByClassName(\"row\");\n        this.squares = new Array();\n        for (var i = 0; i < rows.length; i++) {\n            var row = new Array();\n            for (var j = 0; j < rows[i].children.length; j++) {\n                try {\n                    row.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"](rows[i].children[j], new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](j, i)));\n                }\n                catch (e) {\n                }\n            }\n            this.squares.push(row);\n        }\n        for (var i = 0; i < 5; i++) {\n            var x = Math.floor(Math.random() * 9);\n            var y = Math.floor(Math.random() * 9);\n            try {\n                while (!this.squares[y][x].putBall(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](x, y)))) {\n                    x = Math.floor(Math.random() * 9);\n                    y = Math.floor(Math.random() * 9);\n                }\n            }\n            catch (e) {\n            }\n        }\n        this.nextSqaures = new Array();\n        this.nextBalls = new Array();\n        var sqs = document.getElementsByClassName(\"square1\");\n        for (var i = 0; i < sqs.length; i++) {\n            this.nextSqaures.push(sqs[i]);\n        }\n        for (var i = 0; i < 3; i++) {\n            try {\n                var ball = new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](-1, -1));\n                this.nextBalls.push(ball);\n                this.nextSqaures[i].appendChild(this.nextBalls[i].element);\n            }\n            catch (e) {\n            }\n        }\n    }\n    Kulki.prototype.clearPaths = function () {\n        for (var i = 0; i < 9; i++) {\n            for (var j = 0; j < 9; j++) {\n                this.squares[j][i].path = new Array();\n            }\n        }\n    };\n    Kulki.prototype.checkPoints = function () {\n        var deleted = false;\n        //Check if there are enough of the same colors in rows\n        var sameInRow = 0;\n        var color = null;\n        var rowStart = null;\n        var rowLength = null;\n        for (var i = 0; i < 9; i++) {\n            sameInRow = 0;\n            color = null;\n            rowStart = null;\n            rowLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (this.squares[i][j].isOccupied()) {\n                    if (this.squares[i][j].getBallColor() == color) {\n                        sameInRow++;\n                    }\n                    else {\n                        sameInRow = 0;\n                        color = this.squares[i][j].getBallColor();\n                    }\n                }\n                else {\n                    sameInRow = 0;\n                    color = null;\n                }\n                if (sameInRow >= 4) {\n                    rowStart = j - sameInRow;\n                    rowLength = sameInRow;\n                    //console.log(i,j,j-sameInRow,sameInRow)\n                }\n            }\n            if (rowStart != null) {\n                for (var k = 0; k < rowLength + 1; k++) {\n                    console.log(\"delete from sqares[\", i, \"][\", rowStart + k, \"]\");\n                    this.squares[i][rowStart + k].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        //Check if there are enough of the same colors in columns\n        var sameInCol = 0;\n        color = null;\n        var ColStart = null;\n        var ColLength = null;\n        for (var i = 0; i < 9; i++) {\n            sameInCol = 0;\n            color = null;\n            ColStart = null;\n            ColLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (this.squares[j][i].isOccupied()) {\n                    if (this.squares[j][i].getBallColor() == color) {\n                        sameInCol++;\n                    }\n                    else {\n                        sameInCol = 0;\n                        color = this.squares[j][i].getBallColor();\n                    }\n                }\n                else {\n                    sameInCol = 0;\n                    color = null;\n                }\n                if (sameInCol >= 4) {\n                    ColStart = j - sameInCol;\n                    ColLength = sameInCol;\n                    //console.log(i,j,j-sameInRow,sameInRow)\n                }\n            }\n            if (ColStart != null) {\n                for (var k = 0; k < ColLength + 1; k++) {\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i, \"]\");\n                    this.squares[ColStart + k][i].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        //Check if there are enough of the same colors in diag left-right\n        for (var i = 0; i < 9; i++) {\n            sameInCol = 0;\n            color = null;\n            ColStart = null;\n            ColLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (j + i < 9) {\n                    if (this.squares[j][j + i].isOccupied()) {\n                        if (this.squares[j][j + i].getBallColor() == color) {\n                            sameInCol++;\n                        }\n                        else {\n                            sameInCol = 0;\n                            color = this.squares[j][j + i].getBallColor();\n                        }\n                    }\n                    else {\n                        sameInCol = 0;\n                        color = null;\n                    }\n                    if (sameInCol >= 4) {\n                        ColStart = j - sameInCol;\n                        ColLength = sameInCol;\n                        //console.log(i,j,j-sameInCol,sameInCol)\n                    }\n                }\n            }\n            if (ColStart != null) {\n                for (var k = 0; k < ColLength + 1; k++) {\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i + k + ColStart, \"]\");\n                    this.squares[ColStart + k][i + k + ColStart].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        for (var i = 0; i < 9; i++) {\n            sameInCol = 0;\n            color = null;\n            ColStart = null;\n            ColLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (j + i < 9) {\n                    if (this.squares[j + i][j].isOccupied()) {\n                        if (this.squares[j + i][j].getBallColor() == color) {\n                            sameInCol++;\n                        }\n                        else {\n                            sameInCol = 0;\n                            color = this.squares[j + i][j].getBallColor();\n                        }\n                    }\n                    else {\n                        sameInCol = 0;\n                        color = null;\n                    }\n                    if (sameInCol >= 4) {\n                        ColStart = j - sameInCol;\n                        ColLength = sameInCol;\n                        //console.log(i,j,j-sameInCol,sameInCol)\n                    }\n                }\n            }\n            if (ColStart != null) {\n                for (var k = 0; k < ColLength + 1; k++) {\n                    console.log(\"delete from sqares[\", i + k + ColStart, \"][\", ColStart + k, \"]\");\n                    this.squares[i + k + ColStart][ColStart + k].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        //Check if there are enough of the same colors in diag right-left\n        for (var i = 8; i >= 0; i--) {\n            sameInCol = 0;\n            color = null;\n            ColStart = null;\n            ColLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (i - j >= 0) {\n                    if (this.squares[i - j][j].isOccupied()) {\n                        if (this.squares[i - j][j].getBallColor() == color) {\n                            sameInCol++;\n                        }\n                        else {\n                            sameInCol = 0;\n                            color = this.squares[i - j][j].getBallColor();\n                        }\n                    }\n                    else {\n                        sameInCol = 0;\n                        color = null;\n                    }\n                    if (sameInCol >= 4) {\n                        ColStart = i - j;\n                        ColLength = sameInCol;\n                        console.log(i, j, ColStart, sameInCol);\n                    }\n                }\n            }\n            if (ColStart != null) {\n                for (var k = 0; k < ColLength + 1; k++) {\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i - k - ColStart, \"]\");\n                    this.squares[ColStart + k][i - k - ColStart].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        for (var i = 0; i < 9; i++) {\n            sameInCol = 0;\n            color = null;\n            ColStart = null;\n            ColLength = null;\n            for (var j = 0; j < 9; j++) {\n                if (i + j < 9) {\n                    if (this.squares[8 - j][i + j].isOccupied()) {\n                        if (this.squares[8 - j][i + j].getBallColor() == color) {\n                            sameInCol++;\n                        }\n                        else {\n                            sameInCol = 0;\n                            color = this.squares[8 - j][i + j].getBallColor();\n                        }\n                    }\n                    else {\n                        sameInCol = 0;\n                        color = null;\n                    }\n                    if (sameInCol >= 4) {\n                        ColStart = j - sameInCol;\n                        ColLength = sameInCol;\n                        console.log(i, j, ColStart, sameInCol);\n                    }\n                }\n            }\n            if (ColStart != null) {\n                for (var k = 0; k < ColLength + 1; k++) {\n                    console.log(\"delete from sqares[\", 8 - ColStart - k, \"][\", i + k + ColStart, \"]\");\n                    this.squares[8 - ColStart - k][i + k + ColStart].removeBall();\n                    this.points++;\n                }\n                deleted = true;\n            }\n        }\n        //set points\n        document.getElementById(\"pts\").innerText = this.points.toString();\n        if (!deleted)\n            this.randomBalls();\n    };\n    Kulki.prototype.randomBalls = function () {\n        var emptySquares = 0;\n        for (var i = 0; i < 9; i++) {\n            for (var j = 0; j < 9; j++) {\n                if (!this.squares[i][j].isOccupied())\n                    emptySquares++;\n            }\n        }\n        if (emptySquares < 4) {\n            for (var i = 0; i < emptySquares; i++) {\n                var x = Math.floor(Math.random() * 9);\n                var y = Math.floor(Math.random() * 9);\n                while (!this.squares[y][x].putBall(this.nextBalls[i])) {\n                    x = Math.floor(Math.random() * 9);\n                    y = Math.floor(Math.random() * 9);\n                }\n            }\n            alert(\"Przegrałeś!\");\n            return;\n        }\n        for (var i = 0; i < 3; i++) {\n            var x = Math.floor(Math.random() * 9);\n            var y = Math.floor(Math.random() * 9);\n            while (!this.squares[y][x].putBall(this.nextBalls[i])) {\n                x = Math.floor(Math.random() * 9);\n                y = Math.floor(Math.random() * 9);\n            }\n        }\n        this.nextBalls = new Array();\n        for (var i = 0; i < 3; i++) {\n            this.nextBalls.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), null));\n            this.nextSqaures[i].appendChild(this.nextBalls[i].element);\n        }\n    };\n    Kulki.prototype.findPath = function (sq, move, color) {\n        var _this = this;\n        if (color === void 0) { color = \"#e3c2e9\"; }\n        var path = new Array();\n        for (var i = 0; i < 9; i++) {\n            var row = new Array();\n            for (var j = 0; j < 9; j++) {\n                var arr = new Array();\n                row.push(arr);\n            }\n            path.push(row);\n        }\n        var queue = new Array();\n        queue.push(sq);\n        while (queue.length != 0) {\n            var square = queue.shift();\n            path[square.pos.y][square.pos.x] = square.path;\n            if (square == this.clickedSquare) {\n                break;\n            }\n            if (square.pos.x + 1 < 9)\n                if (!this.squares[square.pos.y][square.pos.x + 1].isOccupied() && path[square.pos.y][square.pos.x + 1].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y][square.pos.x + 1].pos);\n                    this.squares[square.pos.y][square.pos.x + 1].path = newPath;\n                    queue.push(this.squares[square.pos.y][square.pos.x + 1]);\n                }\n            if (square.pos.x - 1 >= 0)\n                if (!this.squares[square.pos.y][square.pos.x - 1].isOccupied() && path[square.pos.y][square.pos.x - 1].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y][square.pos.x - 1].pos);\n                    this.squares[square.pos.y][square.pos.x - 1].path = newPath;\n                    queue.push(this.squares[square.pos.y][square.pos.x - 1]);\n                }\n            if (square.pos.y + 1 < 9)\n                if (!this.squares[square.pos.y + 1][square.pos.x].isOccupied() && path[square.pos.y + 1][square.pos.x].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y + 1][square.pos.x].pos);\n                    this.squares[square.pos.y + 1][square.pos.x].path = newPath;\n                    queue.push(this.squares[square.pos.y + 1][square.pos.x]);\n                }\n            if (square.pos.y - 1 >= 0)\n                if (!this.squares[square.pos.y - 1][square.pos.x].isOccupied() && path[square.pos.y - 1][square.pos.x].length == 0) {\n                    var newPath = square.path.slice(0);\n                    newPath.push(this.squares[square.pos.y - 1][square.pos.x].pos);\n                    this.squares[square.pos.y - 1][square.pos.x].path = newPath;\n                    queue.push(this.squares[square.pos.y - 1][square.pos.x]);\n                }\n        }\n        //console.log(this.clickedSquare.path)\n        this.clickedSquare.path.forEach(function (el, i) {\n            _this.squares[el.y][el.x].element.style.backgroundColor = \"pink\";\n            if (!move)\n                _this.squares[el.y][el.x].element.style.backgroundColor = color;\n        });\n        var finalPath = __spreadArrays(this.clickedSquare.path);\n        if (move)\n            setTimeout(function () {\n                // console.log(finalPath)\n                finalPath.forEach(function (el, i) {\n                    _this.squares[el.y][el.x].element.style.backgroundColor = \"white\";\n                });\n            }, 1000);\n        if (move)\n            if (this.clickedSquare.path.length != 0) {\n                this.squares[this.clickedBall.pos.y][this.clickedBall.pos.x].removeBall();\n                this.clickedSquare.putBall(this.clickedBall);\n                this.checkPoints();\n            }\n        this.clearPaths();\n        if (move) {\n            this.clickedBall.element.style.width = \"40px\";\n            this.clickedBall.element.style.height = \"40px\";\n            this.clickedBall.element.style.top = \"10px\";\n            this.clickedBall.element.style.left = \"10px\";\n            this.clickedBall.element.style.border = \"none\";\n            this.clickedBall = null;\n            this.clickedSquare = null;\n        }\n    };\n    __decorate([\n        aboveZero()\n    ], Kulki.prototype, \"points\", void 0);\n    Kulki = __decorate([\n        Pozdrowionko(\"Pana Mendele ;)\")\n    ], Kulki);\n    return Kulki;\n}());\n\nvar app = new Kulki();\nwindow.app = app;\n//app.pozdrowionko();\nfunction ballWrapper(target, key, descriptor) {\n    var originalMethod = descriptor.value;\n    descriptor.value = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        if (app.clickedBall != null) {\n            app.clickedBall.element.style.width = \"40px\";\n            app.clickedBall.element.style.height = \"40px\";\n            app.clickedBall.element.style.top = \"10px\";\n            app.clickedBall.element.style.left = \"10px\";\n            app.clickedBall.element.style.border = \"none\";\n        }\n        var result = originalMethod.apply(this, args);\n        this.element.style.width = \"55px\";\n        this.element.style.height = \"55px\";\n        this.element.style.top = \"1px\";\n        this.element.style.left = \"1px\";\n        this.element.style.border = \"2px solid black\";\n        if (app.clickedBall == this) {\n            app.clickedBall.element.style.width = \"40px\";\n            app.clickedBall.element.style.height = \"40px\";\n            app.clickedBall.element.style.top = \"10px\";\n            app.clickedBall.element.style.left = \"10px\";\n            app.clickedBall.element.style.border = \"none\";\n            app.clickedBall = null;\n        }\n        else {\n            app.clickedBall = this;\n        }\n    };\n    return descriptor;\n}\nfunction squareWrapper(target, key, descriptor) {\n    var originalMethod = descriptor.value;\n    descriptor.value = function () {\n        var args = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            args[_i] = arguments[_i];\n        }\n        var result = originalMethod.apply(this, args);\n        if (app.clickedBall != null && app.clickedBall.pos != null) {\n            app.clickedSquare = this;\n            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x], true);\n        }\n    };\n    return descriptor;\n}\nfunction highlightPath(color) {\n    return function (target, key, descriptor) {\n        var originalMethod = descriptor.value;\n        descriptor.value = function () {\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            for (var i = 0; i < 9; i++) {\n                for (var j = 0; j < 9; j++) {\n                    app.squares[i][j].element.style.backgroundColor = \"white\";\n                }\n            }\n            var result = originalMethod.apply(this, args);\n            if (app.clickedBall != null && app.clickedBall.pos != null) {\n                app.clickedSquare = this;\n                app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x], false, color);\n            }\n        };\n        return descriptor;\n    };\n}\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/square.ts":
/*!***********************!*\
  !*** ./src/square.ts ***!
  \***********************/
/*! exports provided: Square, Position, Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\nvar Square = /** @class */ (function () {\n    function Square(element, pos) {\n        this.element = element;\n        this.element.onclick = this.onClick.bind(this);\n        this.element.onmouseenter = this.onHover.bind(this);\n        this.occupied = false;\n        this.ball = null;\n        this.pos = pos;\n        this.path = new Array();\n    }\n    Square.prototype.onClick = function (event) {\n        // console.log(this)\n    };\n    Square.prototype.onHover = function (event) {\n        //console.log(this)\n        //console.log(event.target)\n    };\n    Square.prototype.isOccupied = function () {\n        return this.occupied;\n    };\n    Square.prototype.removeBall = function () {\n        this.occupied = false;\n        this.ball = null;\n        this.element.innerHTML = \"\";\n    };\n    Square.prototype.putBall = function (ball) {\n        if (this.occupied)\n            return false;\n        this.ball = ball;\n        ball.pos = this.pos;\n        this.occupied = true;\n        this.element.appendChild(this.ball.element);\n        return true;\n    };\n    Square.prototype.getBallColor = function () {\n        return this.ball.getColor();\n    };\n    __decorate([\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"squareWrapper\"]\n    ], Square.prototype, \"onClick\", null);\n    __decorate([\n        Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"highlightPath\"])(\"red\")\n    ], Square.prototype, \"onHover\", null);\n    return Square;\n}());\n\nvar Position = /** @class */ (function () {\n    function Position(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    return Position;\n}());\n\nvar Ball = /** @class */ (function () {\n    function Ball(color, pos) {\n        this.pos = pos;\n        this.color = color;\n        this.element = document.createElement('div');\n        this.element.classList.add(\"ball\");\n        this.element.style.backgroundColor = this.color;\n        this.element.onclick = this.onClick.bind(this);\n        this.clicked = false;\n    }\n    Ball.prototype.onClick = function (event) {\n        // console.log(this)\n        event.stopPropagation();\n        this.clicked = !this.clicked;\n        return this;\n    };\n    Ball.prototype.getColor = function () {\n        return this.color;\n    };\n    __decorate([\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"ballWrapper\"]\n    ], Ball.prototype, \"onClick\", null);\n    return Ball;\n}());\n\n\n\n//# sourceURL=webpack:///./src/square.ts?");

/***/ })

/******/ });