webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Listing = function (_Component) {\n  _inherits(Listing, _Component);\n\n  function Listing(props) {\n    _classCallCheck(this, Listing);\n\n    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this, props));\n\n    _this.state = {\n      userid: window.localStorage.getItem('userid'),\n      posts: []\n    };\n    return _this;\n  }\n\n  _createClass(Listing, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      fetch('/api/getmyposts', { method: 'post', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state) }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        _this2.setState({ posts: json.posts });\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: 'well' },\n          _react2.default.createElement(\n            'div',\n            { className: 'media-body' },\n            _react2.default.createElement(\n              'h4',\n              { className: 'media-heading' },\n              'Receta 1'\n            ),\n            _react2.default.createElement(\n              'p',\n              { className: 'text-right' },\n              'By Francisco'\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.'\n            ),\n            _react2.default.createElement(\n              'ul',\n              { className: 'list-inline list-unstyled' },\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  null,\n                  _react2.default.createElement('i', { className: 'glyphicon glyphicon-calendar' }),\n                  ' 2 days, 8 hours '\n                )\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                _react2.default.createElement('i', { className: 'glyphicon glyphicon-comment' }),\n                ' 2 comments'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star' }),\n                _react2.default.createElement('span', { className: 'glyphicon glyphicon-star-empty' })\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                '|'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                  'span',\n                  { className: 'glyphicon glyphicon-tags' },\n                  '\\xA0'\n                ),\n                'Tags : ',\n                _react2.default.createElement(\n                  'a',\n                  { href: '#' },\n                  ' ',\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'label label-info' },\n                    'Snipp'\n                  )\n                ),\n                _react2.default.createElement(\n                  'a',\n                  { href: '#' },\n                  ' ',\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'label label-info' },\n                    'Bootstrap'\n                  )\n                ),\n                _react2.default.createElement(\n                  'a',\n                  { href: '#' },\n                  ' ',\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'label label-info' },\n                    ' UI'\n                  )\n                ),\n                _react2.default.createElement(\n                  'a',\n                  { href: '#' },\n                  ' ',\n                  _react2.default.createElement(\n                    'span',\n                    { className: 'label label-info' },\n                    'growth'\n                  )\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Listing;\n}(_react.Component);\n\nexports.default = Listing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanM/MGM0NSJdLCJuYW1lcyI6WyJMaXN0aW5nIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJpZCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0cyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBQ01BLE87OztBQUVKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1ZBLEtBRFU7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QixDQURHO0FBRVhDLGFBQU07QUFGSyxLQUFiO0FBRmlCO0FBTWxCOzs7O3dDQUdvQjtBQUFBOztBQUNuQkMsWUFBTyxpQkFBUCxFQUEwQixFQUFDQyxRQUFRLE1BQVQsRUFBaUJDLFNBQVMsRUFBQyxnQkFBZ0Isa0JBQWpCLEVBQTFCLEVBQWdFQyxNQUFNQyxLQUFLQyxTQUFMLENBQWdCLEtBQUtYLEtBQXJCLENBQXRFLEVBQTFCLEVBQ0dZLElBREgsQ0FDUztBQUFBLGVBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLE9BRFQsRUFFR0YsSUFGSCxDQUVTLGdCQUFRO0FBQ2IsZUFBS0csUUFBTCxDQUFjLEVBQUNWLE9BQU1TLEtBQUtULEtBQVosRUFBZDtBQUNELE9BSkg7QUFNRDs7OzZCQUdVO0FBQ1QsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLE1BQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxlQUFkO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQU9FO0FBQUE7QUFBQSxnQkFBSSxXQUFVLDJCQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQU0sdURBQUcsV0FBVSw4QkFBYixHQUFOO0FBQUE7QUFBQTtBQUFKLGVBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFHRTtBQUFBO0FBQUE7QUFBTSxxREFBRyxXQUFVLDZCQUFiLEdBQU47QUFBQTtBQUFBLGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFLRTtBQUFBO0FBQUE7QUFDRSx3REFBTSxXQUFVLDBCQUFoQixHQURGO0FBRUUsd0RBQU0sV0FBVSwwQkFBaEIsR0FGRjtBQUdFLHdEQUFNLFdBQVUsMEJBQWhCLEdBSEY7QUFJRSx3REFBTSxXQUFVLDBCQUFoQixHQUpGO0FBS0Usd0RBQU0sV0FBVSxnQ0FBaEI7QUFMRixlQUxGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLG9CQUFNLFdBQVUsMEJBQWhCO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQ1M7QUFBQTtBQUFBLG9CQUFHLE1BQUssR0FBUjtBQUFBO0FBQWE7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUFiLGlCQURUO0FBRUk7QUFBQTtBQUFBLG9CQUFHLE1BQUssR0FBUjtBQUFBO0FBQWE7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUFiLGlCQUZKO0FBR0k7QUFBQTtBQUFBLG9CQUFHLE1BQUssR0FBUjtBQUFBO0FBQWE7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUFiLGlCQUhKO0FBSUk7QUFBQTtBQUFBLG9CQUFHLE1BQUssR0FBUjtBQUFBO0FBQWE7QUFBQTtBQUFBLHNCQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQUFiO0FBSko7QUFiRjtBQVBGO0FBREo7QUFERixPQURGO0FBd0NEOzs7Ozs7a0JBSVlQLE8iLCJmaWxlIjoiMjUzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuY2xhc3MgTGlzdGluZyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlciAocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyaWQ6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpLFxuICAgICAgcG9zdHM6W11cbiAgICB9O1xuICB9O1xuICBcbiAgXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCAoJy9hcGkvZ2V0bXlwb3N0cycsIHttZXRob2Q6ICdwb3N0JywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeSAodGhpcy5zdGF0ZSl9KVxuICAgICAgLnRoZW4gKHJlcyA9PiByZXMuanNvbiAoKSlcbiAgICAgIC50aGVuIChqc29uID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cG9zdHM6anNvbi5wb3N0c30pO1xuICAgICAgfSk7XG4gICAgIFxuICB9XG4gIFxuICBcbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+UmVjZXRhIDE8L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+QnkgRnJhbmNpc2NvPC9wPlxuICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBEdWlzIHBoYXJldHJhIHZhcml1cyBxdWFtIHNpdCBhbWV0IHZ1bHB1dGF0ZS4gXG4gICAgICAgICAgICAgICAgUXVpc3F1ZSBtYXVyaXMgYXVndWUsIG1vbGVzdGllIHRpbmNpZHVudCBjb25kaW1lbnR1bSB2aXRhZSwgZ3JhdmlkYSBhIGxpYmVyby4gQWVuZWFuIHNpdCBhbWV0IGZlbGlzIFxuICAgICAgICAgICAgICAgIGRvbG9yLCBpbiBzYWdpdHRpcyBuaXNpLiBTZWQgYWMgb3JjaSBxdWlzIHRvcnRvciBpbXBlcmRpZXQgdmVuZW5hdGlzLiBEdWlzIGVsZW1lbnR1bSBhdWN0b3IgYWNjdW1zYW4uIFxuICAgICAgICAgICAgICAgIEFsaXF1YW0gaW4gZmVsaXMgc2l0IGFtZXQgYXVndWUuPC9wPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUgbGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgIDxsaT48c3Bhbj48aSBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNhbGVuZGFyXCI+PC9pPiAyIGRheXMsIDggaG91cnMgPC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPnw8L2xpPlxuICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tY29tbWVudFwiPjwvaT4gMiBjb21tZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8bGk+fDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyLWVtcHR5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPnw8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRhZ3NcIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICBUYWdzIDogPGEgaHJlZj1cIiNcIj4gPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtaW5mb1wiPlNuaXBwPC9zcGFuPjwvYT4gXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLWluZm9cIj5Cb290c3RyYXA8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPiA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1pbmZvXCI+IFVJPC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4gPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtaW5mb1wiPmdyb3d0aDwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgIFxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgXG4gICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Rpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbXlwb3N0L2xpc3RpbmcuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///253\n");

/***/ })

})