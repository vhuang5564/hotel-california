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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ballroom),
          variant: "outlined",
          style: {
            backgroundImage: "url(".concat(image.url, ")"),
            opacity: 1
          },
          onClick: request,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wording),
            children: image.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, _this)
        }, image.title, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5iMzUxZTBiMmIxMDc0ZmY3NjFkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTYyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxJQUFBQSxHQUFHLEVBQUUsMkVBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FEYSxFQUtiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxtSEFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQUxhLEVBU2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLDJIQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBVGEsRUFhYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsaUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FiYSxFQWlCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUscUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FqQmEsRUFxQmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGdHQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBckJhLEVBeUJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBekJhLEVBNkJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBN0JhLEVBaUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBakNhLEVBcUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBckNhLEVBeUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBekNhLEVBNkNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBN0NhLENBQWY7O0FBbURBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0YsS0FBbEI7QUFDQUcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUZ5QixDQUd6QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUVyQixvRkFBcEI7QUFBQSxjQUVHZSxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFDSixLQUFEO0FBQUEsMEJBRVY7QUFBQSwrQkFDRSw4REFBQyw2REFBRDtBQUVFLG1CQUFTLEVBQUVuQiw4RUFGYjtBQUdFLGlCQUFPLEVBQUMsVUFIVjtBQUlFLGVBQUssRUFBRTtBQUNMeUIsWUFBQUEsZUFBZSxnQkFBU04sS0FBSyxDQUFDSCxHQUFmLE1BRFY7QUFFTFUsWUFBQUEsT0FBTyxFQUFFO0FBRkosV0FKVDtBQVNFLGlCQUFPLEVBQUVSLE9BVFg7QUFBQSxpQ0FXRTtBQUFLLHFCQUFTLEVBQUVsQiw2RUFBaEI7QUFBQSxzQkFDR21CLEtBQUssQ0FBQ0Y7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEYsV0FDT0UsS0FBSyxDQUFDRixLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlU7QUFBQSxLQUFYO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0NEO0tBbEd1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWxscm9vbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CYWxscm9vbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgQXBwc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FwcHMnO1xyXG5pbXBvcnQgTG9jYWxEaW5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbERpbmluZyc7XHJcbmltcG9ydCBTdHJlZXR2aWV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RyZWV0dmlldyc7XHJcbmltcG9ydCBNZW51Qm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnVCb29rJztcclxuaW1wb3J0IE1vb2RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb29kJztcclxuaW1wb3J0IFN1YndheUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1YndheSc7XHJcbmltcG9ydCBUaW1lVG9MZWF2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RpbWVUb0xlYXZlJztcclxuaW1wb3J0IFBvb2xJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Qb29sJztcclxuaW1wb3J0IEFzc2lnbm1lbnRJbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Bc3NpZ25tZW50SW5kJztcclxuaW1wb3J0IEFkZEljQ2FsbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZEljQ2FsbCc7XHJcbmltcG9ydCBCYXRodHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmF0aHR1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxscm9vbShwcm9wcykge1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuaG9zcGl0YWxpdHluZXQub3JnL3BpY3R1cmUveHhsXzE1MzA5ODg4My5qcGc/dD0yMDE5MDMyODEwNTQ0NycsXHJcbiAgICAgIHRpdGxlOiAnQUxMIEFSRUFTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zdC5kZXBvc2l0cGhvdG9zLmNvbS8xNTc1NjczLzMzNTAvaS85NTAvZGVwb3NpdHBob3Rvc18zMzUwMzEwNy1zdG9jay1waG90by1yZXN0YXVyYW50LWNsb2NoZS13aXRoLWxpZC5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0lOLVJPT00gRElOSU5HJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4ud2VhbHRoeWdvcmlsbGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL01vc3QtRXhwZW5zaXZlLVJlc3RhdXJhbnRzLU1haXNvbi1QaWMtVmFsZW5jZS1QYXJpcy1GcmFuY2Uud2VicCcsXHJcbiAgICAgIHRpdGxlOiAnUkVTVEFVUkFOVCAmIExPVU5HRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2NhY2hlLm1hcnJpb3R0LmNvbS9tYXJyaW90dGFzc2V0cy9tYXJyaW90dC9TSS9zaS1zcGEtMDAxLWhvci1mZWF0LmpwZz9kb3duc2l6ZT0xNDQwcHg6KicsXHJcbiAgICAgIHRpdGxlOiAnU1BBICYgU0FMT04nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2luc2lnaHRzLmVob3RlbGllci5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzYvMjAxOC8wNS9Ib3RlbC1hbWVuaXRpZXMtbGFyZ2UtMzAweDMwMC5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0hPVEVMIEFNRU5JVElFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnBsYXphcHJvdGVjdGlvbi5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9mcm9udC1kZXNrLXNlY3VyaXR5LWd1YXJkcy5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0ZST05UIERFU0snXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnU0VSVklDRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnTE9DQUwgRkxBVk9SJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1RSQU5TUE9SVCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdDT05DSUVSR0UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnVkFMRVQgU0VSVklDRSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdPVEhFUiBSRVFVRVNUUydcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByZXF1ZXN0ID0gKGltYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZS50aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKVxyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UudGl0bGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZF9jb250YWluZXJ9PlxyXG5cclxuICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbWFnZS50aXRsZX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3JlcXVlc3R9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29yZGluZ30+XHJcbiAgICAgICAgICAgICAge2ltYWdlLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QXBwc0ljb24gLz59IGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFMTCBBUkVBUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxMb2NhbERpbmluZ0ljb24gLz59IHZhcmlhbnQ9XCJjb250YWluZWRcIj5JTi1ST09NIERJTklORzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxNZW51Qm9va0ljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlJFU1RBVVJBTlQgJiBMT1VOR0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEJhdGh0dWJJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5TUEEgJiBTQUxPTjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxQb29sSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+SE9URUwgQU1FTklUSUVTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFzc2lnbm1lbnRJbmRJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5GUk9OVCBERVNLPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFkZEljQ2FsbEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlNFUlZJQ0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFN0cmVldHZpZXdJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5MT0NBTCBGTEFWT1I8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8U3Vid2F5SWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+VFJBTlNQT1JUPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PE1vb2RJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5DT05DSUVSR0U8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8VGltZVRvTGVhdmVJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5WQUxFVCBTRVJWSUNFPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFwcHNJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5PVEhFUiBSRVFVRVNUUzwvQnV0dG9uPiAqL31cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsIkJ1dHRvbkJhc2UiLCJBcHBzSWNvbiIsIkxvY2FsRGluaW5nSWNvbiIsIlN0cmVldHZpZXdJY29uIiwiTWVudUJvb2tJY29uIiwiTW9vZEljb24iLCJTdWJ3YXlJY29uIiwiVGltZVRvTGVhdmVJY29uIiwiUG9vbEljb24iLCJBc3NpZ25tZW50SW5kSWNvbiIsIkFkZEljQ2FsbEljb24iLCJCYXRodHViSWNvbiIsIkJhbGxyb29tIiwicHJvcHMiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsInJlcXVlc3QiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJncmlkX2NvbnRhaW5lciIsIm1hcCIsImJhbGxyb29tIiwiYmFja2dyb3VuZEltYWdlIiwib3BhY2l0eSIsIndvcmRpbmciXSwic291cmNlUm9vdCI6IiJ9