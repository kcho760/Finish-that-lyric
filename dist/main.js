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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_playButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/playButton */ \"./src/scripts/playButton.js\");\n/* harmony import */ var _scripts_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/timer */ \"./src/scripts/timer.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const play = document.getElementById('play-button');\n  new _scripts_playButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"](play);\n  play.addEventListener('click', () => {\n    new _scripts_timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTZDO0FBQ1Y7QUFFbkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNuRCxJQUFJTCwyREFBVSxDQUFDSSxJQUFJLENBQUM7RUFDcEJBLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQUs7SUFDaEMsSUFBSUYsc0RBQUssQ0FBQyxFQUFFLENBQUM7RUFDYixDQUFDLENBQUM7QUFDVixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0cy10aGF0LWx5cmljLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXlidXR0b24gZnJvbSBcIi4vc2NyaXB0cy9wbGF5QnV0dG9uXCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9zY3JpcHRzL3RpbWVyXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktYnV0dG9uJyk7XG4gICAgbmV3IFBsYXlidXR0b24ocGxheSlcbiAgICBwbGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIG5ldyBUaW1lcigxMCk7XG4gICAgICAgIH0pXG59KVxuXG5cbiJdLCJuYW1lcyI6WyJQbGF5YnV0dG9uIiwiVGltZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/playButton.js":
/*!***********************************!*\
  !*** ./src/scripts/playButton.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Playbutton {\n  constructor(htmlElement) {\n    this.htmlElement = htmlElement;\n    this.htmlElement.addEventListener('click', () => {\n      const parent = this.htmlElement.parentNode;\n      parent.classList.add('move-left');\n      setTimeout(() => {\n        parent.classList.remove('move-left');\n        parent.style.display = 'none';\n      }, 0);\n    });\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playbutton);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5QnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxVQUFVLENBQUM7RUFDYkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtNQUM3QyxNQUFNQyxNQUFNLEdBQUcsSUFBSSxDQUFDRixXQUFXLENBQUNHLFVBQVU7TUFDMUNELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQ2pDQyxVQUFVLENBQUMsTUFBTTtRQUNiSixNQUFNLENBQUNFLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUNwQ0wsTUFBTSxDQUFDTSxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQ2pDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUM7RUFDTjtBQUNKO0FBRUEsK0RBQWVYLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0cy10aGF0LWx5cmljLy4vc3JjL3NjcmlwdHMvcGxheUJ1dHRvbi5qcz85MWUyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXlidXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKGh0bWxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudFxuICAgICAgICB0aGlzLmh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5odG1sRWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnbW92ZS1sZWZ0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW92ZS1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9LCAwKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWJ1dHRvbjsiXSwibmFtZXMiOlsiUGxheWJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiaHRtbEVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/playButton.js\n");

/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Timer {\n  constructor(time) {\n    this.time = time;\n    setTimeout(() => this.printTime(), 0);\n    this.interval = setInterval(this._tick.bind(this), 1000);\n  }\n  printTime() {\n    const seconds = this.time;\n    const timer = document.getElementById(\"timer\");\n    timer.innerHTML = seconds;\n  }\n  _tick() {\n    this.time--;\n    this.printTime();\n    if (this.time === 0) {\n      clearInterval(this.interval);\n      const timer = document.getElementById(\"timer\");\n      timer.innerHTML = \"Time up!\";\n    }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1lci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVdBLENBQUNDLElBQUksRUFBRTtJQUNkLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCQyxVQUFVLENBQUMsTUFBSyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ25DLElBQUksQ0FBQ0MsUUFBUSxHQUFHQyxXQUFXLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDNUQ7RUFFQUosU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTUssT0FBTyxHQUFHLElBQUksQ0FBQ1AsSUFBSTtJQUN6QixNQUFNUSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUM5Q0YsS0FBSyxDQUFDRyxTQUFTLEdBQUdKLE9BQU87RUFDN0I7RUFFQUYsS0FBS0EsQ0FBQSxFQUFHO0lBQ0osSUFBSSxDQUFDTCxJQUFJLEVBQUc7SUFDWixJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUssQ0FBQyxFQUFFO01BQ2pCWSxhQUFhLENBQUMsSUFBSSxDQUFDVCxRQUFRLENBQUM7TUFDNUIsTUFBTUssS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7TUFDOUNGLEtBQUssQ0FBQ0csU0FBUyxHQUFHLFVBQVU7SUFDaEM7RUFDSjtBQUNKO0FBRUEsK0RBQWViLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGF0cy10aGF0LWx5cmljLy4vc3JjL3NjcmlwdHMvdGltZXIuanM/MTVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUaW1lciB7XG4gICAgY29uc3RydWN0b3IodGltZSkge1xuICAgICAgICB0aGlzLnRpbWUgPSB0aW1lXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT50aGlzLnByaW50VGltZSgpLDApO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5fdGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB9ICAgIFxuXG4gICAgcHJpbnRUaW1lKCkge1xuICAgICAgICBjb25zdCBzZWNvbmRzID0gdGhpcy50aW1lO1xuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZXJcIik7XG4gICAgICAgIHRpbWVyLmlubmVySFRNTCA9IHNlY29uZHM7XG4gICAgfVxuXG4gICAgX3RpY2soKSB7XG4gICAgICAgIHRoaXMudGltZSAtLTtcbiAgICAgICAgdGhpcy5wcmludFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lclwiKTtcbiAgICAgICAgICAgIHRpbWVyLmlubmVySFRNTCA9IFwiVGltZSB1cCFcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7Il0sIm5hbWVzIjpbIlRpbWVyIiwiY29uc3RydWN0b3IiLCJ0aW1lIiwic2V0VGltZW91dCIsInByaW50VGltZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfdGljayIsImJpbmQiLCJzZWNvbmRzIiwidGltZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY2xlYXJJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/timer.js\n");

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