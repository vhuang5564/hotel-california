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
    url: '../public/favicon.ico',
    title: 'ALL AREAS'
  }, {
    url: 'placeholder',
    title: 'IN-ROOM DINING'
  }, {
    url: 'placeholder',
    title: 'RESTAURANT & LOUNGES'
  }, {
    url: 'placeholder',
    title: 'SPA & SALON'
  }, {
    url: 'placeholder',
    title: 'HOTEL AMENITIES'
  }, {
    url: 'placeholder',
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: (_styles_Ballroom_module_scss__WEBPACK_IMPORTED_MODULE_1___default().ballroom),
        variant: "outlined",
        style: {
          backgroundImage: "url(https://thumbs.dreamstime.com/z/d-silver-restaurant-cloche-white-background-32658899.jpg)"
        },
        onClick: request,
        children: image.title
      }, image.title, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC41MWU4MmIzNjYzM2Y2MWI3MTdhOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTYyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxJQUFBQSxHQUFHLEVBQUUsdUJBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FEYSxFQUtiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBTGEsRUFTYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQVRhLEVBYWI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FiYSxFQWlCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQWpCYSxFQXFCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQXJCYSxFQXlCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQXpCYSxFQTZCYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQTdCYSxFQWlDYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQWpDYSxFQXFDYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQXJDYSxFQXlDYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQXpDYSxFQTZDYjtBQUNFRCxJQUFBQSxHQUFHLEVBQUUsYUFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQTdDYSxDQUFmOztBQW1EQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNGLEtBQWxCO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFGeUIsQ0FHekI7QUFDRCxHQUpEOztBQU1BLHNCQUNFO0FBQVMsYUFBUyxFQUFFckIsb0ZBQXBCO0FBQUEsY0FFR2UsTUFBTSxDQUFDUSxHQUFQLENBQVcsVUFBQ0osS0FBRDtBQUFBLDBCQUVSLDhEQUFDLDZEQUFEO0FBRUUsaUJBQVMsRUFBRW5CLDhFQUZiO0FBR0UsZUFBTyxFQUFDLFVBSFY7QUFJRSxhQUFLLEVBQUU7QUFBQ3lCLFVBQUFBLGVBQWU7QUFBaEIsU0FKVDtBQUtFLGVBQU8sRUFBRVAsT0FMWDtBQUFBLGtCQU1FQyxLQUFLLENBQUNGO0FBTlIsU0FDT0UsS0FBSyxDQUFDRixLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUTtBQUFBLEtBQVg7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7S0F4RnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JhbGxyb29tLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0JhbGxyb29tLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBBcHBzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXBwcyc7XHJcbmltcG9ydCBMb2NhbERpbmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsRGluaW5nJztcclxuaW1wb3J0IFN0cmVldHZpZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdHJlZXR2aWV3JztcclxuaW1wb3J0IE1lbnVCb29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudUJvb2snO1xyXG5pbXBvcnQgTW9vZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vb2QnO1xyXG5pbXBvcnQgU3Vid2F5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3Vid2F5JztcclxuaW1wb3J0IFRpbWVUb0xlYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGltZVRvTGVhdmUnO1xyXG5pbXBvcnQgUG9vbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bvb2wnO1xyXG5pbXBvcnQgQXNzaWdubWVudEluZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRJbmQnO1xyXG5pbXBvcnQgQWRkSWNDYWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkSWNDYWxsJztcclxuaW1wb3J0IEJhdGh0dWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXRodHViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbGxyb29tKHByb3BzKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB1cmw6ICcuLi9wdWJsaWMvZmF2aWNvbi5pY28nLFxyXG4gICAgICB0aXRsZTogJ0FMTCBBUkVBUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdJTi1ST09NIERJTklORydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdSRVNUQVVSQU5UICYgTE9VTkdFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdTUEEgJiBTQUxPTidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdIT1RFTCBBTUVOSVRJRVMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnRlJPTlQgREVTSydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdTRVJWSUNFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdMT0NBTCBGTEFWT1InXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnVFJBTlNQT1JUJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ0NPTkNJRVJHRSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdWQUxFVCBTRVJWSUNFJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ09USEVSIFJFUVVFU1RTJ1xyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlcXVlc3QgPSAoaW1hZ2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlLnRpdGxlKVxyXG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhpbWFnZS50aXRsZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UpID0+IFxyXG4gICAgICAgIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAga2V5PXtpbWFnZS50aXRsZX0gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXHJcbiAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKGh0dHBzOi8vdGh1bWJzLmRyZWFtc3RpbWUuY29tL3ovZC1zaWx2ZXItcmVzdGF1cmFudC1jbG9jaGUtd2hpdGUtYmFja2dyb3VuZC0zMjY1ODg5OS5qcGcpYH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3JlcXVlc3R9XHJcbiAgICAgICAgICA+e2ltYWdlLnRpdGxlfTwvQnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgKX1cclxuXHJcblxyXG4gICAgICB7LyogPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8QXBwc0ljb24gLz59IGRpc2FibGVkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFMTCBBUkVBUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxMb2NhbERpbmluZ0ljb24gLz59IHZhcmlhbnQ9XCJjb250YWluZWRcIj5JTi1ST09NIERJTklORzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxNZW51Qm9va0ljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlJFU1RBVVJBTlQgJiBMT1VOR0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEJhdGh0dWJJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5TUEEgJiBTQUxPTjwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxQb29sSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+SE9URUwgQU1FTklUSUVTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFzc2lnbm1lbnRJbmRJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5GUk9OVCBERVNLPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFkZEljQ2FsbEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlNFUlZJQ0VTPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFN0cmVldHZpZXdJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5MT0NBTCBGTEFWT1I8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8U3Vid2F5SWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+VFJBTlNQT1JUPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PE1vb2RJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5DT05DSUVSR0U8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8VGltZVRvTGVhdmVJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5WQUxFVCBTRVJWSUNFPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFwcHNJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5PVEhFUiBSRVFVRVNUUzwvQnV0dG9uPiAqL31cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlcyIsIkJ1dHRvbkJhc2UiLCJBcHBzSWNvbiIsIkxvY2FsRGluaW5nSWNvbiIsIlN0cmVldHZpZXdJY29uIiwiTWVudUJvb2tJY29uIiwiTW9vZEljb24iLCJTdWJ3YXlJY29uIiwiVGltZVRvTGVhdmVJY29uIiwiUG9vbEljb24iLCJBc3NpZ25tZW50SW5kSWNvbiIsIkFkZEljQ2FsbEljb24iLCJCYXRodHViSWNvbiIsIkJhbGxyb29tIiwicHJvcHMiLCJpbWFnZXMiLCJ1cmwiLCJ0aXRsZSIsInJlcXVlc3QiLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJncmlkX2NvbnRhaW5lciIsIm1hcCIsImJhbGxyb29tIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==