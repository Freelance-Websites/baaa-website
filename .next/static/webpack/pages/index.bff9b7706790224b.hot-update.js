"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Homepage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-horizontal-scrolling-menu */ \"./node_modules/react-horizontal-scrolling-menu/dist/index.umd.js\");\n/* harmony import */ var react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/usePreventBodyScroll */ \"./hooks/usePreventBodyScroll.ts\");\n/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Head */ \"./components/Head.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../content/home.md */ \"./content/home.md\");\n/* harmony import */ var _content_home_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_content_home_md__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Homepage(param) {\n    let { projectsData  } = param;\n    _s();\n    const { pageTitle  } = _content_home_md__WEBPACK_IMPORTED_MODULE_9__.attributes;\n    const { disableScroll , enableScroll  } = (0,_hooks_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const updateWindowHeight = ()=>{\n        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit\n        let vh = window.innerHeight * 0.01;\n        // Then we set the value in the --vh custom property to the root of the document\n        document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n        // We listen to the resize event\n        window.addEventListener(\"resize\", ()=>{\n            // We execute the same script as before\n            let vh = window.innerHeight * 0.01;\n            document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        updateWindowHeight();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Head__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                pageTitle: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container mx-auto px-4 py-4 md:py-8 custom-height relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        active: \"home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                        className: \"py-16 lg:py-8 2xl:pt-16\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                width: \"64\",\n                                height: \"64\",\n                                viewBox: \"0 0 64 64\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"ml-auto fill-primary mb-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    d: \"M63.4867 61.8074L64 0C48.519 0.150494 17.6712 0.362806 2.1916 0.511958L2.06395 8.24889C15.9887 8.11183 34.4745 7.99896 50.7388 7.85117L0 58.5891L5.41099 64L56.1497 13.2621L55.709 61.8948L63.4891 61.8075L63.4867 61.8074Z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onMouseEnter: disableScroll,\n                                onMouseLeave: enableScroll,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_horizontal_scrolling_menu__WEBPACK_IMPORTED_MODULE_4__.ScrollMenu, {\n                                    onWheel: onWheel,\n                                    children: projectsData.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"gallery-item w-64 md:w-96 mr-8 md:mr-10\",\n                                            itemID: project.id,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/projects/\".concat(project.id),\n                                                className: \"group\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                        src: project.thumbnail,\n                                                        alt: project.shortTitle,\n                                                        width: 375,\n                                                        height: 470,\n                                                        className: \"group-hover:opacity-90 transition ease-in-out duration-100\",\n                                                        priority: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"text-xl md:text-2xl mt-4 md:mt-6 text-gray-900 group-hover:opacity-90 transition ease-in-out duration-100\",\n                                                        children: project.shortTitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, project.id, false, {\n                                            fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        isProject: false\n                    }, void 0, false, {\n                        fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juanmartingarcia/Desktop/Work/BAAA/Projects/01_Website/Code/baaa-website/pages/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Homepage, \"6BPBqpn3MoiJSs9rHa0l205uhfI=\", false, function() {\n    return [\n        _hooks_usePreventBodyScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Homepage;\nfunction onWheel(apiObj, ev) {\n    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;\n    if (isThouchpad) {\n        ev.stopPropagation();\n        return;\n    }\n    if (ev.deltaY < 0) {\n        apiObj.scrollNext();\n    } else if (ev.deltaY > 0) {\n        apiObj.scrollPrev();\n    }\n}\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyBTY3JvbGxNZW51LCBWaXNpYmlsaXR5Q29udGV4dCB9IGZyb20gXCJyZWFjdC1ob3Jpem9udGFsLXNjcm9sbGluZy1tZW51XCI7XG5cbmltcG9ydCB1c2VQcmV2ZW50Qm9keVNjcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlUHJldmVudEJvZHlTY3JvbGxcIjtcblxuaW1wb3J0IEN1c3RvbUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCB7IGdldEFsbENvbGxlY3Rpb25zIH0gZnJvbSBcIi4uL2xpYi9jb2xsZWN0aW9uc1wiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVzIH0gZnJvbSBcIi4uL2NvbnRlbnQvaG9tZS5tZFwiO1xuXG50eXBlIHNjcm9sbFZpc2liaWxpdHlBcGlUeXBlID0gUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIFZpc2liaWxpdHlDb250ZXh0PjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoeyBwcm9qZWN0c0RhdGEgfSkge1xuICBjb25zdCB7XG4gICAgcGFnZVRpdGxlXG4gIH0gPSBhdHRyaWJ1dGVzO1xuXG4gIGNvbnN0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gPSB1c2VQcmV2ZW50Qm9keVNjcm9sbCgpO1xuICBcbiAgY29uc3QgdXBkYXRlV2luZG93SGVpZ2h0ID0gKCkgPT4ge1xuICAgIC8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG4gICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgXG4gICAgLy8gVGhlbiB3ZSBzZXQgdGhlIHZhbHVlIGluIHRoZSAtLXZoIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgcm9vdCBvZiB0aGUgZG9jdW1lbnRcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICBcbiAgICAvLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAvLyBXZSBleGVjdXRlIHRoZSBzYW1lIHNjcmlwdCBhcyBiZWZvcmVcbiAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgIH0pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGVXaW5kb3dIZWlnaHQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDdXN0b21IZWFkIHBhZ2VUaXRsZT17cGFnZVRpdGxlfSAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS00IG1kOnB5LTggY3VzdG9tLWhlaWdodCByZWxhdGl2ZVwiPlxuICAgICAgICA8SGVhZGVyIGFjdGl2ZT1cImhvbWVcIiAvPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJweS0xNiBsZzpweS04IDJ4bDpwdC0xNlwiPlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgdmlld0JveD1cIjAgMCA2NCA2NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0byBmaWxsLXByaW1hcnkgbWItOFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk02My40ODY3IDYxLjgwNzRMNjQgMEM0OC41MTkgMC4xNTA0OTQgMTcuNjcxMiAwLjM2MjgwNiAyLjE5MTYgMC41MTE5NThMMi4wNjM5NSA4LjI0ODg5QzE1Ljk4ODcgOC4xMTE4MyAzNC40NzQ1IDcuOTk4OTYgNTAuNzM4OCA3Ljg1MTE3TDAgNTguNTg5MUw1LjQxMDk5IDY0TDU2LjE0OTcgMTMuMjYyMUw1NS43MDkgNjEuODk0OEw2My40ODkxIDYxLjgwNzVMNjMuNDg2NyA2MS44MDc0WlwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBvbk1vdXNlRW50ZXI9e2Rpc2FibGVTY3JvbGx9IG9uTW91c2VMZWF2ZT17ZW5hYmxlU2Nyb2xsfT5cbiAgICAgICAgICAgIDxTY3JvbGxNZW51XG4gICAgICAgICAgICAgIG9uV2hlZWw9e29uV2hlZWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c0RhdGEubWFwKHByb2plY3QgPT4gXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FsbGVyeS1pdGVtIHctNjQgbWQ6dy05NiBtci04IG1kOm1yLTEwXCJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgIGl0ZW1JRD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5zaG9ydFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNzV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NzB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAtaG92ZXI6b3BhY2l0eS05MCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBtZDp0ZXh0LTJ4bCBtdC00IG1kOm10LTYgdGV4dC1ncmF5LTkwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnNob3J0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1Njcm9sbE1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPEZvb3RlciBpc1Byb2plY3Q9e2ZhbHNlfSAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5mdW5jdGlvbiBvbldoZWVsKGFwaU9iajogc2Nyb2xsVmlzaWJpbGl0eUFwaVR5cGUsIGV2OiBSZWFjdC5XaGVlbEV2ZW50KTogdm9pZCB7XG4gIGNvbnN0IGlzVGhvdWNocGFkID0gTWF0aC5hYnMoZXYuZGVsdGFYKSAhPT0gMCB8fCBNYXRoLmFicyhldi5kZWx0YVkpIDwgMTU7XG5cbiAgaWYgKGlzVGhvdWNocGFkKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGV2LmRlbHRhWSA8IDApIHtcbiAgICBhcGlPYmouc2Nyb2xsTmV4dCgpO1xuICB9IGVsc2UgaWYgKGV2LmRlbHRhWSA+IDApIHtcbiAgICBhcGlPYmouc2Nyb2xsUHJldigpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcHJvamVjdHNEYXRhID0gZ2V0QWxsQ29sbGVjdGlvbnMoXCJwcm9qZWN0c1wiKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvamVjdHNEYXRhLFxuICAgIH1cbiAgfTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTGluayIsIkltYWdlIiwiU2Nyb2xsTWVudSIsInVzZVByZXZlbnRCb2R5U2Nyb2xsIiwiQ3VzdG9tSGVhZCIsIkhlYWRlciIsIkZvb3RlciIsImF0dHJpYnV0ZXMiLCJIb21lcGFnZSIsInByb2plY3RzRGF0YSIsInBhZ2VUaXRsZSIsImRpc2FibGVTY3JvbGwiLCJlbmFibGVTY3JvbGwiLCJ1cGRhdGVXaW5kb3dIZWlnaHQiLCJ2aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJjbGFzc05hbWUiLCJhY3RpdmUiLCJhcnRpY2xlIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwieG1sbnMiLCJwYXRoIiwiZCIsImRpdiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uV2hlZWwiLCJtYXAiLCJwcm9qZWN0IiwiaXRlbUlEIiwiaWQiLCJocmVmIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0Iiwic2hvcnRUaXRsZSIsInByaW9yaXR5IiwiaDIiLCJpc1Byb2plY3QiLCJhcGlPYmoiLCJldiIsImlzVGhvdWNocGFkIiwiTWF0aCIsImFicyIsImRlbHRhWCIsImRlbHRhWSIsInN0b3BQcm9wYWdhdGlvbiIsInNjcm9sbE5leHQiLCJzY3JvbGxQcmV2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});