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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Decoration\": () => (/* binding */ Decoration)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/// <reference path=\"../interfaces/Point.ts\" />\r\n\r\nvar Decoration = /** @class */ (function () {\r\n    function Decoration(canvas) {\r\n        this.isLit = true;\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Decoration.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    };\r\n    Decoration.prototype.draw = function () {\r\n        var color = this.color;\r\n        if (!this.isLit) {\r\n            color = this.darkenColor(this.color, 50);\r\n        }\r\n        this.ctx.fillStyle = color;\r\n        this.ctx.strokeStyle = color;\r\n        this.ctx.beginPath();\r\n        this.ctx.ellipse(this.position.x, this.position.y, this.radius, this.radius, Math.PI, 0, 5 * Math.PI);\r\n        this.ctx.stroke();\r\n        this.ctx.fill();\r\n    };\r\n    Decoration.prototype.darkenColor = function (color, percent) {\r\n        var num = parseInt(color.replace(\"#\", \"\"), 16), amt = Math.round(2.55 * percent), R = (num >> 16) - amt, G = (num >> 8 & 0x00FF) - amt, B = (num & 0x0000FF) - amt;\r\n        return \"#\" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);\r\n    };\r\n    Decoration.prototype.toggle = function () {\r\n        this.isLit = !this.isLit;\r\n    };\r\n    Decoration.prototype.setColor = function () {\r\n        this.color = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.DECORATION_COLORS[_misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.DECORATION_COLORS.length - 1)];\r\n    };\r\n    return Decoration;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Decoration.ts?");

/***/ }),

/***/ "./src/classes/Gift.ts":
/*!*****************************!*\
  !*** ./src/classes/Gift.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Gift\": () => (/* binding */ Gift)\n/* harmony export */ });\n/// <reference path=\"../interfaces/Point.ts\" />\r\nvar Gift = /** @class */ (function () {\r\n    function Gift(giftConfig) {\r\n        if (giftConfig) {\r\n            this.color = giftConfig.color;\r\n            this.position = { x: giftConfig.position.x, y: giftConfig.position.y };\r\n            this.size = giftConfig.size;\r\n        }\r\n    }\r\n    Gift.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    };\r\n    return Gift;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Gift.ts?");

/***/ }),

