(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ \"./src/App.scss\");\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppProvider */ \"./src/AppProvider.js\");\n\n\n\n\n\nvar App = function App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppProvider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/App.scss?");

/***/ }),

/***/ "./src/AppProvider.js":
/*!****************************!*\
  !*** ./src/AppProvider.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _screens_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/Login */ \"./src/screens/Login/index.js\");\n/* harmony import */ var _screens_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/Register */ \"./src/screens/Register/index.js\");\n\n\n\n\n\nvar AppProvider = function AppProvider(props) {\n  var withUser = function withUser(Component, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);\n  };\n\n  var withoutUser = function withoutUser(Component, props) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Routes\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/login\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/register\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Register__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppProvider);\n\n//# sourceURL=webpack:///./src/AppProvider.js?");

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: peckPortalClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _peckPortalAgent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peckPortalAgent */ \"./src/api/peckPortalAgent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"peckPortalClient\", function() { return _peckPortalAgent__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/api/index.js?");

/***/ }),

/***/ "./src/api/peckPortalAgent.js":
/*!************************************!*\
  !*** ./src/api/peckPortalAgent.js ***!
  \************************************/
/*! exports provided: peckPortalClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"peckPortalClient\", function() { return peckPortalClient; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ \"config\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar peckPortalClient = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: config__WEBPACK_IMPORTED_MODULE_1___default.a.peckPortalApi,\n  timeout: 30000,\n  headers: {\n    'Content-Type': 'application/vnd.api+json'\n  }\n});\n\npeckPortalClient.login = function (_ref) {\n  var username = _ref.username,\n      password = _ref.password,\n      onSuccess = _ref.onSuccess,\n      onError = _ref.onError;\n  var formData = {\n    username: username,\n    password: password\n  };\n  peckPortalClient.post(\"\".concat(config__WEBPACK_IMPORTED_MODULE_1___default.a.peckPortalApi, \"/api/v1/login\"), formData).then(function (response) {\n    if (onSuccess) {\n      onSuccess(response);\n    }\n  })[\"catch\"](function (error) {\n    if (onError) {\n      onError(error);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (peckPortalClient);\n\n//# sourceURL=webpack:///./src/api/peckPortalAgent.js?");

/***/ }),

/***/ "./src/assets/constant/color.js":
/*!**************************************!*\
  !*** ./src/assets/constant/color.js ***!
  \**************************************/
/*! exports provided: blue, grey, green */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"blue\", function() { return blue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"grey\", function() { return grey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"green\", function() { return green; });\nvar blue = {\n  100: '#DAECFF',\n  200: '#80BFFF',\n  400: '#3399FF',\n  600: '#0072E5',\n  700: '#0059B2'\n};\nvar grey = {\n  50: '#365e6c',\n  100: '#E7EBF0',\n  200: '#E0E3E7',\n  300: '#CDD2D7',\n  400: '#B2BAC2',\n  500: '#A0AAB4',\n  600: '#6F7E8C',\n  700: '#3E5060',\n  800: '#2D3843',\n  900: '#1A2027'\n};\nvar green = {\n  100: '#20DF7F',\n  200: '#1fb368'\n};\n\n//# sourceURL=webpack:///./src/assets/constant/color.js?");

/***/ }),

/***/ "./src/assets/constant/constant.js":
/*!*****************************************!*\
  !*** ./src/assets/constant/constant.js ***!
  \*****************************************/
/*! exports provided: CssConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CssConstant\", function() { return CssConstant; });\nvar CssConstant = {\n  root: {\n    fontFamily: \"'Lexend Deca', sans-serif\"\n  },\n  errorText: {\n    color: 'red',\n    fontSize: 13\n  }\n};\n\n//# sourceURL=webpack:///./src/assets/constant/constant.js?");

/***/ }),

/***/ "./src/assets/constant/index.js":
/*!**************************************!*\
  !*** ./src/assets/constant/index.js ***!
  \**************************************/
