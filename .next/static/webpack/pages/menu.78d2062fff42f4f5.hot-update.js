"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/menu",{

/***/ "./pages/menu/index.tsx":
/*!******************************!*\
  !*** ./pages/menu/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./components/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./utils/index.ts\");\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/global.css */ \"./public/global.css\");\n/* harmony import */ var _public_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_global_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pages_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/pages/dashboard */ \"./pages/dashboard/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = _s((0,react__WEBPACK_IMPORTED_MODULE_5__.memo)(_c = _s(()=>{\n    _s();\n    const [getModeContext, setModeContext] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_utils__WEBPACK_IMPORTED_MODULE_2__.modeContext.lightMode);\n    const [getMenuItemChecked, setMenuItemChecked] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"Dashboard\");\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"modeContext\")) setModeContext(js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"modeContext\"));\n        else if (new Date().getHours() >= 18) setModeContext(_utils__WEBPACK_IMPORTED_MODULE_2__.modeContext.darkMode);\n        else setModeContext(_utils__WEBPACK_IMPORTED_MODULE_2__.modeContext.lightMode);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_1__.defaultBackground, {\n        modeContext: [\n            getModeContext,\n            setModeContext\n        ],\n        menuItemChecked: [\n            getMenuItemChecked,\n            setMenuItemChecked\n        ],\n        styleChildren: {\n            alignItems: \"end\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/pages/menu/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/pages/menu/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 10\n    }, undefined);\n}, \"q/7UKBpG6oBi7ZZsHtuxK/GMInY=\")), \"q/7UKBpG6oBi7ZZsHtuxK/GMInY=\"));\nvar _c, _c1;\n$RefreshReg$(_c, \"%default%$memo\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tZW51L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMkM7QUFDZ0I7QUFDOUI7QUFDRztBQUNrQjtBQUNSO0FBRzFDLGtGQUFlRyxHQUFBQSwyQ0FBSUEsU0FBQzs7SUFDbEIsTUFBTSxDQUFDSSxnQkFBZ0JDLGVBQWUsR0FBR0gsK0NBQVFBLENBQWNKLCtDQUFXQSxDQUFDUSxTQUFTO0lBQ3BGLE1BQU0sQ0FBQ0Msb0JBQW9CQyxtQkFBbUIsR0FBR04sK0NBQVFBLENBQVM7SUFFbEVELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUYsaURBQU9BLENBQUNVLEdBQUcsQ0FBQyxnQkFBZ0JKLGVBQWVOLGlEQUFPQSxDQUFDVSxHQUFHLENBQUM7YUFDdEQsSUFBSSxJQUFJQyxPQUFPQyxRQUFRLE1BQU0sSUFBSU4sZUFBZVAsK0NBQVdBLENBQUNjLFFBQVE7YUFDcEVQLGVBQWVQLCtDQUFXQSxDQUFDUSxTQUFTO0lBQzNDLEdBQUcsRUFBRTtJQUNMLHFCQUFPLDhEQUFDVCwwREFBNEI7UUFBQ0MsYUFBYTtZQUFDTTtZQUFnQkM7U0FBZTtRQUFFUyxpQkFBaUI7WUFBQ1A7WUFBb0JDO1NBQW1CO1FBQUVPLGVBQWU7WUFBRUMsWUFBWTtZQUFPQyxnQkFBZ0I7UUFBUztrQkFDMU0sNEVBQUNkLHdEQUFTQTs7Ozs7Ozs7OztBQUVkLHNFQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21lbnUvaW5kZXgudHN4PzQyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCJAL2FwaVwiO1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tIFwiQC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBhdXRoVG9rZW4sIG1vZGVDb250ZXh0LCB2YWxpZGF0ZSB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgJ0AvcHVibGljL2dsb2JhbC5jc3MnO1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJztcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIkAvcGFnZXMvZGFzaGJvYXJkXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oKCkgPT4ge1xuICBjb25zdCBbZ2V0TW9kZUNvbnRleHQsIHNldE1vZGVDb250ZXh0XSA9IHVzZVN0YXRlPG1vZGVDb250ZXh0Pihtb2RlQ29udGV4dC5saWdodE1vZGUpO1xuICBjb25zdCBbZ2V0TWVudUl0ZW1DaGVja2VkLCBzZXRNZW51SXRlbUNoZWNrZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIkRhc2hib2FyZFwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb29raWVzLmdldCgnbW9kZUNvbnRleHQnKSkgc2V0TW9kZUNvbnRleHQoY29va2llcy5nZXQoJ21vZGVDb250ZXh0JykgYXMgbW9kZUNvbnRleHQpO1xuICAgIGVsc2UgaWYgKG5ldyBEYXRlKCkuZ2V0SG91cnMoKSA+PSAxOCkgc2V0TW9kZUNvbnRleHQobW9kZUNvbnRleHQuZGFya01vZGUpO1xuICAgIGVsc2Ugc2V0TW9kZUNvbnRleHQobW9kZUNvbnRleHQubGlnaHRNb2RlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPGNvbXBvbmVudHMuZGVmYXVsdEJhY2tncm91bmQgbW9kZUNvbnRleHQ9e1tnZXRNb2RlQ29udGV4dCwgc2V0TW9kZUNvbnRleHRdfSBtZW51SXRlbUNoZWNrZWQ9e1tnZXRNZW51SXRlbUNoZWNrZWQsIHNldE1lbnVJdGVtQ2hlY2tlZF19IHN0eWxlQ2hpbGRyZW49e3sgYWxpZ25JdGVtczogXCJlbmRcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0gPlxuICAgIDxEYXNoYm9hcmQgLz5cbiAgPC9jb21wb25lbnRzLmRlZmF1bHRCYWNrZ3JvdW5kPlxufSk7Il0sIm5hbWVzIjpbImNvbXBvbmVudHMiLCJtb2RlQ29udGV4dCIsImNvb2tpZXMiLCJtZW1vIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJnZXRNb2RlQ29udGV4dCIsInNldE1vZGVDb250ZXh0IiwibGlnaHRNb2RlIiwiZ2V0TWVudUl0ZW1DaGVja2VkIiwic2V0TWVudUl0ZW1DaGVja2VkIiwiZ2V0IiwiRGF0ZSIsImdldEhvdXJzIiwiZGFya01vZGUiLCJkZWZhdWx0QmFja2dyb3VuZCIsIm1lbnVJdGVtQ2hlY2tlZCIsInN0eWxlQ2hpbGRyZW4iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/menu/index.tsx\n"));

/***/ })

});