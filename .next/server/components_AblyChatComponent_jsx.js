exports.id = "components_AblyChatComponent_jsx";
exports.ids = ["components_AblyChatComponent_jsx"];
exports.modules = {

/***/ "./components/AblyChatComponent.jsx":
/*!******************************************!*\
  !*** ./components/AblyChatComponent.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AblyReactEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AblyReactEffect */ "./components/AblyReactEffect.js");
/* harmony import */ var _AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AblyChatComponent.module.css */ "./components/AblyChatComponent.module.css");
/* harmony import */ var _AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\setha\\Documents\\GitHub\\hotel-california\\components\\AblyChatComponent.jsx";




const AblyChatComponent = () => {
  let inputBox = null;
  let messageEnd = null;
  const {
    0: messageText,
    1: setMessageText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); // bound to the text area where messages can be typed

  const {
    0: receivedMessages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); //Message history on screen

  const messageTextIsEmpty = messageText.trim().length === 0; //Disable the send button when text is empty

  const [channel, ably] = (0,_AblyReactEffect__WEBPACK_IMPORTED_MODULE_2__.useChannel)("chat-demo", message => {
    // Here we're computing the state that'll be drawn into the message history
    // We do that by slicing the last 199 messages from the receivedMessages buffer
    const history = receivedMessages.slice(-199);
    setMessages([...history, message]); // Then finally, we take the message history, and combine it with the new message
    // This means we'll always have up to 199 message + 1 new message, stored using the
    // setMessages react useState hook
  });

  const sendChatMessage = messageText => {
    //resposible for publishing new messages
    channel.publish({
      name: "chat-message",
      data: messageText
    });
    setMessageText("");
    inputBox.focus();
  };

  const handleFormSubmission = event => {
    //When triggered when the submit hutton is clicked calls send message to prevent the page for reloading
    event.preventDefault();
    sendChatMessage(messageText);
  };

  const handleKeyPress = event => {
    //makes sure that if the user presses enter the sendchatmessage is triggered
    if (event.charCode !== 13 || messageTextIsEmpty) {
      return;
    }

    sendChatMessage(messageText);
    event.preventDefault();
  };

  const messages = receivedMessages.map((message, index) => {
    //Will display messages that are sent
    const author = message.connectionId === ably.connection.id ? "me" : "other";
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),
      "data-author": author,
      children: message.data
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 16
    }, undefined);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    messageEnd.scrollIntoView({
      behaviour: "smooth"
    });
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatHolder),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatText),
      children: [messages, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: element => {
          messageEnd = element;
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleFormSubmission,
      className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
        ref: element => {
          inputBox = element;
        },
        value: messageText,
        placeholder: "Type a message...",
        onChange: e => setMessageText(e.target.value),
        onKeyPress: handleKeyPress,
        className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().textarea)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        className: (_AblyChatComponent_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
        disabled: messageTextIsEmpty,
        children: "Send"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AblyChatComponent);

/***/ }),

/***/ "./components/AblyReactEffect.js":
/*!***************************************!*\
  !*** ./components/AblyReactEffect.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useChannel": () => (/* binding */ useChannel)
/* harmony export */ });
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ably/promises */ "ably/promises");
/* harmony import */ var ably_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ably_promises__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ably = new (ably_promises__WEBPACK_IMPORTED_MODULE_0___default().Realtime.Promise)({
  authUrl: '/api/createTokenRequest'
});
function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName);

  const onMount = () => {
    channel.subscribe(msg => {
      callbackOnMessage(msg);
    });
  };

  const onUnmount = () => {
    channel.unsubscribe();
  };

  const useEffectHook = () => {
    onMount();
    return () => {
      onUnmount();
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(useEffectHook);
  return [channel, ably];
}

/***/ }),

