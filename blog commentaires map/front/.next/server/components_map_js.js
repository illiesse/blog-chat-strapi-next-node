exports.id = "components_map_js";
exports.ids = ["components_map_js"];
exports.modules = {

/***/ "./components/map.js":
/*!***************************!*\
  !*** ./components/map.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-leaflet */ "react-leaflet");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css */ "./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
/* harmony import */ var leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_defaulticon_compatibility_dist_leaflet_defaulticon_compatibility_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\33663\\Desktop\\blog\\frontend\\components\\map.js";




const Map = ({
  map
}) => {
  console.log("mama", map);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.MapContainer, {
    center: [map.lat, map.long],
    zoom: 11,
    scrollWheelZoom: true,
    style: {
      height: "400px"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.TileLayer, {
      attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.Marker, {
      position: [map.lat, map.long],
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_leaflet__WEBPACK_IMPORTED_MODULE_1__.Popup, {
        children: ["A pretty CSS3 popup. ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 42
        }, undefined), " Easily customizable."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css ***!
  \***************************************************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/***/ (function() {



/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHJhcGktc3RhcnRlci1mcm9udGVuZC8uL2NvbXBvbmVudHMvbWFwLmpzIl0sIm5hbWVzIjpbIk1hcCIsIm1hcCIsImNvbnNvbGUiLCJsb2ciLCJsYXQiLCJsb25nIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEdBQUcsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFXO0FBQ25CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixHQUFwQjtBQUNBLHNCQUNJLDhEQUFDLHVEQUFEO0FBQWMsVUFBTSxFQUFFLENBQUNBLEdBQUcsQ0FBQ0csR0FBTCxFQUFVSCxHQUFHLENBQUNJLElBQWQsQ0FBdEI7QUFDQSxRQUFJLEVBQUUsRUFETjtBQUNVLG1CQUFlLEVBQUUsSUFEM0I7QUFFQSxTQUFLLEVBQUU7QUFBQ0MsWUFBTSxFQUFDO0FBQVIsS0FGUDtBQUFBLDRCQUdJLDhEQUFDLG9EQUFEO0FBQ0ksaUJBQVcsRUFBQywwRUFEaEI7QUFFSSxTQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBT0ksOERBQUMsaURBQUQ7QUFBUSxjQUFRLEVBQUUsQ0FBQ0wsR0FBRyxDQUFDRyxHQUFMLEVBQVVILEdBQUcsQ0FBQ0ksSUFBZCxDQUFsQjtBQUFBLDZCQUNJLDhEQUFDLGdEQUFEO0FBQUEseURBQ3lCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFlSCxDQWpCRDs7QUFtQkEsK0RBQWVMLEdBQWYsRSIsImZpbGUiOiJjb21wb25lbnRzX21hcF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcENvbnRhaW5lciwgVGlsZUxheWVyLE1hcmtlcixQb3B1cCB9IGZyb20gJ3JlYWN0LWxlYWZsZXQnXHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJ1xyXG5pbXBvcnQgJ2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS9kaXN0L2xlYWZsZXQtZGVmYXVsdGljb24tY29tcGF0aWJpbGl0eS5jc3MnXHJcblxyXG5jb25zdCBNYXAgPSAoe21hcH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwibWFtYVwiLCBtYXApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNYXBDb250YWluZXIgY2VudGVyPXtbbWFwLmxhdCwgbWFwLmxvbmddfVxyXG4gICAgICAgIHpvb209ezExfSBzY3JvbGxXaGVlbFpvb209e3RydWV9XHJcbiAgICAgICAgc3R5bGU9e3toZWlnaHQ6XCI0MDBweFwifX0+XHJcbiAgICAgICAgICAgIDxUaWxlTGF5ZXJcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPE1hcmtlciBwb3NpdGlvbj17W21hcC5sYXQsIG1hcC5sb25nXX0+XHJcbiAgICAgICAgICAgICAgICA8UG9wdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgQSBwcmV0dHkgQ1NTMyBwb3B1cC4gPGJyIC8+IEVhc2lseSBjdXN0b21pemFibGUuXHJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICA8L01hcmtlcj5cclxuICAgICAgICA8L01hcENvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==