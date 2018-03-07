webpackHotUpdate(0,{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _profilecard = __webpack_require__(96);\n\nvar _profilecard2 = _interopRequireDefault(_profilecard);\n\nvar _listing = __webpack_require__(40);\n\nvar _listing2 = _interopRequireDefault(_listing);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid')\n    };\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'main-landing row content' },\n        function () {\n          if (_this2.state.currentuser) {\n            return _react2.default.createElement(\n              'div',\n              { className: 'landing-page' },\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(_profilecard2.default, null),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'panel panel-default' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'panel-heading' },\n                    _react2.default.createElement(\n                      'h5',\n                      null,\n                      'Personal Details'\n                    ),\n                    _react2.default.createElement(\n                      'p',\n                      { className: 'page-subtitle small' },\n                      'Limited information is visible'\n                    )\n                  ),\n                  _react2.default.createElement('div', { className: 'clearfix' })\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-6 col-sm-6' },\n                _react2.default.createElement(_listing2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-3 col-sm-6 proilecard' },\n                _react2.default.createElement(\n                  'div',\n                  { className: 'well well-small clearfix' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'row-fluid' },\n                    _react2.default.createElement(\n                      'div',\n                      { className: 'span4' },\n                      _react2.default.createElement(\n                        'h4',\n                        null,\n                        'Jonnie Spratley'\n                      ),\n                      _react2.default.createElement(\n                        'ul',\n                        { className: 'unstyled' },\n                        _react2.default.createElement(\n                          'li',\n                          null,\n                          _react2.default.createElement('i', { className: 'icon-envelope' }),\n                          ' jonniespratley@me.com'\n                        )\n                      )\n                    )\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: 'panel panel-default' },\n                  _react2.default.createElement(\n                    'div',\n                    { className: 'panel-heading' },\n                    _react2.default.createElement(\n                      'h5',\n                      null,\n                      'Personal Details'\n                    ),\n                    _react2.default.createElement(\n                      'p',\n                      { className: 'page-subtitle small' },\n                      'Limited information is visible'\n                    )\n                  ),\n                  _react2.default.createElement('div', { className: 'clearfix' })\n                )\n              )\n            );\n          } else {\n            return _react2.default.createElement(\n              'div',\n              null,\n              _react2.default.createElement(\n                'div',\n                { className: 'col-md-8 col-sm-8' },\n                _react2.default.createElement(_listing2.default, { forall: 'true' })\n              ),\n              _react2.default.createElement('div', { className: 'col-md-4 col-sm-4' })\n            );\n          }\n        }()\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcz9kOGEyIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ01BLE87OztBQUVOLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1pBLEtBRFk7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNiQyxtQkFBYUMsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0I7QUFEQSxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQUE7O0FBQ1QsYUFDQTtBQUFBO0FBQUEsVUFBSyxXQUFVLDBCQUFmO0FBR0csb0JBQU07QUFDUCxjQUFJLE9BQUtKLEtBQUwsQ0FBV0MsV0FBZixFQUE0QjtBQUM1QixtQkFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsOEJBQWY7QUFDRywwRUFESDtBQUdJO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUE7QUFGRixtQkFERjtBQUtFLHlEQUFLLFdBQVUsVUFBZjtBQUxGO0FBSEosZUFERjtBQWdCRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNJLG1FQUFTLFFBQU8sTUFBaEI7QUFESixlQWhCRjtBQW1CRTtBQUFBO0FBQUEsa0JBQUssV0FBVSw4QkFBZjtBQUVHO0FBQUE7QUFBQSxvQkFBSyxXQUFVLDBCQUFmO0FBQ0M7QUFBQTtBQUFBLHNCQUFLLFdBQVUsV0FBZjtBQUVFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLE9BQWY7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURIO0FBRUU7QUFBQTtBQUFBLDBCQUFJLFdBQVUsVUFBZDtBQUNFO0FBQUE7QUFBQTtBQUFJLCtEQUFHLFdBQVUsZUFBYixHQUFKO0FBQUE7QUFBQTtBQURGO0FBRkY7QUFGRjtBQURELGlCQUZIO0FBZ0JFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0k7QUFBQTtBQUFBLHNCQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFFRTtBQUFBO0FBQUEsd0JBQUcsV0FBVSxxQkFBYjtBQUFBO0FBQUE7QUFGRixtQkFESjtBQUtJLHlEQUFLLFdBQVUsVUFBZjtBQUxKO0FBaEJGO0FBbkJGLGFBREE7QUFxREMsV0F0REQsTUFzREs7QUFDSCxtQkFDRjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxtQkFBZjtBQUNLLG1FQUFTLFFBQU8sTUFBaEI7QUFETCxlQURGO0FBSUUscURBQUssV0FBVSxtQkFBZjtBQUpGLGFBREU7QUFVRDtBQUVBLFNBcEVEO0FBSEYsT0FEQTtBQThFQzs7Ozs7O0FBRUQ7O2tCQUVlSCxPIiwiZmlsZSI6Ijk1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb2ZpbGVjYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZCc7XG5pbXBvcnQgTGlzdGluZyBmcm9tICcuLi9jb21wb25lbnRzL215cG9zdC9saXN0aW5nJztcbmNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5jb25zdHJ1Y3Rvcihwcm9wcykge1xuc3VwZXIgKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgY3VycmVudHVzZXI6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpXG4gIH07XG59XG5cbnJlbmRlcigpIHtcbnJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT1cIm1haW4tbGFuZGluZyByb3cgY29udGVudFwiPlxuXG4gIHtcbiAgKCgpID0+IHtcbiAgaWYgKHRoaXMuc3RhdGUuY3VycmVudHVzZXIpIHtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLXBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02IHByb2lsZWNhcmRcIj4gXG4gICAgICAgPFByb2ZpbGVjYXJkLz5cbiAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDU+UGVyc29uYWwgRGV0YWlsczwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYWdlLXN1YnRpdGxlIHNtYWxsXCI+TGltaXRlZCBpbmZvcm1hdGlvbiBpcyB2aXNpYmxlPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgICAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNlwiPlxuICAgICAgICA8TGlzdGluZyBmb3JhbGw9XCJ0cnVlXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTYgcHJvaWxlY2FyZFwiPlxuICAgICAgIFxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbCB3ZWxsLXNtYWxsIGNsZWFyZml4XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWZsdWlkXCI+XG4gICAgICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhbjRcIj5cbiAgICAgICAgICAgICA8aDQ+Sm9ubmllIFNwcmF0bGV5PC9oND4gXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tZW52ZWxvcGVcIj48L2k+IGpvbm5pZXNwcmF0bGV5QG1lLmNvbTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGg1PlBlcnNvbmFsIERldGFpbHM8L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1zdWJ0aXRsZSBzbWFsbFwiPkxpbWl0ZWQgaW5mb3JtYXRpb24gaXMgdmlzaWJsZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgICAgIFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1zbS04XCI+XG4gICAgICAgICA8TGlzdGluZyBmb3JhbGw9XCJ0cnVlXCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTRcIj4gXG4gICAgICBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgICApO1xuICB9XG5cbiAgfSkoKVxuICB9XG48L2Rpdj5cblxuXG4gICAgKTtcbn1cbn1cbjtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC9zcmMvQ29udGFpbmVycy9sYW5kaW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///95\n");

/***/ })

})