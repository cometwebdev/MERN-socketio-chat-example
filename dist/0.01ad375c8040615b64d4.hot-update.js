webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _header = __webpack_require__(77);\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid')\n    };\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'row content' },\n        function () {\n          if (_this2.state.currentuser) {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'card' },\n                  _react2.default.createElement('img', { src: '/w3images/team2.jpg', alt: 'John' }),\n                  _react2.default.createElement(\n                    'h1',\n                    null,\n                    'John Doe'\n                  ),\n                  _react2.default.createElement(\n                    'p',\n                    { className: 'title' },\n                    'CEO & Founder, Example'\n                  ),\n                  _react2.default.createElement(\n                    'p',\n                    null,\n                    'Harvard University'\n                  ),\n                  _react2.default.createElement(\n                    'p',\n                    null,\n                    _react2.default.createElement(\n                      'button',\n                      null,\n                      'Contact'\n                    )\n                  )\n                )\n              ),\n              _react2.default.createElement('div', { className: 'col-md-6 col-sm-6' }),\n              _react2.default.createElement('div', { className: 'col-md-3 col-sm-6' })\n            );\n          } else {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-8 col-sm-8' },\n                '2'\n              ),\n              _react2.default.createElement('div', { className: 'col-md-4 col-sm-4' })\n            );\n          }\n        }()\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcz9kOGEyIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztJQUNNQSxPOzs7QUFFTixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNaQSxLQURZOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDYkMsbUJBQWFDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCO0FBREEsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNULGFBQ0E7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBR0csb0JBQU07QUFDUCxjQUFJLE9BQUtKLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUM1QixtQkFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLE1BQWY7QUFDRSx5REFBSyxLQUFJLHFCQUFULEVBQStCLEtBQUksTUFBbkMsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFHRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxtQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFNRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFORjtBQURGLGVBREY7QUFXRSxxREFBSyxXQUFVLG1CQUFmLEdBWEY7QUFjRSxxREFBSyxXQUFVLG1CQUFmO0FBZEYsYUFEQTtBQW9CQyxXQXJCRCxNQXFCSztBQUNILG1CQUNGO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmO0FBQUE7QUFBQSxlQURGO0FBSUUscURBQUssV0FBVSxtQkFBZjtBQUpGLGFBREU7QUFVRDtBQUVBLFNBbkNEO0FBSEYsT0FEQTtBQTZDQzs7Ozs7O0FBRUQ7O2tCQUVlSCxPIiwiZmlsZSI6Ijk0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9XG5mcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcbmNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuc3VwZXIgKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgY3VycmVudHVzZXI6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpXG4gIH07XG59XG5cbnJlbmRlcigpIHtcbnJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cInJvdyBjb250ZW50XCI+XG5cbiAge1xuICAoKCkgPT4ge1xuICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50dXNlcikge1xuICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTZcIj4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvdzNpbWFnZXMvdGVhbTIuanBnXCIgYWx0PVwiSm9oblwiIC8+XG4gICAgICAgIDxoMT5Kb2huIERvZTwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q0VPICYgRm91bmRlciwgRXhhbXBsZTwvcD5cbiAgICAgICAgPHA+SGFydmFyZCBVbml2ZXJzaXR5PC9wPlxuICAgICAgICBcbiAgICAgICAgPHA+PGJ1dHRvbj5Db250YWN0PC9idXR0b24+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxuXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLThcIj5cbiAgICAgIDJcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS00XCI+IFxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuXG4gIH0pKClcbiAgfVxuPC9kaXY+XG5cblxuICAgICk7XG59XG59XG47XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})