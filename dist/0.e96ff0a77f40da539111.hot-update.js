webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log(\">>>token\", window.localStorage.getItem('accessToken'));\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        console.log(json);\n        if (json.statuscode === 403) {}\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.onComponentDidMount && this.props.onComponentDidMount();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('auth', null);\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = Authentication;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RhdHVzY29kZSIsIm9uQ29tcG9uZW50RGlkTW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUdxQkEsYzs7O0FBRW5CLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLGFBQTdCLENBQXZCO0FBQ0NDLFlBQU8sbUJBQVAsRUFBNEI7QUFDMUJDLGdCQUFRLE1BRGtCO0FBRTFCQyxpQkFBUztBQUNQLDBCQUFnQixrQkFEVDtBQUVQLDRCQUFrQkwsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsYUFBN0I7QUFGWCxTQUZpQjtBQU0xQkksY0FBTUMsS0FBS0MsU0FBTCxDQUFnQixFQUFoQjtBQU5vQixPQUE1QixFQVFFQyxJQVJGLENBUVE7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQVJSLEVBUTRCRixJQVI1QixDQVFrQyxnQkFBUTtBQUN4Q1gsZ0JBQVFDLEdBQVIsQ0FBYVksSUFBYjtBQUNBLFlBQUlBLEtBQUtDLFVBQUwsS0FBb0IsR0FBeEIsRUFBNkIsQ0FFNUI7QUFDRixPQWJEO0FBY0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS2hCLEtBQUwsQ0FBV2lCLG1CQUFYLElBQWtDLEtBQUtqQixLQUFMLENBQVdpQixtQkFBWCxFQUFsQztBQUNEOzs7NkJBR1E7QUFDUCxhQUNFLDJDQURGO0FBR0Q7Ozs7OztrQkFsQ2tCbEIsYyIsImZpbGUiOiI5NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhlbnRpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyIChwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge31cclxuICB9XHJcbiAgO1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICBjb25zb2xlLmxvZyhcIj4+PnRva2VuXCIsd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKSlcclxuICAgIGZldGNoICgnL2FwaS9hdXRodmFsaWRhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdhY2Nlc3NUb2tlbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcclxuICAgIH1cclxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2cgKGpzb24pO1xyXG4gICAgICBpZiAoanNvbi5zdGF0dXNjb2RlID09PSA0MDMpIHtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KClcclxuICB9XHJcbiAgXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhdXRoPjwvYXV0aD5cclxuICAgICAgKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})