/*! exports provided: blue, grey, green, CssConstant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./src/assets/constant/color.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"blue\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"blue\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"grey\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"grey\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"green\", function() { return _color__WEBPACK_IMPORTED_MODULE_0__[\"green\"]; });\n\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/assets/constant/constant.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CssConstant\", function() { return _constant__WEBPACK_IMPORTED_MODULE_1__[\"CssConstant\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/assets/constant/index.js?");

/***/ }),

/***/ "./src/assets/images/wave.png":
/*!************************************!*\
  !*** ./src/assets/images/wave.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2553535d4082a4c814818e591e71ab96.png\";\n\n//# sourceURL=webpack:///./src/assets/images/wave.png?");

/***/ }),

/***/ "./src/components/Button/CustomDefaultButton.js":
/*!******************************************************!*\
  !*** ./src/components/Button/CustomDefaultButton.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Stack */ \"./node_modules/@mui/material/Stack/index.js\");\n/* harmony import */ var _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/base/ButtonUnstyled */ \"./node_modules/@mui/base/ButtonUnstyled/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/constant */ \"./src/assets/constant/index.js\");\nvar _templateObject;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar CustomButton = Object(_mui_system__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])('button')(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  font-family: 'Lexend Deca', sans-serif;\\n  font-weight: bold;\\n  font-size: 0.875rem;\\n  background-color: \", \";\\n  padding: 12px 24px;\\n  border-radius: 8px;\\n  color: white;\\n  transition: all 150ms ease;\\n  cursor: pointer;\\n  border: none;\\n\\n  &:hover {\\n    background-color: \", \";\\n  }\\n\\n  &.\", \" {\\n    background-color: \", \";\\n  }\\n\\n  &.\", \" {\\n    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);\\n    outline: none;\\n  }\\n\\n  &.\", \" {\\n    opacity: 0.5;\\n    cursor: not-allowed;\\n  }\\n\"])), _assets_constant__WEBPACK_IMPORTED_MODULE_4__[\"green\"][100], _assets_constant__WEBPACK_IMPORTED_MODULE_4__[\"green\"][200], _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__[\"buttonUnstyledClasses\"].active, _assets_constant__WEBPACK_IMPORTED_MODULE_4__[\"green\"][200], _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__[\"buttonUnstyledClasses\"].focusVisible, _mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__[\"buttonUnstyledClasses\"].disabled);\n\nvar CustomDefaultButton = function CustomDefaultButton(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_base_ButtonUnstyled__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({}, props, {\n    component: CustomButton\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomDefaultButton);\n\n//# sourceURL=webpack:///./src/components/Button/CustomDefaultButton.js?");

/***/ }),

/***/ "./src/components/Checkbox/GreyCheckbox.js":
/*!*************************************************!*\
  !*** ./src/components/Checkbox/GreyCheckbox.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/constant */ \"./src/assets/constant/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nvar GreyCheckbox = function GreyCheckbox(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"Checkbox\"], _extends({\n    sx: {\n      paddingLeft: 'unset'\n    }\n  }, props));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreyCheckbox);\n\n//# sourceURL=webpack:///./src/components/Checkbox/GreyCheckbox.js?");

/***/ }),

/***/ "./src/components/Footer/WaveFooter.js":
/*!*********************************************!*\
  !*** ./src/components/Footer/WaveFooter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/components/Footer/style.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n\n\nvar WaveFooter = function WaveFooter(props) {\n  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"useStyles\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: classes.waveWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(classes.wave, classes.wave1)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(classes.wave, classes.wave2)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(classes.wave, classes.wave3)\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WaveFooter);\n\n//# sourceURL=webpack:///./src/components/Footer/WaveFooter.js?");

/***/ }),

