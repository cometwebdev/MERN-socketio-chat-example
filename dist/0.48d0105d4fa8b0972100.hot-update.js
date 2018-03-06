webpackHotUpdate(0,{

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authenticate = __webpack_require__(94);\n\nvar _authenticate2 = _interopRequireDefault(_authenticate);\n\n__webpack_require__(4);\n\nvar _index = __webpack_require__(75);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(props) {\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));\n\n    _this.state = {};\n\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      var id = window.localStorage.getItem('userid');\n      fetch('/api/getuserdetail/' + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n\n          var obj = { 'user': json.list[0] };\n          if (json.list[0].hasOwnProperty('userDetail')) {\n            obj.userDetail = json.list[0].userDetail;\n          }\n          _this2.setState(obj);\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_index2.default, { userdata: this.state })\n      );\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nexports.default = Profile;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvcHJvZmlsZS5qcz80YTMwIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwcm9wcyIsInN0YXRlIiwiaWQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsIm9iaiIsImxpc3QiLCJ1c2VyRGV0YWlsIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87OztBQUVsQixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVsQixVQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFGa0I7QUFJbkI7Ozs7eUNBR21CO0FBQUE7O0FBRXBCLFVBQUlDLEtBQUtDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCLENBQVQ7QUFDRUMsb0NBQTZCSixFQUE3QixFQUFtQyxFQUFDSyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQW5DLEVBQ0VDLElBREYsQ0FDUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFIsRUFFRUYsSUFGRixDQUVRLGdCQUFRO0FBQ2QsWUFBSUUsS0FBS0MsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDOztBQUVsQyxjQUFJQyxNQUFLLEVBQUMsUUFBUUYsS0FBS0csSUFBTCxDQUFVLENBQVYsQ0FBVCxFQUFUO0FBQ0UsY0FBR0gsS0FBS0csSUFBTCxDQUFVLENBQVYsRUFBYUYsY0FBYixDQUE0QixZQUE1QixDQUFILEVBQTZDO0FBQ3RDQyxnQkFBSUUsVUFBSixHQUFnQkosS0FBS0csSUFBTCxDQUFVLENBQVYsRUFBYUMsVUFBN0I7QUFDTDtBQUNELGlCQUFLQyxRQUFMLENBQWNILEdBQWQ7QUFDQTtBQUNGLE9BWEg7QUFZRDs7OzZCQUdVO0FBQ0wsYUFDSTtBQUFBO0FBQUE7QUFDRyx5REFBVyxVQUFVLEtBQUtaLEtBQTFCO0FBREgsT0FESjtBQUtIOzs7Ozs7a0JBakNnQkYsTyIsImZpbGUiOiI3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRoZW50aWNhdGlvbiBmcm9tICcuL2F1dGhlbnRpY2F0ZSc7XHJcblxyXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XHJcbmltcG9ydCBNeVByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9maWxlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgXHJcbiAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgfTtcclxuICAgIFxyXG4gIH0gXHJcbiAgXHJcbiAgICBcclxuIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgXHJcbiAgdmFyIGlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyk7XHJcbiAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmRldGFpbC8ke2lkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XHJcbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKVxyXG4gICAgKS50aGVuIChqc29uID0+IHtcclxuICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcclxuICAgICBcclxuICAgICAgdmFyIG9iaiA9eyd1c2VyJzoganNvbi5saXN0WzBdfVxyXG4gICAgICAgIGlmKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSgndXNlckRldGFpbCcpKXtcclxuICAgICAgICAgICAgICAgb2JqLnVzZXJEZXRhaWw9IGpzb24ubGlzdFswXS51c2VyRGV0YWlsXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5zZXRTdGF0ZShvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICA8TXlQcm9maWxlIHVzZXJkYXRhPXt0aGlzLnN0YXRlfSAvPiBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQ29udGFpbmVycy9wcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///74\n");

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Authentication = function (_Component) {\n  _inherits(Authentication, _Component);\n\n  function Authentication(props) {\n    _classCallCheck(this, Authentication);\n\n    var _this = _possibleConstructorReturn(this, (Authentication.__proto__ || Object.getPrototypeOf(Authentication)).call(this, props));\n\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Authentication, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n\n      fetch('/api/authvalidate', {\n        method: 'post',\n        headers: {\n          'Content-Type': 'application/json',\n          'x-access-token': window.localStorage.getItem('accessToken')\n        },\n        body: JSON.stringify({})\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        console.log(json);\n        if (json.statuscode === 403) {}\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('div', null);\n    }\n  }]);\n\n  return Authentication;\n}(_react.Component);\n\nexports.default = Authentication;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvYXV0aGVudGljYXRlLmpzP2Y4NTIiXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb24iLCJwcm9wcyIsInN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxjOzs7QUFFbkIsMEJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7d0NBRXFCOztBQUVwQkMsWUFBTyxtQkFBUCxFQUE0QjtBQUMxQkMsZ0JBQVEsTUFEa0I7QUFFMUJDLGlCQUFTO0FBQ1AsMEJBQWdCLGtCQURUO0FBRVAsNEJBQWtCQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixhQUE3QjtBQUZYLFNBRmlCO0FBTTFCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCLEVBQWhCO0FBTm9CLE9BQTVCLEVBUUVDLElBUkYsQ0FRUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BUlIsRUFRNEJGLElBUjVCLENBUWtDLGdCQUFRO0FBQ3hDRyxnQkFBUUMsR0FBUixDQUFhRixJQUFiO0FBQ0EsWUFBSUEsS0FBS0csVUFBTCxLQUFvQixHQUF4QixFQUE2QixDQUU1QjtBQUNGLE9BYkQ7QUFjRDs7OzZCQUVRO0FBQ1AsYUFDRSwwQ0FERjtBQUdEOzs7Ozs7a0JBN0JrQmpCLGMiLCJmaWxlIjoiOTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoZW50aWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlciAocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9XHJcbiAgfVxyXG4gIDtcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIGZldGNoICgnL2FwaS9hdXRodmFsaWRhdGUnLCB7XHJcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCdhY2Nlc3NUb2tlbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5ICh7fSlcclxuICAgIH1cclxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcclxuICAgICAgY29uc29sZS5sb2cgKGpzb24pO1xyXG4gICAgICBpZiAoanNvbi5zdGF0dXNjb2RlID09PSA0MDMpIHtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIClcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9Db250YWluZXJzL2F1dGhlbnRpY2F0ZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})