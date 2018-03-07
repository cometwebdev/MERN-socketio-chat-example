webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = {\n              'name': json.list[0].firstName + \" \" + json.list[0].lastName,\n              'city': json.list[0].city,\n              'country': json.list[0].country\n            };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n              if (json.list[0].userDetail.hasOwnProperty('professional')) {\n                obj.professional = json.list[0].userDetail.professional;\n              }\n            }\n\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            _this3.state.professional.hasOwnProperty('');\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"CEO & Founder, Example\"\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          _react2.default.createElement(\"span\", { className: \"glyphicon glyphicon-map-marker\" }),\n          \": \"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImNpdHkiLCJjb3VudHJ5IiwidXNlckRldGFpbCIsImFib3V0bWUiLCJwcm9mZXNzaW9uYWwiLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFc7OztBQUVKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLElBREs7QUFFWEMsZUFBUyxFQUZFO0FBR1hDLG1CQUFhLE1BQUtKLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixLQUEzQixJQUFvQyxNQUFLTCxLQUFMLENBQVdNLEdBQS9DLEdBQXFEOztBQUh2RCxLQUFiOztBQUZpQjtBQVNsQjs7Ozt5Q0FFb0I7QUFBQTs7QUFFbkIsVUFBSSxDQUFDLEtBQUtOLEtBQUwsQ0FBV0ssY0FBWCxDQUEyQixhQUEzQixDQUFMLEVBQWdEO0FBQzlDLFlBQUlFLEtBQUtDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCLENBQVQ7QUFDQUMsc0NBQTZCSixFQUE3QixFQUFtQyxFQUFDSyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQW5DLEVBQ0VDLElBREYsQ0FDUTtBQUFBLGlCQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxTQURSLEVBRUVGLElBRkYsQ0FFUSxnQkFBUTtBQUNkRyxrQkFBUUMsR0FBUixDQUFZRixJQUFaO0FBQ0EsY0FBSUEsS0FBS1gsY0FBTCxDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQ2hDLGdCQUFJYyxNQUFNO0FBQ0Qsc0JBQVFILEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFDLFNBQWIsR0FBeUIsR0FBekIsR0FBK0JMLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFFLFFBRG5EO0FBRUEsc0JBQU9OLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFHLElBRnBCO0FBR0EseUJBQVVQLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFJO0FBSHZCLGFBQVY7QUFLQSxnQkFBSVIsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWYsY0FBYixDQUE2QixZQUE3QixDQUFKLEVBQWdEO0FBQzlDYyxrQkFBSWhCLE9BQUosR0FBY2EsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssVUFBYixDQUF3QnBCLGNBQXhCLENBQXdDLFNBQXhDLElBQXFEVyxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhSyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ3ZCLE9BQXJGLEdBQStGLEVBQTdHO0FBQ0Msa0JBQUlhLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFLLFVBQWIsQ0FBd0JwQixjQUF4QixDQUF3QyxjQUF4QyxDQUFKLEVBQTZEO0FBQzFEYyxvQkFBSVEsWUFBSixHQUFtQlgsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssVUFBYixDQUF3QkUsWUFBM0M7QUFDTDtBQUNBOztBQUdELG1CQUFLQyxRQUFMLENBQWVULEdBQWY7QUFDRDtBQUNGLFNBcEJEO0FBcUJEO0FBQ0Y7Ozs2QkFFUTtBQUFBOztBQUNYRixjQUFRQyxHQUFSLENBQVksS0FBS2pCLEtBQWpCO0FBQ0UsYUFDTTtBQUFBO0FBQUEsVUFBSyxXQUFVLE1BQWY7QUFDRSwrQ0FBSyxXQUFVLFlBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVUsaUJBQWQ7QUFBaUMsZUFBS0EsS0FBTCxDQUFXQztBQUE1QyxTQUZGO0FBSUssb0JBQUk7QUFDRixjQUFJLE9BQUtELEtBQUwsQ0FBV0ksY0FBWCxDQUEwQixjQUExQixDQUFKLEVBQStDO0FBQzVDLG1CQUFLSixLQUFMLENBQVcwQixZQUFYLENBQXdCdEIsY0FBeEIsQ0FBd0MsRUFBeEM7QUFDSyxtQkFBUTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxhQUFSO0FBQ0E7QUFDVCxTQUxGLEVBSko7QUFZRTtBQUFBO0FBQUE7QUFBRyxrREFBTSxXQUFVLGdDQUFoQixHQUFIO0FBQUE7QUFBQSxTQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUksZUFBS0osS0FBTCxDQUFXRTtBQUFmO0FBYkYsT0FETjtBQWtCQzs7Ozs7O2tCQUlZSixXIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL3Byb2ZpbGVjYXJkLnNjc3NcIjtcblxuY2xhc3MgUHJvZmlsZWNhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogbnVsbCxcbiAgICAgIHRhZ2xpbmU6ICcnLFxuICAgICAgdGFnbGluZXNob3c6IHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCd0YWcnKSA/IHRoaXMucHJvcHMudGFnIDogJydcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuICAgIGlmICghdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSAoJ3NlcnZpY2VjYWxsJykpIHtcbiAgICAgIHZhciBpZCA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpO1xuICAgICAgZmV0Y2ggKGAvYXBpL2dldHVzZXJkZXRhaWwvJHtpZH1gLCB7bWV0aG9kOiAnZ2V0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9fVxuICAgICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKClcbiAgICAgICkudGhlbiAoanNvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGpzb24pXG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5ICgnbGlzdCcpKSB7XG4gICAgICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAnbmFtZSc6IGpzb24ubGlzdFswXS5maXJzdE5hbWUgKyBcIiBcIiArIGpzb24ubGlzdFswXS5sYXN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2NpdHknOmpzb24ubGlzdFswXS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICAnY291bnRyeSc6anNvbi5saXN0WzBdLmNvdW50cnlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoanNvbi5saXN0WzBdLmhhc093blByb3BlcnR5ICgndXNlckRldGFpbCcpKSB7XG4gICAgICAgICAgICBvYmoudGFnbGluZSA9IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmhhc093blByb3BlcnR5ICgnYWJvdXRtZScpID8ganNvbi5saXN0WzBdLnVzZXJEZXRhaWwuYWJvdXRtZS50YWdsaW5lIDogJydcbiAgICAgICAgICAgICBpZiAoanNvbi5saXN0WzBdLnVzZXJEZXRhaWwuaGFzT3duUHJvcGVydHkgKCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgIG9iai5wcm9mZXNzaW9uYWwgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5wcm9mZXNzaW9uYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAob2JqKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGhlYWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDQ+XG4gICAgICAgICBcbiAgICAgICAgICAgeygoKT0+e1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5oYXNPd25Qcm9wZXJ0eSAoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q0VPICYgRm91bmRlciwgRXhhbXBsZTwvcD4pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj46IDwvcD5cbiAgICAgICAgICA8cD57dGhpcy5zdGF0ZS50YWdsaW5lfTwvcD5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlY2FyZDtcblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGVjYXJkLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})