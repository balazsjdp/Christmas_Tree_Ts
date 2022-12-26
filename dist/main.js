/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Branch.ts":
/*!*******************************!*\
  !*** ./src/classes/Branch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Branch\": () => (/* binding */ Branch)\n/* harmony export */ });\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ \"./src/classes/Line.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Branch = /** @class */ (function (_super) {\r\n    __extends(Branch, _super);\r\n    function Branch(canvas, origin, index) {\r\n        var _this = _super.call(this, canvas) || this;\r\n        _this.origin = origin;\r\n        _this.index = index;\r\n        return _this;\r\n    }\r\n    Branch.prototype.calcPoints = function (invert) {\r\n        // Calculate start\r\n        var start = {\r\n            x: this.origin.start.x,\r\n            y: this.index + this.origin.start.y\r\n        };\r\n        var inverter = invert == true ? -1 : 1;\r\n        var end = {\r\n            x: start.x + (this.r * inverter) * Math.cos(this.theta) + (this.index / 5 * inverter),\r\n            y: start.y + this.r * Math.cos(this.theta) + this.index / 5\r\n        };\r\n        this.setPoints(start, end);\r\n    };\r\n    return Branch;\r\n}(_Line__WEBPACK_IMPORTED_MODULE_0__.Line));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Branch.ts?");

/***/ }),

/***/ "./src/classes/Decoration.ts":
/*!***********************************!*\
  !*** ./src/classes/Decoration.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Decoration\": () => (/* binding */ Decoration)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/// <reference path=\"../interfaces/Point.ts\" />\r\n\r\nvar Decoration = /** @class */ (function () {\r\n    function Decoration(canvas) {\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Decoration.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    };\r\n    Decoration.prototype.draw = function () {\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.strokeStyle = this.color;\r\n        this.ctx.beginPath();\r\n        this.ctx.ellipse(this.position.x, this.position.y, this.radius, this.radius, Math.PI, 0, 5 * Math.PI);\r\n        this.ctx.stroke();\r\n        this.ctx.fill();\r\n    };\r\n    Decoration.prototype.setColor = function () {\r\n        this.color = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.DECORATION_COLORS[_misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.DECORATION_COLORS.length)];\r\n    };\r\n    Decoration.prototype.blink = function () {\r\n        var _this = this;\r\n        setInterval(function () {\r\n            _this.ctx.fillStyle = _this.color;\r\n            _this.ctx.strokeStyle = _this.color;\r\n            _this.setColor();\r\n        }, 500);\r\n    };\r\n    return Decoration;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Decoration.ts?");

/***/ }),

/***/ "./src/classes/Line.ts":
/*!*****************************!*\
  !*** ./src/classes/Line.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Line\": () => (/* binding */ Line)\n/* harmony export */ });\n/// <reference path=\"../interfaces/Point.ts\" />\r\nvar Line = /** @class */ (function () {\r\n    function Line(canvas) {\r\n        this.width = 1;\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Line.prototype.setPoints = function (from, to) {\r\n        this.start = from;\r\n        this.end = to;\r\n    };\r\n    Line.prototype.setColor = function (color) {\r\n        this.color = color;\r\n    };\r\n    Line.prototype.draw = function () {\r\n        this.ctx.strokeStyle = this.color;\r\n        this.ctx.lineWidth = this.width;\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(this.start.x, this.start.y);\r\n        this.ctx.lineTo(this.end.x, this.end.y);\r\n        this.ctx.stroke();\r\n    };\r\n    return Line;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Line.ts?");

/***/ }),

/***/ "./src/classes/SnowFlake.ts":
/*!**********************************!*\
  !*** ./src/classes/SnowFlake.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SnowFlake\": () => (/* binding */ SnowFlake)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/// <reference path=\"../interfaces/Point.ts\" />\r\n\r\nvar SnowFlake = /** @class */ (function () {\r\n    function SnowFlake(canvas) {\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n        this.color = \"#f2f1f0\";\r\n        this.velY = 1;\r\n        this.velX = 1;\r\n    }\r\n    SnowFlake.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    };\r\n    SnowFlake.prototype.draw = function () {\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.strokeStyle = this.color;\r\n        this.ctx.beginPath();\r\n        this.ctx.ellipse(this.position.x, this.position.y, this.radius, this.radius, Math.PI, 0, 5 * Math.PI);\r\n        this.ctx.stroke();\r\n        this.ctx.fill();\r\n    };\r\n    SnowFlake.prototype.advanceFalling = function () {\r\n        if (this.position.y >= _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT) {\r\n            this.setPosition(this.position.x + this.velX, 0 + this.velY);\r\n        }\r\n        if (this.position.x <= 0) {\r\n            this.velX++;\r\n        }\r\n        else if (this.position.x >= _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH) {\r\n            this.velX--;\r\n        }\r\n        this.setPosition(this.position.x + this.velX, this.position.y + this.velY);\r\n        this.changePosition();\r\n    };\r\n    SnowFlake.prototype.changePosition = function () {\r\n        this.velX = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(-2, 2);\r\n        this.velY = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(1, 4);\r\n    };\r\n    return SnowFlake;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/SnowFlake.ts?");

