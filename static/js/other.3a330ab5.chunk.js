webpackJsonp([2],{222:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),o=n.n(c),i=n(259),u=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),s=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"componentDidMount",value:function(){var e=[{path:"/",name:"\u9996\u9875"},{path:"",name:"api"}];this.props.setBreadcrumb(e)}},{key:"render",value:function(){return o.a.createElement("article",{className:"container-fluid"},o.a.createElement("section",{className:"container api-index pb-4"},o.a.createElement("h2",{className:"mb-4"},"\u4ee5\u4e0b api \u8def\u5f84\u5747\u4ee5 https://cnodejs.org/api/v1 \u4e3a\u524d\u7f00"),o.a.createElement("h3",null,"\u4e3b\u9898"),o.a.createElement("p",null,"get /topics \u4e3b\u9898\u9996\u9875"),o.a.createElement("p",null,"\u63a5\u6536 get \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 page Number \u9875\u6570"),o.a.createElement("li",null,"\xb7 tab String \u4e3b\u9898\u5206\u7c7b\u3002\u76ee\u524d\u6709 ask share job good"),o.a.createElement("li",null,"\xb7 limit Number \u6bcf\u4e00\u9875\u7684\u4e3b\u9898\u6570\u91cf"),o.a.createElement("li",null,"\xb7 mdrender String \u5f53\u4e3a false \u65f6\uff0c\u4e0d\u6e32\u67d3\u3002\u9ed8\u8ba4\u4e3a true\uff0c\u6e32\u67d3\u51fa\u73b0\u7684\u6240\u6709 markdown \u683c\u5f0f\u6587\u672c\u3002")),o.a.createElement("p",null,"\u793a\u4f8b\uff1a/api/v1/topics"),o.a.createElement("br",null),o.a.createElement("p",null,"get /topic/:id \u4e3b\u9898\u8be6\u60c5"),o.a.createElement("p",null,"\u63a5\u6536 get \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 mdrender String \u5f53\u4e3a false \u65f6\uff0c\u4e0d\u6e32\u67d3\u3002\u9ed8\u8ba4\u4e3a true\uff0c\u6e32\u67d3\u51fa\u73b0\u7684\u6240\u6709 markdown \u683c\u5f0f\u6587\u672c\u3002"),o.a.createElement("li",null,"\xb7 accesstoken String \u5f53\u9700\u8981\u77e5\u9053\u4e00\u4e2a\u4e3b\u9898\u662f\u5426\u88ab\u7279\u5b9a\u7528\u6237\u6536\u85cf\u4ee5\u53ca\u5bf9\u5e94\u8bc4\u8bba\u662f\u5426\u88ab\u7279\u5b9a\u7528\u6237\u70b9\u8d5e\u65f6\uff0c\u624d\u9700\u8981\u5e26\u6b64\u53c2\u6570\u3002\u4f1a\u5f71\u54cd\u8fd4\u56de\u503c\u4e2d\u7684 is_collect \u4ee5\u53ca replies \u5217\u8868\u4e2d\u7684 is_uped \u503c\u3002")),o.a.createElement("p",null,"\u793a\u4f8b\uff1a/api/v1/topic/5433d5e4e737cbe96dcef312"),o.a.createElement("br",null),o.a.createElement("p",null,"post /topics \u65b0\u5efa\u4e3b\u9898"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken"),o.a.createElement("li",null,"\xb7 title String \u6807\u9898"),o.a.createElement("li",null,"\xb7 tab String \u76ee\u524d\u6709 ask share job dev\u3002\u5f00\u53d1\u65b0\u5ba2\u6237\u7aef\u7684\u540c\u5b66\uff0c\u8bf7\u52a1\u5fc5\u5c06\u4f60\u4eec\u7684\u6d4b\u8bd5\u5e16\u53d1\u5728 dev \u4e13\u533a\uff0c\u4ee5\u514d\u6c61\u67d3\u65e5\u5e38\u7684\u7248\u9762\uff0c\u5426\u5219\u4f1a\u8fdb\u884c\u5c01\u53f7\u4e00\u5468\u5904\u7406\u3002"),o.a.createElement("li",null,"\xb7 content String \u4e3b\u4f53\u5185\u5bb9")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, topic_id: '5433d5e4e737cbe96dcef312'}"),o.a.createElement("br",null),o.a.createElement("p",null,"post /topics/update \u7f16\u8f91\u4e3b\u9898"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken"),o.a.createElement("li",null,"\xb7 topic_id String \u4e3b\u9898id"),o.a.createElement("li",null,"\xb7 title String \u6807\u9898"),o.a.createElement("li",null,"\xb7 tab String \u76ee\u524d\u6709 ask share job"),o.a.createElement("li",null,"\xb7 content String \u4e3b\u4f53\u5185\u5bb9")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, topic_id: '5433d5e4e737cbe96dcef312'}"),o.a.createElement("br",null),o.a.createElement("h3",null,"\u4e3b\u9898\u6536\u85cf"),o.a.createElement("p",null,"post /topic_collect/collect \u6536\u85cf\u4e3b\u9898"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken"),o.a.createElement("li",null,"\xb7 topic_id String \u4e3b\u9898\u7684id")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{'success': true}"),o.a.createElement("br",null),o.a.createElement("p",null,"post /topic_collect/de_collect \u53d6\u6d88\u4e3b\u9898"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken"),o.a.createElement("li",null,"\xb7 topic_id String \u4e3b\u9898\u7684id")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true}"),o.a.createElement("br",null),o.a.createElement("p",null,"get /topic_collect/:loginname \u7528\u6237\u6240\u6536\u85cf\u7684\u4e3b\u9898"),o.a.createElement("p",null,"\u793a\u4f8b\uff1a/api/v1/topic_collect/alsotang"),o.a.createElement("br",null),o.a.createElement("h3",null,"\u8bc4\u8bba"),o.a.createElement("p",null,"post /topic/:topic_id/replies \u65b0\u5efa\u8bc4\u8bba"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken"),o.a.createElement("li",null,"\xb7 content String \u8bc4\u8bba\u7684\u4e3b\u4f53"),o.a.createElement("li",null,"\xb7 reply_id String \u5982\u679c\u8fd9\u4e2a\u8bc4\u8bba\u662f\u5bf9\u53e6\u4e00\u4e2a\u8bc4\u8bba\u7684\u56de\u590d\uff0c\u8bf7\u52a1\u5fc5\u5e26\u4e0a\u6b64\u5b57\u6bb5\u3002\u8fd9\u6837\u524d\u7aef\u5c31\u53ef\u4ee5\u6784\u5efa\u51fa\u8bc4\u8bba\u7ebf\u7d22\u56fe\u3002")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, reply_id: '5433d5e4e737cbe96dcef312'}"),o.a.createElement("br",null),o.a.createElement("p",null,"post /reply/:reply_id/ups \u4e3a\u8bc4\u8bba\u70b9\u8d5e"),o.a.createElement("p",null,"\u63a5\u53d7 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String"),o.a.createElement("li",null,"\xb7 \u63a5\u53e3\u4f1a\u81ea\u52a8\u5224\u65ad\u7528\u6237\u662f\u5426\u5df2\u70b9\u8d5e\uff0c\u5982\u679c\u5426\uff0c\u5219\u70b9\u8d5e\uff1b\u5982\u679c\u662f\uff0c\u5219\u53d6\u6d88\u70b9\u8d5e\u3002\u70b9\u8d5e\u7684\u52a8\u4f5c\u53cd\u5e94\u5728\u8fd4\u56de\u6570\u636e\u7684 action \u5b57\u6bb5\u4e2d\uff0cup or down\u3002")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{'success': true, 'action': 'down'}"),o.a.createElement("br",null),o.a.createElement("h3",null,"\u7528\u6237"),o.a.createElement("p",null,"get /user/:loginname \u7528\u6237\u8be6\u60c5"),o.a.createElement("p",null,"\u793a\u4f8b\uff1a/api/v1/user/alsotang"),o.a.createElement("br",null),o.a.createElement("p",null,"post /accesstoken \u9a8c\u8bc1 accessToken \u7684\u6b63\u786e\u6027"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String \u7528\u6237\u7684 accessToken\uff0c\u5982\u679c\u6210\u529f\u5339\u914d\u4e0a\u7528\u6237\uff0c\u8fd4\u56de\u6210\u529f\u4fe1\u606f\u3002\u5426\u5219 403\u3002")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}"),o.a.createElement("br",null),o.a.createElement("h3",null,"\u6d88\u606f\u901a\u77e5"),o.a.createElement("p",null,"get /message/count \u83b7\u53d6\u672a\u8bfb\u6d88\u606f\u6570"),o.a.createElement("p",null,"\u63a5\u6536 get \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{data: 3}"),o.a.createElement("br",null),o.a.createElement("p",null,"get /messages \u83b7\u53d6\u5df2\u8bfb\u548c\u672a\u8bfb\u6d88\u606f"),o.a.createElement("p",null,"\u63a5\u6536 get \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String"),o.a.createElement("li",null,"\xb7 mdrender String \u5f53\u4e3a false \u65f6\uff0c\u4e0d\u6e32\u67d3\u3002\u9ed8\u8ba4\u4e3a true\uff0c\u6e32\u67d3\u51fa\u73b0\u7684\u6240\u6709 markdown \u683c\u5f0f\u6587\u672c\u3002")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{\n            data: {\n              has_read_messages: [],\n              hasnot_read_messages: [\n                {\n                  id: '543fb7abae523bbc80412b26',\n                  type: 'at',\n                  has_read: false,\n                  author: {\n                    loginname: 'alsotang',\n                    avatar_url: 'https://avatars.githubusercontent.com/u/1147375?v=2'\n                  },\n                  topic: {\n                    id: '542d6ecb9ecb3db94b2b3d0f',\n                    title: 'adfadfadfasdf',\n                    last_reply_at: '2014-10-18T07:47:22.563Z'\n                  },\n                  reply: {\n                    id: '543fb7abae523bbc80412b24',\n                    content: '[@alsotang](/user/alsotang) \u54c8\u54c8',\n                    ups: [],\n                    create_at: '2014-10-16T12:18:51.566Z'\n                  }\n                }\n              ]\n            }\n          }"),o.a.createElement("br",null),o.a.createElement("p",null,"post /message/mark_all \u6807\u8bb0\u5168\u90e8\u5df2\u8bfb"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, marked_msgs: [{id: '544ce385aeaeb5931556c6f9'}]}"),o.a.createElement("br",null),o.a.createElement("p",null,"post /message/mark_one/:msg_id \u6807\u8bb0\u5355\u4e2a\u6d88\u606f\u4e3a\u5df2\u8bfb"),o.a.createElement("p",null,"\u8bf7\u6c42\u793a\u4f8b\uff1a/message/mark_one/58ec7d39da8344a81eee0c14"),o.a.createElement("p",null,"\u63a5\u6536 post \u53c2\u6570"),o.a.createElement("ol",null,o.a.createElement("li",null,"\xb7 accesstoken String")),o.a.createElement("p",null,"\u8fd4\u56de\u503c\u793a\u4f8b\uff1a","{success: true, marked_msg_id: '58ec7d39da8344a81eee0c14'}"),o.a.createElement("br",null),o.a.createElement("h3",null,"\u77e5\u8bc6\u70b9"),o.a.createElement("p",null,"\u5982\u4f55\u83b7\u53d6 accessToken\uff1f \u7528\u6237\u767b\u5f55\u540e\uff0c\u5728\u8bbe\u7f6e\u9875\u9762\u53ef\u4ee5\u770b\u5230\u81ea\u5df1\u7684 accessToken\u3002 \u5efa\u8bae\u5404\u79fb\u52a8\u7aef\u5e94\u7528\u4f7f\u7528\u624b\u673a\u626b\u7801\u7684\u5f62\u5f0f\u767b\u5f55\uff0c\u9a8c\u8bc1\u4f7f\u7528 /accesstoken \u63a5\u53e3\uff0c\u767b\u5f55\u540e\u957f\u671f\u4fdd\u5b58 accessToken\u3002")))}}]),t}(c.PureComponent);t.default=s},223:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),o=n.n(c),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"componentDidMount",value:function(){var e=[{path:"/",name:"\u9996\u9875"},{path:"",name:"\u4ecb\u7ecd"}];this.props.setBreadcrumb(e)}},{key:"render",value:function(){return o.a.createElement("article",{className:"container-fluid"},o.a.createElement("section",{className:"container bg-white pb-4"},o.a.createElement("p",null,"\u53ea\u662f\u4e00\u4e2a\u7528\u6765\u56de\u5fc6\u590d\u4e60\u4e00\u4e0breact\u76f8\u5173\u6280\u672f\u6808\u7684\u7ec3\u624b\u9879\u76ee\uff0c\u4e3b\u8981\u7528\u4e86\u4ee5\u4e0b\u6280\u672f\uff1a"),o.a.createElement("br",null),o.a.createElement("ul",{className:"pl-4"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://doc.react-china.org/",target:"_blank",rel:"noopener noreferrer"},"react")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://reacttraining.cn/web/example/basic",target:"_blank",rel:"noopener noreferrer"},"react-router v4")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/facebook/prop-types",target:"_blank",rel:"noopener noreferrer"},"prop-types")),o.a.createElement("li",null,o.a.createElement("a",{href:" https://github.com/gaearon/react-hot-loader",target:"_blank",rel:"noopener noreferrer"},"react-hot-loader")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://cn.redux.js.org/index.html",target:"_blank",rel:"noopener noreferrer"},"redux")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux",target:"_blank",rel:"noopener noreferrer"},"react-router-redux")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.kancloud.cn/yunye/axios/234845",target:"_blank",rel:"noopener noreferrer"},"axios")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/svrcekmichal/redux-axios-middleware",target:"_blank",rel:"noopener noreferrer"},"redux-axios-middleware")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://v4.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},"bootstrap v4")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://facebook.github.io/immutable-js/",target:"_blank",rel:"noopener noreferrer"},"immutable")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/gajus/redux-immutable",target:"_blank",rel:"noopener noreferrer"},"redux-immutable")),o.a.createElement("li",null,o.a.createElement("a",{href:"http://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},"less")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/facebookincubator/create-react-app",target:"_blank",rel:"noopener noreferrer"},"create-react-app"))),o.a.createElement("br",null),o.a.createElement("p",null,"\u4ee5create-react-app\u811a\u624b\u67b6\u4e3a\u57fa\u7840\uff0cnpm run eject\u66b4\u6f0f\u914d\u7f6e\u540e\uff0c\u81ea\u5b9a\u4e49\u4fee\u6539\u914d\u7f6e"),o.a.createElement("p",null,"\u9879\u76ee\u7684github\u5730\u5740 ",o.a.createElement("a",{href:"https://github.com/BreathlessWay/react-app",target:"_blank",rel:"noopener noreferrer"},"react-app")),o.a.createElement("p",null,"\u9879\u76ee\u8fd8\u6709\u5f88\u591a\u4e0d\u8db3\u4e4b\u5904\uff0c\u6b22\u8fce\u63d0\u51fa\u5b9d\u8d35\u610f\u89c1\uff0c\u4e0d\u65ad\u5b8c\u5584\uff0c\u4e0d\u65ad\u8fdb\u6b65")))}}]),t}(c.PureComponent);t.default=u},259:function(e,t,n){var a=n(260);"string"===typeof a&&(a=[[e.i,a,""]]);var l={hmr:!1};l.transform=void 0;n(213)(a,l);a.locals&&(e.exports=a.locals)},260:function(e,t,n){t=e.exports=n(212)(!0),t.push([e.i,".api-index{font-size:14px;background:#fff;line-height:2}.api-index h2{font-size:20px}.api-index h3{font-size:16px;margin-bottom:.5rem}.api-index p{padding-left:.5rem}.api-index ol{background:#f8f8f8;padding:1rem}","",{version:3,sources:["/Users/zhujian/Desktop/react-app/src/pages/Api/style.less"],names:[],mappings:"AAAA,WACE,eAAgB,AAChB,gBAAiB,AACjB,aAAe,CAChB,AACD,cACE,cAAgB,CACjB,AACD,cACE,eAAgB,AAChB,mBAAsB,CACvB,AACD,aACE,kBAAqB,CACtB,AACD,cACE,mBAAoB,AACpB,YAAc,CACf",file:"style.less",sourcesContent:[".api-index {\n  font-size: 14px;\n  background: #fff;\n  line-height: 2;\n}\n.api-index h2 {\n  font-size: 20px;\n}\n.api-index h3 {\n  font-size: 16px;\n  margin-bottom: 0.5rem;\n}\n.api-index p {\n  padding-left: 0.5rem;\n}\n.api-index ol {\n  background: #f8f8f8;\n  padding: 1rem;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=other.3a330ab5.chunk.js.map