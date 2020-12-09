webpackHotUpdate_N_E("pages/birthday",{

/***/ "./pages/birthday.jsx":
/*!****************************!*\
  !*** ./pages/birthday.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Birthday; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\user\\Projets\\Perso\\site-terminal\\client\\pages\\birthday.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
    birthdayState = _useState[0],
    setBirthdayState = _useState[1];

var getBirthday = /*#__PURE__*/function () {
  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _yield$axios$get, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(process.env.URL_SERVER, "/api/getBirthday"));

          case 3:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            setBirthdayState = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("setBirthdayState"), data.data);
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getBirthday() {
    return _ref.apply(this, arguments);
  };
}();

useEffect(function () {
  console.log(birthdayState);
}, [birthdayState]);
function Birthday() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Birthday");
}
_c = Birthday;

var _c;

$RefreshReg$(_c, "Birthday");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYmlydGhkYXlTdGF0ZSIsInNldEJpcnRoZGF5U3RhdGUiLCJnZXRCaXJ0aGRheSIsImF4aW9zIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIlVSTF9TRVJWRVIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIkJpcnRoZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Z0JBRTJDQSxzREFBUSxDQUFDLEVBQUQsQztJQUE1Q0MsYTtJQUFnQkMsZ0I7O0FBQ3ZCLElBQU1DLFdBQVc7QUFBQSw4TEFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdHQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUF6QixzQkFISDs7QUFBQTtBQUFBO0FBR1ZDLGdCQUhVLG9CQUdWQSxJQUhVO0FBSWhCUCw0QkFBZ0Isa0hBQUdPLElBQUksQ0FBQ0EsSUFBUixDQUFoQjtBQUpnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1mQyxtQkFBTyxDQUFDQyxHQUFSOztBQU5lO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhSLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakI7O0FBU0FTLFNBQVMsQ0FBQyxZQUFNO0FBQ1pGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZVixhQUFaO0FBQ0gsQ0FGUSxFQUVOLENBQUNBLGFBQUQsQ0FGTSxDQUFUO0FBR2UsU0FBU1ksUUFBVCxHQUFvQjtBQUcvQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREo7QUFHSDtLQU51QkEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaXJ0aGRheS43Mjk2MTkxZjcxNDI3ODJhMDc2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBbYmlydGhkYXlTdGF0ZSAsIHNldEJpcnRoZGF5U3RhdGVdID0gdXNlU3RhdGUoe30pXHJcbmNvbnN0IGdldEJpcnRoZGF5ID0gYXN5bmMgKCk9PntcclxuXHJcbiB0cnkge1xyXG4gICAgY29uc3R7ZGF0YX0gPWF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5VUkxfU0VSVkVSfS9hcGkvZ2V0QmlydGhkYXlgKTtcclxuICAgIHNldEJpcnRoZGF5U3RhdGUgPSBkYXRhLmRhdGFcclxuIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiB9XHJcbn0gXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhiaXJ0aGRheVN0YXRlKTtcclxufSwgW2JpcnRoZGF5U3RhdGVdKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaXJ0aGRheSgpIHtcclxuXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PkJpcnRoZGF5PC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9