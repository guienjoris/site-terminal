webpackHotUpdate_N_E("pages/birthday",{

/***/ "./pages/birthday.jsx":
/*!****************************!*\
  !*** ./pages/birthday.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Birthday; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/home */ "./styles/home.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "E:\\Projets\\React\\NextJS\\site-terminal\\client\\pages\\birthday.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var urlBirthday = "http://localhost:3001/";
function Birthday() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      birthdayState = _useState[0],
      setBirthdayState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      nextBirthday = _useState2[0],
      setNextBirthday = _useState2[1];

  var currentDate = new Date(Date.now());
  console.log("".concat(currentDate.getFullYear(), "-").concat(currentDate.getMonth(), "-").concat(currentDate.getDate()));

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(urlBirthday, "api/getBirthday"));

            case 3:
              _yield$axios$get = _context.sent;
              data = _yield$axios$get.data;
              console.log(data, "DATA");
              setBirthdayState(data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetchData();
    console.log(birthdayState, "BIRTHDAYSTATE");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var next = birthdayState.map(function (item) {
      var dateItem = new Date(item.dateNaissance);
      console.log(dateItem);
    });
  }, [birthdayState]);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_4__["Signature"], {
    href: "https://github.com/guienjoris",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Shynryu"));
}

_s(Birthday, "3DVkL7ptl3F2FxJggns4XYCaLt0=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVybEJpcnRoZGF5IiwicHJvY2VzcyIsIkJpcnRoZGF5IiwidXNlU3RhdGUiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsIm5leHRCaXJ0aGRheSIsInNldE5leHRCaXJ0aGRheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInVzZUVmZmVjdCIsIm5leHQiLCJtYXAiLCJpdGVtIiwiZGF0ZUl0ZW0iLCJkYXRlTmFpc3NhbmNlIiwic3R5bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBR0Msd0JBQXBCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUN4QkMsYUFEd0I7QUFBQSxNQUNSQyxnQkFEUTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFeEJHLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFHL0IsTUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEVBQVQsQ0FBcEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLFdBQWVKLFdBQVcsQ0FBQ0ssV0FBWixFQUFmLGNBQTRDTCxXQUFXLENBQUNNLFFBQVosRUFBNUMsY0FBc0VOLFdBQVcsQ0FBQ08sT0FBWixFQUF0RTs7QUFDQSxNQUFNQyxTQUFTO0FBQUEsZ01BQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFY0MsNENBQUssQ0FBQ0MsR0FBTixXQUFhbEIsV0FBYixxQkFGZDs7QUFBQTtBQUFBO0FBRUFtQixrQkFGQSxvQkFFQUEsSUFGQTtBQUdOUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVosRUFBa0IsTUFBbEI7QUFDQWQsOEJBQWdCLENBQUNjLElBQUQsQ0FBaEI7QUFKTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1MUixxQkFBTyxDQUFDQyxHQUFSOztBQU5LO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRJLFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFTQUkseURBQVMsQ0FBQyxZQUFJO0FBQ1ZKLGFBQVM7QUFDVEwsV0FBTyxDQUFDQyxHQUFSLENBQVlSLGFBQVosRUFBMkIsZUFBM0I7QUFDSCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBSUFnQix5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFNQyxJQUFJLEdBQUdqQixhQUFhLENBQUNrQixHQUFkLENBQWtCLFVBQUFDLElBQUksRUFBRTtBQUNqQyxVQUFNQyxRQUFRLEdBQUcsSUFBSWYsSUFBSixDQUFTYyxJQUFJLENBQUNFLGFBQWQsQ0FBakI7QUFDQWQsYUFBTyxDQUFDQyxHQUFSLENBQVlZLFFBQVo7QUFDSCxLQUhZLENBQWI7QUFJSCxHQUxRLEVBS1AsQ0FBQ3BCLGFBQUQsQ0FMTyxDQUFUO0FBTUEsU0FDSTtBQUFNLGFBQVMsRUFBRXNCLDhEQUFNLENBQUNDLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLENBREosRUFJQSxNQUFDLGtEQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKQSxFQU1BLE1BQUMsc0RBQUQ7QUFBVyxRQUFJLEVBQUMsK0JBQWhCO0FBQWdELFVBQU0sRUFBQyxRQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkEsQ0FESjtBQVlIOztHQXJDdUJ6QixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2JpcnRoZGF5Ljg1MzYzMTJhODIzYjJkNjVkZGMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVGl0bGUsIFNpZ25hdHVyZSB9IGZyb20gXCIuLi9zdHlsZXMvaG9tZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcblxyXG5jb25zdCB1cmxCaXJ0aGRheSA9IHByb2Nlc3MuZW52LlVSTF9TRVJWRVI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaXJ0aGRheSgpIHtcclxuICAgIGNvbnN0IFtiaXJ0aGRheVN0YXRlICwgc2V0QmlydGhkYXlTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmV4dEJpcnRoZGF5LCBzZXROZXh0QmlydGhkYXldID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0ke2N1cnJlbnREYXRlLmdldE1vbnRoKCl9LSR7Y3VycmVudERhdGUuZ2V0RGF0ZSgpfWApO1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCk9PntcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0e2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybEJpcnRoZGF5fWFwaS9nZXRCaXJ0aGRheWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJEQVRBXCIpXHJcbiAgICAgICAgICAgICAgICBzZXRCaXJ0aGRheVN0YXRlKGRhdGEpXHJcbiAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJpcnRoZGF5U3RhdGUsIFwiQklSVEhEQVlTVEFURVwiKVxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBiaXJ0aGRheVN0YXRlLm1hcChpdGVtPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVJdGVtID0gbmV3IERhdGUoaXRlbS5kYXRlTmFpc3NhbmNlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZUl0ZW0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sW2JpcnRoZGF5U3RhdGVdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QmlydGhkYXk8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGl0bGUgaHJlZj1cIi9cIj5CaXJ0aGRheTwvVGl0bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNpZ25hdHVyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWVuam9yaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICBTaHlucnl1XHJcbiAgICAgIDwvU2lnbmF0dXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==