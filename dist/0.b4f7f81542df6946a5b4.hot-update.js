webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(8);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        console.log(json);\n        if (json.statuscode === 403) {\n          _this2.props.history.push(\"/login\");\n        } else {}\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.onComponentDidMount && this.props.onComponentDidMount();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return '';\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = (0, _reactRouterDom.withRouter)(Authentication);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzY29kZSIsImhpc3RvcnkiLCJwdXNoIiwib25Db21wb25lbnREaWRNb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU9BLGM7OztBQUVMLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0lBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBR2xCOzs7O3lDQUVvQjtBQUFBOztBQUVuQkMsWUFBTyxtQkFBUCxFQUE0QjtBQUMxQkMsZ0JBQVEsTUFEa0I7QUFFMUJDLGlCQUFTO0FBQ1AsMEJBQWdCLGtCQURUO0FBRVAsNEJBQWtCQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixhQUE3QjtBQUZYLFNBRmlCO0FBTTFCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCLEVBQWhCO0FBTm9CLE9BQTVCLEVBUUVDLElBUkYsQ0FRUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BUlIsRUFRNEJGLElBUjVCLENBUWtDLGdCQUFRO0FBQ3hDRyxnQkFBUUMsR0FBUixDQUFhRixJQUFiO0FBQ0EsWUFBSUEsS0FBS0csVUFBTCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixpQkFBS2hCLEtBQUwsQ0FBV2lCLE9BQVgsQ0FBbUJDLElBQW5CLENBQXlCLFFBQXpCO0FBQ0QsU0FGRCxNQUVLLENBRUo7QUFDRixPQWZEO0FBZ0JEOzs7d0NBRW1CO0FBQ2xCLFdBQUtsQixLQUFMLENBQVdtQixtQkFBWCxJQUFrQyxLQUFLbkIsS0FBTCxDQUFXbUIsbUJBQVgsRUFBbEM7QUFDRDs7OzZCQUdRO0FBQ1AsYUFBUSxFQUFSO0FBQ0Q7Ozs7OztrQkFFYyxnQ0FBV3BCLGNBQVgsQyIsImZpbGUiOiI5NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbiBjbGFzcyBBdXRoZW50aWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG4gIDtcclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiBcclxuICAgIGZldGNoICgnL2FwaS9hdXRodmFsaWRhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdhY2Nlc3NUb2tlbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcclxuICAgIH1cclxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2cgKGpzb24pO1xyXG4gICAgICBpZiAoanNvbi5zdGF0dXNjb2RlID09PSA0MDMpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCAoXCIvbG9naW5cIik7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnByb3BzLm9uQ29tcG9uZW50RGlkTW91bnQgJiYgdGhpcy5wcm9wcy5vbkNvbXBvbmVudERpZE1vdW50KClcclxuICB9XHJcbiAgXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoJycpO1xyXG4gIH1cclxufVxyXG4gIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQXV0aGVudGljYXRpb24pIDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})