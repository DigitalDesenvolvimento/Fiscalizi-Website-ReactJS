"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/input/index.tsx":
/*!************************************!*\
  !*** ./components/input/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/input/styles.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, {\n        style: props.formStyle,\n        display: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                animate: {\n                    width: props.inputValue[0] != null && props.inputValue[0] != \"\" ? \"100px\" : \"0px\"\n                },\n                style: {\n                    background: \"red\"\n                },\n                children: props.inputValue[0] != null && props.inputValue[0] != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.FormLabelComponent, {\n                    style: props.titleStyle,\n                    children: props.titleValue\n                }, void 0, false, {\n                    fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 80\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.InputComponent, {\n                placeholder: props.inputPlaceholder,\n                value: props.inputValue[0],\n                onChange: (event)=>props.inputValue[1](event.currentTarget.value)\n            }, void 0, false, {\n                fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, undefined);\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"%default%$memo\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQzBCO0FBRW1CO0FBV3BGLGtGQUFlQywyQ0FBSUEsTUFBQyxDQUFDSTtJQUNqQixxQkFBTyw4REFBQ0gseURBQW9CQTtRQUFDSSxPQUFPRCxNQUFNRSxTQUFTO1FBQUVDLFNBQVE7OzBCQUMzRCw4REFBQ1IsaURBQU1BLENBQUNTLEdBQUc7Z0JBQ0xDLFNBQVM7b0JBQUVDLE9BQU8sTUFBT0MsVUFBVSxDQUFDLEVBQUUsSUFBSSxRQUFRUCxNQUFNTyxVQUFVLENBQUMsRUFBRSxJQUFJLEtBQU0sVUFBVTtnQkFBTTtnQkFDL0ZOLE9BQU87b0JBQ0hPLFlBQVk7Z0JBQ2hCOzBCQUNLLE1BQU9ELFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBUVAsTUFBTU8sVUFBVSxDQUFDLEVBQUUsSUFBSSxvQkFBTyw4REFBQ1QsdURBQWtCQTtvQkFBQ0csT0FBT0QsTUFBTVMsVUFBVTtvQkFBRUMsVUFBVVYsTUFBTVcsVUFBVTs7Ozs7Ozs7Ozs7MEJBRTlJLDhEQUFDWixtREFBY0E7Z0JBQUNhLGFBQWFaLE1BQU1hLGdCQUFnQjtnQkFBRUMsT0FBT2QsTUFBTU8sVUFBVSxDQUFDLEVBQUU7Z0JBQUVRLFVBQVUsQ0FBQ0MsUUFBVWhCLE1BQU1PLFVBQVUsQ0FBQyxFQUFFLENBQUNTLE1BQU1DLGFBQWEsQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O0FBRTNKLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzeD8yNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIG1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ1NTUHJvcGVydGllcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50LCBGb3JtTGFiZWxDb21wb25lbnQsIElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgcHJvcHMge1xuICAgIGZvcm1TdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gICAgdGl0bGVWYWx1ZT86IHN0cmluZztcbiAgICB0aXRsZVN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICBpbnB1dFBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIGlucHV0VmFsdWU6IFtzdHJpbmcgfCB1bmRlZmluZWQsIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZyB8IHVuZGVmaW5lZD4+XTtcbiAgICBpbnB1dFN0eWxlPzogQ1NTUHJvcGVydGllcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbygocHJvcHM6IHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIDxGb3JtQ29udHJvbENvbXBvbmVudCBzdHlsZT17cHJvcHMuZm9ybVN0eWxlfSBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IChwcm9wcy5pbnB1dFZhbHVlWzBdICE9IG51bGwgJiYgcHJvcHMuaW5wdXRWYWx1ZVswXSAhPSBcIlwiKSA/IFwiMTAwcHhcIiA6IFwiMHB4XCIgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIlxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgeyhwcm9wcy5pbnB1dFZhbHVlWzBdICE9IG51bGwgJiYgcHJvcHMuaW5wdXRWYWx1ZVswXSAhPSBcIlwiKSAmJiA8Rm9ybUxhYmVsQ29tcG9uZW50IHN0eWxlPXtwcm9wcy50aXRsZVN0eWxlfSBjaGlsZHJlbj17cHJvcHMudGl0bGVWYWx1ZX0gLz59XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPElucHV0Q29tcG9uZW50IHBsYWNlaG9sZGVyPXtwcm9wcy5pbnB1dFBsYWNlaG9sZGVyfSB2YWx1ZT17cHJvcHMuaW5wdXRWYWx1ZVswXX0gb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuaW5wdXRWYWx1ZVsxXShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gLz5cbiAgICA8L0Zvcm1Db250cm9sQ29tcG9uZW50PlxufSk7Il0sIm5hbWVzIjpbIm1vdGlvbiIsIm1lbW8iLCJGb3JtQ29udHJvbENvbXBvbmVudCIsIkZvcm1MYWJlbENvbXBvbmVudCIsIklucHV0Q29tcG9uZW50IiwicHJvcHMiLCJzdHlsZSIsImZvcm1TdHlsZSIsImRpc3BsYXkiLCJkaXYiLCJhbmltYXRlIiwid2lkdGgiLCJpbnB1dFZhbHVlIiwiYmFja2dyb3VuZCIsInRpdGxlU3R5bGUiLCJjaGlsZHJlbiIsInRpdGxlVmFsdWUiLCJwbGFjZWhvbGRlciIsImlucHV0UGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input/index.tsx\n"));

/***/ })

});