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
      var who = item.who.split("de")[1];
      console.log(who, "test split");
      var dateItem = new Date(item.dateNaissance);
      var ageItem = currentDate.getFullYear() - dateItem.getFullYear();

      if (currentDate.getMonth() + 1 == dateItem.getMonth() + 1 && currentDate.getDate() < dateItem.getDate()) {
        setNextBirthday([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(nextBirthday), [{
          age: ageItem,
          who: item.who.split(" de")[1].split(" ")[0]
        }]));
      }
    });
  }, [birthdayState]);
  return __jsx("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Birthday")), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Birthday"), __jsx(_styles_home__WEBPACK_IMPORTED_MODULE_5__["Signature"], {
    href: "https://github.com/guienjoris",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmlydGhkYXkuanN4Il0sIm5hbWVzIjpbInVybEJpcnRoZGF5IiwicHJvY2VzcyIsIkJpcnRoZGF5IiwidXNlU3RhdGUiLCJiaXJ0aGRheVN0YXRlIiwic2V0QmlydGhkYXlTdGF0ZSIsIm5leHRCaXJ0aGRheSIsInNldE5leHRCaXJ0aGRheSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIm5vdyIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsInVzZUVmZmVjdCIsIm5leHQiLCJtYXAiLCJpdGVtIiwid2hvIiwic3BsaXQiLCJkYXRlSXRlbSIsImRhdGVOYWlzc2FuY2UiLCJhZ2VJdGVtIiwiYWdlIiwic3R5bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyx3QkFBcEI7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBLE1BQ3hCQyxhQUR3QjtBQUFBLE1BQ1JDLGdCQURROztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUV4QkcsWUFGd0I7QUFBQSxNQUVWQyxlQUZVOztBQUcvQixNQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsRUFBVCxDQUFwQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsV0FBZUosV0FBVyxDQUFDSyxXQUFaLEVBQWYsY0FBNENMLFdBQVcsQ0FBQ00sUUFBWixLQUF1QixDQUFuRSxjQUF3RU4sV0FBVyxDQUFDTyxPQUFaLEVBQXhFOztBQUNBLE1BQU1DLFNBQVM7QUFBQSxnTUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVjQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFsQixXQUFiLHFCQUZkOztBQUFBO0FBQUE7QUFFQW1CLGtCQUZBLG9CQUVBQSxJQUZBO0FBR05SLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU8sSUFBWixFQUFrQixNQUFsQjtBQUNBZCw4QkFBZ0IsQ0FBQ2MsSUFBRCxDQUFoQjtBQUpNO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUxSLHFCQUFPLENBQUNDLEdBQVI7O0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEksU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVNBSSx5REFBUyxDQUFDLFlBQUk7QUFDVkosYUFBUztBQUNUTCxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsYUFBWixFQUEyQixlQUEzQjtBQUNILEdBSFEsRUFHUCxFQUhPLENBQVQ7QUFJQWdCLHlEQUFTLENBQUMsWUFBSTtBQUNWLFFBQU1DLElBQUksR0FBR2pCLGFBQWEsQ0FBQ2tCLEdBQWQsQ0FBa0IsVUFBQUMsSUFBSSxFQUFFO0FBQ2pDLFVBQU1DLEdBQUcsR0FBR0QsSUFBSSxDQUFDQyxHQUFMLENBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLENBQXJCLENBQVo7QUFDQWQsYUFBTyxDQUFDQyxHQUFSLENBQVlZLEdBQVosRUFBaUIsWUFBakI7QUFFQSxVQUFNRSxRQUFRLEdBQUcsSUFBSWpCLElBQUosQ0FBU2MsSUFBSSxDQUFDSSxhQUFkLENBQWpCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHcEIsV0FBVyxDQUFDSyxXQUFaLEtBQTRCYSxRQUFRLENBQUNiLFdBQVQsRUFBNUM7O0FBQ0EsVUFBR0wsV0FBVyxDQUFDTSxRQUFaLEtBQXVCLENBQXZCLElBQTRCWSxRQUFRLENBQUNaLFFBQVQsS0FBb0IsQ0FBaEQsSUFBcUROLFdBQVcsQ0FBQ08sT0FBWixLQUF1QlcsUUFBUSxDQUFDWCxPQUFULEVBQS9FLEVBQWtHO0FBQzlGUix1QkFBZSx3R0FDUkQsWUFEUSxJQUVYO0FBQ0l1QixhQUFHLEVBQUNELE9BRFI7QUFFSUosYUFBRyxFQUFFRCxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsS0FBVCxDQUFlLEtBQWYsRUFBc0IsQ0FBdEIsRUFBeUJBLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DLENBQXBDO0FBRlQsU0FGVyxHQUFmO0FBT0g7QUFDSixLQWZZLENBQWI7QUFnQkgsR0FqQlEsRUFpQlAsQ0FBQ3JCLGFBQUQsQ0FqQk8sQ0FBVDtBQWtCQSxTQUNJO0FBQU0sYUFBUyxFQUFFMEIsOERBQU0sQ0FBQ0MsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsQ0FESixFQUlBLE1BQUMsa0RBQUQ7QUFBTyxRQUFJLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpBLEVBTUEsTUFBQyxzREFBRDtBQUFXLFFBQUksRUFBQywrQkFBaEI7QUFBZ0QsVUFBTSxFQUFDLFFBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOQSxDQURKO0FBWUg7O0dBakR1QjdCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmlydGhkYXkuODk4ZmE0ZjY1NjAyMzNjNGEyZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBUaXRsZSwgU2lnbmF0dXJlIH0gZnJvbSBcIi4uL3N0eWxlcy9ob21lXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuXHJcbmNvbnN0IHVybEJpcnRoZGF5ID0gcHJvY2Vzcy5lbnYuVVJMX1NFUlZFUjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpcnRoZGF5KCkge1xyXG4gICAgY29uc3QgW2JpcnRoZGF5U3RhdGUgLCBzZXRCaXJ0aGRheVN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtuZXh0QmlydGhkYXksIHNldE5leHRCaXJ0aGRheV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKERhdGUubm93KCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGAke2N1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCl9LSR7Y3VycmVudERhdGUuZ2V0TW9udGgoKSsxfS0ke2N1cnJlbnREYXRlLmdldERhdGUoKX1gKTtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpPT57XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmxCaXJ0aGRheX1hcGkvZ2V0QmlydGhkYXlgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiREFUQVwiKVxyXG4gICAgICAgICAgICAgICAgc2V0QmlydGhkYXlTdGF0ZShkYXRhKVxyXG4gICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiaXJ0aGRheVN0YXRlLCBcIkJJUlRIREFZU1RBVEVcIilcclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBuZXh0ID0gYmlydGhkYXlTdGF0ZS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICBjb25zdCB3aG8gPSBpdGVtLndoby5zcGxpdChcImRlXCIpWzFdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aG8sIFwidGVzdCBzcGxpdFwiKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0ZUl0ZW0gPSBuZXcgRGF0ZShpdGVtLmRhdGVOYWlzc2FuY2UpO1xyXG4gICAgICAgICAgICBjb25zdCBhZ2VJdGVtID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAtIGRhdGVJdGVtLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnREYXRlLmdldE1vbnRoKCkrMSA9PSBkYXRlSXRlbS5nZXRNb250aCgpKzEgJiYgY3VycmVudERhdGUuZ2V0RGF0ZSgpIDxkYXRlSXRlbS5nZXREYXRlKCkpe1xyXG4gICAgICAgICAgICAgICAgc2V0TmV4dEJpcnRoZGF5KFtcclxuICAgICAgICAgICAgICAgICAgICAuLi5uZXh0QmlydGhkYXksXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZ2U6YWdlSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hvOiBpdGVtLndoby5zcGxpdChcIiBkZVwiKVsxXS5zcGxpdChcIiBcIilbMF1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sW2JpcnRoZGF5U3RhdGVdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QmlydGhkYXk8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGl0bGUgaHJlZj1cIi9cIj5CaXJ0aGRheTwvVGl0bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNpZ25hdHVyZSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2d1aWVuam9yaXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICBTaHlucnl1XHJcbiAgICAgIDwvU2lnbmF0dXJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==