/***/ }),

/***/ "./src/classes/SubBranch.ts":
/*!**********************************!*\
  !*** ./src/classes/SubBranch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubBranch\": () => (/* binding */ SubBranch)\n/* harmony export */ });\n/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branch */ \"./src/classes/Branch.ts\");\n/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decoration */ \"./src/classes/Decoration.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar SubBranch = /** @class */ (function (_super) {\r\n    __extends(SubBranch, _super);\r\n    function SubBranch() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SubBranch.prototype.calcPoints = function (invert) {\r\n        var inverter = invert == true ? -1 : 1;\r\n        var start = {\r\n            x: this.origin.start.x + (this.index * inverter) + (this.r * this.index * inverter),\r\n            y: this.index + this.origin.start.y + this.r * this.index\r\n        };\r\n        var end = {\r\n            x: start.x - (this.r * inverter) * Math.cos(this.theta) + (this.index / 5 * -1),\r\n            y: start.y - this.r * Math.cos(this.theta) + (this.r * -1)\r\n        };\r\n        this.setPoints(start, end);\r\n        this.addDecor();\r\n    };\r\n    SubBranch.prototype.addDecor = function () {\r\n        this.decoration = new _Decoration__WEBPACK_IMPORTED_MODULE_1__.Decoration(this._canvas);\r\n        this.decoration.setPosition(this.start.x, this.start.y + 10);\r\n        this.decoration.setColor();\r\n        this.decoration.radius = 3;\r\n        this.decoration.draw();\r\n        this.decoration.blink();\r\n    };\r\n    SubBranch.prototype.draw = function () {\r\n        this.ctx.strokeStyle = this.color;\r\n        this.ctx.lineWidth = this.width;\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(this.start.x, this.start.y);\r\n        this.ctx.lineTo(this.end.x, this.end.y);\r\n        this.ctx.stroke();\r\n        this.decoration.draw();\r\n    };\r\n    return SubBranch;\r\n}(_Branch__WEBPACK_IMPORTED_MODULE_0__.Branch));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/SubBranch.ts?");

/***/ }),

/***/ "./src/classes/Tree.ts":
/*!*****************************!*\
  !*** ./src/classes/Tree.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/* harmony import */ var _Trunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trunk */ \"./src/classes/Trunk.ts\");\n/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Branch */ \"./src/classes/Branch.ts\");\n/* harmony import */ var _SubBranch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubBranch */ \"./src/classes/SubBranch.ts\");\n\r\n\r\n\r\n\r\nvar Tree = /** @class */ (function () {\r\n    function Tree(canvas) {\r\n        this.branches = [];\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Tree.prototype.init = function () {\r\n        var _this = this;\r\n        var _ctx = this._canvas.getContext(\"2d\");\r\n        _ctx.fillRect(0, 0, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT);\r\n        // Create trunk\r\n        var start = {\r\n            x: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH / 2,\r\n            y: 30\r\n        };\r\n        var end = {\r\n            x: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH / 2,\r\n            y: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT\r\n        };\r\n        this.trunk = new _Trunk__WEBPACK_IMPORTED_MODULE_1__.Trunk(this._canvas);\r\n        this.trunk.setColor(\"#362500\");\r\n        this.trunk.setPoints(start, end);\r\n        // Draw branches\r\n        var mainBranchesCount = 16;\r\n        var branchDistance = 30;\r\n        for (var i = 0; i < mainBranchesCount; i++) {\r\n            var branchR = new _Branch__WEBPACK_IMPORTED_MODULE_2__.Branch(this._canvas, this.trunk, i * branchDistance);\r\n            branchR.width = 5;\r\n            branchR.theta = 0.5;\r\n            branchR.r = 40;\r\n            branchR.setColor(\"#125207\");\r\n            branchR.calcPoints(false);\r\n            this.branches.push(branchR);\r\n            var branchL = new _Branch__WEBPACK_IMPORTED_MODULE_2__.Branch(this._canvas, this.trunk, i * branchDistance);\r\n            branchL.width = 5;\r\n            branchL.theta = 0.5;\r\n            branchL.r = 40;\r\n            branchL.setColor(\"#125207\");\r\n            branchL.calcPoints(true);\r\n            this.branches.push(branchL);\r\n        }\r\n        this.branches.forEach(function (mainBranch, index) {\r\n            var subBranchesCount = index / 4;\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = 90;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(true);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = -35;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(true);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = 90;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(false);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = -35;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(false);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n        });\r\n    };\r\n    Tree.prototype.draw = function () {\r\n        this.trunk.draw();\r\n        this.branches.forEach(function (b) {\r\n            b.draw();\r\n        });\r\n    };\r\n    return Tree;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Tree.ts?");

