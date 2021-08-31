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
	"message": "AblyChatComponent_message__36v1F"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxpQkFBaUIsQ0FBQ0ssR0FBRCxDQUFqQjtBQUF5QixLQUFwRDtBQUNILEdBRkQ7O0FBSUEsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDcEI1QyxJQUFBQSxPQUFPLENBQUM2QyxXQUFSO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxhQUFhLEdBQUcsTUFBTTtBQUN4QkwsSUFBQUEsT0FBTztBQUNQLFdBQU8sTUFBTTtBQUFFRyxNQUFBQSxTQUFTO0FBQUssS0FBN0I7QUFDSCxHQUhEOztBQUtBMUQsRUFBQUEsZ0RBQVMsQ0FBQzRELGFBQUQsQ0FBVDtBQUVBLFNBQU8sQ0FBQzlDLE9BQUQsRUFBVUMsSUFBVixDQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3RlbC1jYWxpZm9ybmlhLy4vY29tcG9uZW50cy9BYmx5Q2hhdENvbXBvbmVudC5qc3giLCJ3ZWJwYWNrOi8vaG90ZWwtY2FsaWZvcm5pYS8uL2NvbXBvbmVudHMvQWJseVJlYWN0RWZmZWN0LmpzIiwid2VicGFjazovL2hvdGVsLWNhbGlmb3JuaWEvLi9jb21wb25lbnRzL0FibHlDaGF0Q29tcG9uZW50Lm1vZHVsZS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUNoYW5uZWwgfSBmcm9tIFwiLi9BYmx5UmVhY3RFZmZlY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FibHlDaGF0Q29tcG9uZW50Lm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQWJseUNoYXRDb21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGlucHV0Qm94ID0gbnVsbDtcclxuICAgIGxldCBtZXNzYWdlRW5kID0gbnVsbDtcclxuICAgIGNvbnN0IFttZXNzYWdlVGV4dCwgc2V0TWVzc2FnZVRleHRdID0gdXNlU3RhdGUoXCJcIik7IC8vIGJvdW5kIHRvIHRoZSB0ZXh0IGFyZWEgd2hlcmUgbWVzc2FnZXMgY2FuIGJlIHR5cGVkXHJcbiAgICBjb25zdCBbcmVjZWl2ZWRNZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyAvL01lc3NhZ2UgaGlzdG9yeSBvbiBzY3JlZW5cclxuICAgIGNvbnN0IG1lc3NhZ2VUZXh0SXNFbXB0eSA9IG1lc3NhZ2VUZXh0LnRyaW0oKS5sZW5ndGggPT09IDA7IC8vRGlzYWJsZSB0aGUgc2VuZCBidXR0b24gd2hlbiB0ZXh0IGlzIGVtcHR5XHJcblxyXG4gICAgY29uc3QgW2NoYW5uZWwsIGFibHldID0gdXNlQ2hhbm5lbChcImNoYXQtZGVtb1wiLCAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIC8vIEhlcmUgd2UncmUgY29tcHV0aW5nIHRoZSBzdGF0ZSB0aGF0J2xsIGJlIGRyYXduIGludG8gdGhlIG1lc3NhZ2UgaGlzdG9yeVxyXG4gICAgICAgIC8vIFdlIGRvIHRoYXQgYnkgc2xpY2luZyB0aGUgbGFzdCAxOTkgbWVzc2FnZXMgZnJvbSB0aGUgcmVjZWl2ZWRNZXNzYWdlcyBidWZmZXJcclxuXHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHJlY2VpdmVkTWVzc2FnZXMuc2xpY2UoLTE5OSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZXMoWy4uLmhpc3RvcnksIG1lc3NhZ2VdKTtcclxuXHJcbiAgICAgICAgLy8gVGhlbiBmaW5hbGx5LCB3ZSB0YWtlIHRoZSBtZXNzYWdlIGhpc3RvcnksIGFuZCBjb21iaW5lIGl0IHdpdGggdGhlIG5ldyBtZXNzYWdlXHJcbiAgICAgICAgLy8gVGhpcyBtZWFucyB3ZSdsbCBhbHdheXMgaGF2ZSB1cCB0byAxOTkgbWVzc2FnZSArIDEgbmV3IG1lc3NhZ2UsIHN0b3JlZCB1c2luZyB0aGVcclxuICAgICAgICAvLyBzZXRNZXNzYWdlcyByZWFjdCB1c2VTdGF0ZSBob29rXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kQ2hhdE1lc3NhZ2UgPSAobWVzc2FnZVRleHQpID0+IHsgLy9yZXNwb3NpYmxlIGZvciBwdWJsaXNoaW5nIG5ldyBtZXNzYWdlc1xyXG4gICAgICAgIGNoYW5uZWwucHVibGlzaCh7IG5hbWU6IFwiY2hhdC1tZXNzYWdlXCIsIGRhdGE6IG1lc3NhZ2VUZXh0IH0pO1xyXG4gICAgICAgIHNldE1lc3NhZ2VUZXh0KFwiXCIpO1xyXG4gICAgICAgIGlucHV0Qm94LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pc3Npb24gPSAoZXZlbnQpID0+IHsgLy9XaGVuIHRyaWdnZXJlZCB3aGVuIHRoZSBzdWJtaXQgaHV0dG9uIGlzIGNsaWNrZWQgY2FsbHMgc2VuZCBtZXNzYWdlIHRvIHByZXZlbnQgdGhlIHBhZ2UgZm9yIHJlbG9hZGluZ1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2VuZENoYXRNZXNzYWdlKG1lc3NhZ2VUZXh0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7IC8vbWFrZXMgc3VyZSB0aGF0IGlmIHRoZSB1c2VyIHByZXNzZXMgZW50ZXIgdGhlIHNlbmRjaGF0bWVzc2FnZSBpcyB0cmlnZ2VyZWRcclxuICAgICAgICBpZiAoZXZlbnQuY2hhckNvZGUgIT09IDEzIHx8IG1lc3NhZ2VUZXh0SXNFbXB0eSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbmRDaGF0TWVzc2FnZShtZXNzYWdlVGV4dCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gcmVjZWl2ZWRNZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7IC8vV2lsbCBkaXNwbGF5IG1lc3NhZ2VzIHRoYXQgYXJlIHNlbnRcclxuICAgICAgICBjb25zdCBhdXRob3IgPSBtZXNzYWdlLmNvbm5lY3Rpb25JZCA9PT0gYWJseS5jb25uZWN0aW9uLmlkID8gXCJtZVwiIDogXCJvdGhlclwiO1xyXG4gICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfSBkYXRhLWF1dGhvcj17YXV0aG9yfT57bWVzc2FnZS5kYXRhfTwvc3Bhbj47XHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG1lc3NhZ2VFbmQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvdXI6IFwic21vb3RoXCIgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SG9sZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0VGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZXN9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17KGVsZW1lbnQpID0+IHsgbWVzc2FnZUVuZCA9IGVsZW1lbnQ7IH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXNzaW9ufSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KGVsZW1lbnQpID0+IHsgaW5wdXRCb3ggPSBlbGVtZW50OyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRNZXNzYWdlVGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XHJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gZGlzYWJsZWQ9e21lc3NhZ2VUZXh0SXNFbXB0eX0+U2VuZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFibHlDaGF0Q29tcG9uZW50OyIsImltcG9ydCBBYmx5IGZyb20gXCJhYmx5L3Byb21pc2VzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgYWJseSA9IG5ldyBBYmx5LlJlYWx0aW1lLlByb21pc2UoeyBhdXRoVXJsOiAnL2FwaS9jcmVhdGVUb2tlblJlcXVlc3QnIH0pO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDaGFubmVsKGNoYW5uZWxOYW1lLCBjYWxsYmFja09uTWVzc2FnZSkge1xyXG4gICAgY29uc3QgY2hhbm5lbCA9IGFibHkuY2hhbm5lbHMuZ2V0KGNoYW5uZWxOYW1lKTtcclxuXHJcbiAgICBjb25zdCBvbk1vdW50ID0gKCkgPT4ge1xyXG4gICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKG1zZyA9PiB7IGNhbGxiYWNrT25NZXNzYWdlKG1zZyk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uVW5tb3VudCA9ICgpID0+IHtcclxuICAgICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXNlRWZmZWN0SG9vayA9ICgpID0+IHtcclxuICAgICAgICBvbk1vdW50KCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHsgb25Vbm1vdW50KCk7IH07XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCh1c2VFZmZlY3RIb29rKTtcclxuXHJcbiAgICByZXR1cm4gW2NoYW5uZWwsIGFibHldO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImpzeC02NDE0NDk2MzNcIjogXCJBYmx5Q2hhdENvbXBvbmVudF9qc3gtNjQxNDQ5NjMzX18xRk96YVwiLFxuXHRcImNoYXRIb2xkZXJcIjogXCJBYmx5Q2hhdENvbXBvbmVudF9jaGF0SG9sZGVyX18xTW9QYVwiLFxuXHRcImNoYXRUZXh0XCI6IFwiQWJseUNoYXRDb21wb25lbnRfY2hhdFRleHRfXzFNRi1aXCIsXG5cdFwiZm9ybVwiOiBcIkFibHlDaGF0Q29tcG9uZW50X2Zvcm1fXzNwZkdNXCIsXG5cdFwidGV4dGFyZWFcIjogXCJBYmx5Q2hhdENvbXBvbmVudF90ZXh0YXJlYV9fMnViYlVcIixcblx0XCJidXR0b25cIjogXCJBYmx5Q2hhdENvbXBvbmVudF9idXR0b25fXzFFcmFQXCIsXG5cdFwibWVzc2FnZVwiOiBcIkFibHlDaGF0Q29tcG9uZW50X21lc3NhZ2VfXzM2djFGXCJcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNoYW5uZWwiLCJzdHlsZXMiLCJBYmx5Q2hhdENvbXBvbmVudCIsImlucHV0Qm94IiwibWVzc2FnZUVuZCIsIm1lc3NhZ2VUZXh0Iiwic2V0TWVzc2FnZVRleHQiLCJyZWNlaXZlZE1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlVGV4dElzRW1wdHkiLCJ0cmltIiwibGVuZ3RoIiwiY2hhbm5lbCIsImFibHkiLCJtZXNzYWdlIiwiaGlzdG9yeSIsInNsaWNlIiwic2VuZENoYXRNZXNzYWdlIiwicHVibGlzaCIsIm5hbWUiLCJkYXRhIiwiZm9jdXMiLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVLZXlQcmVzcyIsImNoYXJDb2RlIiwibWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsImF1dGhvciIsImNvbm5lY3Rpb25JZCIsImNvbm5lY3Rpb24iLCJpZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3VyIiwiY2hhdEhvbGRlciIsImNoYXRUZXh0IiwiZWxlbWVudCIsImZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIkFibHkiLCJSZWFsdGltZSIsIlByb21pc2UiLCJhdXRoVXJsIiwiY2hhbm5lbE5hbWUiLCJjYWxsYmFja09uTWVzc2FnZSIsImNoYW5uZWxzIiwiZ2V0Iiwib25Nb3VudCIsInN1YnNjcmliZSIsIm1zZyIsIm9uVW5tb3VudCIsInVuc3Vic2NyaWJlIiwidXNlRWZmZWN0SG9vayJdLCJzb3VyY2VSb290IjoiIn0=