/***/ "./src/components/Footer/style.js":
/*!****************************************!*\
  !*** ./src/components/Footer/style.js ***!
  \****************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStyles\", function() { return useStyles; });\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\n/* harmony import */ var _assets_images_wave_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/wave.png */ \"./src/assets/images/wave.png\");\n/* harmony import */ var _assets_images_wave_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_wave_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar useStyles = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_0__[\"makeStyles\"])({\n  waveWrapper: {\n    position: 'fixed',\n    height: 100,\n    bottom: 0,\n    left: 0,\n    width: '100%'\n  },\n  wave: {\n    width: '100%',\n    height: 100,\n    backgroundImage: \"url(\".concat(_assets_images_wave_png__WEBPACK_IMPORTED_MODULE_1___default.a, \")\"),\n    backgroundSize: '1000px 100px',\n    position: 'absolute',\n    bottom: 0,\n    left: 0\n  },\n  wave1: {\n    animation: '$animate1 30s linear infinite',\n    zIndex: 1000,\n    opacity: 0.1,\n    animationDelay: '0s',\n    bottom: 0\n  },\n  \"@keyframes animate1\": {\n    \"0%\": {\n      backgroundPositionX: 0\n    },\n    \"100%\": {\n      backgroundPositionX: 1000\n    }\n  },\n  wave2: {\n    animation: '$animate2 15s linear infinite',\n    zIndex: 999,\n    opacity: 0.15,\n    animationDelay: '-5s',\n    bottom: 0\n  },\n  \"@keyframes animate2\": {\n    \"0%\": {\n      backgroundPositionX: 0\n    },\n    \"100%\": {\n      backgroundPositionX: 1000\n    }\n  },\n  wave3: {\n    animation: '$animate3 30s linear infinite',\n    zIndex: 998,\n    opacity: 0.2,\n    animationDelay: '-2s',\n    bottom: 0\n  },\n  \"@keyframes animate3\": {\n    \"0%\": {\n      backgroundPositionX: 0\n    },\n    \"100%\": {\n      backgroundPositionX: 1000\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Footer/style.js?");

/***/ }),

/***/ "./src/components/Input/GreyInput.js":
/*!*******************************************!*\
  !*** ./src/components/Input/GreyInput.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/constant */ \"./src/assets/constant/index.js\");\n/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/base */ \"./node_modules/@mui/base/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar useStyles = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(_assets_constant__WEBPACK_IMPORTED_MODULE_1__[\"CssConstant\"]);\nvar StyledInputElement = Object(_mui_system__WEBPACK_IMPORTED_MODULE_3__[\"styled\"])('input')(function (_ref) {\n  var theme = _ref.theme;\n  return {\n    fontSize: '0.875rem',\n    fontFamily: \"'Lexend Deca', sans-serif\",\n    fontWeight: 400,\n    lineHeight: 2,\n    color: 'white',\n    background: _assets_constant__WEBPACK_IMPORTED_MODULE_1__[\"grey\"][50],\n    border: \"1px \".concat(_assets_constant__WEBPACK_IMPORTED_MODULE_1__[\"grey\"][300]),\n    borderRadius: 8,\n    padding: \"12px 12px\",\n    '&:hover': {\n      background: _assets_constant__WEBPACK_IMPORTED_MODULE_1__[\"grey\"][50],\n      borderColor: _assets_constant__WEBPACK_IMPORTED_MODULE_1__[\"grey\"][400]\n    },\n    '&:focus': {\n      outline: 'none'\n    },\n    '&::placeholder': {\n      textOverflow: 'ellipsis !important',\n      color: 'white'\n    }\n  };\n});\nvar CustomInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function CustomInput(props, ref) {\n  var _useInput = Object(_mui_base__WEBPACK_IMPORTED_MODULE_2__[\"useInput\"])(props, ref),\n      getRootProps = _useInput.getRootProps,\n      getInputProps = _useInput.getInputProps;\n\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", getRootProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputElement, _extends({}, props, getInputProps())), props.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.errorText\n  }, props.erroricon, props.error));\n});\n\nvar GreyInput = function GreyInput(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomInput, props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GreyInput);\n\n//# sourceURL=webpack:///./src/components/Input/GreyInput.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), document.getElementById(\"index\"));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/screens/Login/Login.js":