/***/ }),

/***/ "./src/classes/Trunk.ts":
/*!******************************!*\
  !*** ./src/classes/Trunk.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trunk\": () => (/* binding */ Trunk)\n/* harmony export */ });\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ \"./src/classes/Line.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Trunk = /** @class */ (function (_super) {\r\n    __extends(Trunk, _super);\r\n    function Trunk(canvas) {\r\n        var _this = _super.call(this, canvas) || this;\r\n        _this.width = 10;\r\n        return _this;\r\n    }\r\n    return Trunk;\r\n}(_Line__WEBPACK_IMPORTED_MODULE_0__.Line));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Trunk.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Tree */ \"./src/classes/Tree.ts\");\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/constants */ \"./src/misc/constants.ts\");\n/* harmony import */ var _classes_SnowFlake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/SnowFlake */ \"./src/classes/SnowFlake.ts\");\n/// <reference path=\"./interfaces/Point.ts\" />\r\n\r\n\r\n\r\n// Init canvas\r\nvar CANVAS_WIDTH = 800;\r\nvar CANVAS_HEIGHT = 600;\r\nvar BORDERCOLOR = \"black\";\r\nvar BORDERTHICKNESS = \"1px\";\r\nvar canvas = document.createElement(\"canvas\");\r\ncanvas.setAttribute(\"id\", \"canvas_\");\r\ncanvas.setAttribute(\"width\", CANVAS_WIDTH.toString());\r\ncanvas.setAttribute(\"height\", CANVAS_HEIGHT.toString());\r\ndocument.body.appendChild(canvas);\r\nvar canvasEl = document.getElementById(\"canvas_\");\r\ncanvasEl.style.border = \"\".concat(BORDERTHICKNESS, \" solid \").concat(BORDERCOLOR);\r\nvar _canvas = canvasEl;\r\nvar tree = new _classes_Tree__WEBPACK_IMPORTED_MODULE_0__.Tree(_canvas);\r\ntree.init();\r\nvar _ctx = _canvas.getContext(\"2d\");\r\nvar snow = [];\r\nvar fps = 25;\r\nsetInterval(function () {\r\n    requestAnimationFrame(render);\r\n    render();\r\n}, 1000 / fps);\r\nfunction render() {\r\n    _ctx.fillStyle = \"black\";\r\n    _ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);\r\n    tree.draw();\r\n    snow.forEach(function (snowFlake) {\r\n        snowFlake.advanceFalling();\r\n        snowFlake.draw();\r\n    });\r\n    //requestAnimationFrame(render);\r\n}\r\n//requestAnimationFrame(render);\r\nfor (var i = 0; i < _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.SNOW_DENSITY; i++) {\r\n    var snowFlake = new _classes_SnowFlake__WEBPACK_IMPORTED_MODULE_2__.SnowFlake(canvasEl);\r\n    snowFlake.setPosition(_misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_WIDTH), _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_HEIGHT));\r\n    snowFlake.radius = _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.RANDOM_INT_BETWEEN(0.2, 2);\r\n    snow.push(snowFlake);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/misc/constants.ts":
/*!*******************************!*\
  !*** ./src/misc/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Constants\": () => (/* binding */ Constants)\n/* harmony export */ });\nvar Constants = {\r\n    DECORATION_COLORS: [\"#FFED8A\", \"#FFE55C\", \"#FFDE2E\", \"#FFD700\", \"#D1B000\"],\r\n    RANDOM_INT_BETWEEN: function (min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    },\r\n    CANVAS_WIDTH: 800,\r\n    CANVAS_HEIGHT: 600,\r\n    SNOW_DENSITY: 500,\r\n    RENDER_SPEED: 300\r\n};\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/misc/constants.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;