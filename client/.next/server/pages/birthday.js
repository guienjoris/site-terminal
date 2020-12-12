module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/birthday.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/birthday.jsx":
/*!****************************!*\
  !*** ./pages/birthday.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Birthday; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/home */ "./styles/home.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Projets\\React\\NextJS\\site-terminal\\client\\pages\\birthday.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const urlBirthday = "http://localhost:3001/";
function Birthday() {
  const {
    0: birthdayState,
    1: setBirthdayState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: nextBirthday,
    1: setNextBirthday
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const currentDate = new Date(Date.now());
  console.log(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`);

  const fetchData = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${urlBirthday}api/getBirthday`);
      setBirthdayState(data);
    } catch (error) {
      console.log(error);
    }
  };

  const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const next = birthdayState.map(item => {
      const dateItem = new Date(item.dateNaissance);
      const ageItem = currentDate.getFullYear() - dateItem.getFullYear();

      if (currentDate.getMonth() + 1 == dateItem.getMonth() + 1 && currentDate.getDate() <= dateItem.getDate()) {
        const whosplit = item.who.split("de ")[1];
        const who = whosplit.split(" ")[0];
        setNextBirthday(prevState => {
          return [...prevState, {
            age: ageItem,
            who: who,
            date: dateItem
          }];
        });
      }
    });
  }, [birthdayState]);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["ClassicText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Prochain anniversaire(s) du mois :"), nextBirthday.map((e, index) => {
    return __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["BorderText"], {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["ClassicText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "Le : ", e.date.getDate(), " ", monthNames[e.date.getMonth()], " ", currentDate.getFullYear(), " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["ClassicText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "De : ", e.who, " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["ClassicText"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, "Age : ", e.age, " ans "));
  })), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_2__["Signature"], {
    href: "https://github.com/guienjoris",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Shynryu"));
}

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"footer": "Home_footer__1WdhD",
	"title": "Home_title__3DjR7",
	"description": "Home_description__17Z4F",
	"code": "Home_code__axx2Y",
	"grid": "Home_grid__2Ei2F",
	"card": "Home_card__2SdtB",
	"logo": "Home_logo__1YbrH"
};


/***/ }),

/***/ "./styles/home.js":
/*!************************!*\
  !*** ./styles/home.js ***!
  \************************/
