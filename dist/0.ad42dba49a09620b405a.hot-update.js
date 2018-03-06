webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      console.log(\">>>token\", window.localStorage.getItem('accessToken'));\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        console.log(json);\n        if (json.statuscode === 403) {}\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.onComponentDidMount && this.props.onComponentDidMount();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'authdasdasds'\n      );\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = Authentication;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic3RhdHVzY29kZSIsIm9uQ29tcG9uZW50RGlkTW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUdxQkEsYzs7O0FBRW5CLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3dDQUVtQjtBQUNuQkMsY0FBUUMsR0FBUixDQUFZLFVBQVosRUFBdUJDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLGFBQTdCLENBQXZCO0FBQ0NDLFlBQU8sbUJBQVAsRUFBNEI7QUFDMUJDLGdCQUFRLE1BRGtCO0FBRTFCQyxpQkFBUztBQUNQLDBCQUFnQixrQkFEVDtBQUVQLDRCQUFrQkwsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsYUFBN0I7QUFGWCxTQUZpQjtBQU0xQkksY0FBTUMsS0FBS0MsU0FBTCxDQUFnQixFQUFoQjtBQU5vQixPQUE1QixFQVFFQyxJQVJGLENBUVE7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQVJSLEVBUTRCRixJQVI1QixDQVFrQyxnQkFBUTtBQUN4Q1gsZ0JBQVFDLEdBQVIsQ0FBYVksSUFBYjtBQUNBLFlBQUlBLEtBQUtDLFVBQUwsS0FBb0IsR0FBeEIsRUFBNkIsQ0FFNUI7QUFDRixPQWJEO0FBY0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS2hCLEtBQUwsQ0FBV2lCLG1CQUFYLElBQWtDLEtBQUtqQixLQUFMLENBQVdpQixtQkFBWCxFQUFsQztBQUNEOzs7NkJBR1E7QUFDUCxhQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUjtBQUNEOzs7Ozs7a0JBaENrQmxCLGMiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG4gIDtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgY29uc29sZS5sb2coXCI+Pj50b2tlblwiLHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ2FjY2Vzc1Rva2VuJykpXHJcbiAgICBmZXRjaCAoJy9hcGkvYXV0aHZhbGlkYXRlJywge1xyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKVxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSAoe30pXHJcbiAgICB9XHJcbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nIChqc29uKTtcclxuICAgICAgaWYgKGpzb24uc3RhdHVzY29kZSA9PT0gNDAzKSB7XHJcbiAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50ICYmIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCgpXHJcbiAgfVxyXG4gIFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKDxkaXY+YXV0aGRhc2Rhc2RzPC9kaXY+KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9Db250YWluZXJzL2F1dGhlbnRpY2F0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})