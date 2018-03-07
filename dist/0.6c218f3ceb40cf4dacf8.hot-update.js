webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(98);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n            }\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"img\", { src: \"/w3images/team2.jpg\", alt: \"John\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"cap\" },\n          this.state.name\n        ),\n        _react2.default.createElement(\n          \"p\",\n          { className: \"title\" },\n          \"CEO & Founder, Example\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\n            \"button\",\n            null,\n            \"Contact\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwib2JqIiwibGlzdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlckRldGFpbCIsImFib3V0bWUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLElBREs7QUFFWEMsZUFBUyxFQUZFO0FBR1hDLG1CQUFhLE1BQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixLQUEzQixJQUFvQyxNQUFLTCxLQUFMLENBQVdNLEdBQS9DLEdBQXFEO0FBSHZELEtBQWI7O0FBRmlCO0FBUWxCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFDRUMsSUFERixDQUNRO0FBQUEsaUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLFNBRFIsRUFFRUYsSUFGRixDQUVRLGdCQUFRO0FBQ2QsY0FBSUUsS0FBS1gsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFJWSxNQUFNLEVBQUMsUUFBUUQsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUMsU0FBYixHQUF5QixHQUF6QixHQUErQkgsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUUsUUFBckQsRUFBVjtBQUNBLGdCQUFJSixLQUFLRSxJQUFMLENBQVUsQ0FBVixFQUFhYixjQUFiLENBQTZCLFlBQTdCLENBQUosRUFBZ0Q7QUFDOUNZLGtCQUFJZCxPQUFKLEdBQWNhLEtBQUtFLElBQUwsQ0FBVSxDQUFWLEVBQWFHLFVBQWIsQ0FBd0JoQixjQUF4QixDQUF3QyxTQUF4QyxJQUFxRFcsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NuQixPQUFyRixHQUErRixFQUE3RztBQUNEO0FBQ0QsbUJBQUtvQixRQUFMLENBQWVOLEdBQWY7QUFDRDtBQUNGLFNBVkQ7QUFXRDtBQUNGOzs7NkJBRVE7O0FBRVQsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxLQUFJLHFCQUFULEVBQStCLEtBQUksTUFBbkMsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsS0FBZDtBQUFxQixlQUFLaEIsS0FBTCxDQUFXQztBQUFoQyxTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUksZUFBS0QsS0FBTCxDQUFXRTtBQUFmLFNBSkY7QUFLRTtBQUFBO0FBQUE7QUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFMRixPQUROO0FBU0M7Ozs7OztrQkFJWUosVyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlL2Nzcy9wcm9maWxlY2FyZC5zY3NzXCI7XG5cbmNsYXNzIFByb2ZpbGVjYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICB0YWdsaW5lOiAnJyxcbiAgICAgIHRhZ2xpbmVzaG93OiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgndGFnJykgPyB0aGlzLnByb3BzLnRhZyA6ICcnXG4gICAgfTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgnc2VydmljZWNhbGwnKSkge1xuICAgICAgdmFyIGlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyk7XG4gICAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmRldGFpbC8ke2lkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKVxuICAgICAgKS50aGVuIChqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgICAgICB2YXIgb2JqID0geyduYW1lJzoganNvbi5saXN0WzBdLmZpcnN0TmFtZSArIFwiIFwiICsganNvbi5saXN0WzBdLmxhc3ROYW1lfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCd1c2VyRGV0YWlsJykpIHtcbiAgICAgICAgICAgIG9iai50YWdsaW5lID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdhYm91dG1lJykgPyBqc29uLmxpc3RbMF0udXNlckRldGFpbC5hYm91dG1lLnRhZ2xpbmUgOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNldFN0YXRlIChvYmopO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvdzNpbWFnZXMvdGVhbTIuanBnXCIgYWx0PVwiSm9oblwiIC8+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcFwiPnt0aGlzLnN0YXRlLm5hbWV9PC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNFTyAmIEZvdW5kZXIsIEV4YW1wbGU8L3A+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudGFnbGluZX08L3A+XG4gICAgICAgICAgPHA+PGJ1dHRvbj5Db250YWN0PC9idXR0b24+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZWNhcmQ7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})