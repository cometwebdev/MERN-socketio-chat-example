webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      e.target.disabled = true;\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          var tempData = [];\n          json.list.forEach(function (val1, k) {\n            if (val1.hasOwnProperty('friends')) {\n              var isExist = false;\n              val1.friends.forEach(function (frnd, k) {\n                if (frnd.userid === _this2.state.userid) {\n                  isExist = true;\n                }\n              });\n              if (!isExist) {\n                tempData.push(val1);\n              }\n            } else {\n              tempData.push(val1);\n            }\n          });\n          _this2.setState({ userList: tempData });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9iaiIsInJlcXVlc3RlZGJ5IiwicmVxdWVzdGVkdG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wRGF0YSIsImxpc3QiLCJmb3JFYWNoIiwidmFsMSIsImsiLCJpc0V4aXN0IiwiZnJpZW5kcyIsImZybmQiLCJwdXNoIiwic2V0U3RhdGUiLCJsaXN0SXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlld1Byb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNNQSxLOzs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxjQUFTQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QjtBQUZFLEtBQWI7QUFJQSxVQUFLQyxTQUFMLEdBQWUsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWY7QUFOaUI7QUFPbEI7Ozs7OEJBR1VDLEMsRUFBRUMsRSxFQUFHO0FBQ2RELFFBQUVFLE1BQUYsQ0FBU0MsUUFBVCxHQUFrQixJQUFsQjtBQUNBLFVBQUlDLE1BQUksRUFBRUMsYUFBWSxLQUFLYixLQUFMLENBQVdFLE1BQXpCLEVBQWlDWSxhQUFZTCxFQUE3QyxFQUFSO0FB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QUFBQTtBQUFBO0FBQUEsU0FBYjtBQUNEOztBQUVELGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0dBO0FBREg7QUFERixPQURGO0FBV0Q7Ozs7OztrQkFJWXJDLEsiLCJmaWxlIjoiMjQ2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGUvY3NzL2hvbWUuc2Nzc1wiO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlckxpc3Q6IFtdLFxuICAgICAgdXNlcmlkIDogd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtICgndXNlcmlkJylcbiAgICB9O1xuICAgIHRoaXMuYWRkRnJpZW5kPXRoaXMuYWRkRnJpZW5kLmJpbmQodGhpcyk7XG4gIH0gO1xuICBcbiAgXG4gICBhZGRGcmllbmQoZSxpZCl7XG4gICAgZS50YXJnZXQuZGlzYWJsZWQ9dHJ1ZTtcbiAgICBsZXQgb2JqPXsgcmVxdWVzdGVkYnk6dGhpcy5zdGF0ZS51c2VyaWQsIHJlcXVlc3RlZHRvOmlkIH07XG4gICAgIGZldGNoIChgL2FwaS9zZW5kcmVxdWVzdGAsIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KCBvYmopXG4gICAgICAgICAgfVxuICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpKS50aGVuIChqc29uID0+IHtcbiAgICAgICBcbiAgICB9KTtcbiAgfVxuICBcbiAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoIChgL2FwaS9nZXR1c2VybGlzdC8ke3RoaXMuc3RhdGUudXNlcmlkfWAsIHttZXRob2Q6ICdnZXQnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ319XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkgKCdsaXN0JykpIHtcbiAgICAgIGxldCB0ZW1wRGF0YT1bXTsgIFxuICAgICAgICBqc29uLmxpc3QuZm9yRWFjaCgodmFsMSxrKT0+e1xuICAgICAgICAgICAgICAgICAgIGlmKHZhbDEuaGFzT3duUHJvcGVydHkoJ2ZyaWVuZHMnKSl7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdD1mYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWwxLmZyaWVuZHMuZm9yRWFjaCgoZnJuZCxrKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZnJuZC51c2VyaWQ9PT10aGlzLnN0YXRlLnVzZXJpZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3Q9dHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICBpZighaXNFeGlzdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERhdGEucHVzaCh2YWwxKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBEYXRhLnB1c2godmFsMSkgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJMaXN0OiB0ZW1wRGF0YX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5zdGF0ZS51c2VyTGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gbnVsbDtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSBsaXN0Lm1hcCAoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTUgY29sLXhzLTEyXCIga2V5PXtvYmouX2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj4gXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hdmF0YXJzL3Byb2ZpbGUucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPntvYmouZmlyc3ROYW1lfSB7b2JqLmxhc3ROYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgPHA+IHtvYmouZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiICAgb25DbGljaz17KGUpPT57IHRoaXMuYWRkRnJpZW5kKGUsb2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICZuYnNwOyBBZGQgYXMgZnJpZW5kIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4teHNcIiBvbkNsaWNrPXsoZSk9PnsgdGhpcy52aWV3UHJvZmlsZShvYmouX2lkKX19PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtWaWV3IFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SXRlbXMgPSAoPGRpdj5ObyByZWNvcmQgPC9kaXY+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuXG5cblxuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})