/*!************************************!*\
  !*** ./src/screens/Login/Login.js ***!
  \************************************/
/*! exports provided: LoginScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginScreen\", function() { return LoginScreen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/screens/Login/style.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input/GreyInput */ \"./src/components/Input/GreyInput.js\");\n/* harmony import */ var _components_Checkbox_GreyCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Checkbox/GreyCheckbox */ \"./src/components/Checkbox/GreyCheckbox.js\");\n/* harmony import */ var _components_Button_CustomDefaultButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button/CustomDefaultButton */ \"./src/components/Button/CustomDefaultButton.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Footer_WaveFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Footer/WaveFooter */ \"./src/components/Footer/WaveFooter.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ \"./src/api/index.js\");\n/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! validate.js */ \"./node_modules/validate.js/validate.js\");\n/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_ReportGmailerrorred__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/ReportGmailerrorred */ \"./node_modules/@mui/icons-material/ReportGmailerrorred.js\");\n/* harmony import */ var _mui_icons_material_ReportGmailerrorred__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ReportGmailerrorred__WEBPACK_IMPORTED_MODULE_10__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar schema = {\n  username: {\n    presence: true,\n    email: true\n  },\n  password: {\n    presence: true,\n    length: {\n      minimum: 6,\n      message: \"Password must be at least 6 characters\"\n    }\n  }\n};\nvar LoginScreen = function LoginScreen(props) {\n  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"useStyles\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      form = _useState2[0],\n      setForm = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      errors = _useState4[0],\n      setErrors = _useState4[1];\n\n  var handleChange = function handleChange(event) {\n    var formData = form || {};\n    formData[event.target.name] = event.target.value;\n    setForm(formData);\n  };\n\n  var signIn = function signIn() {\n    if (form) {\n      /// validate form\n      var error = validate_js__WEBPACK_IMPORTED_MODULE_9___default()(form, schema);\n      setErrors(error);\n\n      if (!error) {\n        _api__WEBPACK_IMPORTED_MODULE_8__[\"peckPortalClient\"].login({\n          username: form.username,\n          password: form.password,\n          onSuccess: function onSuccess(response) {},\n          onError: function onError(response) {}\n        });\n      }\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.formWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.formWrapperContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.titleWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.title\n  }, \"Sign In\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.description\n  }, \"Sign in and Let's start!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.textfieldWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.inputWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-label\": \"Username\",\n    placeholder: \"Enter your email\",\n    className: classes.input,\n    name: 'username',\n    onChange: handleChange,\n    autoFocus: true,\n    error: errors['username'],\n    erroricon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_ReportGmailerrorred__WEBPACK_IMPORTED_MODULE_10___default.a, null)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.inputWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-label\": \"Password\",\n    placeholder: \"Password\",\n    type: \"password\",\n    name: \"password\",\n    className: classes.input,\n    onChange: handleChange,\n    error: errors['password'],\n    erroricon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_ReportGmailerrorred__WEBPACK_IMPORTED_MODULE_10___default.a, null)\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.extraWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.rememberMe\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Checkbox_GreyCheckbox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: classes.rememberCheckbox\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: classes.rememberTitle\n  }, \"Remember me\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.forgotPassword\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: classes.forgotTitle\n  }, \"Forgot password?\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.submitButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_CustomDefaultButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      width: '100%'\n    },\n    onClick: signIn\n  }, \"Sign In\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.registerTitle,\n    onClick: function onClick() {\n      window.location.href = '/register';\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: classes.registerContent\n  }, \"Don't have an account yet? Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.waveFooter\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_WaveFooter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n};\n\n//# sourceURL=webpack:///./src/screens/Login/Login.js?");

/***/ }),