/***/ "./src/classes/HasCanvas.ts":
/*!**********************************!*\
  !*** ./src/classes/HasCanvas.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HasCanvas\": () => (/* binding */ HasCanvas)\n/* harmony export */ });\nvar HasCanvas = /** @class */ (function () {\r\n    function HasCanvas(cnv) {\r\n        this.cnv = cnv;\r\n        this._canvas = cnv;\r\n        this._ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Object.defineProperty(HasCanvas.prototype, \"canvas\", {\r\n        get: function () {\r\n            return this._canvas;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(HasCanvas.prototype, \"ctx\", {\r\n        get: function () {\r\n            return this._ctx;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return HasCanvas;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/HasCanvas.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SnowFlake\": () => (/* binding */ SnowFlake)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/// <reference path=\"../interfaces/Point.ts\" />\r\n\r\nvar SnowFlake = /** @class */ (function () {\r\n    function SnowFlake() {\r\n        this.color = \"#f2f1f0\";\r\n        this.reset();\r\n    }\r\n    SnowFlake.prototype.setPosition = function (x, y) {\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    };\r\n    SnowFlake.prototype.reset = function () {\r\n        this.position = {\r\n            x: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH),\r\n            y: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(0, -_misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT)\r\n        };\r\n        this.velY = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(2, 5);\r\n        this.velX = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(-1, 1);\r\n        this.radius = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.RANDOM_INT_BETWEEN(1, 3);\r\n    };\r\n    SnowFlake.prototype.advanceFalling = function () {\r\n        this.position.y += this.velY;\r\n        this.position.x += this.velX;\r\n        // If the snowflake reaches the bottom or drifts off screen, reset it\r\n        if (this.position.y > _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT + this.radius || this.position.x < -this.radius || this.position.x > _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH + this.radius) {\r\n            this.reset();\r\n            this.position.y = -this.radius; // ensure it starts just above the screen\r\n        }\r\n    };\r\n    return SnowFlake;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/SnowFlake.ts?");

/***/ }),

/***/ "./src/classes/SubBranch.ts":
/*!**********************************!*\
  !*** ./src/classes/SubBranch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubBranch\": () => (/* binding */ SubBranch)\n/* harmony export */ });\n/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branch */ \"./src/classes/Branch.ts\");\n/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decoration */ \"./src/classes/Decoration.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar SubBranch = /** @class */ (function (_super) {\r\n    __extends(SubBranch, _super);\r\n    function SubBranch() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    SubBranch.prototype.calcPoints = function (invert) {\r\n        var inverter = invert == true ? -1 : 1;\r\n        var start = {\r\n            x: this.origin.start.x + (this.index * inverter) + (this.r * this.index * inverter),\r\n            y: this.index + this.origin.start.y + this.r * this.index\r\n        };\r\n        var end = {\r\n            x: start.x - (this.r * inverter) * Math.cos(this.theta) + (this.index / 5 * -1),\r\n            y: start.y - this.r * Math.cos(this.theta) + (this.r * -1)\r\n        };\r\n        this.setPoints(start, end);\r\n        this.addDecor();\r\n    };\r\n    SubBranch.prototype.addDecor = function () {\r\n        this.decoration = new _Decoration__WEBPACK_IMPORTED_MODULE_1__.Decoration(this._canvas);\r\n        this.decoration.setPosition(this.start.x, this.start.y + 10);\r\n        this.decoration.setColor();\r\n        this.decoration.radius = 3;\r\n        this.decoration.draw();\r\n    };\r\n    SubBranch.prototype.getDecoration = function () {\r\n        return this.decoration;\r\n    };\r\n    SubBranch.prototype.draw = function () {\r\n        this.ctx.strokeStyle = this.color;\r\n        this.ctx.lineWidth = this.width;\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(this.start.x, this.start.y);\r\n        this.ctx.lineTo(this.end.x, this.end.y);\r\n        this.ctx.stroke();\r\n        this.decoration.draw();\r\n    };\r\n    return SubBranch;\r\n}(_Branch__WEBPACK_IMPORTED_MODULE_0__.Branch));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/SubBranch.ts?");

/***/ }),

