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
/*! exports provided: Color, Kulki, app, ballWrapper, squareWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Kulki\", function() { return Kulki; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"app\", function() { return app; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ballWrapper\", function() { return ballWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squareWrapper\", function() { return squareWrapper; });\n/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ \"./src/square.ts\");\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nvar Color;\r\n(function (Color) {\r\n    Color[\"Red\"] = \"Red\";\r\n    Color[\"Green\"] = \"Green\";\r\n    Color[\"Blue\"] = \"Blue\";\r\n    Color[\"Yellow\"] = \"Yellow\";\r\n    Color[\"Cyan\"] = \"Cyan\";\r\n    Color[\"Magenta\"] = \"Magenta\";\r\n    Color[\"Grey\"] = \"Grey\";\r\n})(Color || (Color = {}));\r\nfunction randomColor() {\r\n    var keys = Object.keys(Color); //.filter(v => isNaN(Number(v)))\r\n    var val = keys[Math.floor(Math.random() * keys.length)];\r\n    return val;\r\n}\r\nvar Kulki = /** @class */ (function () {\r\n    function Kulki() {\r\n        this.points = 0;\r\n        document.getElementById(\"pts\").innerText = this.points.toString();\r\n        var rows = document.getElementsByClassName(\"row\");\r\n        this.squares = new Array();\r\n        for (var i = 0; i < rows.length; i++) {\r\n            var row = new Array();\r\n            for (var j = 0; j < rows[i].children.length; j++) {\r\n                try {\r\n                    row.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Square\"](rows[i].children[j], new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](j, i)));\r\n                }\r\n                catch (e) {\r\n                }\r\n            }\r\n            this.squares.push(row);\r\n        }\r\n        for (var i = 0; i < 5; i++) {\r\n            var x = Math.floor(Math.random() * 9);\r\n            var y = Math.floor(Math.random() * 9);\r\n            try {\r\n                while (!this.squares[y][x].putBall(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](x, y)))) {\r\n                    x = Math.floor(Math.random() * 9);\r\n                    y = Math.floor(Math.random() * 9);\r\n                }\r\n            }\r\n            catch (e) {\r\n            }\r\n        }\r\n        this.nextSqaures = new Array();\r\n        this.nextBalls = new Array();\r\n        var sqs = document.getElementsByClassName(\"square1\");\r\n        for (var i = 0; i < sqs.length; i++) {\r\n            this.nextSqaures.push(sqs[i]);\r\n        }\r\n        for (var i = 0; i < 3; i++) {\r\n            try {\r\n                var ball = new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), new _square__WEBPACK_IMPORTED_MODULE_0__[\"Position\"](-1, -1));\r\n                this.nextBalls.push(ball);\r\n                this.nextSqaures[i].appendChild(this.nextBalls[i].element);\r\n            }\r\n            catch (e) {\r\n            }\r\n        }\r\n    }\r\n    Kulki.prototype.clearPaths = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            for (var j = 0; j < 9; j++) {\r\n                this.squares[j][i].path = new Array();\r\n            }\r\n        }\r\n    };\r\n    Kulki.prototype.checkPoints = function () {\r\n        var deleted = false;\r\n        //Check if there are enough of the same colors in rows\r\n        var sameInRow = 0;\r\n        var color = null;\r\n        var rowStart = null;\r\n        var rowLength = null;\r\n        for (var i = 0; i < 9; i++) {\r\n            sameInRow = 0;\r\n            color = null;\r\n            rowStart = null;\r\n            rowLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (this.squares[i][j].isOccupied()) {\r\n                    if (this.squares[i][j].getBallColor() == color) {\r\n                        sameInRow++;\r\n                    }\r\n                    else {\r\n                        sameInRow = 0;\r\n                        color = this.squares[i][j].getBallColor();\r\n                    }\r\n                }\r\n                else {\r\n                    sameInRow = 0;\r\n                    color = null;\r\n                }\r\n                if (sameInRow >= 4) {\r\n                    rowStart = j - sameInRow;\r\n                    rowLength = sameInRow;\r\n                    //console.log(i,j,j-sameInRow,sameInRow)\r\n                }\r\n            }\r\n            if (rowStart != null) {\r\n                for (var k = 0; k < rowLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", i, \"][\", rowStart + k, \"]\");\r\n                    this.squares[i][rowStart + k].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        //Check if there are enough of the same colors in columns\r\n        var sameInCol = 0;\r\n        color = null;\r\n        var ColStart = null;\r\n        var ColLength = null;\r\n        for (var i = 0; i < 9; i++) {\r\n            sameInCol = 0;\r\n            color = null;\r\n            ColStart = null;\r\n            ColLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (this.squares[j][i].isOccupied()) {\r\n                    if (this.squares[j][i].getBallColor() == color) {\r\n                        sameInCol++;\r\n                    }\r\n                    else {\r\n                        sameInCol = 0;\r\n                        color = this.squares[j][i].getBallColor();\r\n                    }\r\n                }\r\n                else {\r\n                    sameInCol = 0;\r\n                    color = null;\r\n                }\r\n                if (sameInCol >= 4) {\r\n                    ColStart = j - sameInCol;\r\n                    ColLength = sameInCol;\r\n                    //console.log(i,j,j-sameInRow,sameInRow)\r\n                }\r\n            }\r\n            if (ColStart != null) {\r\n                for (var k = 0; k < ColLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i, \"]\");\r\n                    this.squares[ColStart + k][i].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        //Check if there are enough of the same colors in diag left-right\r\n        for (var i = 0; i < 9; i++) {\r\n            sameInCol = 0;\r\n            color = null;\r\n            ColStart = null;\r\n            ColLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (j + i < 9) {\r\n                    if (this.squares[j][j + i].isOccupied()) {\r\n                        if (this.squares[j][j + i].getBallColor() == color) {\r\n                            sameInCol++;\r\n                        }\r\n                        else {\r\n                            sameInCol = 0;\r\n                            color = this.squares[j][j + i].getBallColor();\r\n                        }\r\n                    }\r\n                    else {\r\n                        sameInCol = 0;\r\n                        color = null;\r\n                    }\r\n                    if (sameInCol >= 4) {\r\n                        ColStart = j - sameInCol;\r\n                        ColLength = sameInCol;\r\n                        //console.log(i,j,j-sameInCol,sameInCol)\r\n                    }\r\n                }\r\n            }\r\n            if (ColStart != null) {\r\n                for (var k = 0; k < ColLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i + k + ColStart, \"]\");\r\n                    this.squares[ColStart + k][i + k + ColStart].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            sameInCol = 0;\r\n            color = null;\r\n            ColStart = null;\r\n            ColLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (j + i < 9) {\r\n                    if (this.squares[j + i][j].isOccupied()) {\r\n                        if (this.squares[j + i][j].getBallColor() == color) {\r\n                            sameInCol++;\r\n                        }\r\n                        else {\r\n                            sameInCol = 0;\r\n                            color = this.squares[j + i][j].getBallColor();\r\n                        }\r\n                    }\r\n                    else {\r\n                        sameInCol = 0;\r\n                        color = null;\r\n                    }\r\n                    if (sameInCol >= 4) {\r\n                        ColStart = j - sameInCol;\r\n                        ColLength = sameInCol;\r\n                        //console.log(i,j,j-sameInCol,sameInCol)\r\n                    }\r\n                }\r\n            }\r\n            if (ColStart != null) {\r\n                for (var k = 0; k < ColLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", i + k + ColStart, \"][\", ColStart + k, \"]\");\r\n                    this.squares[i + k + ColStart][ColStart + k].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        //Check if there are enough of the same colors in diag right-left\r\n        for (var i = 8; i >= 0; i--) {\r\n            sameInCol = 0;\r\n            color = null;\r\n            ColStart = null;\r\n            ColLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (i - j >= 0) {\r\n                    if (this.squares[i - j][j].isOccupied()) {\r\n                        if (this.squares[i - j][j].getBallColor() == color) {\r\n                            sameInCol++;\r\n                        }\r\n                        else {\r\n                            sameInCol = 0;\r\n                            color = this.squares[i - j][j].getBallColor();\r\n                        }\r\n                    }\r\n                    else {\r\n                        sameInCol = 0;\r\n                        color = null;\r\n                    }\r\n                    if (sameInCol >= 4) {\r\n                        ColStart = i - j;\r\n                        ColLength = sameInCol;\r\n                        console.log(i, j, ColStart, sameInCol);\r\n                    }\r\n                }\r\n            }\r\n            if (ColStart != null) {\r\n                for (var k = 0; k < ColLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", ColStart + k, \"][\", i - k - ColStart, \"]\");\r\n                    this.squares[ColStart + k][i - k - ColStart].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        for (var i = 0; i < 9; i++) {\r\n            sameInCol = 0;\r\n            color = null;\r\n            ColStart = null;\r\n            ColLength = null;\r\n            for (var j = 0; j < 9; j++) {\r\n                if (i + j < 9) {\r\n                    if (this.squares[8 - j][i + j].isOccupied()) {\r\n                        if (this.squares[8 - j][i + j].getBallColor() == color) {\r\n                            sameInCol++;\r\n                        }\r\n                        else {\r\n                            sameInCol = 0;\r\n                            color = this.squares[8 - j][i + j].getBallColor();\r\n                        }\r\n                    }\r\n                    else {\r\n                        sameInCol = 0;\r\n                        color = null;\r\n                    }\r\n                    if (sameInCol >= 4) {\r\n                        ColStart = j - sameInCol;\r\n                        ColLength = sameInCol;\r\n                        console.log(i, j, ColStart, sameInCol);\r\n                    }\r\n                }\r\n            }\r\n            if (ColStart != null) {\r\n                for (var k = 0; k < ColLength + 1; k++) {\r\n                    console.log(\"delete from sqares[\", 8 - ColStart - k, \"][\", i + k + ColStart, \"]\");\r\n                    this.squares[8 - ColStart - k][i + k + ColStart].removeBall();\r\n                    this.points++;\r\n                }\r\n                deleted = true;\r\n            }\r\n        }\r\n        //set points\r\n        document.getElementById(\"pts\").innerText = this.points.toString();\r\n        if (!deleted)\r\n            this.randomBalls();\r\n    };\r\n    Kulki.prototype.randomBalls = function () {\r\n        var emptySquares = 0;\r\n        for (var i = 0; i < 9; i++) {\r\n            for (var j = 0; j < 9; j++) {\r\n                if (!this.squares[i][j].isOccupied())\r\n                    emptySquares++;\r\n            }\r\n        }\r\n        if (emptySquares < 4) {\r\n            for (var i = 0; i < emptySquares; i++) {\r\n                var x = Math.floor(Math.random() * 9);\r\n                var y = Math.floor(Math.random() * 9);\r\n                while (!this.squares[y][x].putBall(this.nextBalls[i])) {\r\n                    x = Math.floor(Math.random() * 9);\r\n                    y = Math.floor(Math.random() * 9);\r\n                }\r\n            }\r\n            alert(\"Przegrałeś!\");\r\n            return;\r\n        }\r\n        for (var i = 0; i < 3; i++) {\r\n            var x = Math.floor(Math.random() * 9);\r\n            var y = Math.floor(Math.random() * 9);\r\n            while (!this.squares[y][x].putBall(this.nextBalls[i])) {\r\n                x = Math.floor(Math.random() * 9);\r\n                y = Math.floor(Math.random() * 9);\r\n            }\r\n        }\r\n        this.nextBalls = new Array();\r\n        for (var i = 0; i < 3; i++) {\r\n            this.nextBalls.push(new _square__WEBPACK_IMPORTED_MODULE_0__[\"Ball\"](randomColor(), null));\r\n            this.nextSqaures[i].appendChild(this.nextBalls[i].element);\r\n        }\r\n    };\r\n    Kulki.prototype.findPath = function (sq) {\r\n        var _this = this;\r\n        var path = new Array();\r\n        for (var i = 0; i < 9; i++) {\r\n            var row = new Array();\r\n            for (var j = 0; j < 9; j++) {\r\n                var arr = new Array();\r\n                row.push(arr);\r\n            }\r\n            path.push(row);\r\n        }\r\n        var queue = new Array();\r\n        queue.push(sq);\r\n        while (queue.length != 0) {\r\n            var square = queue.shift();\r\n            path[square.pos.y][square.pos.x] = square.path;\r\n            if (square == this.clickedSquare) {\r\n                break;\r\n            }\r\n            if (square.pos.x + 1 < 9)\r\n                if (!this.squares[square.pos.y][square.pos.x + 1].isOccupied() && path[square.pos.y][square.pos.x + 1].length == 0) {\r\n                    var newPath = square.path.slice(0);\r\n                    newPath.push(this.squares[square.pos.y][square.pos.x + 1].pos);\r\n                    this.squares[square.pos.y][square.pos.x + 1].path = newPath;\r\n                    queue.push(this.squares[square.pos.y][square.pos.x + 1]);\r\n                }\r\n            if (square.pos.x - 1 >= 0)\r\n                if (!this.squares[square.pos.y][square.pos.x - 1].isOccupied() && path[square.pos.y][square.pos.x - 1].length == 0) {\r\n                    var newPath = square.path.slice(0);\r\n                    newPath.push(this.squares[square.pos.y][square.pos.x - 1].pos);\r\n                    this.squares[square.pos.y][square.pos.x - 1].path = newPath;\r\n                    queue.push(this.squares[square.pos.y][square.pos.x - 1]);\r\n                }\r\n            if (square.pos.y + 1 < 9)\r\n                if (!this.squares[square.pos.y + 1][square.pos.x].isOccupied() && path[square.pos.y + 1][square.pos.x].length == 0) {\r\n                    var newPath = square.path.slice(0);\r\n                    newPath.push(this.squares[square.pos.y + 1][square.pos.x].pos);\r\n                    this.squares[square.pos.y + 1][square.pos.x].path = newPath;\r\n                    queue.push(this.squares[square.pos.y + 1][square.pos.x]);\r\n                }\r\n            if (square.pos.y - 1 >= 0)\r\n                if (!this.squares[square.pos.y - 1][square.pos.x].isOccupied() && path[square.pos.y - 1][square.pos.x].length == 0) {\r\n                    var newPath = square.path.slice(0);\r\n                    newPath.push(this.squares[square.pos.y - 1][square.pos.x].pos);\r\n                    this.squares[square.pos.y - 1][square.pos.x].path = newPath;\r\n                    queue.push(this.squares[square.pos.y - 1][square.pos.x]);\r\n                }\r\n        }\r\n        //console.log(this.clickedSquare.path)\r\n        this.clickedSquare.path.forEach(function (el, i) {\r\n            _this.squares[el.y][el.x].element.style.backgroundColor = \"pink\";\r\n        });\r\n        var finalPath = __spreadArrays(this.clickedSquare.path);\r\n        setTimeout(function () {\r\n            // console.log(finalPath)\r\n            finalPath.forEach(function (el, i) {\r\n                _this.squares[el.y][el.x].element.style.backgroundColor = \"white\";\r\n            });\r\n        }, 1000);\r\n        if (this.clickedSquare.path.length != 0) {\r\n            this.squares[this.clickedBall.pos.y][this.clickedBall.pos.x].removeBall();\r\n            this.clickedSquare.putBall(this.clickedBall);\r\n            this.checkPoints();\r\n        }\r\n        this.clearPaths();\r\n        this.clickedBall.element.style.width = \"40px\";\r\n        this.clickedBall.element.style.height = \"40px\";\r\n        this.clickedBall.element.style.top = \"10px\";\r\n        this.clickedBall.element.style.left = \"10px\";\r\n        this.clickedBall.element.style.border = \"none\";\r\n        this.clickedBall = null;\r\n        this.clickedSquare = null;\r\n    };\r\n    return Kulki;\r\n}());\r\n\r\nvar app = new Kulki();\r\nwindow.app = app;\r\nfunction ballWrapper(target, key, descriptor) {\r\n    var originalMethod = descriptor.value;\r\n    descriptor.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        if (app.clickedBall != null) {\r\n            app.clickedBall.element.style.width = \"40px\";\r\n            app.clickedBall.element.style.height = \"40px\";\r\n            app.clickedBall.element.style.top = \"10px\";\r\n            app.clickedBall.element.style.left = \"10px\";\r\n            app.clickedBall.element.style.border = \"none\";\r\n        }\r\n        var result = originalMethod.apply(this, args);\r\n        this.element.style.width = \"55px\";\r\n        this.element.style.height = \"55px\";\r\n        this.element.style.top = \"1px\";\r\n        this.element.style.left = \"1px\";\r\n        this.element.style.border = \"2px solid black\";\r\n        if (app.clickedBall == this) {\r\n            app.clickedBall.element.style.width = \"40px\";\r\n            app.clickedBall.element.style.height = \"40px\";\r\n            app.clickedBall.element.style.top = \"10px\";\r\n            app.clickedBall.element.style.left = \"10px\";\r\n            app.clickedBall.element.style.border = \"none\";\r\n            app.clickedBall = null;\r\n        }\r\n        else {\r\n            app.clickedBall = this;\r\n        }\r\n    };\r\n    return descriptor;\r\n}\r\nfunction squareWrapper(target, key, descriptor) {\r\n    var originalMethod = descriptor.value;\r\n    descriptor.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var result = originalMethod.apply(this, args);\r\n        if (app.clickedBall != null) {\r\n            app.clickedSquare = this;\r\n            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x]);\r\n        }\r\n    };\r\n    return descriptor;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/square.ts":
/*!***********************!*\
  !*** ./src/square.ts ***!
  \***********************/
/*! exports provided: Square, Position, Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position\", function() { return Position; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ball\", function() { return Ball; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\nvar Square = /** @class */ (function () {\r\n    function Square(element, pos) {\r\n        this.element = element;\r\n        this.element.onclick = this.onClick.bind(this);\r\n        this.occupied = false;\r\n        this.ball = null;\r\n        this.pos = pos;\r\n        this.path = new Array();\r\n    }\r\n    Square.prototype.onClick = function (event) {\r\n        // console.log(this)\r\n    };\r\n    Square.prototype.isOccupied = function () {\r\n        return this.occupied;\r\n    };\r\n    Square.prototype.removeBall = function () {\r\n        this.occupied = false;\r\n        this.ball = null;\r\n        this.element.innerHTML = \"\";\r\n    };\r\n    Square.prototype.putBall = function (ball) {\r\n        if (this.occupied)\r\n            return false;\r\n        this.ball = ball;\r\n        ball.pos = this.pos;\r\n        this.occupied = true;\r\n        this.element.appendChild(this.ball.element);\r\n        return true;\r\n    };\r\n    Square.prototype.getBallColor = function () {\r\n        return this.ball.getColor();\r\n    };\r\n    __decorate([\r\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"squareWrapper\"]\r\n    ], Square.prototype, \"onClick\", null);\r\n    return Square;\r\n}());\r\n\r\nvar Position = /** @class */ (function () {\r\n    function Position(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    return Position;\r\n}());\r\n\r\nvar Ball = /** @class */ (function () {\r\n    function Ball(color, pos) {\r\n        this.pos = pos;\r\n        this.color = color;\r\n        this.element = document.createElement('div');\r\n        this.element.classList.add(\"ball\");\r\n        this.element.style.backgroundColor = this.color;\r\n        this.element.onclick = this.onClick.bind(this);\r\n        this.clicked = false;\r\n    }\r\n    Ball.prototype.onClick = function (event) {\r\n        // console.log(this)\r\n        event.stopPropagation();\r\n        this.clicked = !this.clicked;\r\n        return this;\r\n    };\r\n    Ball.prototype.getColor = function () {\r\n        return this.color;\r\n    };\r\n    __decorate([\r\n        _main__WEBPACK_IMPORTED_MODULE_0__[\"ballWrapper\"]\r\n    ], Ball.prototype, \"onClick\", null);\r\n    return Ball;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./src/square.ts?");

/***/ })

/******/ });