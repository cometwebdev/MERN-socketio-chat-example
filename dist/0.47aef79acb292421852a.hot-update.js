webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n\n        if (json.statuscode === 403) {\n          console.info(\"Invalid Token!!\");\n          PubSub.publish('IS_LOGIN', { status: false, token: window.localStorage.getItem('accessToken') });\n\n          _this2.props.history.push(\"/login\");\n        } else {\n          console.info(\"valid Token!!\");\n        }\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.onComponentDidMount && this.props.onComponentDidMount();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return '';\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = (0, _reactRouterDom.withRouter)(Authentication);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzdGF0dXNjb2RlIiwiY29uc29sZSIsImluZm8iLCJQdWJTdWIiLCJwdWJsaXNoIiwic3RhdHVzIiwidG9rZW4iLCJoaXN0b3J5IiwicHVzaCIsIm9uQ29tcG9uZW50RGlkTW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVPQSxjOzs7QUFFTCwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdJQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFFbkJDLFlBQU8sbUJBQVAsRUFBNEI7QUFDMUJDLGdCQUFRLE1BRGtCO0FBRTFCQyxpQkFBUztBQUNQLDBCQUFnQixrQkFEVDtBQUVQLDRCQUFrQkMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsYUFBN0I7QUFGWCxTQUZpQjtBQU0xQkMsY0FBTUMsS0FBS0MsU0FBTCxDQUFnQixFQUFoQjtBQU5vQixPQUE1QixFQVFFQyxJQVJGLENBUVE7QUFBQSxlQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxPQVJSLEVBUTRCRixJQVI1QixDQVFrQyxnQkFBUTs7QUFFeEMsWUFBSUUsS0FBS0MsVUFBTCxLQUFvQixHQUF4QixFQUE2QjtBQUMxQkMsa0JBQVFDLElBQVIsQ0FBYyxpQkFBZDtBQUNEQyxpQkFBT0MsT0FBUCxDQUFnQixVQUFoQixFQUE0QixFQUFDQyxRQUFRLEtBQVQsRUFBZ0JDLE9BQU9mLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLGFBQTdCLENBQXZCLEVBQTVCOztBQUVBLGlCQUFLUCxLQUFMLENBQVdxQixPQUFYLENBQW1CQyxJQUFuQixDQUF5QixRQUF6QjtBQUNELFNBTEQsTUFLSztBQUNBUCxrQkFBUUMsSUFBUixDQUFjLGVBQWQ7QUFDSjtBQUNGLE9BbEJEO0FBbUJEOzs7d0NBRW1CO0FBQ2xCLFdBQUtoQixLQUFMLENBQVd1QixtQkFBWCxJQUFrQyxLQUFLdkIsS0FBTCxDQUFXdUIsbUJBQVgsRUFBbEM7QUFDRDs7OzZCQUdRO0FBQ1AsYUFBUSxFQUFSO0FBQ0Q7Ozs7OztrQkFFYyxnQ0FBV3hCLGNBQVgsQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbiBjbGFzcyBBdXRoZW50aWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG4gIDtcclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiBcclxuICAgIGZldGNoICgnL2FwaS9hdXRodmFsaWRhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdhY2Nlc3NUb2tlbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcclxuICAgIH1cclxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcclxuICAgICBcclxuICAgICAgaWYgKGpzb24uc3RhdHVzY29kZSA9PT0gNDAzKSB7XHJcbiAgICAgICAgIGNvbnNvbGUuaW5mbyAoXCJJbnZhbGlkIFRva2VuISFcIik7XHJcbiAgICAgICAgUHViU3ViLnB1Ymxpc2ggKCdJU19MT0dJTicsIHtzdGF0dXM6IGZhbHNlLCB0b2tlbjogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgnYWNjZXNzVG9rZW4nKX0pOyBcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoIChcIi9sb2dpblwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgY29uc29sZS5pbmZvIChcInZhbGlkIFRva2VuISFcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMub25Db21wb25lbnREaWRNb3VudCAmJiB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQoKVxyXG4gIH1cclxuICBcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuICgnJyk7XHJcbiAgfVxyXG59XHJcbiAgZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihBdXRoZW50aWNhdGlvbikgO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQ29udGFpbmVycy9hdXRoZW50aWNhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ })

})