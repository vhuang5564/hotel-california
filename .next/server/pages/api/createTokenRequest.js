"use strict";
(() => {
var exports = {};
exports.id = "pages/api/createTokenRequest";
exports.ids = ["pages/api/createTokenRequest"];
exports.modules = {

/***/ "./pages/api/createTokenRequest.js":
/*!*****************************************!*\
  !*** ./pages/api/createTokenRequest.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ably/promises */ "ably/promises");
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ably_promises__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  const client = new (ably_promises__WEBPACK_IMPORTED_MODULE_0___default().Realtime)(process.env.ABLY_API_KEY);
  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: 'ably-nextjs-demo'
  });
  res.status(200).json(tokenRequestData);
}
;

/***/ }),

/***/ "ably/promises":
/*!********************************!*\
  !*** external "ably/promises" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("ably/promises");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/createTokenRequest.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NyZWF0ZVRva2VuUmVxdWVzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUMsUUFBTUMsTUFBTSxHQUFHLElBQUlKLCtEQUFKLENBQWtCTSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBOUIsQ0FBZjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sSUFBUCxDQUFZQyxrQkFBWixDQUErQjtBQUFFQyxJQUFBQSxRQUFRLEVBQUU7QUFBWixHQUEvQixDQUEvQjtBQUNBVCxFQUFBQSxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkwsZ0JBQXJCO0FBQ0g7QUFBQTs7Ozs7Ozs7OztBQ0xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG90ZWwtY2FsaWZvcm5pYS8uL3BhZ2VzL2FwaS9jcmVhdGVUb2tlblJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vaG90ZWwtY2FsaWZvcm5pYS9leHRlcm5hbCBcImFibHkvcHJvbWlzZXNcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJseSBmcm9tIFwiYWJseS9wcm9taXNlc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQWJseS5SZWFsdGltZShwcm9jZXNzLmVudi5BQkxZX0FQSV9LRVkpO1xyXG4gICAgY29uc3QgdG9rZW5SZXF1ZXN0RGF0YSA9IGF3YWl0IGNsaWVudC5hdXRoLmNyZWF0ZVRva2VuUmVxdWVzdCh7IGNsaWVudElkOiAnYWJseS1uZXh0anMtZGVtbycgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0b2tlblJlcXVlc3REYXRhKTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWJseS9wcm9taXNlc1wiKTsiXSwibmFtZXMiOlsiQWJseSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjbGllbnQiLCJSZWFsdGltZSIsInByb2Nlc3MiLCJlbnYiLCJBQkxZX0FQSV9LRVkiLCJ0b2tlblJlcXVlc3REYXRhIiwiYXV0aCIsImNyZWF0ZVRva2VuUmVxdWVzdCIsImNsaWVudElkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=