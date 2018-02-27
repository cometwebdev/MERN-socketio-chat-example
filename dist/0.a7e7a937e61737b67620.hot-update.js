webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      e.target.disabled = true;\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          var tempData = [];\n\n          json.list.forEach(function (val1, k) {\n            console.log(val1);\n            if (val1.hasOwnProperty('friends')) {\n              var isExist = false;\n              val1.friends.forEach(function (frnd, k) {\n                if (frnd.userid === _this2.state.userid) {\n                  isExist = true;\n                }\n              });\n              if (!isExist) {\n                tempData.push(val1);\n              }\n            } else {\n              tempData.push(val1);\n            }\n          });\n\n          console.log(tempData);\n          _this2.setState({ userList: tempData });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9iaiIsInJlcXVlc3RlZGJ5IiwicmVxdWVzdGVkdG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wRGF0YSIsImxpc3QiLCJmb3JFYWNoIiwidmFsMSIsImsiLCJjb25zb2xlIiwibG9nIiwiaXNFeGlzdCIsImZyaWVuZHMiLCJmcm5kIiwicHVzaCIsInNldFN0YXRlIiwibGlzdEl0ZW1zIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInZpZXdQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDTUEsSzs7O0FBRUosaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsY0FBU0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0I7QUFGRSxLQUFiO0FBSUEsVUFBS0MsU0FBTCxHQUFlLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFmO0FBTmlCO0FBT2xCOzs7OzhCQUdVQyxDLEVBQUVDLEUsRUFBRztBQUNkRCxRQUFFRSxNQUFGLENBQVNDLFFBQVQsR0FBa0IsSUFBbEI7QUFDQSxVQUFJQyxNQUFJLEVBQUVDLGFBQVksS0FBS2IsS0FBTCxDQUFXRSxNQUF6QixFQUFpQ1ksYUFB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QUFBQTtBQVRKO0FBREY7QUFERixXQURGO0FBb0JELFNBckJXLENBQVo7QUF1QkQsT0F4QkQsTUF3Qk87QUFDTEgsb0JBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFiO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDR0E7QUFESDtBQURGLE9BREY7QUFXRDs7Ozs7O2tCQUlZdkMsSyIsImZpbGUiOiIyNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvaG9tZS5zY3NzXCI7XG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICB1c2VyaWQgOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKVxuICAgIH07XG4gICAgdGhpcy5hZGRGcmllbmQ9dGhpcy5hZGRGcmllbmQuYmluZCh0aGlzKTtcbiAgfSA7XG4gIFxuICBcbiAgIGFkZEZyaWVuZChlLGlkKXtcbiAgICBlLnRhcmdldC5kaXNhYmxlZD10cnVlO1xuICAgIGxldCBvYmo9eyByZXF1ZXN0ZWRieTp0aGlzLnN0YXRlLnVzZXJpZCwgcmVxdWVzdGVkdG86aWQgfTtcbiAgICAgZmV0Y2ggKGAvYXBpL3NlbmRyZXF1ZXN0YCwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoIG9iailcbiAgICAgICAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgIFxuICAgIH0pO1xuICB9XG4gIFxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2ggKGAvYXBpL2dldHVzZXJsaXN0LyR7dGhpcy5zdGF0ZS51c2VyaWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgbGV0IHRlbXBEYXRhPVtdOyAgXG4gICAgICBcbiAgICAgICAganNvbi5saXN0LmZvckVhY2goKHZhbDEsayk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWwxKTtcbiAgICAgICAgICAgICAgICAgICBpZih2YWwxLmhhc093blByb3BlcnR5KCdmcmllbmRzJykpe1xuICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRXhpc3Q9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsMS5mcmllbmRzLmZvckVhY2goKGZybmQsayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZybmQudXNlcmlkPT09dGhpcy5zdGF0ZS51c2VyaWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4aXN0PXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBpZighaXNFeGlzdCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGVtcERhdGEucHVzaCh2YWwxKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcERhdGEucHVzaCh2YWwxKSBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgfSk7XG4gICAgICAgICBcbiAgICAgICAgIGNvbnNvbGUubG9nKHRlbXBEYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJMaXN0OiB0ZW1wRGF0YX0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBsaXN0ID0gdGhpcy5zdGF0ZS51c2VyTGlzdDtcbiAgICBsZXQgbGlzdEl0ZW1zID0gbnVsbDtcbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsaXN0SXRlbXMgPSBsaXN0Lm1hcCAoKG9iaikgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTUgY29sLXhzLTEyXCIga2V5PXtvYmouX2lkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj4gXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltZy9hdmF0YXJzL3Byb2ZpbGUucG5nXCIgY2xhc3NOYW1lPVwiaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2FwaXRhbGl6ZVwiPntvYmouZmlyc3ROYW1lfSB7b2JqLmxhc3ROYW1lfTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgPHA+IHtvYmouZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiICAgb25DbGljaz17KGUpPT57IHRoaXMuYWRkRnJpZW5kKGUsb2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICZuYnNwOyBBZGQgYXMgZnJpZW5kIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4teHNcIiBvbkNsaWNrPXsoZSk9PnsgdGhpcy52aWV3UHJvZmlsZShvYmouX2lkKX19PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtWaWV3IFByb2ZpbGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0SXRlbXMgPSAoPGRpdj5ObyByZWNvcmQgPC9kaXY+KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuXG5cblxuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})