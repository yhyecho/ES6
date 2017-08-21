/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
  // es5中正则的使用
  // 第一个参数必须是字符串
  var regex = new RegExp('xyz', 'i');
  var regex2 = new RegExp(/xyz/i);
  console.log(regex.test('xyz123'), regex2.test('xyz123'));
  // es6
  var regex3 = new RegExp(/xyz/ig, 'i');
  // flags获取正则对象的修饰符属性
  console.log(regex3.flags);
}

{
  // y修饰符
  var s = 'bbb_bb_b';
  // 全局匹配 忽略_
  var a1 = /b+/g;
  //_不匹配, 匹配的下一个位置开始
  var a2 = new RegExp('b+', 'y');
  console.log('one', a1.exec(s), a2.exec(s));
  // a.exec(s) => null
  console.log('two', a1.exec(s), a2.exec(s));
  // 是否开启y修饰符
  console.log(a1.sticky, a2.sticky);
}

{
  // u 修饰符
  // 当成两个字符
  console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
  // 当成一个字符
  console.log('u-2', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A'));

  console.log(/\u{61}/.test('a')); // false
  console.log(/a/.test('a')); // true

  console.log('\uD842\uDFB7');

  var _s = '𠮷';
  console.log('u', /^.$/.test(_s)); // false
  // 字符串中大于两个字节长度，需要加u修饰符
  // .并不能够匹配所有字符
  console.log('u-2', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s)); // true

  console.log('test', /𠮷{2}/.test('𠮷𠮷'));
  console.log('test-2', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));

  // s修饰符
}

/***/ })
/******/ ]);