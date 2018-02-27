webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(247);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Index = function (_Component) {\n  _inherits(Index, _Component);\n\n  function Index(props) {\n    _classCallCheck(this, Index);\n\n    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));\n\n    _this.state = {\n      userList: [],\n      userid: window.localStorage.getItem('userid')\n    };\n    _this.addFriend = _this.addFriend.bind(_this);\n    return _this;\n  }\n\n  _createClass(Index, [{\n    key: \"addFriend\",\n    value: function addFriend(e, id) {\n      e.target.disabled = true;\n      var obj = { requestedby: this.state.userid, requestedto: id };\n      fetch(\"/api/sendrequest\", {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(obj)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {});\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch(\"/api/getuserlist/\" + this.state.userid, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        if (json.hasOwnProperty('list')) {\n          var tempData = [];\n          json.list.forEach(function (val1, k) {\n            if (val1.hasOwnProperty('friends')) {\n              var isExist = false;\n              val1.friends.forEach(function (frnd, k) {\n                if (frnd.userid === _this2.state.userid) {\n                  isExist = true;\n                }\n              });\n              if (!isExist) {\n                tempData.push(val1);\n              }\n            } else {\n              tempData.push(val1);\n            }\n          });\n          _this2.setState({ userList: tempData });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var list = this.state.userList;\n      var listItems = null;\n\n      _react2.default.createElement(\n        \"div\",\n        { className: \"panel-heading clearfix\" },\n        _react2.default.createElement(\"h3\", { className: \"panel-title pull-left\" })\n      );\n      if (list.length > 0) {\n        listItems = list.map(function (obj) {\n          return _react2.default.createElement(\n            \"div\",\n            { className: \"col-md-4 col-sm-5 col-xs-12\", key: obj._id },\n            _react2.default.createElement(\n              \"div\",\n              { className: \"panel panel-default\" },\n              _react2.default.createElement(\n                \"div\",\n                { className: \"panel-body\" },\n                _react2.default.createElement(\"img\", { src: \"img/avatars/profile.png\", className: \"image\" }),\n                _react2.default.createElement(\n                  \"h4\",\n                  { className: \"text-capitalize\" },\n                  obj.firstName,\n                  \" \",\n                  obj.lastName\n                ),\n                _react2.default.createElement(\n                  \"p\",\n                  null,\n                  \" \",\n                  obj.email\n                ),\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-primary btn-xs\", onClick: function onClick(e) {\n                      _this3.addFriend(e, obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-plus\" }),\n                  \"\\xA0 Add as friend \"\n                ),\n                \"\\xA0\",\n                _react2.default.createElement(\n                  \"button\",\n                  { className: \"btn btn-success btn-xs\", onClick: function onClick(e) {\n                      _this3.viewProfile(obj._id);\n                    } },\n                  _react2.default.createElement(\"i\", { className: \"glyphicon glyphicon-envelope\" }),\n                  \"\\xA0View Profile\"\n                )\n              )\n            )\n          );\n        });\n      } else {\n        listItems = _react2.default.createElement(\n          \"div\",\n          null,\n          \"No record \"\n        );\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          listItems\n        )\n      );\n    }\n  }]);\n\n  return Index;\n}(_react.Component);\n\nexports.default = Index;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvaG9tZS9pbmRleC5qcz8yNWFmIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsInVzZXJMaXN0IiwidXNlcmlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFkZEZyaWVuZCIsImJpbmQiLCJlIiwiaWQiLCJ0YXJnZXQiLCJkaXNhYmxlZCIsIm9iaiIsInJlcXVlc3RlZGJ5IiwicmVxdWVzdGVkdG8iLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wRGF0YSIsImxpc3QiLCJmb3JFYWNoIiwidmFsMSIsImsiLCJpc0V4aXN0IiwiZnJpZW5kcyIsImZybmQiLCJwdXNoIiwic2V0U3RhdGUiLCJsaXN0SXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlld1Byb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNNQSxLOzs7QUFFSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxjQUFTQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QjtBQUZFLEtBQWI7QUFJQSxVQUFLQyxTQUFMLEdBQWUsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWY7QUFOaUI7QUFPbEI7Ozs7OEJBR1VDLEMsRUFBRUMsRSxFQUFHO0FBQ2RELFFBQUVFLE1BQUYsQ0FBU0MsUUFBVCxHQUFrQixJQUFsQjtBQUNBLFVBQUlDLE1BQUksRUFBRUMsYUFBWSxLQUFLYixLQUFMLENBQVdFLE1BQXpCLEVBQWlDWSxhQUFZTCxFQUE3QyxFQUFSO0FB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RixXQURGO0FBb0JELFNBckJXLENBQVo7QUF1QkQsT0F4QkQsTUF3Qk87QUFDTEgsb0JBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFiO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDR0E7QUFESDtBQURGLE9BREY7QUFXRDs7Ozs7O2tCQUlZckMsSyIsImZpbGUiOiIyNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZS9jc3MvaG9tZS5zY3NzXCI7XG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyTGlzdDogW10sXG4gICAgICB1c2VyaWQgOiB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKVxuICAgIH07XG4gICAgdGhpcy5hZGRGcmllbmQ9dGhpcy5hZGRGcmllbmQuYmluZCh0aGlzKTtcbiAgfSA7XG4gIFxuICBcbiAgIGFkZEZyaWVuZChlLGlkKXtcbiAgICBlLnRhcmdldC5kaXNhYmxlZD10cnVlO1xuICAgIGxldCBvYmo9eyByZXF1ZXN0ZWRieTp0aGlzLnN0YXRlLnVzZXJpZCwgcmVxdWVzdGVkdG86aWQgfTtcbiAgICAgZmV0Y2ggKGAvYXBpL3NlbmRyZXF1ZXN0YCwgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoIG9iailcbiAgICAgICAgICB9XG4gICAgKS50aGVuIChyZXMgPT4gcmVzLmpzb24gKCkpLnRoZW4gKGpzb24gPT4ge1xuICAgICAgIFxuICAgIH0pO1xuICB9XG4gIFxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2ggKGAvYXBpL2dldHVzZXJsaXN0LyR7dGhpcy5zdGF0ZS51c2VyaWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgbGV0IHRlbXBEYXRhPVtdOyAgXG4gICAgICAgIGpzb24ubGlzdC5mb3JFYWNoKCh2YWwxLGspPT57XG4gICAgICAgICAgICAgICAgICAgaWYodmFsMS5oYXNPd25Qcm9wZXJ0eSgnZnJpZW5kcycpKXtcbiAgICAgICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0PWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbDEuZnJpZW5kcy5mb3JFYWNoKChmcm5kLGspPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihmcm5kLnVzZXJpZD09PXRoaXMuc3RhdGUudXNlcmlkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFeGlzdD10cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGlmKCFpc0V4aXN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wRGF0YS5wdXNoKHZhbDEpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGVtcERhdGEucHVzaCh2YWwxKSA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlICh7dXNlckxpc3Q6IHRlbXBEYXRhfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIGxpc3QgPSB0aGlzLnN0YXRlLnVzZXJMaXN0O1xuICAgIGxldCBsaXN0SXRlbXMgPSBudWxsO1xuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZyBjbGVhcmZpeFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhbmVsLXRpdGxlIHB1bGwtbGVmdFwiPjwvaDM+XG4gICAgXG4gICAgPC9kaXY+XG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgbGlzdEl0ZW1zID0gbGlzdC5tYXAgKChvYmopID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00IGNvbC1zbS01IGNvbC14cy0xMlwiIGtleT17b2JqLl9pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+IFxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvYXZhdGFycy9wcm9maWxlLnBuZ1wiIGNsYXNzTmFtZT1cImltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57b2JqLmZpcnN0TmFtZX0ge29iai5sYXN0TmFtZX08L2g0PlxuICAgICAgICAgICAgICAgICAgIDxwPiB7b2JqLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIiAgIG9uQ2xpY2s9eyhlKT0+eyB0aGlzLmFkZEZyaWVuZChlLG9iai5faWQpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAmbmJzcDsgQWRkIGFzIGZyaWVuZCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXhzXCIgb25DbGljaz17KGUpPT57IHRoaXMudmlld1Byb2ZpbGUob2JqLl9pZCl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7VmlldyBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdEl0ZW1zID0gKDxkaXY+Tm8gcmVjb3JkIDwvZGl2Pik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgKTtcblxuXG5cbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL2hvbWUvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///246\n");

/***/ })

})