/*! exports provided: blink, Input, Title, Signature, Card, ClassicText, BorderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blink", function() { return blink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signature", function() { return Signature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicText", function() { return ClassicText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderText", function() { return BorderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const blink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-image:none;}to{background-image:url(caret.png);}"]);
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "home__Input",
  componentId: "sc-1uuz3mh-0"
})(["background-color:transparent;caret-color:transparent;caret-shape:underscore;animation:", " 1s linear infinite;background-repeat:no-repeat;background-position:", ";border-style:none;border-color:transparent;color:white;font-family:Orbitron,sans-serif;font-size:50px;text-shadow:1px 1px 10px white;text-align:center;outline:none;height:100vh;width:100%;"], blink, props => props.caretPosition);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "home__Title",
  componentId: "sc-1uuz3mh-1"
})(["position:absolute;top:0;text-shadow:1px 1px 10px white;font-size:100px;"]);
const Signature = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "home__Signature",
  componentId: "sc-1uuz3mh-2"
})(["text-shadow:1px 1px 10px white;position:absolute;bottom:10px;"]);
const Card = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "home__Card",
  componentId: "sc-1uuz3mh-3"
})(["border:1px solid white;width:50%;height:50%;position:absolute;margin-left:50%;transform:translate(-50%);border-radius:10px;box-shadow:2px 2px 10px white;background-color:rgba(255,255,255,0.5);overflow:scroll;-ms-overflow-style:none;scrollbar-width:none;::-webkit-scrollbar{display:none;}"]);
const ClassicText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "home__ClassicText",
  componentId: "sc-1uuz3mh-4"
})(["color:black;text-align:center;"]);
const BorderText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "home__BorderText",
  componentId: "sc-1uuz3mh-5"
})(["border:1px solid white;margin:1%;border-radius:10px;"]);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmlydGhkYXkuanN4Iiwid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidXJsQmlydGhkYXkiLCJwcm9jZXNzIiwiQmlydGhkYXkiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsInVzZVN0YXRlIiwibmV4dEJpcnRoZGF5Iiwic2V0TmV4dEJpcnRoZGF5IiwiY3VycmVudERhdGUiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiZXJyb3IiLCJtb250aE5hbWVzIiwidXNlRWZmZWN0IiwibmV4dCIsIm1hcCIsIml0ZW0iLCJkYXRlSXRlbSIsImRhdGVOYWlzc2FuY2UiLCJhZ2VJdGVtIiwid2hvc3BsaXQiLCJ3aG8iLCJzcGxpdCIsInByZXZTdGF0ZSIsImFnZSIsImRhdGUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJlIiwiaW5kZXgiLCJibGluayIsImtleWZyYW1lcyIsIklucHV0Iiwic3R5bGVkIiwiaW5wdXQiLCJwcm9wcyIsImNhcmV0UG9zaXRpb24iLCJUaXRsZSIsImEiLCJTaWduYXR1cmUiLCJDYXJkIiwiZGl2IiwiQ2xhc3NpY1RleHQiLCJwIiwiQm9yZGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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USxHQUFWO0FBQUE7QUFBQTtBQUFBLDREQUFoQixDOzs7Ozs7Ozs7OztBQy9EUCxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9iaXJ0aGRheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYmlydGhkYXkuanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRpdGxlLCBTaWduYXR1cmUsIENhcmQsIENsYXNzaWNUZXh0LCBCb3JkZXJUZXh0IH0gZnJvbSBcIi4uL3N0eWxlcy9ob21lXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IHVybEJpcnRoZGF5ID0gcHJvY2Vzcy5lbnYuVVJMX1NFUlZFUjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpcnRoZGF5KCkge1xyXG4gICAgY29uc3QgW2JpcnRoZGF5U3RhdGUgLCBzZXRCaXJ0aGRheVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXh0QmlydGhkYXksIHNldE5leHRCaXJ0aGRheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7Y3VycmVudERhdGUuZ2V0TW9udGgoKSsxfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKX1gKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmxCaXJ0aGRheX1hcGkvZ2V0QmlydGhkYXlgKTtcclxuICAgICAgICAgICAgICAgIHNldEJpcnRoZGF5U3RhdGUoZGF0YSlcclxuICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIixcclxuICBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXHJcbl07XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBuZXh0ID0gYmlydGhkYXlTdGF0ZS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlSXRlbSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZU5haXNzYW5jZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFnZUl0ZW0gPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gZGF0ZUl0ZW0uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudERhdGUuZ2V0TW9udGgoKSsxID09IGRhdGVJdGVtLmdldE1vbnRoKCkrMSAmJiBjdXJyZW50RGF0ZS5nZXREYXRlKCkgPD0gZGF0ZUl0ZW0uZ2V0RGF0ZSgpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdob3NwbGl0ID0gaXRlbS53aG8uc3BsaXQoXCJkZSBcIilbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aG8gPSB3aG9zcGxpdC5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0QmlydGhkYXkocHJldlN0YXRlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOmFnZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG86IHdobyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sW2JpcnRoZGF5U3RhdGVdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QmlydGhkYXk8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGl0bGUgaHJlZj1cIi9cIj5CaXJ0aGRheTwvVGl0bGU+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDbGFzc2ljVGV4dD5Qcm9jaGFpbiBhbm5pdmVyc2FpcmUocykgZHUgbW9pcyA6PC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAge25leHRCaXJ0aGRheS5tYXAoKGUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9yZGVyVGV4dCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+TGUgOiB7ZS5kYXRlLmdldERhdGUoKX0ge21vbnRoTmFtZXNbZS5kYXRlLmdldE1vbnRoKCldfSB7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0gPC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+RGUgOiB7ZS53aG99IDwvQ2xhc3NpY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsYXNzaWNUZXh0PkFnZSA6IHtlLmFnZX0gYW5zIDwvQ2xhc3NpY1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9yZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPFNpZ25hdHVyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWVuam9yaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICBTaHlucnl1XHJcbiAgICAgIDwvU2lnbmF0dXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iLCJpbXBvcnQgc3R5bGVkLCB7a2V5ZnJhbWVzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJsaW5rID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChjYXJldC5wbmcpO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGNhcmV0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjYXJldC1zaGFwZTp1bmRlcnNjb3JlO1xyXG4gIGFuaW1hdGlvbjogJHtibGlua30gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLmNhcmV0UG9zaXRpb259O1xyXG4gIGJvcmRlci1zdHlsZTpub25lO1xyXG4gIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LWZhbWlseTogT3JiaXRyb24gLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgd2lkdGg6MTAwJTtcclxuYFxyXG5cclxuIGV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5hYFxyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDEwcHggd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgU2lnbmF0dXJlID0gc3R5bGVkLmFgXHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCB3aGl0ZTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBib3R0b206MTBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOjUwJTtcclxuICAgIGhlaWdodDo1MCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIG92ZXJmbG93OnNjcm9sbDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgIC8qIElFIGFuZCBFZGdlICovXHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICAvKiBGaXJlZm94ICovXHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2xhc3NpY1RleHQgPSBzdHlsZWQucGBcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuYFxyXG5leHBvcnQgY29uc3QgQm9yZGVyVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luOjElO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG5gXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9