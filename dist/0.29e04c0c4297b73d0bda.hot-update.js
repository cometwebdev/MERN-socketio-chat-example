webpackHotUpdate(0,{98:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),c=a(0),u=function(e){return e&&e.__esModule?e:{default:e}}(c);a(99);var f=function(e){function t(e){l(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={userid:window.localStorage.getItem("userid")},a}return r(t,e),o(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"postlisting"},u.default.createElement("div",{className:"panel panel-default panel-order"},u.default.createElement("div",{className:"panel-heading"},u.default.createElement("strong",null,"Posts"),u.default.createElement("div",{className:"btn-group pull-right"})),u.default.createElement("div",{className:"panel-body"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-12"},u.default.createElement("div",{className:"row"},u.default.createElement("div",{className:"col-md-12"},u.default.createElement("div",{className:"pull-right"},u.default.createElement("i",{className:"fa fa-certificate"})," pending",u.default.createElement("a",{href:"#",className:"btn btn-primary btn-xs"},u.default.createElement("i",{className:"fa fa-certificate"})," approve")),u.default.createElement("span",null,u.default.createElement("strong",null,"The order name"))," ",u.default.createElement("span",{className:"label label-info"},"group name"),u.default.createElement("br",null),"Quantity : 2, cost: $323.13, ",u.default.createElement("a",{href:"#","data-toggle":"modal","data-target":"#orderModal"},u.default.createElement("small",null,"See order detail"))),u.default.createElement("div",{className:"col-md-12"},"order made on: 05/31/2014 by ",u.default.createElement("a",{href:"#"},"Jane Doe ")))))),u.default.createElement("div",{className:"panel-footer"},"Footer here ... ...")))}}]),t}(c.Component);t.default=f}});