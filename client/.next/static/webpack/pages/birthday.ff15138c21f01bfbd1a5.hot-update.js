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
              setBirthdayState(data);
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

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var next = birthdayState.map(function (item) {
      var dateItem = new Date(item.dateNaissance);
      var ageItem = currentDate.getFullYear() - dateItem.getFullYear();

      if (currentDate.getMonth() + 1 == dateItem.getMonth() + 1 && currentDate.getDate() <= dateItem.getDate()) {
        var whosplit = item.who.split("de ")[1];
        var who = whosplit.split(" ")[0];
        setNextBirthday(function (prevState) {
          return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextBirthday), [{
            age: ageItem,
            who: who,
            date: dateItem
          }]);
        });
      }
    });
  }, [birthdayState]);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, "Prochain anniversaire(s) du mois :"), nextBirthday.map(function (e, index) {
    return __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["BorderText"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "Le : ", e.date.getDate(), " ", monthNames[e.date.getMonth()], " ", currentDate.getFullYear(), " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "De : ", e.who, " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, "Age : ", e.age, " ans "));
  })), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Signature"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVybEJpcnRoZGF5IiwicHJvY2VzcyIsIkJpcnRoZGF5IiwidXNlU3RhdGUiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsIm5leHRCaXJ0aGRheSIsInNldE5leHRCaXJ0aGRheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsIm1vbnRoTmFtZXMiLCJ1c2VFZmZlY3QiLCJuZXh0IiwibWFwIiwiaXRlbSIsImRhdGVJdGVtIiwiZGF0ZU5haXNzYW5jZSIsImFnZUl0ZW0iLCJ3aG9zcGxpdCIsIndobyIsInNwbGl0IiwicHJldlN0YXRlIiwiYWdlIiwiZGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFdBQVcsR0FBR0Msd0JBQXBCO0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEVBQUQsQ0FEcEI7QUFBQSxNQUN4QkMsYUFEd0I7QUFBQSxNQUNSQyxnQkFEUTs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFeEJHLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFHL0IsTUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEVBQVQsQ0FBcEI7QUFFQUMsU0FBTyxDQUFDQyxHQUFSLFdBQWVKLFdBQVcsQ0FBQ0ssV0FBWixFQUFmLGNBQTRDTCxXQUFXLENBQUNNLFFBQVosS0FBdUIsQ0FBbkUsY0FBd0VOLFdBQVcsQ0FB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LENBQUMsQ0FBQ0gsSUFBRixDQUFPbEIsT0FBUCxFQUFuQixPQUFzQ0ssVUFBVSxDQUFDZ0IsQ0FBQyxDQUFDSCxJQUFGLENBQU9uQixRQUFQLEVBQUQsQ0FBaEQsT0FBc0VOLFdBQVcsQ0FBQ0ssV0FBWixFQUF0RSxNQURJLEVBRUosTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFtQnVCLENBQUMsQ0FBQ1AsR0FBckIsTUFGSSxFQUdKLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBb0JPLENBQUMsQ0FBQ0osR0FBdEIsVUFISSxDQURKO0FBUVAsR0FUQSxDQUZMLENBTEEsRUFtQkEsTUFBQyxzREFBRDtBQUFXLFFBQUksRUFBQywrQkFBaEI7QUFBZ0QsVUFBTSxFQUFDLFFBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkEsQ0FESjtBQXlCSDs7R0FsRXVCOUIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaXJ0aGRheS5mZjE1MTM4YzIxZjAxYmZiZDFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRpdGxlLCBTaWduYXR1cmUsIENhcmQsIENsYXNzaWNUZXh0LCBCb3JkZXJUZXh0IH0gZnJvbSBcIi4uL3N0eWxlcy9ob21lXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IHVybEJpcnRoZGF5ID0gcHJvY2Vzcy5lbnYuVVJMX1NFUlZFUjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpcnRoZGF5KCkge1xyXG4gICAgY29uc3QgW2JpcnRoZGF5U3RhdGUgLCBzZXRCaXJ0aGRheVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXh0QmlydGhkYXksIHNldE5leHRCaXJ0aGRheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7Y3VycmVudERhdGUuZ2V0TW9udGgoKSsxfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKX1gKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmxCaXJ0aGRheX1hcGkvZ2V0QmlydGhkYXlgKTtcclxuICAgICAgICAgICAgICAgIHNldEJpcnRoZGF5U3RhdGUoZGF0YSlcclxuICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIixcclxuICBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXHJcbl07XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBuZXh0ID0gYmlydGhkYXlTdGF0ZS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlSXRlbSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZU5haXNzYW5jZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFnZUl0ZW0gPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gZGF0ZUl0ZW0uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgaWYoY3VycmVudERhdGUuZ2V0TW9udGgoKSsxID09IGRhdGVJdGVtLmdldE1vbnRoKCkrMSAmJiBjdXJyZW50RGF0ZS5nZXREYXRlKCkgPD0gZGF0ZUl0ZW0uZ2V0RGF0ZSgpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdob3NwbGl0ID0gaXRlbS53aG8uc3BsaXQoXCJkZSBcIilbMV07XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aG8gPSB3aG9zcGxpdC5zcGxpdChcIiBcIilbMF07XHJcbiAgICAgICAgICAgICAgICBzZXROZXh0QmlydGhkYXkocHJldlN0YXRlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm5leHRCaXJ0aGRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWdlOmFnZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aG86IHdobyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sW2JpcnRoZGF5U3RhdGVdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QmlydGhkYXk8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGl0bGUgaHJlZj1cIi9cIj5CaXJ0aGRheTwvVGl0bGU+XHJcbiAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDbGFzc2ljVGV4dD5Qcm9jaGFpbiBhbm5pdmVyc2FpcmUocykgZHUgbW9pcyA6PC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAge25leHRCaXJ0aGRheS5tYXAoKGUsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9yZGVyVGV4dCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+TGUgOiB7ZS5kYXRlLmdldERhdGUoKX0ge21vbnRoTmFtZXNbZS5kYXRlLmdldE1vbnRoKCldfSB7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0gPC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+RGUgOiB7ZS53aG99IDwvQ2xhc3NpY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsYXNzaWNUZXh0PkFnZSA6IHtlLmFnZX0gYW5zIDwvQ2xhc3NpY1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9yZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPFNpZ25hdHVyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWVuam9yaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICBTaHlucnl1XHJcbiAgICAgIDwvU2lnbmF0dXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==