/***/ "./components/AblyChatComponent.module.css":
/*!*************************************************!*\
  !*** ./components/AblyChatComponent.module.css ***!
  \*************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"jsx-641449633": "AblyChatComponent_jsx-641449633__1FOza",
	"chatHolder": "AblyChatComponent_chatHolder__1MoPa",
	"chatText": "AblyChatComponent_chatText__1MF-Z",
	"form": "AblyChatComponent_form__3pfGM",
	"textarea": "AblyChatComponent_textarea__2ubbU",
	"button": "AblyChatComponent_button__1EraP",
	"message": "AblyChatComponent_message__36v1F",
	"data": "AblyChatComponent_data__2CdQ3"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxpQkFBaUIsQ0FBQ0ssR0FBRCxDQUFqQjtBQUF5QixLQUFwRDtBQUNILEdBRkQ7O0FBSUEsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDcEI1QyxJQUFBQSxPQUFPLENBQUM2QyxXQUFSO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUN4QkwsSUFBQUEsT0FBTztBQUNQLFdBQU8sTUFBTTtBQUFFRyxNQUFBQSxTQUFTO0FBQUssS0FBN0I7QUFDSCxHQUhEOztBQUtBMUQsRUFBQUEsZ0RBQVMsQ0FBQzRELGFBQUQsQ0FBVDtBQUVBLFNBQU8sQ0FBQzlDLE9BQUQsRUFBVUMsSUFBVixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvdGVsLWNhbGlmb3JuaWEvLi9jb21wb25lbnRzL0FibHlDaGF0Q29tcG9uZW50LmpzeCIsIndlYnBhY2s6Ly9ob3RlbC1jYWxpZm9ybmlhLy4vY29tcG9uZW50cy9BYmx5UmVhY3RFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vaG90ZWwtY2FsaWZvcm5pYS8uL2NvbXBvbmVudHMvQWJseUNoYXRDb21wb25lbnQubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ2hhbm5lbCB9IGZyb20gXCIuL0FibHlSZWFjdEVmZmVjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWJseUNoYXRDb21wb25lbnQubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBBYmx5Q2hhdENvbXBvbmVudCA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgaW5wdXRCb3ggPSBudWxsO1xyXG4gICAgbGV0IG1lc3NhZ2VFbmQgPSBudWxsO1xyXG4gICAgY29uc3QgW21lc3NhZ2VUZXh0LCBzZXRNZXNzYWdlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gYm91bmQgdG8gdGhlIHRleHQgYXJlYSB3aGVyZSBtZXNzYWdlcyBjYW4gYmUgdHlwZWRcclxuICAgIGNvbnN0IFtyZWNlaXZlZE1lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8vTWVzc2FnZSBoaXN0b3J5IG9uIHNjcmVlblxyXG4gICAgY29uc3QgbWVzc2FnZVRleHRJc0VtcHR5ID0gbWVzc2FnZVRleHQudHJpbSgpLmxlbmd0aCA9PT0gMDsgLy9EaXNhYmxlIHRoZSBzZW5kIGJ1dHRvbiB3aGVuIHRleHQgaXMgZW1wdHlcclxuXHJcbiAgICBjb25zdCBbY2hhbm5lbCwgYWJseV0gPSB1c2VDaGFubmVsKFwiY2hhdC1kZW1vXCIsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgLy8gSGVyZSB3ZSdyZSBjb21wdXRpbmcgdGhlIHN0YXRlIHRoYXQnbGwgYmUgZHJhd24gaW50byB0aGUgbWVzc2FnZSBoaXN0b3J5XHJcbiAgICAgICAgLy8gV2UgZG8gdGhhdCBieSBzbGljaW5nIHRoZSBsYXN0IDE5OSBtZXNzYWdlcyBmcm9tIHRoZSByZWNlaXZlZE1lc3NhZ2VzIGJ1ZmZlclxyXG5cclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gcmVjZWl2ZWRNZXNzYWdlcy5zbGljZSgtMTk5KTtcclxuICAgICAgICBzZXRNZXNzYWdlcyhbLi4uaGlzdG9yeSwgbWVzc2FnZV0pO1xyXG5cclxuICAgICAgICAvLyBUaGVuIGZpbmFsbHksIHdlIHRha2UgdGhlIG1lc3NhZ2UgaGlzdG9yeSwgYW5kIGNvbWJpbmUgaXQgd2l0aCB0aGUgbmV3IG1lc3NhZ2VcclxuICAgICAgICAvLyBUaGlzIG1lYW5zIHdlJ2xsIGFsd2F5cyBoYXZlIHVwIHRvIDE5OSBtZXNzYWdlICsgMSBuZXcgbWVzc2FnZSwgc3RvcmVkIHVzaW5nIHRoZVxyXG4gICAgICAgIC8vIHNldE1lc3NhZ2VzIHJlYWN0IHVzZVN0YXRlIGhvb2tcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbmRDaGF0TWVzc2FnZSA9IChtZXNzYWdlVGV4dCkgPT4geyAvL3Jlc3Bvc2libGUgZm9yIHB1Ymxpc2hpbmcgbmV3IG1lc3NhZ2VzXHJcbiAgICAgICAgY2hhbm5lbC5wdWJsaXNoKHsgbmFtZTogXCJjaGF0LW1lc3NhZ2VcIiwgZGF0YTogbWVzc2FnZVRleHQgfSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZVRleHQoXCJcIik7XHJcbiAgICAgICAgaW5wdXRCb3guZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWlzc2lvbiA9IChldmVudCkgPT4geyAvL1doZW4gdHJpZ2dlcmVkIHdoZW4gdGhlIHN1Ym1pdCBodXR0b24gaXMgY2xpY2tlZCBjYWxscyBzZW5kIG1lc3NhZ2UgdG8gcHJldmVudCB0aGUgcGFnZSBmb3IgcmVsb2FkaW5nXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZW5kQ2hhdE1lc3NhZ2UobWVzc2FnZVRleHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZXZlbnQpID0+IHsgLy9tYWtlcyBzdXJlIHRoYXQgaWYgdGhlIHVzZXIgcHJlc3NlcyBlbnRlciB0aGUgc2VuZGNoYXRtZXNzYWdlIGlzIHRyaWdnZXJlZFxyXG4gICAgICAgIGlmIChldmVudC5jaGFyQ29kZSAhPT0gMTMgfHwgbWVzc2FnZVRleHRJc0VtcHR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VuZENoYXRNZXNzYWdlKG1lc3NhZ2VUZXh0KTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWVzc2FnZXMgPSByZWNlaXZlZE1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHsgLy9XaWxsIGRpc3BsYXkgbWVzc2FnZXMgdGhhdCBhcmUgc2VudFxyXG4gICAgICAgIGNvbnN0IGF1dGhvciA9IG1lc3NhZ2UuY29ubmVjdGlvbklkID09PSBhYmx5LmNvbm5lY3Rpb24uaWQgPyBcIm1lXCIgOiBcIm90aGVyXCI7XHJcbiAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9IGRhdGEtYXV0aG9yPXthdXRob3J9PnttZXNzYWdlLmRhdGF9PC9zcGFuPjtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnZUVuZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW91cjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRIb2xkZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRUZXh0fT5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlc31cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXsoZWxlbWVudCkgPT4geyBtZXNzYWdlRW5kID0gZWxlbWVudDsgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pc3Npb259IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4geyBpbnB1dEJveCA9IGVsZW1lbnQ7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBhIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE1lc3NhZ2VUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX1cclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBkaXNhYmxlZD17bWVzc2FnZVRleHRJc0VtcHR5fT5TZW5kPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJseUNoYXRDb21wb25lbnQ7IiwiaW1wb3J0IEFibHkgZnJvbSBcImFibHkvcHJvbWlzZXNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBhYmx5ID0gbmV3IEFibHkuUmVhbHRpbWUuUHJvbWlzZSh7IGF1dGhVcmw6ICcvYXBpL2NyZWF0ZVRva2VuUmVxdWVzdCcgfSk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNoYW5uZWwoY2hhbm5lbE5hbWUsIGNhbGxiYWNrT25NZXNzYWdlKSB7XHJcbiAgICBjb25zdCBjaGFubmVsID0gYWJseS5jaGFubmVscy5nZXQoY2hhbm5lbE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IG9uTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY2hhbm5lbC5zdWJzY3JpYmUobXNnID0+IHsgY2FsbGJhY2tPbk1lc3NhZ2UobXNnKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Vbm1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VFZmZlY3RIb29rID0gKCkgPT4ge1xyXG4gICAgICAgIG9uTW91bnQoKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4geyBvblVubW91bnQoKTsgfTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KHVzZUVmZmVjdEhvb2spO1xyXG5cclxuICAgIHJldHVybiBbY2hhbm5lbCwgYWJseV07XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwianN4LTY0MTQ0OTYzM1wiOiBcIkFibHlDaGF0Q29tcG9uZW50X2pzeC02NDE0NDk2MzNfXzFGT3phXCIsXG5cdFwiY2hhdEhvbGRlclwiOiBcIkFibHlDaGF0Q29tcG9uZW50X2NoYXRIb2xkZXJfXzFNb1BhXCIsXG5cdFwiY2hhdFRleHRcIjogXCJBYmx5Q2hhdENvbXBvbmVudF9jaGF0VGV4dF9fMU1GLVpcIixcblx0XCJmb3JtXCI6IFwiQWJseUNoYXRDb21wb25lbnRfZm9ybV9fM3BmR01cIixcblx0XCJ0ZXh0YXJlYVwiOiBcIkFibHlDaGF0Q29tcG9uZW50X3RleHRhcmVhX18ydWJiVVwiLFxuXHRcImJ1dHRvblwiOiBcIkFibHlDaGF0Q29tcG9uZW50X2J1dHRvbl9fMUVyYVBcIixcblx0XCJtZXNzYWdlXCI6IFwiQWJseUNoYXRDb21wb25lbnRfbWVzc2FnZV9fMzZ2MUZcIixcblx0XCJkYXRhXCI6IFwiQWJseUNoYXRDb21wb25lbnRfZGF0YV9fMkNkUTNcIlxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2hhbm5lbCIsInN0eWxlcyIsIkFibHlDaGF0Q29tcG9uZW50IiwiaW5wdXRCb3giLCJtZXNzYWdlRW5kIiwibWVzc2FnZVRleHQiLCJzZXRNZXNzYWdlVGV4dCIsInJlY2VpdmVkTWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm1lc3NhZ2VUZXh0SXNFbXB0eSIsInRyaW0iLCJsZW5ndGgiLCJjaGFubmVsIiwiYWJseSIsIm1lc3NhZ2UiLCJoaXN0b3J5Iiwic2xpY2UiLCJzZW5kQ2hhdE1lc3NhZ2UiLCJwdWJsaXNoIiwibmFtZSIsImRhdGEiLCJmb2N1cyIsImhhbmRsZUZvcm1TdWJtaXNzaW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUtleVByZXNzIiwiY2hhckNvZGUiLCJtZXNzYWdlcyIsIm1hcCIsImluZGV4IiwiYXV0aG9yIiwiY29ubmVjdGlvbklkIiwiY29ubmVjdGlvbiIsImlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvdXIiLCJjaGF0SG9sZGVyIiwiY2hhdFRleHQiLCJlbGVtZW50IiwiZm9ybSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRhcmVhIiwiYnV0dG9uIiwiQWJseSIsIlJlYWx0aW1lIiwiUHJvbWlzZSIsImF1dGhVcmwiLCJjaGFubmVsTmFtZSIsImNhbGxiYWNrT25NZXNzYWdlIiwiY2hhbm5lbHMiLCJnZXQiLCJvbk1vdW50Iiwic3Vic2NyaWJlIiwibXNnIiwib25Vbm1vdW50IiwidW5zdWJzY3JpYmUiLCJ1c2VFZmZlY3RIb29rIl0sInNvdXJjZVJvb3QiOiIifQ==