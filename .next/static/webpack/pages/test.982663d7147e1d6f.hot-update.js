"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = (param)=>{\n    let { isProject  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n        className: \"flex flex-col lg:flex-row items-baseline justify-between \".concat(isProject === true ? \"px-4\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-sans uppercase text-xs text-gray-900 tracking-widest\",\n                children: [\n                    \"Copyright \\xa9 \",\n                    new Date().getFullYear(),\n                    \" BA AA.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/components/Footer.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-sans uppercase text-xs text-gray-900 tracking-widest mt-1 md:mt-0\",\n                children: [\n                    \"Website by \",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://www.juanmartingarcia.com\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"hover:underline underline-offset-4\",\n                        children: \"JMG\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/components/Footer.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/components/Footer.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/components/Footer.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUyxTQUFtQjtRQUFsQixFQUFFQyxVQUFTLEVBQUU7SUFDM0IscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVcsNERBQTZGLE9BQWpDRixjQUFjLElBQUksR0FBRyxTQUFTLEVBQUU7OzBCQUM3Ryw4REFBQ0c7Z0JBQUVELFdBQVU7O29CQUE0RDtvQkFDckQsSUFBSUUsT0FBT0MsV0FBVztvQkFBRzs7Ozs7OzswQkFFN0MsOERBQUNGO2dCQUFFRCxXQUFVOztvQkFBeUU7b0JBQ3hFO2tDQUNaLDhEQUFDSTt3QkFDQ0MsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsS0FBSTt3QkFDSlAsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7S0FuQk1IO0FBcUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLmpzP2UxYWIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKHsgaXNQcm9qZWN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuICR7aXNQcm9qZWN0ID09PSB0cnVlID8gJ3B4LTQnIDogJyd9YH0+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmF5LTkwMCB0cmFja2luZy13aWRlc3RcIj5cbiAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBCQSBBQS5cbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtc2FucyB1cHBlcmNhc2UgdGV4dC14cyB0ZXh0LWdyYXktOTAwIHRyYWNraW5nLXdpZGVzdCBtdC0xIG1kOm10LTBcIj5cbiAgICAgICAgV2Vic2l0ZSBieSB7XCIgXCJ9XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmp1YW5tYXJ0aW5nYXJjaWEuY29tXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIlxuICAgICAgICA+XG4gICAgICAgICAgSk1HXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXSwibmFtZXMiOlsiRm9vdGVyIiwiaXNQcm9qZWN0IiwiZm9vdGVyIiwiY2xhc3NOYW1lIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.js\n"));

/***/ }),