/***/ "./src/classes/Tree.ts":
/*!*****************************!*\
  !*** ./src/classes/Tree.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tree\": () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\n/* harmony import */ var _Trunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trunk */ \"./src/classes/Trunk.ts\");\n/* harmony import */ var _Branch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Branch */ \"./src/classes/Branch.ts\");\n/* harmony import */ var _SubBranch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubBranch */ \"./src/classes/SubBranch.ts\");\n/* harmony import */ var _Decoration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Decoration */ \"./src/classes/Decoration.ts\");\n\r\n\r\n\r\n\r\n\r\nvar Tree = /** @class */ (function () {\r\n    function Tree(canvas) {\r\n        this.branches = [];\r\n        this._canvas = canvas;\r\n        this.ctx = this._canvas.getContext(\"2d\");\r\n    }\r\n    Tree.prototype.init = function () {\r\n        var _this = this;\r\n        var _ctx = this._canvas.getContext(\"2d\");\r\n        _ctx.fillRect(0, 0, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH, _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT);\r\n        // Create trunk\r\n        var start = {\r\n            x: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH / 2,\r\n            y: 30\r\n        };\r\n        var end = {\r\n            x: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_WIDTH / 2,\r\n            y: _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT\r\n        };\r\n        this.trunk = new _Trunk__WEBPACK_IMPORTED_MODULE_1__.Trunk(this._canvas);\r\n        this.trunk.setColor(\"#362500\");\r\n        this.trunk.setPoints(start, end);\r\n        // Create star\r\n        this.star = new _Decoration__WEBPACK_IMPORTED_MODULE_4__.Decoration(this._canvas);\r\n        this.star.setPosition(start.x, start.y);\r\n        this.star.setColor();\r\n        this.star.radius = 10;\r\n        // Draw branches\r\n        var mainBranchesCount = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.CANVAS_HEIGHT / 40;\r\n        var branchDistance = _misc_constants__WEBPACK_IMPORTED_MODULE_0__.Constants.BRANCH_DISTANCE;\r\n        // Draw main branches from trunk\r\n        for (var i = 0; i < mainBranchesCount; i++) {\r\n            var branchR = new _Branch__WEBPACK_IMPORTED_MODULE_2__.Branch(this._canvas, this.trunk, i * branchDistance);\r\n            branchR.width = 5;\r\n            branchR.theta = 0.5;\r\n            branchR.r = 40;\r\n            branchR.setColor(\"#125207\");\r\n            branchR.calcPoints(false);\r\n            this.branches.push(branchR);\r\n            var branchL = new _Branch__WEBPACK_IMPORTED_MODULE_2__.Branch(this._canvas, this.trunk, i * branchDistance);\r\n            branchL.width = 5;\r\n            branchL.theta = 0.5;\r\n            branchL.r = 40;\r\n            branchL.setColor(\"#125207\");\r\n            branchL.calcPoints(true);\r\n            this.branches.push(branchL);\r\n        }\r\n        // Draw small branches from main branches\r\n        this.branches.forEach(function (mainBranch, index) {\r\n            var subBranchesCount = index / 4;\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = 90;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(true);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = -35;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(true);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = 90;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(false);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n            for (var i = 0; i < subBranchesCount; i++) {\r\n                var smallBranch = new _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch(_this._canvas, mainBranch, i);\r\n                smallBranch.width = 3;\r\n                smallBranch.theta = -35;\r\n                smallBranch.r = 17;\r\n                smallBranch.setColor(\"#125207\");\r\n                smallBranch.calcPoints(false);\r\n                _this.branches.push(smallBranch);\r\n            }\r\n        });\r\n    };\r\n    Tree.prototype.draw = function () {\r\n        this.trunk.draw();\r\n        this.branches.forEach(function (b) {\r\n            b.draw();\r\n        });\r\n        this.star.draw();\r\n    };\r\n    Tree.prototype.getDecorations = function () {\r\n        var decorations = [];\r\n        this.branches.forEach(function (b) {\r\n            if (b instanceof _SubBranch__WEBPACK_IMPORTED_MODULE_3__.SubBranch) {\r\n                decorations.push(b.getDecoration());\r\n            }\r\n        });\r\n        decorations.push(this.star);\r\n        return decorations;\r\n    };\r\n    return Tree;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/classes/Tree.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Tree */ \"./src/classes/Tree.ts\");\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./misc/constants */ \"./src/misc/constants.ts\");\n/* harmony import */ var _services_gift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/gift.service */ \"./src/services/gift.service.ts\");\n/* harmony import */ var _services_snow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/snow.service */ \"./src/services/snow.service.ts\");\n/// <reference path=\"./interfaces/Point.ts\" />\r\n\r\n\r\n\r\n\r\n// Init canvas\r\nvar canvas = document.createElement(\"canvas\");\r\ncanvas.setAttribute(\"id\", \"canvas_\");\r\ncanvas.setAttribute(\"width\", _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_WIDTH.toString());\r\ncanvas.setAttribute(\"height\", _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_HEIGHT.toString());\r\ndocument.body.appendChild(canvas);\r\nvar canvasEl = document.getElementById(\"canvas_\");\r\nvar _canvas = canvasEl;\r\nvar giftService = new _services_gift_service__WEBPACK_IMPORTED_MODULE_2__.GiftService(_canvas);\r\nvar snowService = new _services_snow_service__WEBPACK_IMPORTED_MODULE_3__.SnowService(_canvas);\r\nvar tree = new _classes_Tree__WEBPACK_IMPORTED_MODULE_0__.Tree(_canvas);\r\ntree.init();\r\nvar _ctx = _canvas.getContext(\"2d\");\r\nvar decorations = tree.getDecorations();\r\nvar blinkCounter = 0;\r\nfunction gameLoop() {\r\n    // 1. Clear screen\r\n    _ctx.fillStyle = \"black\";\r\n    _ctx.fillRect(0, 0, _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_WIDTH, _misc_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.CANVAS_HEIGHT);\r\n    // 2. Update objects\r\n    snowService.update();\r\n    // 3. Render objects\r\n    tree.draw();\r\n    giftService.renderGifts();\r\n    snowService.renderSnow();\r\n    blinkCounter++;\r\n    if (blinkCounter % 15 === 0) {\r\n        decorations.forEach(function (d, i) {\r\n            if (i % 2 === 0) {\r\n                d.toggle();\r\n            }\r\n        });\r\n    }\r\n    if (blinkCounter % 30 === 0) {\r\n        decorations.forEach(function (d, i) {\r\n            if (i % 2 !== 0) {\r\n                d.toggle();\r\n            }\r\n        });\r\n    }\r\n    // 4. Repeat\r\n    requestAnimationFrame(gameLoop);\r\n}\r\n// Start the loop\r\ngameLoop();\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/misc/constants.ts":
