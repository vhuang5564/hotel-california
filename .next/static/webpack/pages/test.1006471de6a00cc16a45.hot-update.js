"use strict";
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Ballroom.jsx":
/*!*********************************!*\
  !*** ./components/Ballroom.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Ballroom; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Ballroom.module.scss */ "./styles/Ballroom.module.scss");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Victor\\lighthouse\\projects\\hotel-california\\components\\Ballroom.jsx";














function Ballroom(props) {
  var _this = this;

  var images = [{
    url: 'https://www.hospitalitynet.org/picture/xxl_153098883.jpg?t=20190328105447',
    title: 'ALL AREAS'
  }, {
    url: 'https://st.depositphotos.com/1575673/3350/i/950/depositphotos_33503107-stock-photo-restaurant-cloche-with-lid.jpg',
    title: 'IN-ROOM DINING'
  }, {
    url: 'https://cdn.wealthygorilla.com/wp-content/uploads/2019/11/Most-Expensive-Restaurants-Maison-Pic-Valence-Paris-France.webp',
    title: 'RESTAURANT & LOUNGES'
  }, {
    url: 'https://cache.marriott.com/marriottassets/marriott/SI/si-spa-001-hor-feat.jpg?downsize=1440px:*',
    title: 'SPA & SALON'
  }, {
    url: 'https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/05/Hotel-amenities-large-300x300.jpg',
    title: 'HOTEL AMENITIES'
  }, {
    url: 'https://www.plazaprotection.com/blog/wp-content/uploads/2020/05/front-desk-security-guards.jpg',
    title: 'FRONT DESK'
  }, {
    url: 'placeholder',
    title: 'SERVICES'
  }, {
    url: 'placeholder',
    title: 'LOCAL FLAVOR'
  }, {
    url: 'placeholder',
    title: 'TRANSPORT'
  }, {
    url: 'placeholder',
    title: 'CONCIERGE'
  }, {
    url: 'placeholder',
    title: 'VALET SERVICE'
  }, {
    url: 'placeholder',
    title: 'OTHER REQUESTS'
  }];

  var request = function request(image) {
    console.log(image.title);
    console.log("clicked"); // console.log(image.title)
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().grid_container),
    children: images.map(function (image) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wording),
          children: image.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ballroom),
          variant: "outlined",
          style: {
            backgroundImage: "url(".concat(image.url, ")")
          },
          onClick: request
        }, image.title, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
_c = Ballroom;

var _c;

