webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = {\n              'name': json.list[0].firstName + \" \" + json.list[0].lastName,\n              'city': json.list[0].city,\n              'country': json.list[0].country\n            };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            var str = '';\n            if (_this3.state.professional.hasOwnProperty('occupation')) {\n              str += _this3.state.professional.occupation;\n            };\n\n            if (_this3.state.professional.hasOwnProperty('company')) {\n              str += \", \" + _this3.state.professional.company;\n            };\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              _react2.default.createElement(\"hr\", null),\n              \" \",\n              str\n            );\n          }\n        }(),\n        _react2.default.createElement(\"hr\", null),\n        function () {\n          if (_this3.state.hasOwnProperty('city') && _this3.state.city !== '') {\n            return _react2.default.createElement(\n              \"p\",\n              null,\n              _react2.default.createElement(\"span\", { className: \"glyphicon glyphicon-map-marker\" }),\n              \":\",\n              _this3.state.city,\n              \" \",\n              _this3.state.country\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"span\", { \"class\": \"glyphicon glyphicon-tags\" }),\n          \"\\xA0\",\n          _react2.default.createElement(\n            \"i\",\n            null,\n            this.state.tagline\n          )\n        ),\n        _react2.default.createElement(\"hr\", null),\n        _react2.default.createElement(\"hr\", null)\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJjb3VudHJ5IiwidXNlckRldGFpbCIsImFib3V0bWUiLCJwcm9mZXNzaW9uYWwiLCJzZXRTdGF0ZSIsInN0ciIsIm9jY3VwYXRpb24iLCJjb21wYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsbUJBQWEsTUFBS0osS0FBTCxDQUFXSyxjQUFYLENBQTJCLEtBQTNCLElBQW9DLE1BQUtMLEtBQUwsQ0FBV00sR0FBL0MsR0FBcUQ7O0FBSHZELEtBQWI7O0FBRmlCO0FBU2xCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFD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LGlEQTVCRjtBQTZCSTtBQTdCSixPQUROO0FBaUNDOzs7Ozs7a0JBSVlKLFciLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvcHJvZmlsZWNhcmQuc2Nzc1wiO1xuXG5jbGFzcyBQcm9maWxlY2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdGFnbGluZTogJycsXG4gICAgICB0YWdsaW5lc2hvdzogdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSAoJ3RhZycpID8gdGhpcy5wcm9wcy50YWcgOiAnJ1xuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgnc2VydmljZWNhbGwnKSkge1xuICAgICAgdmFyIGlkID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJyk7XG4gICAgICBmZXRjaCAoYC9hcGkvZ2V0dXNlcmRldGFpbC8ke2lkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKVxuICAgICAgKS50aGVuIChqc29uID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coanNvbilcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICduYW1lJzoganNvbi5saXN0WzBdLmZpcnN0TmFtZSArIFwiIFwiICsganNvbi5saXN0WzBdLmxhc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAnY2l0eSc6anNvbi5saXN0WzBdLmNpdHksXG4gICAgICAgICAgICAgICAgICAgICdjb3VudHJ5Jzpqc29uLmxpc3RbMF0uY291bnRyeVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCd1c2VyRGV0YWlsJykpIHtcbiAgICAgICAgICAgIG9iai50YWdsaW5lID0ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdhYm91dG1lJykgPyBqc29uLmxpc3RbMF0udXNlckRldGFpbC5hYm91dG1lLnRhZ2xpbmUgOiAnJ1xuICAgICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgb2JqLnByb2Zlc3Npb25hbCA9IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLnByb2Zlc3Npb25hbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICBcbiAgICAgICAgICB0aGlzLnNldFN0YXRlIChvYmopO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG5jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkaGVhZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPnt0aGlzLnN0YXRlLm5hbWV9PC9oND5cbiAgICAgICAgICBcbiAgICAgICAgICAgeygoKT0+e1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc3RyPScnO1xuICAgICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwuaGFzT3duUHJvcGVydHkgKCdvY2N1cGF0aW9uJykpe1xuICAgICAgICAgICAgICAgICAgICAgIHN0cis9dGhpcy5zdGF0ZS5wcm9mZXNzaW9uYWwub2NjdXBhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5oYXNPd25Qcm9wZXJ0eSAoJ2NvbXBhbnknKSl7XG4gICAgICAgICAgICAgICAgICAgICAgc3RyKz1cIiwgXCIgK3RoaXMuc3RhdGUucHJvZmVzc2lvbmFsLmNvbXBhbnk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+PGhyIC8+IHtzdHJ9PC9wPlxuICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KSgpfSBcbiAgICAgICAgICAgICA8aHIgLz4gICAgIFxuICAgICAgICAgICB7KCgpPT57XG4gICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgnY2l0eScpICYmIHRoaXMuc3RhdGUuY2l0eSAhPT0nJykge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiAoIDxwPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj46e3RoaXMuc3RhdGUuY2l0eX0ge3RoaXMuc3RhdGUuY291bnRyeX08L3A+KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgIFxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhZ3NcIj48L3NwYW4+Jm5ic3A7PGk+e3RoaXMuc3RhdGUudGFnbGluZX08L2k+PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlY2FyZDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})