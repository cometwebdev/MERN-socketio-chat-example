webpackHotUpdate(0,{

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin(props) {\n    _classCallCheck(this, Signin);\n\n    var _this = _possibleConstructorReturn(this, (Signin.__proto__ || Object.getPrototypeOf(Signin)).call(this, props));\n\n    _this.state = {\n      firstName: '',\n      lastName: '',\n      email: '',\n      password: '',\n      //  username: 'anurag@gmail.com',\n      // loginpass: '1234567890',\n      username: '',\n      loginpass: '',\n      loginError: '',\n      signupError: ''\n    };\n\n    _this.handleSignIn = _this.handleSignIn.bind(_this);\n    return _this;\n  }\n\n  _createClass(Signin, [{\n    key: 'handleSignIn',\n    value: function handleSignIn() {\n\n      if (this.state.username !== '' && this.state.loginpass !== '') {\n        this.callSignInApi(this.state);\n      } else {\n        alert(\"Please Enter Login Information \");\n      }\n    }\n  }, {\n    key: 'callSignInApi',\n    value: function callSignInApi(data) {\n      var _this2 = this;\n\n      fetch('/api/singin', {\n        method: 'post',\n        headers: { 'Content-Type': 'application/json' },\n        body: JSON.stringify(data)\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.serviceSignInHandler(json);\n      });\n    }\n  }, {\n    key: 'serviceSignInHandler',\n    value: function serviceSignInHandler(data) {\n\n      if (data.status === 'success') {\n        PubSub.publish('IS_LOGIN', { status: true, token: data.accesstoken, userid: data.userid });\n      } else {\n        alert(data.message);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'col-md-12' },\n        _react2.default.createElement(\n          'div',\n          { className: 'form-box' },\n          _react2.default.createElement(\n            'div',\n            { className: 'form-top-left' },\n            _react2.default.createElement(\n              'h3',\n              null,\n              'Login '\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Enter username and password to log on:'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'text', name: 'form-username', value: this.state.username, placeholder: 'Username...',\n              className: 'form-control', onChange: function onChange(event) {\n                _this3.setState({ username: event.target.value });\n              } })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'form-group' },\n            _react2.default.createElement('input', { type: 'password', name: 'form-password',\n              value: this.state.loginpass,\n              onChange: function onChange(event) {\n                _this3.setState({ loginpass: event.target.value });\n              },\n              placeholder: 'Password...', className: 'form-control', id: 'form-password' })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement('input', { onClick: this.handleSignIn, className: 'btn  btn-transparent', value: 'Sign in!', type: 'button' })\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'new-acount' },\n            _react2.default.createElement(\n              'p',\n              null,\n              'Don\\'t Have an account? ',\n              _react2.default.createElement(\n                'a',\n                { href: 'sign-up.html' },\n                ' SIGN UP'\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nexports.default = Signin;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4vU2lnbmluLmpzPzc5ZTEiXSwibmFtZXMiOlsiU2lnbmluIiwicHJvcHMiLCJzdGF0ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwibG9naW5wYXNzIiwibG9naW5FcnJvciIsInNpZ251cEVycm9yIiwiaGFuZGxlU2lnbkluIiwiYmluZCIsImNhbGxTaWduSW5BcGkiLCJhbGVydCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VydmljZVNpZ25JbkhhbmRsZXIiLCJzdGF0dXMiLCJQdWJTdWIiLCJwdWJsaXNoIiwidG9rZW4iLCJhY2Nlc3N0b2tlbiIsInVzZXJpZCIsIm1lc3NhZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUNNQSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVcsRUFEQTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS1g7QUFDQTtBQUNBQyxnQkFBVSxFQVBDO0FBUVhDLGlCQUFXLEVBUkE7QUFTWEMsa0JBQVksRUFURDtBQVVYQyxtQkFBYTtBQVZGLEtBQWI7O0FBYUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQWZpQjtBQWdCbEI7Ozs7bUNBRWM7O0FBRWIsVUFBSSxLQUFLVixLQUFMLENBQVdLLFFBQVgsS0FBd0IsRUFBeEIsSUFBOEIsS0FBS0wsS0FBTCxDQUFXTSxTQUFYLEtBQXlCLEVBQTNELEVBQStEO0FBQzdELGFBQUtLLGFBQUwsQ0FBb0IsS0FBS1gsS0FBekI7QUFDRCxPQUZELE1BRU87QUFDTFksY0FBTyxpQ0FBUDtBQUVEO0FBQ0Y7OztrQ0FFYUMsSSxFQUFNO0FBQUE7O0FBRWxCQyxZQUFPLGFBQVAsRUFBc0I7QUFDcEJDLGdCQUFRLE1BRFk7QUFFcEJDLGlCQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUZXO0FBR3BCQyxjQUFNQyxLQUFLQyxTQUFMLENBQWdCTixJQUFoQjtBQUhjLE9BQXRCLEVBS0VPLElBTEYsQ0FLUTtBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BTFIsRUFLNEJGLElBTDVCLENBS2tDLGdCQUFRO0FBQ3hDLGVBQUtHLG9CQUFMLENBQTJCRCxJQUEzQjtBQUNELE9BUEQ7QUFVRDs7O3lDQUVvQlQsSSxFQUFNOztBQUV6QixVQUFJQSxLQUFLVyxNQUFMLEtBQWdCLFNBQXBCLEVBQStCO0FBQzdCQyxlQUFPQyxPQUFQLENBQWdCLFVBQWhCLEVBQTRCLEVBQUNGLFFBQVEsSUFBVCxFQUFlRyxPQUFPZCxLQUFLZSxXQUEzQixFQUF3Q0MsUUFBUWhCLEtBQUtnQixNQUFyRCxFQUE1QjtBQUNELE9BRkQsTUFFTztBQUNMakIsY0FBT0MsS0FBS2lCLE9BQVo7QUFDRDtBQUVGOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUVJO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUNBO0FBQUE7QUFBQSxjQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixXQURBO0FBTUE7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0UscURBQVEsTUFBSyxNQUFiLEVBQW9CLE1BQUssZUFBekIsRUFBeUMsT0FBUSxLQUFLOUIsS0FBTCxDQUFXSyxRQUE1RCxFQUFzRSxhQUFZLGFBQWxGO0FBQ1EseUJBQVUsY0FEbEIsRUFDaUMsVUFBVSxrQkFBQzBCLEtBQUQsRUFBVztBQUN4RCx1QkFBS0MsUUFBTCxDQUFlLEVBQUMzQixVQUFVMEIsTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFmO0FBQStDLGVBRjdDO0FBREYsV0FOQTtBQVdBO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFLHFEQUFPLE1BQUssVUFBWixFQUF1QixNQUFLLGVBQTVCO0FBQ08scUJBQ1AsS0FBS2xDLEtBQUwsQ0FBV00sU0FGWDtBQUdPLHdCQUFVLGtCQUFDeUIsS0FBRCxFQUFXO0FBQzFCLHVCQUFLQyxRQUFMLENBQWUsRUFBQzFCLFdBQVd5QixNQUFNRSxNQUFOLENBQWFDLEtBQXpCLEVBQWY7QUFBZ0QsZUFKbEQ7QUFLTywyQkFBWSxhQUxuQixFQUtpQyxXQUFVLGNBTDNDLEVBSzBELElBQUcsZUFMN0Q7QUFERixXQVhBO0FBbUJBO0FBQUE7QUFBQTtBQUNFLHFEQUFPLFNBQ0gsS0FBS3pCLFlBRFQsRUFDdUIsV0FBVSxzQkFEakMsRUFDd0QsT0FBTSxVQUQ5RCxFQUN5RSxNQUFLLFFBRDlFO0FBREYsV0FuQkE7QUF3QkM7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0o7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFBQTtBQUFBLGtCQUFHLE1BQUssY0FBUjtBQUFBO0FBQUE7QUFBMUI7QUFESTtBQXhCRDtBQURGLE9BRko7QUFvQ0c7Ozs7OztrQkFJWVgsTSIsImZpbGUiOiIyODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jbGFzcyBTaWduaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIC8vICB1c2VybmFtZTogJ2FudXJhZ0BnbWFpbC5jb20nLFxuICAgICAgLy8gbG9naW5wYXNzOiAnMTIzNDU2Nzg5MCcsXG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBsb2dpbnBhc3M6ICcnLFxuICAgICAgbG9naW5FcnJvcjogJycsXG4gICAgICBzaWdudXBFcnJvcjogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVTaWduSW4gPSB0aGlzLmhhbmRsZVNpZ25Jbi5iaW5kICh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNpZ25JbigpIHtcblxuICAgIGlmICh0aGlzLnN0YXRlLnVzZXJuYW1lICE9PSAnJyAmJiB0aGlzLnN0YXRlLmxvZ2lucGFzcyAhPT0gJycpIHtcbiAgICAgIHRoaXMuY2FsbFNpZ25JbkFwaSAodGhpcy5zdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0IChcIlBsZWFzZSBFbnRlciBMb2dpbiBJbmZvcm1hdGlvbiBcIik7XG5cbiAgICB9XG4gIH1cblxuICBjYWxsU2lnbkluQXBpKGRhdGEpIHtcblxuICAgIGZldGNoICgnL2FwaS9zaW5naW4nLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5IChkYXRhKVxuICAgIH1cbiAgICApLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSkudGhlbiAoanNvbiA9PiB7XG4gICAgICB0aGlzLnNlcnZpY2VTaWduSW5IYW5kbGVyIChqc29uKVxuICAgIH0pO1xuXG5cbiAgfVxuXG4gIHNlcnZpY2VTaWduSW5IYW5kbGVyKGRhdGEpIHtcblxuICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCAoJ0lTX0xPR0lOJywge3N0YXR1czogdHJ1ZSwgdG9rZW46IGRhdGEuYWNjZXNzdG9rZW4sIHVzZXJpZDogZGF0YS51c2VyaWR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQgKGRhdGEubWVzc2FnZSk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWJveFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS10b3AtbGVmdFwiPlxuICAgICAgICAgICAgPGgzPkxvZ2luIDwvaDM+XG4gICAgICAgICAgICA8cD5FbnRlciB1c2VybmFtZSBhbmQgcGFzc3dvcmQgdG8gbG9nIG9uOjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0ICB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb3JtLXVzZXJuYW1lXCIgdmFsdWUgPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lLi4uXCIgIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAoe3VzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KX19IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cImZvcm0tcGFzc3dvcmRcIiAgIFxuICAgICAgICAgICAgICAgICAgIHZhbHVlID17XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxvZ2lucGFzc30gICBcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKHtsb2dpbnBhc3M6IGV2ZW50LnRhcmdldC52YWx1ZX0pfX1cbiAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkLi4uXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJmb3JtLXBhc3N3b3JkXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXQgb25DbGljaz17XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTaWduSW59IGNsYXNzTmFtZT1cImJ0biAgYnRuLXRyYW5zcGFyZW50XCIgdmFsdWU9XCJTaWduIGluIVwiIHR5cGU9XCJidXR0b25cIi8+XG4gICAgICAgICAgPC9kaXY+XHRcbiAgICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctYWNvdW50XCI+XG5cdFx0XHRcdFx0XHRcdDxwPkRvbid0IEhhdmUgYW4gYWNjb3VudD8gPGEgaHJlZj1cInNpZ24tdXAuaHRtbFwiPiBTSUdOIFVQPC9hPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBTaWduaW47XG5cblxuXG4gICAgICAgICAgICAgICAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL2xvZ2luL1NpZ25pbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///287\n");

/***/ })

})