/***/ "./src/screens/Login/index.js":
/*!************************************!*\
  !*** ./src/screens/Login/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ \"./src/screens/Login/Login.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Login__WEBPACK_IMPORTED_MODULE_0__[\"LoginScreen\"]; });\n\n\n\n//# sourceURL=webpack:///./src/screens/Login/index.js?");

/***/ }),

/***/ "./src/screens/Login/style.js":
/*!************************************!*\
  !*** ./src/screens/Login/style.js ***!
  \************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStyles\", function() { return useStyles; });\n/* harmony import */ var _assets_constant_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/constant/constant */ \"./src/assets/constant/constant.js\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar useStyles = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_objectSpread(_objectSpread({}, _assets_constant_constant__WEBPACK_IMPORTED_MODULE_0__[\"CssConstant\"]), {}, {\n  root: {\n    width: '100vw',\n    height: '100vh',\n    backgroundColor: '#224957',\n    position: 'relative',\n    overflow: 'auto'\n  },\n  formWrapper: {\n    width: 430,\n    height: 'auto',\n    margin: 'auto'\n  },\n  formWrapperContent: {\n    paddingTop: '35%'\n  },\n  titleWrapper: {\n    width: '100%',\n    height: 'auto',\n    paddingBottom: 30\n  },\n  title: {\n    color: 'white',\n    fontSize: 64,\n    fontWeight: 400,\n    textAlign: 'center'\n  },\n  description: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 400,\n    textAlign: 'center',\n    paddingBottom: 30\n  },\n  textfieldWrapper: {\n    width: '100%'\n  },\n  input: {\n    width: '100%'\n  },\n  inputWrapper: {\n    marginBottom: 30\n  },\n  extraWrapper: {\n    display: 'flex',\n    flexDirection: 'row',\n    marginBottom: 30\n  },\n  rememberMe: {\n    width: '50%'\n  },\n  rememberTitle: {\n    color: 'white'\n  },\n  rememberCheckbox: {\n    outline: 'none',\n    border: 'none'\n  },\n  forgotTitle: {\n    color: '#20DF7F',\n    \"float\": 'right',\n    paddingTop: 8,\n    textDecoration: 'underline',\n    cursor: 'pointer'\n  },\n  forgotPassword: {\n    width: '50%'\n  },\n  submitButton: {\n    width: '100%'\n  },\n  waveFooter: {\n    height: 100,\n    position: 'fixed',\n    bottom: 0,\n    left: 0,\n    width: '100%'\n  },\n  registerTitle: {\n    position: 'absolute',\n    top: 15,\n    right: 30\n  },\n  registerContent: {\n    color: '#20DF7F',\n    fontSize: 13,\n    textDecoration: 'underline',\n    textDecorationColor: '#20DF7F',\n    cursor: 'pointer',\n    '&:hover': {\n      color: '#00ff7f'\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/screens/Login/style.js?");

/***/ }),

/***/ "./src/screens/Register/Register.js":
/*!******************************************!*\
  !*** ./src/screens/Register/Register.js ***!
  \******************************************/
/*! exports provided: RegisterScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RegisterScreen\", function() { return RegisterScreen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/screens/Register/style.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input/GreyInput */ \"./src/components/Input/GreyInput.js\");\n/* harmony import */ var _components_Checkbox_GreyCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Checkbox/GreyCheckbox */ \"./src/components/Checkbox/GreyCheckbox.js\");\n/* harmony import */ var _components_Button_CustomDefaultButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button/CustomDefaultButton */ \"./src/components/Button/CustomDefaultButton.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Footer_WaveFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Footer/WaveFooter */ \"./src/components/Footer/WaveFooter.js\");\n\n\n\n\n\n\n\n\nvar RegisterScreen = function RegisterScreen(props) {\n  var classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"useStyles\"])();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.formWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.formWrapperContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.titleWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.title\n  }, \"Sign Up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.description\n  }, \"Sign up and Let's start!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.textfieldWrapper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-label\": \"Username\",\n    placeholder: \"Username or Email\",\n    className: classes.input // fullwidth={true}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-label\": \"Password\",\n    placeholder: \"Password\",\n    type: \"password\",\n    className: classes.input // fullwidth={true}\n\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Input_GreyInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"aria-label\": \"Password Confirmation\",\n    placeholder: \"Password Confirmation\",\n    type: \"password\",\n    className: classes.input // fullwidth={true}\n\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.submitButton\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_CustomDefaultButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    style: {\n      width: '100%'\n    }\n  }, \"Sign Up\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.registerTitle,\n    onClick: function onClick() {\n      window.location.href = '/login';\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: classes.registerContent\n  }, \"Have an account? Sign In\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.waveFooter\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer_WaveFooter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n};\n\n//# sourceURL=webpack:///./src/screens/Register/Register.js?");

