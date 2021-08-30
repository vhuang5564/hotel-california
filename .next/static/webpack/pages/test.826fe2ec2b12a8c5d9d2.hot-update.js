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
    url: 'https://thumbs.dreamstime.com/z/d-silver-restaurant-cloche-white-background-32658899.jpg',
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
          backgroundImage: "url(".concat(image.url, ")")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC44MjZmZTJlYzJiMTJhOGM1ZDlkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTYyxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxJQUFBQSxHQUFHLEVBQUUsdUJBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FEYSxFQUtiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSwwRkFEUDtBQUVFQyxJQUFBQSxLQUFLLEVBQUU7QUFGVCxHQUxhLEVBU2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FUYSxFQWFiO0FBQ0VELElBQUFBLEdBQUcsRUFBRSxhQURQO0FBRUVDLElBQUFBLEtBQUssRUFBRTtBQUZULEdBYmEsRUFpQmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FqQmEsRUFxQmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FyQmEsRUF5QmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0F6QmEsRUE2QmI7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0E3QmEsRUFpQ2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FqQ2EsRUFxQ2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0FyQ2EsRUF5Q2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0F6Q2EsRUE2Q2I7QUFDRUQsSUFBQUEsR0FBRyxFQUFFLGFBRFA7QUFFRUMsSUFBQUEsS0FBSyxFQUFFO0FBRlQsR0E3Q2EsQ0FBZjs7QUFtREEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRixLQUFsQjtBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBRnlCLENBR3pCO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRTtBQUFTLGFBQVMsRUFBRXJCLG9GQUFwQjtBQUFBLGNBRUdlLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUNKLEtBQUQ7QUFBQSwwQkFFUiw4REFBQyw2REFBRDtBQUVFLGlCQUFTLEVBQUVuQiw4RUFGYjtBQUdFLGVBQU8sRUFBQyxVQUhWO0FBSUUsYUFBSyxFQUFFO0FBQUN5QixVQUFBQSxlQUFlLGdCQUFTTixLQUFLLENBQUNILEdBQWY7QUFBaEIsU0FKVDtBQUtFLGVBQU8sRUFBRUUsT0FMWDtBQUFBLGtCQU1FQyxLQUFLLENBQUNGO0FBTlIsU0FDT0UsS0FBSyxDQUFDRixLQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGUTtBQUFBLEtBQVg7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7S0F4RnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JhbGxyb29tLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0JhbGxyb29tLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XHJcbmltcG9ydCBBcHBzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXBwcyc7XHJcbmltcG9ydCBMb2NhbERpbmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsRGluaW5nJztcclxuaW1wb3J0IFN0cmVldHZpZXdJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdHJlZXR2aWV3JztcclxuaW1wb3J0IE1lbnVCb29rSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudUJvb2snO1xyXG5pbXBvcnQgTW9vZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vb2QnO1xyXG5pbXBvcnQgU3Vid2F5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3Vid2F5JztcclxuaW1wb3J0IFRpbWVUb0xlYXZlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGltZVRvTGVhdmUnO1xyXG5pbXBvcnQgUG9vbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bvb2wnO1xyXG5pbXBvcnQgQXNzaWdubWVudEluZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRJbmQnO1xyXG5pbXBvcnQgQWRkSWNDYWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkSWNDYWxsJztcclxuaW1wb3J0IEJhdGh0dWJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYXRodHViJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbGxyb29tKHByb3BzKSB7XHJcbiAgY29uc3QgaW1hZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICB1cmw6ICcuLi9wdWJsaWMvZmF2aWNvbi5pY28nLFxyXG4gICAgICB0aXRsZTogJ0FMTCBBUkVBUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ2h0dHBzOi8vdGh1bWJzLmRyZWFtc3RpbWUuY29tL3ovZC1zaWx2ZXItcmVzdGF1cmFudC1jbG9jaGUtd2hpdGUtYmFja2dyb3VuZC0zMjY1ODg5OS5qcGcnLFxyXG4gICAgICB0aXRsZTogJ0lOLVJPT00gRElOSU5HJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1JFU1RBVVJBTlQgJiBMT1VOR0VTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1NQQSAmIFNBTE9OJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ0hPVEVMIEFNRU5JVElFUydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdGUk9OVCBERVNLJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1NFUlZJQ0VTJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ0xPQ0FMIEZMQVZPUidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHVybDogJ3BsYWNlaG9sZGVyJyxcclxuICAgICAgdGl0bGU6ICdUUkFOU1BPUlQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnQ09OQ0lFUkdFJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdXJsOiAncGxhY2Vob2xkZXInLFxyXG4gICAgICB0aXRsZTogJ1ZBTEVUIFNFUlZJQ0UnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB1cmw6ICdwbGFjZWhvbGRlcicsXHJcbiAgICAgIHRpdGxlOiAnT1RIRVIgUkVRVUVTVFMnXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3QgcmVxdWVzdCA9IChpbWFnZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UudGl0bGUpXHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGltYWdlLnRpdGxlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmdyaWRfY29udGFpbmVyfT5cclxuXHJcbiAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gXHJcbiAgICAgICAgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBrZXk9e2ltYWdlLnRpdGxlfSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IFxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiBcclxuICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZS51cmx9KWB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtyZXF1ZXN0fVxyXG4gICAgICAgICAgPntpbWFnZS50aXRsZX08L0J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICAgICl9XHJcblxyXG5cclxuICAgICAgey8qIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PEFwcHNJY29uIC8+fSBkaXNhYmxlZCB2YXJpYW50PVwib3V0bGluZWRcIj5BTEwgQVJFQVM8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8TG9jYWxEaW5pbmdJY29uIC8+fSB2YXJpYW50PVwiY29udGFpbmVkXCI+SU4tUk9PTSBESU5JTkc8L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8TWVudUJvb2tJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5SRVNUQVVSQU5UICYgTE9VTkdFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxCYXRodHViSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+U1BBICYgU0FMT048L0J1dHRvbj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWxscm9vbX0gc3RhcnRJY29uPXs8UG9vbEljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkhPVEVMIEFNRU5JVElFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBc3NpZ25tZW50SW5kSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+RlJPTlQgREVTSzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBZGRJY0NhbGxJY29uIC8+fSB2YXJpYW50PVwib3V0bGluZWRcIj5TRVJWSUNFUzwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxTdHJlZXR2aWV3SWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+TE9DQUwgRkxBVk9SPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFN1YndheUljb24gLz59IHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlRSQU5TUE9SVDwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxNb29kSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+Q09OQ0lFUkdFPC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFsbHJvb219IHN0YXJ0SWNvbj17PFRpbWVUb0xlYXZlSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+VkFMRVQgU0VSVklDRTwvQnV0dG9uPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbGxyb29tfSBzdGFydEljb249ezxBcHBzSWNvbiAvPn0gdmFyaWFudD1cIm91dGxpbmVkXCI+T1RIRVIgUkVRVUVTVFM8L0J1dHRvbj4gKi99XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJzdHlsZXMiLCJCdXR0b25CYXNlIiwiQXBwc0ljb24iLCJMb2NhbERpbmluZ0ljb24iLCJTdHJlZXR2aWV3SWNvbiIsIk1lbnVCb29rSWNvbiIsIk1vb2RJY29uIiwiU3Vid2F5SWNvbiIsIlRpbWVUb0xlYXZlSWNvbiIsIlBvb2xJY29uIiwiQXNzaWdubWVudEluZEljb24iLCJBZGRJY0NhbGxJY29uIiwiQmF0aHR1Ykljb24iLCJCYWxscm9vbSIsInByb3BzIiwiaW1hZ2VzIiwidXJsIiwidGl0bGUiLCJyZXF1ZXN0IiwiaW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiZ3JpZF9jb250YWluZXIiLCJtYXAiLCJiYWxscm9vbSIsImJhY2tncm91bmRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=