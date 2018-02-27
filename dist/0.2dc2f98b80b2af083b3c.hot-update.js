webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      console.log(e);\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          _this2.setState({ userList: json.list });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { disabled: \"\", className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwib2JqIiwicmVxdWVzdGVkYnkiLCJyZXF1ZXN0ZWR0byIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJoYXNPd25Qcm9wZXJ0eSIsInNldFN0YXRlIiwibGlzdCIsImxpc3RJdGVtcyIsImxlbmd0aCIsIm1hcCIsIl9pZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ2aWV3UHJvZmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ01BLEs7OztBQUVKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLGNBQVNDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCO0FBRkUsS0FBYjtBQUlBLFVBQUtDLFNBQUwsR0FBZSxNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBZjtBQU5pQjtBQU9sQjs7Ozs4QkFHVUMsQyxFQUFFQyxFLEVBQUc7QUFDZEMsY0FBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsVUFBSUksTUFBSSxFQUFFQyxhQUFZLEtBQUtiLEtBQUwsQ0FBV0UsTUFBekIsRUFBaUNZLGFBQVlMLEVBQTdDLEVBQVI7QUFDQ00sZ0NBQ087QUFDRUMsZ0JBQVEsTUFEVjtBQUVFQyxpQkFBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFGWDtBQUdFQyxjQUFLQyxLQUFLQyxTQUFMLENBQWdCUixHQUFoQjtBQUhQLE9BRFAsRUFNQ1MsSUFORCxDQU1PO0FBQUEsZUFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsT0FOUCxFQU0yQkYsSUFOM0IsQ0FNaUMsZ0JBQVEsQ0FFekMsQ0FSQTtBQVNGOzs7d0NBRW9CO0FBQUE7O0FBRW5CTixrQ0FBMkIsS0FBS2YsS0FBTCxDQUFXRSxNQUF0QyxFQUFnRCxFQUFDYyxRQUFRLEtBQVQsRUFBZ0JDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQXpCLEVBQWhELEVBQ0VJLElBREYsQ0FDUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFIsRUFDNEJGLElBRDVCLENBQ2tDLGdCQUFRO0FBQ3hDLFlBQUlFLEtBQUtDLGNBQUwsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxpQkFBS0MsUUFBTCxDQUFlLEVBQUN4QixVQUFVc0IsS0FBS0csSUFBaEIsRUFBZjtBQUNEO0FBQ0YsT0FMRDtBQU1EOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFJQSxPQUFPLEtBQUsxQixLQUFMLENBQVdDLFFBQXRCO0FBQ0EsVUFBSTBCLFlBQVksSUFBaEI7QUFDQSxVQUFJRCxLQUFLRSxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJELG9CQUFZRCxLQUFLRyxHQUFMLENBQVUsVUFBQ2pCLEdBQUQsRUFBUztBQUM3QixpQkFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDZCQUFmLEVBQTZDLEtBQUtBLElBQUlrQixHQUF0RDtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsWUFBZjtBQUNJLHVEQUFLLEtBQUkseUJBQVQsRUFBbUMsV0FBVSxPQUE3QyxHQURKO0FBRUs7QUFBQTtBQUFBLG9CQUFJLFdBQVUsaUJBQWQ7QUFBaUNsQixzQkFBSW1CLFNBQXJDO0FBQUE7QUFBaURuQixzQkFBSW9CO0FBQXJELGlCQUZMO0FBR0s7QUFBQTtBQUFBO0FBQUE7QUFBS3BCLHNCQUFJcUI7QUFBVCxpQkFITDtBQUlJO0FBQUE7QUFBQSxvQkFBUSxVQUFTLEVBQWpCLEVBQW9CLFdBQVUsd0JBQTlCLEVBQXlELFNBQVMsaUJBQUN6QixDQUFELEVBQUs7QUFBRSw2QkFBS0YsU0FBTCxDQUFlRSxDQUFmLEVBQWlCSSxJQUFJa0IsR0FBckI7QUFBMEIscUJBQW5HO0FBQ0UsdURBQUcsV0FBVSwwQkFBYixHQURGO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBU0k7QUFBQTtBQUFBLG9CQUFRLFdBQVUsd0JBQWxCLEVBQTJDLFNBQVMsaUJBQUN0QixDQUFELEVBQUs7QUFBRSw2QkFBSzBCLFdBQUwsQ0FBaUJ0QixJQUFJa0IsR0FBckI7QUFBMEIscUJBQXJGO0FBQ0UsdURBQUcsV0FBVSw4QkFBYixHQURGO0FBQUE7QUFBQTtBQVRKO0FBREY7QUFERixXQURGO0FBb0JELFNBckJXLENBQVo7QUF1QkQsT0F4QkQsTUF3Qk87QUFDTEgsb0JBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFiO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDR0E7QUFESDtBQURGLE9BREY7QUFXRDs7Ozs7O2tCQUlZN0IsSyIsImZpbGUiOiIyNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvaG9tZS5zY3NzXCI7XG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICB1c2VyaWQgOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKVxuICAgIH07XG4gICAgdGhpcy5hZGRGcmllbmQ9dGhpcy5hZGRGcmllbmQuYmluZCh0aGlzKTtcbiAgfSA7XG4gIFxuICBcbiAgIGFkZEZyaWVuZChlLGlkKXtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBsZXQgb2JqPXsgcmVxdWVzdGVkYnk6dGhpcy5zdGF0ZS51c2VyaWQsIHJlcXVlc3RlZHRvOmlkIH07XG4gICAgIGZldGNoIChgL2FwaS9zZW5kcmVxdWVzdGAsIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KCBvYmopXG4gICAgICAgICAgfVxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgICBcbiAgICB9KTtcbiAgfVxuICBcbiAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gICAgZmV0Y2ggKGAvYXBpL2dldHVzZXJsaXN0LyR7dGhpcy5zdGF0ZS51c2VyaWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlICh7dXNlckxpc3Q6IGpzb24ubGlzdH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5zdGF0ZS51c2VyTGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gbnVsbDtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSBsaXN0Lm1hcCAoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTUgY29sLXhzLTEyXCIga2V5PXtvYmouX2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj4gXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hdmF0YXJzL3Byb2ZpbGUucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPntvYmouZmlyc3ROYW1lfSB7b2JqLmxhc3ROYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgPHA+IHtvYmouZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD0nJyBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCIgICBvbkNsaWNrPXsoZSk9PnsgdGhpcy5hZGRGcmllbmQoZSxvYmouX2lkKX19PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgJm5ic3A7IEFkZCBhcyBmcmllbmQgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi14c1wiIG9uQ2xpY2s9eyhlKT0+eyB0aGlzLnZpZXdQcm9maWxlKG9iai5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1ZpZXcgUHJvZmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RJdGVtcyA9ICg8ZGl2Pk5vIHJlY29yZCA8L2Rpdj4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIHtsaXN0SXRlbXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG5cblxuXG4gIH1cbiAgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvY29tcG9uZW50cy9ob21lL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})