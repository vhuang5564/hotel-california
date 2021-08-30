"use strict";
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./node_modules/@material-ui/icons/LocalDining.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/LocalDining.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
}), 'LocalDining');

exports.default = _default;

/***/ }),

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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Ballroom.module.scss */ "./styles/Ballroom.module.scss");
/* harmony import */ var _styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Apps */ "./node_modules/@material-ui/icons/Apps.js");
/* harmony import */ var _material_ui_icons_LocalDining__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/LocalDining */ "./node_modules/@material-ui/icons/LocalDining.js");
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
    title: 'IN-ROOM DINING',
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_LocalDining__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
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
    className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3___default().grid_container),
    children: images.map(function (image) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wording),
          children: [image.title, " ", image.icon]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ballroom),
          variant: "outlined",
          style: {
            backgroundImage: "url(".concat(image.url, ")")
          },
          onClick: request
        }, image.title, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC4xNmM3ZjIzMzIzZmNlNDFiMjNkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixlQUFlOztBQUVmLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU2MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdEMsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRUMsSUFBQUEsR0FBRyxFQUFFLDJFQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRSxXQUZUO0FBR0VDLElBQUFBLElBQUksZUFBRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFIsR0FEYSxFQU1iO0FBQ0VGLElBQUFBLEdBQUcsRUFBRSxtSEFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsSUFBQUEsSUFBSSxlQUFFLDhEQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIUixHQU5hLEVBV2I7QUFDRUYsSUFBQUEsR0FBRyxFQUFFLDJIQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBWGEsRUFlYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsaUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FmYSxFQW1CYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUscUdBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FuQmEsRUF1QmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGdHQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBdkJhLEVBMkJiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBM0JhLEVBK0JiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBL0JhLEVBbUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBbkNhLEVBdUNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBdkNhLEVBMkNiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBM0NhLEVBK0NiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBL0NhLENBQWY7O0FBcURBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN6QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0gsS0FBbEI7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUZ5QixDQUd6QjtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBUyxhQUFTLEVBQUV0QixvRkFBcEI7QUFBQSxjQUVHZSxNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDSixLQUFEO0FBQUEsMEJBRVY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUVwQiw2RUFBZjtBQUFBLHFCQUNLb0IsS0FBSyxDQUFDSCxLQURYLE9BQ21CRyxLQUFLLENBQUNGLElBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLDZEQUFEO0FBRUUsbUJBQVMsRUFBRWxCLDhFQUZiO0FBR0UsaUJBQU8sRUFBQyxVQUhWO0FBSUUsZUFBSyxFQUFFO0FBQ0wyQixZQUFBQSxlQUFlLGdCQUFTUCxLQUFLLENBQUNKLEdBQWY7QUFEVixXQUpUO0FBT0UsaUJBQU8sRUFBRUc7QUFQWCxXQUNPQyxLQUFLLENBQUNILEtBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGVTtBQUFBLEtBQVg7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQ0Q7S0FqR3VCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsRGluaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JhbGxyb29tLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNOC4xIDEzLjM0bDIuODMtMi44M0wzLjkxIDMuNWMtMS41NiAxLjU2LTEuNTYgNC4wOSAwIDUuNjZsNC4xOSA0LjE4em02Ljc4LTEuODFjMS41My43MSAzLjY4LjIxIDUuMjctMS4zOCAxLjkxLTEuOTEgMi4yOC00LjY1LjgxLTYuMTItMS40Ni0xLjQ2LTQuMi0xLjEtNi4xMi44MS0xLjU5IDEuNTktMi4wOSAzLjc0LTEuMzggNS4yN0wzLjcgMTkuODdsMS40MSAxLjQxTDEyIDE0LjQxbDYuODggNi44OCAxLjQxLTEuNDFMMTMuNDEgMTNsMS40Ny0xLjQ3elwiXG59KSwgJ0xvY2FsRGluaW5nJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmFsbHJvb20ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IEFwcHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcHBzJztcclxuaW1wb3J0IExvY2FsRGluaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxEaW5pbmcnO1xyXG5pbXBvcnQgU3RyZWV0dmlld0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0cmVldHZpZXcnO1xyXG5pbXBvcnQgTWVudUJvb2tJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51Qm9vayc7XHJcbmltcG9ydCBNb29kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9vZCc7XHJcbmltcG9ydCBTdWJ3YXlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdWJ3YXknO1xyXG5pbXBvcnQgVGltZVRvTGVhdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaW1lVG9MZWF2ZSc7XHJcbmltcG9ydCBQb29sSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUG9vbCc7XHJcbmltcG9ydCBBc3NpZ25tZW50SW5kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudEluZCc7XHJcbmltcG9ydCBBZGRJY0NhbGxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRJY0NhbGwnO1xyXG5pbXBvcnQgQmF0aHR1Ykljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhdGh0dWInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFsbHJvb20ocHJvcHMpIHtcclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3Lmhvc3BpdGFsaXR5bmV0Lm9yZy9waWN0dXJlL3h4bF8xNTMwOTg4ODMuanBnP3Q9MjAxOTAzMjgxMDU0NDcnLFxyXG4gICAgICB0aXRsZTogJ0FMTCBBUkVBUycsXHJcbiAgICAgIGljb246IDxBcHBzSWNvbiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zdC5kZXBvc2l0cGhvdG9zLmNvbS8xNTc1NjczLzMzNTAvaS85NTAvZGVwb3NpdHBob3Rvc18zMzUwMzEwNy1zdG9jay1waG90by1yZXN0YXVyYW50LWNsb2NoZS13aXRoLWxpZC5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0lOLVJPT00gRElOSU5HJyxcclxuICAgICAgaWNvbjogPExvY2FsRGluaW5nSWNvbiAvPlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9jZG4ud2VhbHRoeWdvcmlsbGEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzExL01vc3QtRXhwZW5zaXZlLVJlc3RhdXJhbnRzLU1haXNvbi1QaWMtVmFsZW5jZS1QYXJpcy1GcmFuY2Uud2VicCcsXHJcbiAgICAgIHRpdGxlOiAnUkVTVEFVUkFOVCAmIExPVU5HRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2NhY2hlLm1hcnJpb3R0LmNvbS9tYXJyaW90dGFzc2V0cy9tYXJyaW90dC9TSS9zaS1zcGEtMDAxLWhvci1mZWF0LmpwZz9kb3duc2l6ZT0xNDQwcHg6KicsXHJcbiAgICAgIHRpdGxlOiAnU1BBICYgU0FMT04nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdodHRwczovL2luc2lnaHRzLmVob3RlbGllci5jb20vd3AtY29udGVudC91cGxvYWRzL3NpdGVzLzYvMjAxOC8wNS9Ib3RlbC1hbWVuaXRpZXMtbGFyZ2UtMzAweDMwMC5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0hPVEVMIEFNRU5JVElFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnBsYXphcHJvdGVjdGlvbi5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNS9mcm9udC1kZXNrLXNlY3VyaXR5LWd1YXJkcy5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0ZST05UIERFU0snXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnU0VSVklDRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnTE9DQUwgRkxBVk9SJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1RSQU5TUE9SVCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdDT05DSUVSR0UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnVkFMRVQgU0VSVklDRSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdPVEhFUiBSRVFVRVNUUydcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByZXF1ZXN0ID0gKGltYWdlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZS50aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKVxyXG4gICAgLy8gY29uc29sZS5sb2coaW1hZ2UudGl0bGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZF9jb250YWluZXJ9PlxyXG5cclxuICAgICAge2ltYWdlcy5tYXAoKGltYWdlKSA9PiBcclxuICAgICAgICAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy53b3JkaW5nfT5cclxuICAgICAgICAgICAgICB7aW1hZ2UudGl0bGV9IHtpbWFnZS5pY29ufVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbWFnZS50aXRsZX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2UudXJsfSlgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3JlcXVlc3R9XHJcbiAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICApfVxyXG5cclxuXHJcbiAgICAgIHsvKiA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBcHBzSWNvbiAvPn0gZGlzYWJsZWQgdmFyaWFudD1cIm91dGxpbmVkXCI+QUxMIEFSRUFTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PExvY2FsRGluaW5nSWNvbiAvPn0gdmFyaWFudD1cImNvbnRhaW5lZFwiPklOLVJPT00gRElOSU5HPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PE1lbnVCb29rSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+UkVTVEFVUkFOVCAmIExPVU5HRVM8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QmF0aHR1Ykljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlNQQSAmIFNBTE9OPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFBvb2xJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5IT1RFTCBBTUVOSVRJRVM8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QXNzaWdubWVudEluZEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkZST05UIERFU0s8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QWRkSWNDYWxsSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+U0VSVklDRVM8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8U3RyZWV0dmlld0ljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkxPQ0FMIEZMQVZPUjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxTdWJ3YXlJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5UUkFOU1BPUlQ8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8TW9vZEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkNPTkNJRVJHRTwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxUaW1lVG9MZWF2ZUljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlZBTEVUIFNFUlZJQ0U8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QXBwc0ljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPk9USEVSIFJFUVVFU1RTPC9CdXR0b24+ICovfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiQnV0dG9uIiwic3R5bGVzIiwiQnV0dG9uQmFzZSIsIkFwcHNJY29uIiwiTG9jYWxEaW5pbmdJY29uIiwiU3RyZWV0dmlld0ljb24iLCJNZW51Qm9va0ljb24iLCJNb29kSWNvbiIsIlN1YndheUljb24iLCJUaW1lVG9MZWF2ZUljb24iLCJQb29sSWNvbiIsIkFzc2lnbm1lbnRJbmRJY29uIiwiQWRkSWNDYWxsSWNvbiIsIkJhdGh0dWJJY29uIiwiQmFsbHJvb20iLCJwcm9wcyIsImltYWdlcyIsInVybCIsInRpdGxlIiwiaWNvbiIsInJlcXVlc3QiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJncmlkX2NvbnRhaW5lciIsIm1hcCIsIndvcmRpbmciLCJiYWxscm9vbSIsImJhY2tncm91bmRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=