$RefreshReg$(_c, "Ballroom");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4xMDA2NDcxZGU2YTAwY2MxNmE0NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTYyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxJQUFBQSxHQUFHLEVBQUUsMkVBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FEYSxFQUtiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxtSEFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQUxhLEVBU2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLDJIQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBVGEsRUFhYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsaUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FiYSxFQWlCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUscUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FqQmEsRUFxQmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGdHQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBckJhLEVBeUJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBekJhLEVBNkJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBN0JhLEVBaUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBakNhLEVBcUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBckNhLEVBeUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBekNhLEVBNkNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBN0NhLENBQWY7O0FBbURBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0YsS0FBbEI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUZ5QixDQUd6QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVyQixvRkFBcEI7QUFBQSxjQUVHZSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDSixLQUFEO0FBQUEsMEJBRVY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVuQiw2RUFBaEI7QUFBQSxvQkFDS21CLEtBQUssQ0FBQ0Y7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUsOERBQUMsNkRBQUQ7QUFFRSxtQkFBUyxFQUFFakIsOEVBRmI7QUFHRSxpQkFBTyxFQUFDLFVBSFY7QUFJRSxlQUFLLEVBQUU7QUFDTDBCLFlBQUFBLGVBQWUsZ0JBQVNQLEtBQUssQ0FBQ0gsR0FBZjtBQURWLFdBSlQ7QUFPRSxpQkFBTyxFQUFFRTtBQVBYLFdBQ09DLEtBQUssQ0FBQ0YsS0FEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZVO0FBQUEsS0FBWDtBQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDtLQS9GdUJKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFsbHJvb20uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmFsbHJvb20ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IEFwcHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcHBzJztcclxuaW1wb3J0IExvY2FsRGluaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxEaW5pbmcnO1xyXG5pbXBvcnQgU3RyZWV0dmlld0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0cmVldHZpZXcnO1xyXG5pbXBvcnQgTWVudUJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51Qm9vayc7XHJcbmltcG9ydCBNb29kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9vZCc7XHJcbmltcG9ydCBTdWJ3YXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdWJ3YXknO1xyXG5pbXBvcnQgVGltZVRvTGVhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaW1lVG9MZWF2ZSc7XHJcbmltcG9ydCBQb29sSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUG9vbCc7XHJcbmltcG9ydCBBc3NpZ25tZW50SW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudEluZCc7XHJcbmltcG9ydCBBZGRJY0NhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRJY0NhbGwnO1xyXG5pbXBvcnQgQmF0aHR1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhdGh0dWInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFsbHJvb20ocHJvcHMpIHtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmhvc3BpdGFsaXR5bmV0Lm9yZy9waWN0dXJlL3h4bF8xNTMwOTg4ODMuanBnP3Q9MjAxOTAzMjgxMDU0NDcnLFxyXG4gICAgICB0aXRsZTogJ0FMTCBBUkVBUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vc3QuZGVwb3NpdHBob3Rvcy5jb20vMTU3NTY3My8zMzUwL2kvOTUwL2RlcG9zaXRwaG90b3NfMzM1MDMxMDctc3RvY2stcGhvdG8tcmVzdGF1cmFudC1jbG9jaGUtd2l0aC1saWQuanBnJyxcclxuICAgICAgdGl0bGU6ICdJTi1ST09NIERJTklORydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vY2RuLndlYWx0aHlnb3JpbGxhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8xMS9Nb3N0LUV4cGVuc2l2ZS1SZXN0YXVyYW50cy1NYWlzb24tUGljLVZhbGVuY2UtUGFyaXMtRnJhbmNlLndlYnAnLFxyXG4gICAgICB0aXRsZTogJ1JFU1RBVVJBTlQgJiBMT1VOR0VTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9jYWNoZS5tYXJyaW90dC5jb20vbWFycmlvdHRhc3NldHMvbWFycmlvdHQvU0kvc2ktc3BhLTAwMS1ob3ItZmVhdC5qcGc/ZG93bnNpemU9MTQ0MHB4OionLFxyXG4gICAgICB0aXRsZTogJ1NQQSAmIFNBTE9OJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9pbnNpZ2h0cy5laG90ZWxpZXIuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zaXRlcy82LzIwMTgvMDUvSG90ZWwtYW1lbml0aWVzLWxhcmdlLTMwMHgzMDAuanBnJyxcclxuICAgICAgdGl0bGU6ICdIT1RFTCBBTUVOSVRJRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5wbGF6YXByb3RlY3Rpb24uY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDUvZnJvbnQtZGVzay1zZWN1cml0eS1ndWFyZHMuanBnJyxcclxuICAgICAgdGl0bGU6ICdGUk9OVCBERVNLJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1NFUlZJQ0VTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ0xPQ0FMIEZMQVZPUidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdUUkFOU1BPUlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnQ09OQ0lFUkdFJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1ZBTEVUIFNFUlZJQ0UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnT1RIRVIgUkVRVUVTVFMnXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdCA9IChpbWFnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UudGl0bGUpXHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnRpdGxlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdyaWRfY29udGFpbmVyfT5cclxuXHJcbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gXHJcbiAgICAgICAgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndvcmRpbmd9PlxyXG4gICAgICAgICAgICAgIHtpbWFnZS50aXRsZX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2ltYWdlLnRpdGxlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZS51cmx9KWBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17cmVxdWVzdH1cclxuICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcblxyXG5cclxuICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFwcHNJY29uIC8+fSBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIj5BTEwgQVJFQVM8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8TG9jYWxEaW5pbmdJY29uIC8+fSB2YXJpYW50PVwiY29udGFpbmVkXCI+SU4tUk9PTSBESU5JTkc8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8TWVudUJvb2tJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5SRVNUQVVSQU5UICYgTE9VTkdFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxCYXRodHViSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+U1BBICYgU0FMT048L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8UG9vbEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkhPVEVMIEFNRU5JVElFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBc3NpZ25tZW50SW5kSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+RlJPTlQgREVTSzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBZGRJY0NhbGxJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5TRVJWSUNFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxTdHJlZXR2aWV3SWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+TE9DQUwgRkxBVk9SPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFN1YndheUljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlRSQU5TUE9SVDwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxNb29kSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+Q09OQ0lFUkdFPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFRpbWVUb0xlYXZlSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+VkFMRVQgU0VSVklDRTwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBcHBzSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+T1RIRVIgUkVRVUVTVFM8L0J1dHRvbj4gKi99XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZXMiLCJCdXR0b25CYXNlIiwiQXBwc0ljb24iLCJMb2NhbERpbmluZ0ljb24iLCJTdHJlZXR2aWV3SWNvbiIsIk1lbnVCb29rSWNvbiIsIk1vb2RJY29uIiwiU3Vid2F5SWNvbiIsIlRpbWVUb0xlYXZlSWNvbiIsIlBvb2xJY29uIiwiQXNzaWdubWVudEluZEljb24iLCJBZGRJY0NhbGxJY29uIiwiQmF0aHR1Ykljb24iLCJCYWxscm9vbSIsInByb3BzIiwiaW1hZ2VzIiwidXJsIiwidGl0bGUiLCJyZXF1ZXN0IiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiZ3JpZF9jb250YWluZXIiLCJtYXAiLCJ3b3JkaW5nIiwiYmFsbHJvb20iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9