/***/ "./pages/test.tsx":
/*!************************!*\
  !*** ./pages/test.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Head */ \"./components/Head.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/home.md */ \"./content/home.md\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usePreventBodyScroll */ \"./pages/usePreventBodyScroll.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { LeftArrow, RightArrow } from \"./arrows\";\n// import { Card } from \"./card\";\n// import { Footer } from \"./footer\";\n// import { Header } from \"./header\";\n// import \"./globalStyles.css\";\n\nconst elemPrefix = \"test\";\nconst getId = (index)=>\"\".concat(elemPrefix).concat(index);\nconst getItems = ()=>Array(20).fill(0).map((_, ind)=>({\n            id: getId(ind)\n        }));\nfunction Homepage(param) {\n    let { projectsDAta  } = param;\n    _s();\n    const { pageTitle  } = _content_home_md__WEBPACK_IMPORTED_MODULE_6__.attributes;\n    const updateWindowHeight = ()=>{\n        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit\n        let vh = window.innerHeight * 0.01;\n        // Then we set the value in the --vh custom property to the root of the document\n        document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n        // We listen to the resize event\n        window.addEventListener(\"resize\", ()=>{\n            // We execute the same script as before\n            let vh = window.innerHeight * 0.01;\n            document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n        });\n    };\n    const [items] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(getItems);\n    const { disableScroll , enableScroll  } = (0,_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateWindowHeight();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageTitle: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 py-4 md:py-8 custom-height relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        active: \"home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"py-16 lg:py-8 2xl:pt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"64\",\n                                height: \"64\",\n                                viewBox: \"0 0 64 64\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"ml-auto fill-primary mb-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M63.4867 61.8074L64 0C48.519 0.150494 17.6712 0.362806 2.1916 0.511958L2.06395 8.24889C15.9887 8.11183 34.4745 7.99896 50.7388 7.85117L0 58.5891L5.41099 64L56.1497 13.2621L55.709 61.8948L63.4891 61.8075L63.4867 61.8074Z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onMouseEnter: disableScroll,\n                                onMouseLeave: enableScroll,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_2__.ScrollMenu, {\n                                    // LeftArrow={LeftArrow}\n                                    // RightArrow={RightArrow}\n                                    onWheel: onWheel,\n                                    children: items.map((param)=>/*#__PURE__*/ {\n                                        let { id  } = param;\n                                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                width: \"20vw\"\n                                            },\n                                            title: id,\n                                            itemID: id,\n                                            children: \"test\"\n                                        }, id, false, {\n                                            fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        isProject: false\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/test.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Homepage, \"sGoM0s5BF/haCqql67qyVNT4yu4=\", false, function() {\n    return [\n        _usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Homepage;\nfunction onWheel(apiObj, ev) {\n    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n    if (isThouchpad) {\n        ev.stopPropagation();\n        return;\n    }\n    if (ev.deltaY < 0) {\n        apiObj.scrollNext();\n    } else if (ev.deltaY > 0) {\n        apiObj.scrollPrev();\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7UUFDeEJOLE9BQU9TLFVBQVU7SUFDbkIsQ0FBQztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3QudHN4PzdhMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gXCJyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51XCI7XG5cbmltcG9ydCBDdXN0b21IZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5pbXBvcnQgeyBnZXRBbGxDb2xsZWN0aW9ucyB9IGZyb20gXCIuLi9saWIvY29sbGVjdGlvbnNcIjtcblxuaW1wb3J0IHsgYXR0cmlidXRlcyB9IGZyb20gXCIuLi9jb250ZW50L2hvbWUubWRcIjtcblxuLy8gaW1wb3J0IHsgTGVmdEFycm93LCBSaWdodEFycm93IH0gZnJvbSBcIi4vYXJyb3dzXCI7XG4vLyBpbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4vY2FyZFwiO1xuLy8gaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG4vLyBpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIjtcbi8vIGltcG9ydCBcIi4vZ2xvYmFsU3R5bGVzLmNzc1wiO1xuaW1wb3J0IHVzZVByZXZlbnRCb2R5U2Nyb2xsIGZyb20gXCIuL3VzZVByZXZlbnRCb2R5U2Nyb2xsXCI7XG5cbi8vIE5PVEU6IGVtYnJhY2UgcG93ZXIgb2YgQ1NTIGZsZXhib3ghXG4vLyBpbXBvcnQgXCIuL2hpZGVTY3JvbGxiYXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuL2ZpcnN0SXRlbU1hcmdpbi5jc3NcIjtcblxudHlwZSBzY3JvbGxWaXNpYmlsaXR5QXBpVHlwZSA9IFJlYWN0LkNvbnRleHRUeXBlPHR5cGVvZiBWaXNpYmlsaXR5Q29udGV4dD47XG5cbmNvbnN0IGVsZW1QcmVmaXggPSBcInRlc3RcIjtcbmNvbnN0IGdldElkID0gKGluZGV4OiBudW1iZXIpID0+IGAke2VsZW1QcmVmaXh9JHtpbmRleH1gO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+XG4gIEFycmF5KDIwKVxuICAgIC5maWxsKDApXG4gICAgLm1hcCgoXywgaW5kKSA9PiAoeyBpZDogZ2V0SWQoaW5kKSB9KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKHsgcHJvamVjdHNEQXRhIH0pIHtcbiAgY29uc3Qge1xuICAgIHBhZ2VUaXRsZVxuICB9ID0gYXR0cmlidXRlcztcbiAgXG4gIGNvbnN0IHVwZGF0ZVdpbmRvd0hlaWdodCA9ICgpID0+IHtcbiAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gIFxuICAgIC8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgXG4gICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IFtpdGVtc10gPSBSZWFjdC51c2VTdGF0ZShnZXRJdGVtcyk7XG4gIGNvbnN0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gPSB1c2VQcmV2ZW50Qm9keVNjcm9sbCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlV2luZG93SGVpZ2h0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3VzdG9tSGVhZCBwYWdlVGl0bGU9e3BhZ2VUaXRsZX0gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktNCBtZDpweS04IGN1c3RvbS1oZWlnaHQgcmVsYXRpdmVcIj5cbiAgICAgICAgPEhlYWRlciBhY3RpdmU9XCJob21lXCIgLz5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicHktMTYgbGc6cHktOCAyeGw6cHQtMTZcIj5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG8gZmlsbC1wcmltYXJ5IG1iLThcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNNjMuNDg2NyA2MS44MDc0TDY0IDBDNDguNTE5IDAuMTUwNDk0IDE3LjY3MTIgMC4zNjI4MDYgMi4xOTE2IDAuNTExOTU4TDIuMDYzOTUgOC4yNDg4OUMxNS45ODg3IDguMTExODMgMzQuNDc0NSA3Ljk5ODk2IDUwLjczODggNy44NTExN0wwIDU4LjU4OTFMNS40MTA5OSA2NEw1Ni4xNDk3IDEzLjI2MjFMNTUuNzA5IDYxLjg5NDhMNjMuNDg5MSA2MS44MDc1TDYzLjQ4NjcgNjEuODA3NFpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxkaXYgb25Nb3VzZUVudGVyPXtkaXNhYmxlU2Nyb2xsfSBvbk1vdXNlTGVhdmU9e2VuYWJsZVNjcm9sbH0+XG4gICAgICAgICAgICA8U2Nyb2xsTWVudVxuICAgICAgICAgICAgICAvLyBMZWZ0QXJyb3c9e0xlZnRBcnJvd31cbiAgICAgICAgICAgICAgLy8gUmlnaHRBcnJvdz17UmlnaHRBcnJvd31cbiAgICAgICAgICAgICAgb25XaGVlbD17b25XaGVlbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBpZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMHZ3J319XG4gICAgICAgICAgICAgICAgICB0aXRsZT17aWR9XG4gICAgICAgICAgICAgICAgICBpdGVtSUQ9e2lkfSAvLyBOT1RFOiBpdGVtSWQgaXMgcmVxdWlyZWQgZm9yIHRyYWNrIGl0ZW1zXG4gICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgID50ZXN0PC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TY3JvbGxNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxGb290ZXIgaXNQcm9qZWN0PXtmYWxzZX0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gb25XaGVlbChhcGlPYmo6IHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlLCBldjogUmVhY3QuV2hlZWxFdmVudCk6IHZvaWQge1xuICBjb25zdCBpc1Rob3VjaHBhZCA9IE1hdGguYWJzKGV2LmRlbHRhWCkgIT09IDAgfHwgTWF0aC5hYnMoZXYuZGVsdGFZKSA8IDE1O1xuXG4gIGlmIChpc1Rob3VjaHBhZCkge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChldi5kZWx0YVkgPCAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbE5leHQoKTtcbiAgfSBlbHNlIGlmIChldi5kZWx0YVkgPiAwKSB7XG4gICAgYXBpT2JqLnNjcm9sbFByZXYoKTtcbiAgfVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJTY3JvbGxNZW51IiwiQ3VzdG9tSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsImF0dHJpYnV0ZXMiLCJ1c2VQcmV2ZW50Qm9keVNjcm9sbCIsImVsZW1QcmVmaXgiLCJnZXRJZCIsImluZGV4IiwiZ2V0SXRlbXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaW5kIiwiaWQiLCJIb21lcGFnZSIsInByb2plY3RzREF0YSIsInBhZ2VUaXRsZSIsInVwZGF0ZVdpbmRvd0hlaWdodCIsInZoIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbXMiLCJ1c2VTdGF0ZSIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJtYWluIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwiYXJ0aWNsZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImQiLCJkaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbldoZWVsIiwidGl0bGUiLCJpdGVtSUQiLCJpc1Byb2plY3QiLCJhcGlPYmoiLCJldiIsImlzVGhvdWNocGFkIiwiTWF0aCIsImFicyIsImRlbHRhWCIsImRlbHRhWSIsInN0b3BQcm9wYWdhdGlvbiIsInNjcm9sbE5leHQiLCJzY3JvbGxQcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test.tsx\n"));

/***/ })

});