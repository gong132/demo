(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0znW":function(t,e,a){t.exports={body:"antd-pro-pages-main-index-body",card:"antd-pro-pages-main-index-card",header:"antd-pro-pages-main-index-header",custom_num:"antd-pro-pages-main-index-custom_num",content:"antd-pro-pages-main-index-content",content_son:"antd-pro-pages-main-index-content_son"}},"6sn3":function(t,e,a){"use strict";a.r(e);a("Pwec");var n=a("CtXQ"),r=(a("cIOH"),a("ifDB"),a("q1tI")),o=a.n(r),i=a("TSYQ"),s=a.n(i),l=a("wEI+");function c(t){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},p.apply(this,arguments)}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e,a){return e&&m(t.prototype,e),a&&m(t,a),t}function v(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?h(t):e}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function g(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}var x=function(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(a[n[r]]=t[n[r]])}return a},C=function(t){function e(){var t;return f(this,e),t=v(this,y(e).apply(this,arguments)),t.state={scale:1,isImgExist:!0},t.setScale=function(){if(t.avatarChildren&&t.avatarNode){var e=t.avatarChildren.offsetWidth,a=t.avatarNode.offsetWidth;0===e||0===a||t.lastChildrenWidth===e&&t.lastNodeWidth===a||(t.lastChildrenWidth=e,t.lastNodeWidth=a,t.setState({scale:a-8<e?(a-8)/e:1}))}},t.handleImgLoadError=function(){var e=t.props.onError,a=e?e():void 0;!1!==a&&t.setState({isImgExist:!1})},t.renderAvatar=function(e){var a,o,i=e.getPrefixCls,l=t.props,c=l.prefixCls,f=l.shape,m=l.size,d=l.src,v=l.srcSet,h=l.icon,y=l.className,g=l.alt,b=x(l,["prefixCls","shape","size","src","srcSet","icon","className","alt"]),C=t.state,j=C.isImgExist,O=C.scale,E=i("avatar",c),w=s()((a={},u(a,"".concat(E,"-lg"),"large"===m),u(a,"".concat(E,"-sm"),"small"===m),a)),T=s()(E,y,w,(o={},u(o,"".concat(E,"-").concat(f),f),u(o,"".concat(E,"-image"),d&&j),u(o,"".concat(E,"-icon"),h),o)),S="number"===typeof m?{width:m,height:m,lineHeight:"".concat(m,"px"),fontSize:h?m/2:18}:{},N=t.props.children;if(d&&j)N=r["createElement"]("img",{src:d,srcSet:v,onError:t.handleImgLoadError,alt:g});else if(h)N=r["createElement"](n["a"],{type:h});else{var X=t.avatarChildren;if(X||1!==O){var D="scale(".concat(O,") translateX(-50%)"),k={msTransform:D,WebkitTransform:D,transform:D},z="number"===typeof m?{lineHeight:"".concat(m,"px")}:{};N=r["createElement"]("span",{className:"".concat(E,"-string"),ref:function(e){return t.avatarChildren=e},style:p({},z,k)},N)}else N=r["createElement"]("span",{className:"".concat(E,"-string"),ref:function(e){return t.avatarChildren=e}},N)}return r["createElement"]("span",p({},b,{style:p({},S,b.style),className:T,ref:function(e){return t.avatarNode=e}}),N)},t}return g(e,t),d(e,[{key:"componentDidMount",value:function(){this.setScale()}},{key:"componentDidUpdate",value:function(t){this.setScale(),t.src!==this.props.src&&this.setState({isImgExist:!0,scale:1})}},{key:"render",value:function(){return r["createElement"](l["a"],null,this.renderAvatar)}}]),e}(r["Component"]);C.defaultProps={shape:"circle",size:"default"};a("+L6B");var j=a("2/Rp"),O=a("2Taf"),E=a.n(O),w=a("vZ4D"),T=a.n(w),S=a("l4Ni"),N=a.n(S),X=a("ujKo"),D=a.n(X),k=a("rlhR"),z=a.n(k),_=a("MhPg"),A=a.n(_),P=a("3a4m"),L=a.n(P),q=a("0znW"),H=a.n(q),I=function(t){function e(){var t;return E()(this,e),t=N()(this,D()(e).call(this)),t.add=t.add.bind(z()(t)),t.goToDetail=t.goToDetail.bind(z()(t)),t.state={data:[{title:"\u5f85\u5206\u6790",defaultContent:["\u5e0c\u671b\u652f\u6301\u7b14\u8bb0\u63d2\u5165\u9644\u4ef6\u5185\u5bb9\uff0c\u4ee5\u4fbf\u4e8e\u6211\u628a\u672c\u5730\u7684\u6587\u4ef6\u63d2\u5165\u5230\u7b14\u8bb0\u4e2d","\u7b14\u8bb0\u7f16\u8f91\u533a\u652f\u6301\u8868\u683c\u5355\u5143\u683c\u5408\u5e76","\u5e0c\u671b\u652f\u6301\u5bf9\u5916\u7f16\u8f91\u5171\u4eab\u529f\u80fd","\u4f5c\u4e3a\u7ecf\u5e38\u8981\u5206\u4eab\u5185\u5bb9\u7684\u7528\u6237\uff0c\u5e0c\u671b\u589e\u52a0\u5bfc\u51fa\u529f\u80fd\uff0c\u8fd9\u6837\u53ef\u4ee5\u5c06\u7b14\u8bb0\u5feb\u901f\u5206\u4eab\u7ed9\u4ed6\u4eba\u67e5\u770b"],arr:[],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u5206\u6790\u4e2d",arr:[],defaultContent:["\u4f5c\u4e3a\u4e00\u540d\u7528\u6237\uff0c\u5e0c\u671b\u652f\u6301\u6700\u8fd1\u6d4f\u89c8\u529f\u80fd\uff0c\u4ee5\u4fbf\u4e8e\u6211\u66f4\u5feb\u7684\u627e\u5230\u6700\u8fd1\u67e5\u770b\u7684\u7b14\u8bb0","\u5e0c\u671b\u7b14\u8bb0\u652f\u6301\u5bfc\u51fa","\u5e0c\u671b\u6709\u7b14\u8bb0\u672c\u7684\u6982\u5ff5\uff0c\u8fd9\u6837\u65b9\u4fbf\u6211\u6574\u7406\u7b14\u8bb0"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u67b6\u6784\u8bbe\u8ba1\u4e2d",arr:[],defaultContent:["\u4f5c\u4e3aAndroid\u7528\u6237\uff0c\u5e0c\u671b\u652f\u6301NFC\u7b14\u8bb0\u529f\u80fd","\u7b14\u8bb0\u7f16\u8f91\u533a\u652f\u6301\u8868\u683c\u5355\u5143\u683c\u5408\u5e76"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u9700\u6c42\u786e\u8ba4",arr:[],defaultContent:["\u5e0c\u671b\u652f\u6301\u5bf9\u5916\u7f16\u8f91\u5171\u4eab\u529f\u80fd"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u6392\u671f\u4e2d",arr:[],defaultContent:["\u5e0c\u671b\u589e\u52a0\u67e5\u627e\u529f\u80fd\uff0c\u8fd9\u6837\u5728\u7b14\u8bb0\u8f83\u591a\u7684\u65f6\u5019\u53ef\u4ee5\u5feb\u901f\u67e5\u627e"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u5df2\u6392\u671f",arr:[],defaultContent:["\u7b14\u8bb0\u7f16\u8f91\u533a\u652f\u6301\u8868\u683c\u5355\u5143\u683c\u5408\u5e76"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u9a8c\u6536\u4e2d",arr:[],defaultContent:["\u4f5c\u4e3a\u7ecf\u5e38\u8981\u5206\u4eab\u5185\u5bb9\u7684\u7528\u6237\uff0c\u5e0c\u671b\u589e\u52a0\u5bfc\u51fa\u529f\u80fd\uff0c\u8fd9\u6837\u53ef\u4ee5\u5c06\u7b14\u8bb0\u5feb\u901f\u5206\u4eab\u7ed9\u4ed6\u4eba\u67e5\u770b"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u5df2\u4e0a\u7ebf",arr:[],defaultContent:["\u5e0c\u671b\u6709\u7b14\u8bb0\u672c\u7684\u6982\u5ff5\uff0c\u8fd9\u6837\u65b9\u4fbf\u6211\u6574\u7406\u7b14\u8bb0"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]},{title:"\u5173\u95ed",arr:[],defaultContent:["\u5e0c\u671b\u7b14\u8bb0\u652f\u6301\u5bfc\u51fa"],len:0,avatar:["https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"]}]},t}return A()(e,t),T()(e,[{key:"componentDidMount",value:function(){console.log("\u6211\u662fmian");var t=Array.from(document.getElementsByClassName("antd-pro-pages-main-index-content")),e=t.length;this.setState({num:e,newNum:[]})}},{key:"add",value:function(t){console.log(t);var e=this.state.data;e[t].defaultContent.push("\u6d4b\u8bd5"),this.setState({data:e})}},{key:"goToDetail",value:function(){L.a.push("/main/detail_table")}},{key:"goToTable",value:function(){L.a.push("/main/command")}},{key:"render",value:function(){var t=this,e=this.state.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j["a"],{style:{marginLeft:"900px",marginBottom:"5px"},onClick:function(){return t.goToTable()},title:"\u4ee5\u8868\u683c\u5f62\u5f0f\u5c55\u793a"},"\u5207\u6362"),o.a.createElement("div",{className:H.a.body},e.map(function(e,a){return o.a.createElement("div",{className:H.a.card},o.a.createElement("p",{className:H.a.header},e.title,o.a.createElement("span",{className:H.a.custom_num},e.defaultContent.length," \xa0\xb7\xb7\xb7")),e.defaultContent.map(function(a,n){return o.a.createElement("p",{className:H.a.content},o.a.createElement("input",{type:"checkbox"}),o.a.createElement("p",{className:H.a.content_son,onClick:t.goToDetail},a),o.a.createElement(C,{icon:"user",src:e.avatar[n],size:"small",style:{width:25,marginRight:5}}))}),o.a.createElement(j["a"],{type:"dashed",onClick:function(){return t.add(a)},style:{width:"100%"}},o.a.createElement(n["a"],{type:"plus"})," Add field"))})))}}]),e}(o.a.Component);e["default"]=I},ifDB:function(t,e,a){t.exports={"ant-avatar":"ant-avatar","ant-avatar-image":"ant-avatar-image","ant-avatar-string":"ant-avatar-string","ant-avatar-icon":"ant-avatar-icon","ant-avatar-lg":"ant-avatar-lg","ant-avatar-lg-string":"ant-avatar-lg-string","ant-avatar-sm":"ant-avatar-sm","ant-avatar-sm-string":"ant-avatar-sm-string","ant-avatar-square":"ant-avatar-square"}}}]);