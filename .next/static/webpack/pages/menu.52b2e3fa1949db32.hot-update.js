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

/***/ "./pages/dashboard/styles.ts":
/*!***********************************!*\
  !*** ./pages/dashboard/styles.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dashboardContainer: function() { return /* binding */ dashboardContainer; },\n/* harmony export */   dashboardValue: function() { return /* binding */ dashboardValue; },\n/* harmony export */   dashboardValueLabel: function() { return /* binding */ dashboardValueLabel; },\n/* harmony export */   dashboardValueText: function() { return /* binding */ dashboardValueText; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    background: red;\\n    display: flex;\\n    flex-direction: row;\\n    overflow-y: auto;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    background: #FFFFFF;\\n    box-shadow: 0px 8px 17px rgba(0, 0, 0, 0.25);\\n    border-radius: 20px;\\n    display: flex;\\n    flex-direction: column;\\n    min-height: 60px;\\n    min-width: 260px;\\n    padding: 20px;\\n    margin: 20px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    align-items: end;\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 100%;\\n    justify-content: center;\\n    height: 30%;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    align-items: end;\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 300%;\\n    font-weight: bold;\\n    justify-content: center;\\n    height: 100%;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst dashboardContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__dashboardContainer\",\n    componentId: \"sc-a7fd3bb-0\"\n})(_templateObject());\ndashboardContainer.shouldForwardProp = (prop)=>![\n        \"modeContext\"\n    ].includes(prop);\nconst dashboardValue = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__dashboardValue\",\n    componentId: \"sc-a7fd3bb-1\"\n})(_templateObject1());\ndashboardValue.shouldForwardProp = (prop)=>![\n        \"modeContext\"\n    ].includes(prop);\nconst dashboardValueLabel = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].label.withConfig({\n    displayName: \"styles__dashboardValueLabel\",\n    componentId: \"sc-a7fd3bb-2\"\n})(_templateObject2());\ndashboardValue.shouldForwardProp = (prop)=>![\n        \"modeContext\"\n    ].includes(prop);\nconst dashboardValueText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].label.withConfig({\n    displayName: \"styles__dashboardValueText\",\n    componentId: \"sc-a7fd3bb-3\"\n})(_templateObject3());\ndashboardValueText.shouldForwardProp = (prop)=>![\n        \"modeContext\"\n    ].includes(prop);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvc3R5bGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFFaEMsTUFBTUMscUJBQXFCRCx5REFBTUEsQ0FBQ0UsR0FBRzs7O3NCQU0xQztBQUNGRCxtQkFBbUJFLGlCQUFpQixHQUFHLENBQUNDLE9BQVMsQ0FBQztRQUFDO0tBQWMsQ0FBQ0MsUUFBUSxDQUFDRDtBQUNwRSxNQUFNRSxpQkFBaUJOLHlEQUFNQSxDQUFDRSxHQUFHOzs7dUJBVXRDO0FBQ0ZJLGVBQWVILGlCQUFpQixHQUFHLENBQUNDLE9BQVMsQ0FBQztRQUFDO0tBQWMsQ0FBQ0MsUUFBUSxDQUFDRDtBQUNoRSxNQUFNRyxzQkFBc0JQLHlEQUFNQSxDQUFDUSxLQUFLOzs7dUJBUTdDO0FBQ0ZGLGVBQWVILGlCQUFpQixHQUFHLENBQUNDLE9BQVMsQ0FBQztRQUFDO0tBQWMsQ0FBQ0MsUUFBUSxDQUFDRDtBQUNoRSxNQUFNSyxxQkFBcUJULHlEQUFNQSxDQUFDUSxLQUFLOzs7dUJBUzVDO0FBQ0ZDLG1CQUFtQk4saUJBQWlCLEdBQUcsQ0FBQ0MsT0FBUyxDQUFDO1FBQUM7S0FBYyxDQUFDQyxRQUFRLENBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC9zdHlsZXMudHM/NzExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlQ29udGV4dCB9IGZyb20gJ0AvdXRpbHMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRDb250YWluZXIgPSBzdHlsZWQuZGl2PHsgbW9kZUNvbnRleHQ6IG1vZGVDb250ZXh0IH0+YFxuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5kYXNoYm9hcmRDb250YWluZXIuc2hvdWxkRm9yd2FyZFByb3AgPSAocHJvcCkgPT4gIVsnbW9kZUNvbnRleHQnXS5pbmNsdWRlcyhwcm9wKTtcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRWYWx1ZSA9IHN0eWxlZC5kaXY8eyBtb2RlQ29udGV4dDogbW9kZUNvbnRleHQgfT5gXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIG1pbi13aWR0aDogMjYwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG5gO1xuZGFzaGJvYXJkVmFsdWUuc2hvdWxkRm9yd2FyZFByb3AgPSAocHJvcCkgPT4gIVsnbW9kZUNvbnRleHQnXS5pbmNsdWRlcyhwcm9wKTtcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRWYWx1ZUxhYmVsID0gc3R5bGVkLmxhYmVsPHsgbW9kZUNvbnRleHQ6IG1vZGVDb250ZXh0IH0+YFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogMTAwJTtcbmA7XG5kYXNoYm9hcmRWYWx1ZS5zaG91bGRGb3J3YXJkUHJvcCA9IChwcm9wKSA9PiAhWydtb2RlQ29udGV4dCddLmluY2x1ZGVzKHByb3ApO1xuZXhwb3J0IGNvbnN0IGRhc2hib2FyZFZhbHVlVGV4dCA9IHN0eWxlZC5sYWJlbDx7IG1vZGVDb250ZXh0OiBtb2RlQ29udGV4dCB9PmBcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDMwMCU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuYDtcbmRhc2hib2FyZFZhbHVlVGV4dC5zaG91bGRGb3J3YXJkUHJvcCA9IChwcm9wKSA9PiAhWydtb2RlQ29udGV4dCddLmluY2x1ZGVzKHByb3ApOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJkYXNoYm9hcmRDb250YWluZXIiLCJkaXYiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJpbmNsdWRlcyIsImRhc2hib2FyZFZhbHVlIiwiZGFzaGJvYXJkVmFsdWVMYWJlbCIsImxhYmVsIiwiZGFzaGJvYXJkVmFsdWVUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard/styles.ts\n"));

/***/ })

});