/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playButton */ \"./src/scripts/playButton.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const button = document.getElementById('play-button');\n  new _scripts_playButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](button);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBNkM7QUFFN0NDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNyRCxJQUFJSiwyREFBVSxDQUFDRyxNQUFNLENBQUM7QUFDMUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdHMtdGhhdC1seXJpYy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5YnV0dG9uIGZyb20gXCIuL3NjcmlwdHMvcGxheUJ1dHRvblwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk7XG4gICAgbmV3IFBsYXlidXR0b24oYnV0dG9uKVxufSlcblxuIl0sIm5hbWVzIjpbIlBsYXlidXR0b24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXR0b24iLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playButton.js":
/*!***********************************!*\
  !*** ./src/scripts/playButton.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Playbutton {\n  constructor(htmlElement) {\n    this.htmlElement = htmlElement;\n    this.htmlElement.addEventListener('click', () => {\n      const parent = this.htmlElement.parentNode;\n      parent.classList.add('move-left');\n      setTimeout(() => {\n        parent.classList.remove('move-left');\n        parent.style.display = 'none';\n      }, 2000);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playbutton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUM3QyxNQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDRixXQUFXLENBQUNHLFVBQVU7TUFDMUNELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQ2pDQyxVQUFVLENBQUMsTUFBTTtRQUNiSixNQUFNLENBQUNFLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNwQ0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQ2pDLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDWixDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsK0RBQWVYLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0cy10aGF0LWx5cmljLy4vc3JjL3NjcmlwdHMvcGxheUJ1dHRvbi5qcz85MWUyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXlidXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudFxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5odG1sRWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnbW92ZS1sZWZ0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9LCAyMDAwKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWJ1dHRvbjsiXSwibmFtZXMiOlsiUGxheWJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiaHRtbEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/playButton.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0cy10aGF0LWx5cmljLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;