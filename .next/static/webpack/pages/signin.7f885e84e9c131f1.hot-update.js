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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/input/styles.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_c = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.FormControlComponent, {\n        style: props.formStyle,\n        display: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                hidden: props.inputValue[0] != null && props.inputValue[0] != \"\",\n                animate: {\n                    width: props.inputValue[0] != null && props.inputValue[0] != \"\" ? \"auto\" : \"0%\"\n                },\n                children: props.inputValue[0] != null && props.inputValue[0] != \"\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.FormLabelComponent, {\n                    style: props.titleStyle,\n                    children: props.titleValue\n                }, void 0, false, {\n                    fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 76\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.InputComponent, {\n                placeholder: props.inputPlaceholder,\n                value: props.inputValue[0],\n                onChange: (event)=>props.inputValue[1](event.currentTarget.value)\n            }, void 0, false, {\n                fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/developer/Documents/GitHub/Fiscalizi/Website/ReactJS/components/input/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 12\n    }, undefined);\n}));\nvar _c, _c1;\n$RefreshReg$(_c, \"%default%$memo\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBQzBCO0FBRW1CO0FBV3BGLGtGQUFlQywyQ0FBSUEsTUFBQyxDQUFDSTtJQUNqQixxQkFBTyw4REFBQ0gseURBQW9CQTtRQUFDSSxPQUFPRCxNQUFNRSxTQUFTO1FBQUVDLFNBQVE7OzBCQUN6RCw4REFBQ1IsaURBQU1BLENBQUNTLEdBQUc7Z0JBQUNDLFFBQVNMLE1BQU1NLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBUU4sTUFBTU0sVUFBVSxDQUFDLEVBQUUsSUFBSTtnQkFDM0VDLFNBQVM7b0JBQUVDLE9BQU8sTUFBT0YsVUFBVSxDQUFDLEVBQUUsSUFBSSxRQUFRTixNQUFNTSxVQUFVLENBQUMsRUFBRSxJQUFJLEtBQU0sU0FBUztnQkFBSzswQkFDeEYsTUFBT0EsVUFBVSxDQUFDLEVBQUUsSUFBSSxRQUFRTixNQUFNTSxVQUFVLENBQUMsRUFBRSxJQUFJLG9CQUFPLDhEQUFDUix1REFBa0JBO29CQUFDRyxPQUFPRCxNQUFNUyxVQUFVO29CQUFFQyxVQUFVVixNQUFNVyxVQUFVOzs7Ozs7Ozs7OzswQkFFMUksOERBQUNaLG1EQUFjQTtnQkFBQ2EsYUFBYVosTUFBTWEsZ0JBQWdCO2dCQUFFQyxPQUFPZCxNQUFNTSxVQUFVLENBQUMsRUFBRTtnQkFBRVMsVUFBVSxDQUFDQyxRQUFVaEIsTUFBTU0sVUFBVSxDQUFDLEVBQUUsQ0FBQ1UsTUFBTUMsYUFBYSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7QUFFM0osRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXgudHN4PzI0MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgbWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQsIEZvcm1MYWJlbENvbXBvbmVudCwgSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBwcm9wcyB7XG4gICAgZm9ybVN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgICB0aXRsZVZhbHVlPzogc3RyaW5nO1xuICAgIHRpdGxlU3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICAgIGlucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICAgaW5wdXRWYWx1ZTogW3N0cmluZyB8IHVuZGVmaW5lZCwgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nIHwgdW5kZWZpbmVkPj5dO1xuICAgIGlucHV0U3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKChwcm9wczogcHJvcHMpID0+IHtcbiAgICByZXR1cm4gPEZvcm1Db250cm9sQ29tcG9uZW50IHN0eWxlPXtwcm9wcy5mb3JtU3R5bGV9IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IGhpZGRlbj17KHByb3BzLmlucHV0VmFsdWVbMF0gIT0gbnVsbCAmJiBwcm9wcy5pbnB1dFZhbHVlWzBdICE9IFwiXCIpfVxuICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiAocHJvcHMuaW5wdXRWYWx1ZVswXSAhPSBudWxsICYmIHByb3BzLmlucHV0VmFsdWVbMF0gIT0gXCJcIikgPyBcImF1dG9cIiA6IFwiMCVcIiB9fT5cbiAgICAgICAgICAgIHsocHJvcHMuaW5wdXRWYWx1ZVswXSAhPSBudWxsICYmIHByb3BzLmlucHV0VmFsdWVbMF0gIT0gXCJcIikgJiYgPEZvcm1MYWJlbENvbXBvbmVudCBzdHlsZT17cHJvcHMudGl0bGVTdHlsZX0gY2hpbGRyZW49e3Byb3BzLnRpdGxlVmFsdWV9IC8+fVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxJbnB1dENvbXBvbmVudCBwbGFjZWhvbGRlcj17cHJvcHMuaW5wdXRQbGFjZWhvbGRlcn0gdmFsdWU9e3Byb3BzLmlucHV0VmFsdWVbMF19IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHByb3BzLmlucHV0VmFsdWVbMV0oZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9IC8+XG4gICAgPC9Gb3JtQ29udHJvbENvbXBvbmVudD5cbn0pOyJdLCJuYW1lcyI6WyJtb3Rpb24iLCJtZW1vIiwiRm9ybUNvbnRyb2xDb21wb25lbnQiLCJGb3JtTGFiZWxDb21wb25lbnQiLCJJbnB1dENvbXBvbmVudCIsInByb3BzIiwic3R5bGUiLCJmb3JtU3R5bGUiLCJkaXNwbGF5IiwiZGl2IiwiaGlkZGVuIiwiaW5wdXRWYWx1ZSIsImFuaW1hdGUiLCJ3aWR0aCIsInRpdGxlU3R5bGUiLCJjaGlsZHJlbiIsInRpdGxlVmFsdWUiLCJwbGFjZWhvbGRlciIsImlucHV0UGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input/index.tsx\n"));

/***/ })

});