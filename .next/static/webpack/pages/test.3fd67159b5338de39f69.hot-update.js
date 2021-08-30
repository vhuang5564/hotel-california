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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Ballroom.module.scss */ "./styles/Ballroom.module.scss");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Victor\\lighthouse\\projects\\hotel-california\\components\\Ballroom.jsx";














function Ballroom(props) {
  var _this = this;

  var images = [{
    url: 'https://www.hospitalitynet.org/picture/xxl_153098883.jpg?t=20190328105447',
    title: 'ALL AREAS',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
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
    className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grid_container),
    children: images.map(function (image) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wording),
          children: image.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ballroom),
          variant: "outlined",
          style: {
            backgroundImage: "url(".concat(image.url, ")")
          },
          onClick: request
        }, image.title, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4zZmQ2NzE1OWI1MzM4ZGUzOWY2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU2MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBQUEsR0FBRyxFQUFFLDJFQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRSxXQUZUO0FBR0VDLElBQUFBLElBQUksZUFBRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FEYSxFQU1iO0FBQ0VGLElBQUFBLEdBQUcsRUFBRSxtSEFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQU5hLEVBVWI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLDJIQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBVmEsRUFjYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsaUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FkYSxFQWtCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUscUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FsQmEsRUFzQmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGdHQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBdEJhLEVBMEJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBMUJhLEVBOEJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBOUJhLEVBa0NiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBbENhLEVBc0NiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBdENhLEVBMENiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBMUNhLEVBOENiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBOUNhLENBQWY7O0FBb0RBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0gsS0FBbEI7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUZ5QixDQUd6QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUV0QixvRkFBcEI7QUFBQSxjQUVHZSxNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDSixLQUFEO0FBQUEsMEJBRVY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVwQiw2RUFBZjtBQUFBLG9CQUNLb0IsS0FBSyxDQUFDSDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSw4REFBQyw2REFBRDtBQUVFLG1CQUFTLEVBQUVqQiw4RUFGYjtBQUdFLGlCQUFPLEVBQUMsVUFIVjtBQUlFLGVBQUssRUFBRTtBQUNMMkIsWUFBQUEsZUFBZSxnQkFBU1AsS0FBSyxDQUFDSixHQUFmO0FBRFYsV0FKVDtBQU9FLGlCQUFPLEVBQUVHO0FBUFgsV0FDT0MsS0FBSyxDQUFDSCxLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRlU7QUFBQSxLQUFYO0FBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUNEO0tBaEd1QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYWxscm9vbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CYWxscm9vbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgQXBwc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FwcHMnO1xyXG5pbXBvcnQgTG9jYWxEaW5pbmdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhbERpbmluZyc7XHJcbmltcG9ydCBTdHJlZXR2aWV3SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RyZWV0dmlldyc7XHJcbmltcG9ydCBNZW51Qm9va0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnVCb29rJztcclxuaW1wb3J0IE1vb2RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Nb29kJztcclxuaW1wb3J0IFN1YndheUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N1YndheSc7XHJcbmltcG9ydCBUaW1lVG9MZWF2ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RpbWVUb0xlYXZlJztcclxuaW1wb3J0IFBvb2xJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Qb29sJztcclxuaW1wb3J0IEFzc2lnbm1lbnRJbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Bc3NpZ25tZW50SW5kJztcclxuaW1wb3J0IEFkZEljQ2FsbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZEljQ2FsbCc7XHJcbmltcG9ydCBCYXRodHViSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmF0aHR1Yic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWxscm9vbShwcm9wcykge1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuaG9zcGl0YWxpdHluZXQub3JnL3BpY3R1cmUveHhsXzE1MzA5ODg4My5qcGc/dD0yMDE5MDMyODEwNTQ0NycsXHJcbiAgICAgIHRpdGxlOiAnQUxMIEFSRUFTJyxcclxuICAgICAgaWNvbjogPEFwcHNJY29uIC8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL3N0LmRlcG9zaXRwaG90b3MuY29tLzE1NzU2NzMvMzM1MC9pLzk1MC9kZXBvc2l0cGhvdG9zXzMzNTAzMTA3LXN0b2NrLXBob3RvLXJlc3RhdXJhbnQtY2xvY2hlLXdpdGgtbGlkLmpwZycsXHJcbiAgICAgIHRpdGxlOiAnSU4tUk9PTSBESU5JTkcnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2Nkbi53ZWFsdGh5Z29yaWxsYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTEvTW9zdC1FeHBlbnNpdmUtUmVzdGF1cmFudHMtTWFpc29uLVBpYy1WYWxlbmNlLVBhcmlzLUZyYW5jZS53ZWJwJyxcclxuICAgICAgdGl0bGU6ICdSRVNUQVVSQU5UICYgTE9VTkdFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vY2FjaGUubWFycmlvdHQuY29tL21hcnJpb3R0YXNzZXRzL21hcnJpb3R0L1NJL3NpLXNwYS0wMDEtaG9yLWZlYXQuanBnP2Rvd25zaXplPTE0NDBweDoqJyxcclxuICAgICAgdGl0bGU6ICdTUEEgJiBTQUxPTidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vaW5zaWdodHMuZWhvdGVsaWVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvc2l0ZXMvNi8yMDE4LzA1L0hvdGVsLWFtZW5pdGllcy1sYXJnZS0zMDB4MzAwLmpwZycsXHJcbiAgICAgIHRpdGxlOiAnSE9URUwgQU1FTklUSUVTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cucGxhemFwcm90ZWN0aW9uLmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA1L2Zyb250LWRlc2stc2VjdXJpdHktZ3VhcmRzLmpwZycsXHJcbiAgICAgIHRpdGxlOiAnRlJPTlQgREVTSydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdTRVJWSUNFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdMT0NBTCBGTEFWT1InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnVFJBTlNQT1JUJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ0NPTkNJRVJHRSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdWQUxFVCBTRVJWSUNFJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ09USEVSIFJFUVVFU1RTJ1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3QgPSAoaW1hZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlLnRpdGxlKVxyXG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZS50aXRsZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IFxyXG4gICAgICAgIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLndvcmRpbmd9PlxyXG4gICAgICAgICAgICAgIHtpbWFnZS50aXRsZX1cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW1hZ2UudGl0bGV9IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gXHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlLnVybH0pYFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0fVxyXG4gICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QXBwc0ljb24gLz59IGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFMTCBBUkVBUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxMb2NhbERpbmluZ0ljb24gLz59IHZhcmlhbnQ9XCJjb250YWluZWRcIj5JTi1ST09NIERJTklORzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxNZW51Qm9va0ljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlJFU1RBVVJBTlQgJiBMT1VOR0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEJhdGh0dWJJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5TUEEgJiBTQUxPTjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxQb29sSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+SE9URUwgQU1FTklUSUVTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFzc2lnbm1lbnRJbmRJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5GUk9OVCBERVNLPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFkZEljQ2FsbEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlNFUlZJQ0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFN0cmVldHZpZXdJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5MT0NBTCBGTEFWT1I8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8U3Vid2F5SWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+VFJBTlNQT1JUPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PE1vb2RJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5DT05DSUVSR0U8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8VGltZVRvTGVhdmVJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5WQUxFVCBTRVJWSUNFPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFwcHNJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5PVEhFUiBSRVFVRVNUUzwvQnV0dG9uPiAqL31cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsIkJ1dHRvbkJhc2UiLCJBcHBzSWNvbiIsIkxvY2FsRGluaW5nSWNvbiIsIlN0cmVldHZpZXdJY29uIiwiTWVudUJvb2tJY29uIiwiTW9vZEljb24iLCJTdWJ3YXlJY29uIiwiVGltZVRvTGVhdmVJY29uIiwiUG9vbEljb24iLCJBc3NpZ25tZW50SW5kSWNvbiIsIkFkZEljQ2FsbEljb24iLCJCYXRodHViSWNvbiIsIkJhbGxyb29tIiwicHJvcHMiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsImljb24iLCJyZXF1ZXN0IiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiZ3JpZF9jb250YWluZXIiLCJtYXAiLCJ3b3JkaW5nIiwiYmFsbHJvb20iLCJiYWNrZ3JvdW5kSW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9