webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : '',\n      professional: ''\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n            }\n            if (json.list[0].hasOwnProperty('professional')) {\n              obj.professional = json.list[0].professional;\n            }\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.userDetail.userDetail.professional.hasOwnProperty('occupation')) {\n            return _this3.state.userDetail.userDetail.professional.occupation;\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          { className: \"title\" },\n          \"CEO & Founder, Example\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsInByb2Zlc3Npb25hbCIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJEZXRhaWwiLCJhYm91dG1lIiwic2V0U3RhdGUiLCJvY2N1cGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsbUJBQWEsTUFBS0osS0FBTCxDQUFXSyxjQUFYLENBQTJCLEtBQTNCLElBQW9DLE1BQUtMLEtBQUwsQ0FBV00sR0FBL0MsR0FBcUQsRUFIdkQ7QUFJWEMsb0JBQWE7QUFKRixLQUFiOztBQUZpQjtBQVNsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFFbkIsVUFBSSxDQUFDLEtBQUtQLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixhQUEzQixDQUFMLEVBQWdEO0FBQzlDLFlBQUlHLEtBQUtDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCLENBQVQ7QUFDQUMsc0NBQTZCSixFQUE3QixFQUFtQyxFQUFDSyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQW5DLEVBQ0VDLElBREYsQ0FDUTtBQUFBLGlCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxTQURSLEVBRUVGLElBRkYsQ0FFUSxnQkFBUTtBQUNkRyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsY0FBSUEsS0FBS1osY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFJZSxNQUFNLEVBQUMsUUFBUUgsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUMsU0FBYixHQUF5QixHQUF6QixHQUErQkwsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUUsUUFBckQsRUFBVjtBQUNBLGdCQUFJTixLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhaEIsY0FBYixDQUE2QixZQUE3QixDQUFKLEVBQWdEO0FBQzlDZSxrQkFBSWpCLE9BQUosR0FBY2MsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3Qm5CLGNBQXhCLENBQXdDLFNBQXhDLElBQXFEWSxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhRyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ3RCLE9BQXJGLEdBQStGLEVBQTdHO0FBQ0Q7QUFDRCxnQkFBSWMsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWhCLGNBQWIsQ0FBNkIsY0FBN0IsQ0FBSixFQUFrRDtBQUNoRGUsa0JBQUliLFlBQUosR0FBbUJVLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFkLFlBQWhDO0FBQ0Q7QUFDRCxtQkFBS21CLFFBQUwsQ0FBZU4sR0FBZjtBQUNEO0FBQ0YsU0FkRDtBQWVEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNYRixjQUFRQyxHQUFSLENBQVksS0FBS2xCLEtBQWpCO0FBQ0UsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxXQUFVLFlBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsaUJBQWQ7QUFBaUMsZUFBS0EsS0FBTCxDQUFXQztBQUE1QyxTQUZGO0FBSUssb0JBQUk7QUFDRixjQUFJLE9BQUtELEtBQUwsQ0FBV3VCLFVBQVgsQ0FBc0JBLFVBQXRCLENBQWlDakIsWUFBakMsQ0FBOENGLGNBQTlDLENBQThELFlBQTlELENBQUosRUFBaUY7QUFDbkUsbUJBQVEsT0FBS0osS0FBTCxDQUFXdUIsVUFBWCxDQUFzQkEsVUFBdEIsQ0FBaUNqQixZQUFqQyxDQUE4Q29CLFVBQXREO0FBQ047QUFDVCxTQUpGLEVBSko7QUFXRTtBQUFBO0FBQUEsWUFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLFNBWEY7QUFZRTtBQUFBO0FBQUE7QUFBSSxlQUFLMUIsS0FBTCxDQUFXRTtBQUFmO0FBWkYsT0FETjtBQWlCQzs7Ozs7O2tCQUlZSixXIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL3Byb2ZpbGVjYXJkLnNjc3NcIjtcblxuY2xhc3MgUHJvZmlsZWNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogbnVsbCxcbiAgICAgIHRhZ2xpbmU6ICcnLFxuICAgICAgdGFnbGluZXNob3c6IHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCd0YWcnKSA/IHRoaXMucHJvcHMudGFnIDogJycsXG4gICAgICBwcm9mZXNzaW9uYWw6JydcbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCdzZXJ2aWNlY2FsbCcpKSB7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXG4gICAgICApLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICAgIHZhciBvYmogPSB7J25hbWUnOiBqc29uLmxpc3RbMF0uZmlyc3ROYW1lICsgXCIgXCIgKyBqc29uLmxpc3RbMF0ubGFzdE5hbWV9XG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3VzZXJEZXRhaWwnKSkge1xuICAgICAgICAgICAgb2JqLnRhZ2xpbmUgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ2Fib3V0bWUnKSA/IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmFib3V0bWUudGFnbGluZSA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgb2JqLnByb2Zlc3Npb25hbCA9IGpzb24ubGlzdFswXS5wcm9mZXNzaW9uYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbmNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRoZWFkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+e3RoaXMuc3RhdGUubmFtZX08L2g0PlxuICAgICAgICAgXG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJEZXRhaWwudXNlckRldGFpbC5wcm9mZXNzaW9uYWwuaGFzT3duUHJvcGVydHkgKCdvY2N1cGF0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICB0aGlzLnN0YXRlLnVzZXJEZXRhaWwudXNlckRldGFpbC5wcm9mZXNzaW9uYWwub2NjdXBhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSkoKX0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5DRU8gJiBGb3VuZGVyLCBFeGFtcGxlPC9wPlxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnRhZ2xpbmV9PC9wPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVjYXJkO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZWNhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})