webpackHotUpdate(0,{99:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(i);n(100);var u=n(4),c=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),s="";return e.hasOwnProperty("forall")||(s=window.localStorage.getItem("userid")),n.state={userid:s,posts:[],isnotify:"dn",alertmessage:""},n.editPost=n.editPost.bind(n),n.submitPost=n.submitPost.bind(n),n}return s(t,e),r(t,[{key:"editPost",value:function(e){this.props.history.push("/posts/newpost/"+e)}},{key:"submitPost",value:function(e,t){var n={userid:this.state.userid,flag:e,postid:t};fetch("/api/savepost",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){alert(e.message)})}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/getmyposts",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)}).then(function(e){return e.json()}).then(function(t){e.setState({posts:t.posts})})}},{key:"myPostLitsing",value:function(e){var t=this;return e.map(function(e){return l.default.createElement("div",{className:"row",key:e._id},l.default.createElement("div",{className:"col-md-12"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-12"},l.default.createElement("span",null,l.default.createElement("strong",null,e.title)),l.default.createElement("br",null),l.default.createElement("div",{className:"pull-right"},l.default.createElement("i",{className:"fa fa-certificate"}),l.default.createElement("button",{type:"button",onClick:function(n){t.submitPost("p",e._id)},className:"btn btn-success btn-xs"},"Publish"),"  ",l.default.createElement("button",{type:"button",onClick:function(n){t.editPost(e._id)},className:"btn btn-primary btn-xs"},"Edit"))),l.default.createElement("br",null),l.default.createElement("div",{className:"col-md-12"},"Posted on:",new Date(e.date).toLocaleString("en-US",{hour:"numeric",day:"2-digit",month:"numeric",year:"numeric",hour12:!0,minute:"numeric"})," "))))})}},{key:"render",value:function(){return l.default.createElement("div",{className:"postlisting"},l.default.createElement("div",{className:" "+this.state.isnotify+" "},l.default.createElement("strong",null,this.state.alertmessage)),l.default.createElement("div",{className:"panel panel-default panel-order"},l.default.createElement("div",{className:"panel-body"},this.myPostLitsing(this.state.posts))))}}]),t}(i.Component);t.default=(0,u.withRouter)(c)}});