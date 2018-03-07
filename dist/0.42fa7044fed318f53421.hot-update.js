webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(98);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n            }\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"img\", { src: \"\", alt: \"John\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        _react2.default.createElement(\n          \"p\",\n          { className: \"title\" },\n          \"CEO & Founder, Example\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\n            \"button\",\n            null,\n            \"Contact\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwib2JqIiwibGlzdCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlckRldGFpbCIsImFib3V0bWUiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLElBREs7QUFFWEMsZUFBUyxFQUZFO0FBR1hDLG1CQUFhLE1BQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixLQUEzQixJQUFvQyxNQUFLTCxLQUFMLENBQVdNLEdBQS9DLEdBQXFEO0FBSHZELEtBQWI7O0FBRmlCO0FBUWxCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFDRUMsSUFERixDQUNRO0FBQUEsaUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLFNBRFIsRUFFRUYsSUFGRixDQUVRLGdCQUFRO0FBQ2QsY0FBSUUsS0FBS1gsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFJWSxNQUFNLEVBQUMsUUFBUUQsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUMsU0FBYixHQUF5QixHQUF6QixHQUErQkgsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUUsUUFBckQsRUFBVjtBQUNBLGdCQUFJSixLQUFLRSxJQUFMLENBQVUsQ0FBVixFQUFhYixjQUFiLENBQTZCLFlBQTdCLENBQUosRUFBZ0Q7QUFDOUNZLGtCQUFJZCxPQUFKLEdBQWNhLEtBQUtFLElBQUwsQ0FBVSxDQUFWLEVBQWFHLFVBQWIsQ0FBd0JoQixjQUF4QixDQUF3QyxTQUF4QyxJQUFxRFcsS0FBS0UsSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NuQixPQUFyRixHQUErRixFQUE3RztBQUNEO0FBQ0QsbUJBQUtvQixRQUFMLENBQWVOLEdBQWY7QUFDRDtBQUNGLFNBVkQ7QUFXRDtBQUNGOzs7NkJBRVE7O0FBRVQsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxLQUFJLEVBQVQsRUFBWSxLQUFJLE1BQWhCLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxXQUFVLGlCQUFkO0FBQWlDLGVBQUtoQixLQUFMLENBQVdDO0FBQTVDLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSSxlQUFLRCxLQUFMLENBQVdFO0FBQWYsU0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUxGLE9BRE47QUFTQzs7Ozs7O2tCQUlZSixXIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL3Byb2ZpbGVjYXJkLnNjc3NcIjtcblxuY2xhc3MgUHJvZmlsZWNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogbnVsbCxcbiAgICAgIHRhZ2xpbmU6ICcnLFxuICAgICAgdGFnbGluZXNob3c6IHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCd0YWcnKSA/IHRoaXMucHJvcHMudGFnIDogJydcbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCdzZXJ2aWNlY2FsbCcpKSB7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXG4gICAgICApLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICAgIHZhciBvYmogPSB7J25hbWUnOiBqc29uLmxpc3RbMF0uZmlyc3ROYW1lICsgXCIgXCIgKyBqc29uLmxpc3RbMF0ubGFzdE5hbWV9XG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3VzZXJEZXRhaWwnKSkge1xuICAgICAgICAgICAgb2JqLnRhZ2xpbmUgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ2Fib3V0bWUnKSA/IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmFib3V0bWUudGFnbGluZSA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIlwiIGFsdD1cIkpvaG5cIiAvPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5DRU8gJiBGb3VuZGVyLCBFeGFtcGxlPC9wPlxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnRhZ2xpbmV9PC9wPlxuICAgICAgICAgIDxwPjxidXR0b24+Q29udGFjdDwvYnV0dG9uPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVjYXJkO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZWNhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})