/*!*******************************!*\
  !*** ./src/misc/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Constants\": () => (/* binding */ Constants)\n/* harmony export */ });\nvar Constants = {\r\n    DECORATION_COLORS: [\"#FFED8A\", \"#FFE55C\", \"#FFDE2E\", \"#FFD700\", \"#D1B000\", \"#FF0000\", \"#00FF00\", \"#0000FF\", \"#FF00FF\", \"#00FFFF\", \"#FFA500\"],\r\n    RANDOM_INT_BETWEEN: function (min, max) {\r\n        return Math.floor(Math.random() * (max - min + 1) + min);\r\n    },\r\n    CANVAS_WIDTH: 800,\r\n    CANVAS_HEIGHT: 600,\r\n    SNOW_DENSITY: 500,\r\n    BRANCH_DISTANCE: 30,\r\n    FPS: 25\r\n};\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/misc/constants.ts?");

/***/ }),

/***/ "./src/services/gift.service.ts":
/*!**************************************!*\
  !*** ./src/services/gift.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GiftService\": () => (/* binding */ GiftService)\n/* harmony export */ });\n/* harmony import */ var _classes_Gift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Gift */ \"./src/classes/Gift.ts\");\n/* harmony import */ var _classes_HasCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/HasCanvas */ \"./src/classes/HasCanvas.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar giftConfig = (__webpack_require__(/*! ../../../../config.json */ \"./config.json\").gifts);\r\nvar GiftService = /** @class */ (function (_super) {\r\n    __extends(GiftService, _super);\r\n    function GiftService(canvas) {\r\n        var _this = _super.call(this, canvas) || this;\r\n        _this.gifts = [];\r\n        _this.initialize();\r\n        return _this;\r\n    }\r\n    GiftService.prototype.initialize = function () {\r\n        this.setup();\r\n        this.renderGifts();\r\n    };\r\n    GiftService.prototype.setup = function () {\r\n        if (!giftConfig || !Array.isArray(giftConfig)) {\r\n            console.warn(\"No valid gift configuration found.\");\r\n            return;\r\n        }\r\n        for (var _i = 0, giftConfig_1 = giftConfig; _i < giftConfig_1.length; _i++) {\r\n            var cfg = giftConfig_1[_i];\r\n            this.gifts.push(new _classes_Gift__WEBPACK_IMPORTED_MODULE_0__.Gift(cfg));\r\n        }\r\n    };\r\n    GiftService.prototype.renderGifts = function () {\r\n        if (!this.ctx) {\r\n            return;\r\n        }\r\n        for (var _i = 0, _a = this.gifts; _i < _a.length; _i++) {\r\n            var gift = _a[_i];\r\n            this.ctx.fillStyle = gift.color;\r\n            this.ctx.strokeStyle = gift.color;\r\n            this.ctx.beginPath();\r\n            this.ctx.rect(gift.position.x, gift.position.y, gift.size, gift.size);\r\n            this.ctx.stroke();\r\n            this.ctx.fill();\r\n        }\r\n    };\r\n    return GiftService;\r\n}(_classes_HasCanvas__WEBPACK_IMPORTED_MODULE_1__.HasCanvas));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/gift.service.ts?");

/***/ }),

