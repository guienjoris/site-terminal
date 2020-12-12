webpackHotUpdate_N_E("pages/birthday",{

/***/ "./styles/home.js":
/*!************************!*\
  !*** ./styles/home.js ***!
  \************************/
/*! exports provided: blink, Input, Title, Signature, Card, ClassicText, BorderText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blink", function() { return blink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signature", function() { return Signature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassicText", function() { return ClassicText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderText", function() { return BorderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var blink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-image:none;}to{background-image:url(caret.png);}"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "home__Input",
  componentId: "sc-1uuz3mh-0"
})(["background-color:transparent;caret-color:transparent;caret-shape:underscore;animation:", " 1s linear infinite;background-repeat:no-repeat;background-position:", ";border-style:none;border-color:transparent;color:white;font-family:Orbitron,sans-serif;font-size:50px;text-shadow:1px 1px 10px white;text-align:center;outline:none;height:100vh;width:100%;"], blink, function (props) {
  return props.caretPosition;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "home__Title",
  componentId: "sc-1uuz3mh-1"
})(["position:absolute;top:0;text-shadow:1px 1px 10px white;font-size:100px;"]);
var Signature = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "home__Signature",
  componentId: "sc-1uuz3mh-2"
})(["text-shadow:1px 1px 10px white;position:absolute;bottom:10px;"]);
var Card = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "home__Card",
  componentId: "sc-1uuz3mh-3"
})(["border:1px solid white;width:50%;height:50%;position:absolute;margin-left:50%;transform:translate(-50%);border-radius:10px;box-shadow:2px 2px 10px white;background-color:rgba(255,255,255,0.5);overflow:scroll;-ms-overflow-style:none;scrollbar-width:none;::-webkit-scrollbar{display:none;}"]);
var ClassicText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "home__ClassicText",
  componentId: "sc-1uuz3mh-4"
})(["color:black;text-align:center;"]);
var BorderText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "home__BorderText",
  componentId: "sc-1uuz3mh-5"
})(["border:1px solid white;margin:1%;border-radius:10px;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2hvbWUuanMiXSwibmFtZXMiOlsiYmxpbmsiLCJrZXlmcmFtZXMiLCJJbnB1dCIsInN0eWxlZCIsImlucHV0IiwicHJvcHMiLCJjYXJldFBvc2l0aW9uIiwiVGl0bGUiLCJhIiwiU2lnbmF0dXJlIiwiQ2FyZCIsImRpdiIsIkNsYXNzaWNUZXh0IiwicCIsIkJvcmRlclRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLEtBQUssR0FBR0MsbUVBQUgsc0VBQVg7QUFTQSxJQUFNQyxLQUFLLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsd1dBSUhKLEtBSkcsRUFNTyxVQUFBSyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxhQUFWO0FBQUEsQ0FOWixDQUFYO0FBbUJDLElBQU1DLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssQ0FBVjtBQUFBO0FBQUE7QUFBQSwrRUFBWDtBQU1ELElBQU1DLFNBQVMsR0FBR04seURBQU0sQ0FBQ0ssQ0FBVjtBQUFBO0FBQUE7QUFBQSxxRUFBZjtBQUtBLElBQU1FLElBQUksR0FBR1AseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSx1U0FBVjtBQWlCQSxJQUFNQyxXQUFXLEdBQUdULHlEQUFNLENBQUNVLENBQVY7QUFBQTtBQUFBO0FBQUEsc0NBQWpCO0FBSUEsSUFBTUMsVUFBVSxHQUFHWCx5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLDREQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iaXJ0aGRheS5iNzMwYjRiZWFkZTQ3MDljMWQ4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwge2tleWZyYW1lc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBibGluayA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoY2FyZXQucG5nKTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjYXJldC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY2FyZXQtc2hhcGU6dW5kZXJzY29yZTtcclxuICBhbmltYXRpb246ICR7Ymxpbmt9IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy5jYXJldFBvc2l0aW9ufTtcclxuICBib3JkZXItc3R5bGU6bm9uZTtcclxuICBib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IE9yYml0cm9uICwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBvdXRsaW5lOm5vbmU7XHJcbiAgaGVpZ2h0OjEwMHZoO1xyXG4gIHdpZHRoOjEwMCU7XHJcbmBcclxuXHJcbiBleHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuYWBcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTAwcHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNpZ25hdHVyZSA9IHN0eWxlZC5hYFxyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDEwcHggd2hpdGU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjEwcHg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6NTAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDo1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBvdmVyZmxvdzpzY3JvbGw7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAgLyogRmlyZWZveCAqL1xyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENsYXNzaWNUZXh0ID0gc3R5bGVkLnBgXHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJvcmRlclRleHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjoxJTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuYFxyXG4iXSwic291cmNlUm9vdCI6IiJ9