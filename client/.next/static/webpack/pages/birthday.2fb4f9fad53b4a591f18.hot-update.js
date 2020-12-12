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

  var monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
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
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Prochain anniversaires du mois :"), nextBirthday.map(function (e) {
    return __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["BorderText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "Le : ", e.date.getDate(), " ", monthNames[e.date.getMonth()], " ", currentDate.getFullYear(), " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, "De : ", e.who, " "), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["ClassicText"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, "Age : ", e.age, " ans "));
  })), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Signature"], {
    href: "https://github.com/guienjoris",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVybEJpcnRoZGF5IiwicHJvY2VzcyIsIkJpcnRoZGF5IiwidXNlU3RhdGUiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsIm5leHRCaXJ0aGRheSIsInNldE5leHRCaXJ0aGRheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsIm1vbnRoTmFtZXMiLCJ1c2VFZmZlY3QiLCJuZXh0IiwibWFwIiwiaXRlbSIsImRhdGVJdGVtIiwiZGF0ZU5haXNzYW5jZSIsImFnZUl0ZW0iLCJ3aG9zcGxpdCIsIndobyIsInNwbGl0IiwiYWdlIiwiZGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxXQUFXLEdBQUdDLHdCQUFwQjtBQUVlLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBQyxFQUFELENBRHBCO0FBQUEsTUFDeEJDLGFBRHdCO0FBQUEsTUFDUkMsZ0JBRFE7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRXhCRyxZQUZ3QjtBQUFBLE1BRVZDLGVBRlU7O0FBRy9CLE1BQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxFQUFULENBQXBCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixXQUFlSixXQUFXLENBQUNLLFdBQVosRUFBZixjQUE0Q0wsV0FBVyxDQUFDTSxRQUFaLEtBQXVCLENBQW5FLGNBQXdFTixXQUFXLENBQUNPLE9BQVosRUFBeEU7O0FBQ0EsTUFBTUMsU0FBUztBQUFBLGdNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRWNDLDRDQUFLLENBQUNDLEdBQU4sV0FBYWxCLFdBQWIscUJBRmQ7O0FBQUE7QUFBQTtBQUVBbUIsa0JBRkEsb0JBRUFBLElBRkE7QUFHTlIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxJQUFaLEVBQWtCLE1BQWxCO0FBQ0FkLDhCQUFnQixDQUFDYyxJQUFELENBQWhCO0FBSk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNTFIscUJBQU8sQ0FBQ0MsR0FBUjs7QUFOSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBU0ksTUFBTUksVUFBVSxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsTUFBdkIsRUFBK0IsT0FBL0IsRUFBd0MsS0FBeEMsRUFBK0MsTUFBL0MsRUFDekIsU0FEeUIsRUFDZCxNQURjLEVBQ04sV0FETSxFQUNPLFNBRFAsRUFDa0IsVUFEbEIsRUFDOEIsVUFEOUIsQ0FBbkI7QUFHSkMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZMLGFBQVM7QUFDVEwsV0FBTyxDQUFDQyxHQUFSLENBQVlSLGFBQVosRUFBMkIsZUFBM0I7QUFDSCxHQUhRLEVBR1AsRUFITyxDQUFUO0FBSUFpQix5REFBUyxDQUFDLFlBQUk7QUFDVixRQUFNQyxJQUFJLEdBQUdsQixhQUFhLENBQUNtQixHQUFkLENBQWtCLFVBQUFDLElBQUksRUFBRTtBQUdqQyxVQUFNQyxRQUFRLEdBQUcsSUFBSWhCLElBQUosQ0FBU2UsSUFBSSxDQUFDRSxhQUFkLENBQWpCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHbkIsV0FBVyxDQUFDSyxXQUFaLEtBQTRCWSxRQUFRLENBQUNaLFdBQVQsRUFBNUM7O0FBQ0EsVUFBR0wsV0FBVyxDQUFDTSxRQUFaLEtBQXVCLENBQXZCLElBQTRCVyxRQUFRLENBQUNYLFFBQVQsS0FBb0IsQ0FBaEQsSUFBcUROLFdBQVcsQ0FBQ08sT0FBWixNQUF5QlUsUUFBUSxDQUFDVixPQUFULEVBQWpGLEVBQW9HO0FBQ2hHLFlBQU1hLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxHQUFMLENBQVNDLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLENBQXRCLENBQWpCO0FBQ0EsWUFBTUQsR0FBRyxHQUFHRCxRQUFRLENBQUNFLEtBQVQsQ0FBZSxHQUFmLEVBQW9CLENBQXBCLENBQVo7QUFDQXZCLHVCQUFlLHdHQUNSRCxZQURRLElBRVg7QUFDSXlCLGFBQUcsRUFBQ0osT0FEUjtBQUVJRSxhQUFHLEVBQUVBLEdBRlQ7QUFHSUcsY0FBSSxFQUFFUDtBQUhWLFNBRlcsR0FBZjtBQVFIO0FBQ0osS0FqQlksQ0FBYjtBQWtCSCxHQW5CUSxFQW1CUCxDQUFDckIsYUFBRCxDQW5CTyxDQUFUO0FBb0JBLFNBQ0k7QUFBTSxhQUFTLEVBQUU2Qiw4REFBTSxDQUFDQyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxDQURKLEVBSUEsTUFBQyxrREFBRDtBQUFPLFFBQUksRUFBQyxHQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkEsRUFLQSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREosRUFFSzVCLFlBQVksQ0FBQ2lCLEdBQWIsQ0FBaUIsVUFBQVksQ0FBQyxFQUFFO0FBQ2IsV0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSixNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW1CQSxDQUFDLENBQUNILElBQUYsQ0FBT2pCLE9BQVAsRUFBbkIsT0FBc0NLLFVBQVUsQ0FBQ2UsQ0FBQyxDQUFDSCxJQUFGLENBQU9sQixRQUFQLEVBQUQsQ0FBaEQsT0FBc0VOLFdBQVcsQ0FBQ0ssV0FBWixFQUF0RSxNQURJLEVBRUosTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFtQnNCLENBQUMsQ0FBQ04sR0FBckIsTUFGSSxFQUdKLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBb0JNLENBQUMsQ0FBQ0osR0FBdEIsVUFISSxDQURKO0FBUVAsR0FUQSxDQUZMLENBTEEsRUFtQkEsTUFBQyxzREFBRDtBQUFXLFFBQUksRUFBQywrQkFBaEI7QUFBZ0QsVUFBTSxFQUFDLFFBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkEsQ0FESjtBQXlCSDs7R0FuRXVCN0IsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaXJ0aGRheS4yZmI0ZjlmYWQ1M2I0YTU5MWYxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRpdGxlLCBTaWduYXR1cmUsIENhcmQsIENsYXNzaWNUZXh0LCBCb3JkZXJUZXh0IH0gZnJvbSBcIi4uL3N0eWxlcy9ob21lXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IHVybEJpcnRoZGF5ID0gcHJvY2Vzcy5lbnYuVVJMX1NFUlZFUjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpcnRoZGF5KCkge1xyXG4gICAgY29uc3QgW2JpcnRoZGF5U3RhdGUgLCBzZXRCaXJ0aGRheVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXh0QmlydGhkYXksIHNldE5leHRCaXJ0aGRheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7Y3VycmVudERhdGUuZ2V0TW9udGgoKSsxfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKX1gKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmxCaXJ0aGRheX1hcGkvZ2V0QmlydGhkYXlgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiREFUQVwiKVxyXG4gICAgICAgICAgICAgICAgc2V0QmlydGhkYXlTdGF0ZShkYXRhKVxyXG4gICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIixcclxuICBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXHJcbl07XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiaXJ0aGRheVN0YXRlLCBcIkJJUlRIREFZU1RBVEVcIilcclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBuZXh0ID0gYmlydGhkYXlTdGF0ZS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVJdGVtID0gbmV3IERhdGUoaXRlbS5kYXRlTmFpc3NhbmNlKTtcclxuICAgICAgICAgICAgY29uc3QgYWdlSXRlbSA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgLSBkYXRlSXRlbS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBpZihjdXJyZW50RGF0ZS5nZXRNb250aCgpKzEgPT0gZGF0ZUl0ZW0uZ2V0TW9udGgoKSsxICYmIGN1cnJlbnREYXRlLmdldERhdGUoKSA8PSBkYXRlSXRlbS5nZXREYXRlKCkpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2hvc3BsaXQgPSBpdGVtLndoby5zcGxpdChcImRlIFwiKVsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdobyA9IHdob3NwbGl0LnNwbGl0KFwiIFwiKVswXVxyXG4gICAgICAgICAgICAgICAgc2V0TmV4dEJpcnRoZGF5KFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5uZXh0QmlydGhkYXksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6YWdlSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOiB3aG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGRhdGVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtiaXJ0aGRheVN0YXRlXSlcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPkJpcnRoZGF5PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPFRpdGxlIGhyZWY9XCIvXCI+QmlydGhkYXk8L1RpdGxlPlxyXG4gICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICA8Q2xhc3NpY1RleHQ+UHJvY2hhaW4gYW5uaXZlcnNhaXJlcyBkdSBtb2lzIDo8L0NsYXNzaWNUZXh0PlxyXG4gICAgICAgICAgICB7bmV4dEJpcnRoZGF5Lm1hcChlPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm9yZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+TGUgOiB7ZS5kYXRlLmdldERhdGUoKX0ge21vbnRoTmFtZXNbZS5kYXRlLmdldE1vbnRoKCldfSB7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0gPC9DbGFzc2ljVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2xhc3NpY1RleHQ+RGUgOiB7ZS53aG99IDwvQ2xhc3NpY1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENsYXNzaWNUZXh0PkFnZSA6IHtlLmFnZX0gYW5zIDwvQ2xhc3NpY1RleHQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm9yZGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPFNpZ25hdHVyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWVuam9yaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICBTaHlucnl1XHJcbiAgICAgIDwvU2lnbmF0dXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==