/***/ "./src/services/snow.service.ts":
/*!**************************************!*\
  !*** ./src/services/snow.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SnowService\": () => (/* binding */ SnowService)\n/* harmony export */ });\n/* harmony import */ var _classes_HasCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/HasCanvas */ \"./src/classes/HasCanvas.ts\");\n/* harmony import */ var _classes_SnowFlake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/SnowFlake */ \"./src/classes/SnowFlake.ts\");\n/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/constants */ \"./src/misc/constants.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\nvar snowConfig = (__webpack_require__(/*! ../../../../config.json */ \"./config.json\").snow);\r\nvar SnowService = /** @class */ (function (_super) {\r\n    __extends(SnowService, _super);\r\n    function SnowService(canvas) {\r\n        var _this = _super.call(this, canvas) || this;\r\n        _this.snow = [];\r\n        _this.initialize();\r\n        return _this;\r\n    }\r\n    SnowService.prototype.initialize = function () {\r\n        this.setup();\r\n        console.log(this.snow);\r\n    };\r\n    SnowService.prototype.setup = function () {\r\n        if (!snowConfig) {\r\n            console.warn(\"No valid snow configuration found.\");\r\n            return;\r\n        }\r\n        for (var i = 0; i < snowConfig.density; i++) {\r\n            var snowFlake = new _classes_SnowFlake__WEBPACK_IMPORTED_MODULE_1__.SnowFlake();\r\n            snowFlake.setPosition(_misc_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.CANVAS_WIDTH), _misc_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.RANDOM_INT_BETWEEN(0, _misc_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.CANVAS_HEIGHT));\r\n            snowFlake.radius = _misc_constants__WEBPACK_IMPORTED_MODULE_2__.Constants.RANDOM_INT_BETWEEN(0.2, 2);\r\n            snowFlake.advanceFalling();\r\n            this.snow.push(snowFlake);\r\n        }\r\n    };\r\n    SnowService.prototype.renderSnow = function () {\r\n        if (!this.ctx) {\r\n            return;\r\n        }\r\n        for (var _i = 0, _a = this.snow; _i < _a.length; _i++) {\r\n            var snow = _a[_i];\r\n            this.ctx.fillStyle = snow.color;\r\n            this.ctx.strokeStyle = snow.color;\r\n            this.ctx.beginPath();\r\n            this.ctx.ellipse(snow.position.x, snow.position.y, snow.radius, snow.radius, Math.PI, 0, 5 * Math.PI);\r\n            this.ctx.stroke();\r\n            this.ctx.fill();\r\n        }\r\n    };\r\n    SnowService.prototype.update = function () {\r\n        for (var _i = 0, _a = this.snow; _i < _a.length; _i++) {\r\n            var snow = _a[_i];\r\n            snow.advanceFalling();\r\n        }\r\n    };\r\n    return SnowService;\r\n}(_classes_HasCanvas__WEBPACK_IMPORTED_MODULE_0__.HasCanvas));\r\n\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/services/snow.service.ts?");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"gifts\":[{\"position\":{\"x\":330,\"y\":560},\"size\":40,\"color\":\"#c42a2a\"},{\"position\":{\"x\":375,\"y\":550},\"size\":50,\"color\":\"#2a75c4\"},{\"position\":{\"x\":430,\"y\":560},\"size\":40,\"color\":\"#2ac44e\"},{\"position\":{\"x\":410,\"y\":527},\"size\":30,\"color\":\"#e0d941\"},{\"position\":{\"x\":350,\"y\":517},\"size\":40,\"color\":\"#c42ac4\"},{\"position\":{\"x\":290,\"y\":565},\"size\":35,\"color\":\"#34a853\"},{\"position\":{\"x\":360,\"y\":490},\"size\":25,\"color\":\"#fbbc05\"},{\"position\":{\"x\":475,\"y\":560},\"size\":40,\"color\":\"#4285f4\"},{\"position\":{\"x\":450,\"y\":527},\"size\":30,\"color\":\"#ea4335\"},{\"position\":{\"x\":415,\"y\":505},\"size\":20,\"color\":\"#9b59b6\"}],\"snow\":{\"density\":300}}');\n\n//# sourceURL=webpack://my-webpack-project/./config.json?");

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