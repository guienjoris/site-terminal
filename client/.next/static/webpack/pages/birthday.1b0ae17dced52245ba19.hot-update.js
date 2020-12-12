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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/home */ "./styles/home.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "E:\\Projets\\React\\NextJS\\site-terminal\\client\\pages\\birthday.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var urlBirthday = "http://localhost:3001/";
function Birthday() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      birthdayState = _useState[0],
      setBirthdayState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      nextBirthday = _useState2[0],
      setNextBirthday = _useState2[1];

  var currentDate = new Date(Date.now());
  console.log("".concat(currentDate.getFullYear(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getDate()));

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _yield$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat(urlBirthday, "api/getBirthday"));

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData();
    console.log(birthdayState, "BIRTHDAYSTATE");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var next = birthdayState.map(function (item) {
      var dateItem = new Date(item.dateNaissance);
      var ageItem = currentDate.getFullYear() - dateItem.getFullYear();

      if (currentDate.getMonth() + 1 == dateItem.getMonth() + 1 && currentDate.getDate() <= dateItem.getDate()) {
        var whosplit = item.who.split("de ")[1];
        var who = whosplit.split(" ")[0];
        setNextBirthday([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextBirthday), [{
          age: ageItem,
          who: who,
          date: dateItem
        }]));
      }
    });
  }, [birthdayState]);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Prochain anniversaires du mois :"), nextBirthday.map(function (e) {
    return __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 28
      }
    }, "Le: ", e.date, " ");
  })), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Signature"], {
    href: "https://github.com/guienjoris",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Shynryu"));
}

_s(Birthday, "/WqsxClPUJc0l+tgw2w7jp2fyDY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVybEJpcnRoZGF5IiwicHJvY2VzcyIsIkJpcnRoZGF5IiwidXNlU3RhdGUiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsIm5leHRCaXJ0aGRheSIsInNldE5leHRCaXJ0aGRheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInVzZUVmZmVjdCIsIm5leHQiLCJtYXAiLCJpdGVtIiwiZGF0ZUl0ZW0iLCJkYXRlTmFpc3NhbmNlIiwiYWdlSXRlbSIsIndob3NwbGl0Iiwid2hvIiwic3BsaXQiLCJhZ2UiLCJkYXRlIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBR0Msd0JBQXBCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUN4QkMsYUFEd0I7QUFBQSxNQUNSQyxnQkFEUTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFeEJHLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFHL0IsTUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEVBQVQsQ0FBcEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLFdBQWVKLFdBQVcsQ0FBQ0ssV0FBWixFQUFmLGNBQTRDTCxXQUFXLENBQUNNLFFBQVosS0FBdUIsQ0FBbkUsY0FBd0VOLFdBQVcsQ0FBQ08sT0FBWixFQUF4RTs7QUFDQSxNQUFNQyxTQUFTO0FB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NWJhMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUaXRsZSwgU2lnbmF0dXJlLCBDYXJkLCBDbGFzc2ljVGV4dCB9IGZyb20gXCIuLi9zdHlsZXMvaG9tZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcblxyXG5jb25zdCB1cmxCaXJ0aGRheSA9IHByb2Nlc3MuZW52LlVSTF9TRVJWRVI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaXJ0aGRheSgpIHtcclxuICAgIGNvbnN0IFtiaXJ0aGRheVN0YXRlICwgc2V0QmlydGhkYXlTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbmV4dEJpcnRoZGF5LCBzZXROZXh0QmlydGhkYXldID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShEYXRlLm5vdygpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgJHtjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpfS0ke2N1cnJlbnREYXRlLmdldE1vbnRoKCkrMX0tJHtjdXJyZW50RGF0ZS5nZXREYXRlKCl9YCk7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKT0+e1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3R7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsQmlydGhkYXl9YXBpL2dldEJpcnRoZGF5YCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLCBcIkRBVEFcIilcclxuICAgICAgICAgICAgICAgIHNldEJpcnRoZGF5U3RhdGUoZGF0YSlcclxuICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYmlydGhkYXlTdGF0ZSwgXCJCSVJUSERBWVNUQVRFXCIpXHJcbiAgICB9LFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IGJpcnRoZGF5U3RhdGUubWFwKGl0ZW09PntcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRlSXRlbSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZU5haXNzYW5jZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFnZUl0ZW0gPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gZGF0ZUl0ZW0uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudERhdGUuZ2V0TW9udGgoKSsxID09IGRhdGVJdGVtLmdldE1vbnRoKCkrMSAmJiBjdXJyZW50RGF0ZS5nZXREYXRlKCkgPD0gZGF0ZUl0ZW0uZ2V0RGF0ZSgpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdob3NwbGl0ID0gaXRlbS53aG8uc3BsaXQoXCJkZSBcIilbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aG8gPSB3aG9zcGxpdC5zcGxpdChcIiBcIilbMF1cclxuICAgICAgICAgICAgICAgIHNldE5leHRCaXJ0aGRheShbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4ubmV4dEJpcnRoZGF5LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWdlOmFnZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdobzogd2hvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBkYXRlSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxbYmlydGhkYXlTdGF0ZV0pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5CaXJ0aGRheTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxUaXRsZSBocmVmPVwiL1wiPkJpcnRoZGF5PC9UaXRsZT5cclxuICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENsYXNzaWNUZXh0PlByb2NoYWluIGFubml2ZXJzYWlyZXMgZHUgbW9pcyA6PC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAge25leHRCaXJ0aGRheS5tYXAoZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybig8Q2xhc3NpY1RleHQ+TGU6IHtlLmRhdGV9IDwvQ2xhc3NpY1RleHQ+KVxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDxTaWduYXR1cmUgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ndWllbmpvcmlzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgU2h5bnJ5dVxyXG4gICAgICA8L1NpZ25hdHVyZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=