webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      console.log(e);\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          _this2.setState({ userList: json.list });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwib2JqIiwicmVxdWVzdGVkYnkiLCJyZXF1ZXN0ZWR0byIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFN0YXRlIiwibGlzdCIsImxpc3RJdGVtcyIsImxlbmd0aCIsIm1hcCIsIl9pZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ2aWV3UHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ01BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLGNBQVNDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCO0FBRkUsS0FBYjtBQUlBLFVBQUtDLFNBQUwsR0FBZSxNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBZjtBQU5pQjtBQU9sQjs7Ozs4QkFHVUMsQyxFQUFFQyxFLEVBQUc7QUFDZEMsY0FBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsVUFBSUksTUFBSSxFQUFFQyxhQUFZLEtBQUtiLEtBQUwsQ0FBV0UsTUFBekIsRUFBaUNZLGFBQVlMLEVBQTdDLEVBQVI7QUFDQ00sZ0NBQ087QUFDRUMsZ0JBQVEsTUFEVjtBQUVFQyxpQkFBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFGWDtBQUdFQyxjQUFLQyxLQUFLQyxTQUFMLENBQWdCUixHQUFoQjtBQUhQLE9BRFAsRUFNQ1MsSUFORCxDQU1PO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FOUCxFQU0yQkYsSUFOM0IsQ0FNaUMsZ0JBQVEsQ0FFekMsQ0FSQTtBQVNGOzs7d0NBRW9CO0FBQUE7O0FBRW5CTixrQ0FBMkIsS0FBS2YsS0FBTCxDQUFXRSxNQUF0QyxFQUFnRCxFQUFDYyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQWhELEVBQ0VJLElBREYsQ0FDUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFIsRUFDNEJGLElBRDVCLENBQ2tDLGdCQUFRO0FBQ3hDLFlBQUlFLEtBQUtDLGNBQUwsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxpQkFBS0MsUUFBTCxDQUFlLEVBQUN4QixVQUFVc0IsS0FBS0csSUFBaEIsRUFBZjtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQSxPQUFPLEtBQUsxQixLQUFMLENBQVdDLFFBQXRCO0FBQ0EsVUFBSTBCLFlBQVksSUFBaEI7QUFDQSxVQUFJRCxLQUFLRSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJELG9CQUFZRCxLQUFLRyxHQUFMLENBQVUsVUFBQ2pCLEdBQUQsRUFBUztBQUM3QixpQkFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmLEVBQTZDLEtBQUtBLElBQUlrQixHQUF0RDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJLHVEQUFLLEtBQUkseUJBQVQsRUFBbUMsV0FBVSxPQUE3QyxHQURKO0FBRUs7QUFBQTtBQUFBLG9CQUFJLFdBQVUsaUJBQWQ7QUFBaUNsQixzQkFBSW1CLFNBQXJDO0FBQUE7QUFBaURuQixzQkFBSW9CO0FBQXJELGlCQUZMO0FBR0s7QUFBQTtBQUFBO0FBQUE7QUFBS3BCLHNCQUFJcUI7QUFBVCxpQkFITDtBQUlJO0FBQUE7QUFBQSxvQkFBUyxXQUFVLHdCQUFuQixFQUE4QyxTQUFTLGlCQUFDekIsQ0FBRCxFQUFLO0FBQUUsNkJBQUtGLFNBQUwsQ0FBZUUsQ0FBZixFQUFpQkksSUFBSWtCLEdBQXJCO0FBQTBCLHFCQUF4RjtBQUNFLHVEQUFHLFdBQVUsMEJBQWIsR0FERjtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQVNJO0FBQUE7QUFBQSxvQkFBUSxXQUFVLHdCQUFsQixFQUEyQyxTQUFTLGlCQUFDdEIsQ0FBRCxFQUFLO0FBQUUsNkJBQUswQixXQUFMLENBQWlCdEIsSUFBSWtCLEdBQXJCO0FBQTBCLHFCQUFyRjtBQUNFLHVEQUFHLFdBQVUsOEJBQWIsR0FERjtBQUFBO0FBQUE7QUFUSjtBQURGO0FBREYsV0FERjtBQW9CRCxTQXJCVyxDQUFaO0FBdUJELE9BeEJELE1Bd0JPO0FBQ0xILG9CQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBYjtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0dBO0FBREg7QUFERixPQURGO0FBV0Q7Ozs7OztrQkFJWTdCLEsiLCJmaWxlIjoiMjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL2hvbWUuc2Nzc1wiO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlckxpc3Q6IFtdLFxuICAgICAgdXNlcmlkIDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJylcbiAgICB9O1xuICAgIHRoaXMuYWRkRnJpZW5kPXRoaXMuYWRkRnJpZW5kLmJpbmQodGhpcyk7XG4gIH0gO1xuICBcbiAgXG4gICBhZGRGcmllbmQoZSxpZCl7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgbGV0IG9iaj17IHJlcXVlc3RlZGJ5OnRoaXMuc3RhdGUudXNlcmlkLCByZXF1ZXN0ZWR0bzppZCB9O1xuICAgICBmZXRjaCAoYC9hcGkvc2VuZHJlcXVlc3RgLCBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSggb2JqKVxuICAgICAgICAgIH1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICAgXG4gICAgfSk7XG4gIH1cbiAgXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgIGZldGNoIChgL2FwaS9nZXR1c2VybGlzdC8ke3RoaXMuc3RhdGUudXNlcmlkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJMaXN0OiBqc29uLmxpc3R9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgbGlzdCA9IHRoaXMuc3RhdGUudXNlckxpc3Q7XG4gICAgbGV0IGxpc3RJdGVtcyA9IG51bGw7XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgbGlzdEl0ZW1zID0gbGlzdC5tYXAgKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS01IGNvbC14cy0xMlwiIGtleT17b2JqLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+IFxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFycy9wcm9maWxlLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57b2JqLmZpcnN0TmFtZX0ge29iai5sYXN0TmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgIDxwPiB7b2JqLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIiAgIG9uQ2xpY2s9eyhlKT0+eyB0aGlzLmFkZEZyaWVuZChlLG9iai5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAmbmJzcDsgQWRkIGFzIGZyaWVuZCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzXCIgb25DbGljaz17KGUpPT57IHRoaXMudmlld1Byb2ZpbGUob2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7VmlldyBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdEl0ZW1zID0gKDxkaXY+Tm8gcmVjb3JkIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgKTtcblxuXG5cbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL2hvbWUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})