/***/ }),

/***/ "./src/screens/Register/index.js":
/*!***************************************!*\
  !*** ./src/screens/Register/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register */ \"./src/screens/Register/Register.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Register__WEBPACK_IMPORTED_MODULE_0__[\"RegisterScreen\"]; });\n\n\n\n//# sourceURL=webpack:///./src/screens/Register/index.js?");

/***/ }),

/***/ "./src/screens/Register/style.js":
/*!***************************************!*\
  !*** ./src/screens/Register/style.js ***!
  \***************************************/
/*! exports provided: useStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStyles\", function() { return useStyles; });\n/* harmony import */ var _assets_constant_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/constant/constant */ \"./src/assets/constant/constant.js\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar useStyles = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(_objectSpread(_objectSpread({}, _assets_constant_constant__WEBPACK_IMPORTED_MODULE_0__[\"CssConstant\"]), {}, {\n  root: {\n    width: '100vw',\n    height: '100vh',\n    backgroundColor: '#224957',\n    position: 'relative',\n    overflow: 'auto'\n  },\n  formWrapper: {\n    width: 430,\n    height: 'auto',\n    margin: 'auto'\n  },\n  formWrapperContent: {\n    paddingTop: '35%'\n  },\n  titleWrapper: {\n    width: '100%',\n    height: 'auto',\n    paddingBottom: 30\n  },\n  title: {\n    color: 'white',\n    fontSize: 64,\n    fontWeight: 400,\n    textAlign: 'center'\n  },\n  description: {\n    color: 'white',\n    fontSize: 16,\n    fontWeight: 400,\n    textAlign: 'center',\n    paddingBottom: 30\n  },\n  textfieldWrapper: {\n    width: '100%'\n  },\n  input: {\n    width: '100%',\n    marginBottom: 30\n  },\n  extraWrapper: {\n    display: 'flex',\n    flexDirection: 'row',\n    marginBottom: 30\n  },\n  rememberMe: {\n    width: '50%'\n  },\n  rememberTitle: {\n    color: 'white'\n  },\n  rememberCheckbox: {\n    outline: 'none',\n    border: 'none'\n  },\n  forgotTitle: {\n    color: '#20DF7F',\n    \"float\": 'right',\n    paddingTop: 8,\n    textDecoration: 'underline',\n    cursor: 'pointer'\n  },\n  forgotPassword: {\n    width: '50%'\n  },\n  submitButton: {\n    width: '100%'\n  },\n  waveFooter: {\n    height: 100,\n    position: 'fixed',\n    bottom: 0,\n    left: 0,\n    width: '100%'\n  },\n  registerTitle: {\n    position: 'absolute',\n    top: 15,\n    right: 30\n  },\n  registerContent: {\n    color: '#20DF7F',\n    fontSize: 13,\n    textDecoration: 'underline',\n    textDecorationColor: '#20DF7F',\n    cursor: 'pointer',\n    '&:hover': {\n      color: '#00ff7f'\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/screens/Register/style.js?");

/***/ }),

/***/ "config":
/*!*********************!*\
  !*** external "{}" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {};\n\n//# sourceURL=webpack:///external_%22%7B%7D%22?");

/***/ })

},[["./src/index.js","runtime","vendors"]]]);