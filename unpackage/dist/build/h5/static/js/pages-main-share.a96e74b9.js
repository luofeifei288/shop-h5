(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-share"],{"204a":function(t,e,n){var o=n("24fb");e=o(!1),e.push([t.i,".tki-qrcode[data-v-58d9c21c]{position:relative}.tki-qrcode-canvas[data-v-58d9c21c]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},4203:function(t,e,n){"use strict";n.r(e);var o=n("48fb"),i=n("94b0");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("df66");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"7c1a9caa",null,!1,o["a"],a);e["default"]=u.exports},"46c9":function(t,e,n){"use strict";n.r(e);var o=n("78a7"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"48fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={tkiQrcode:n("53c1").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"invite"},[n("v-uni-view",{staticClass:"img"},[n("tki-qrcode",{ref:"qrcode",attrs:{val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,lv:t.lv,onval:t.onval,loadMake:t.loadMake,icon:t.icon,loadingText:t.loadingText},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",[t._v(t._s(t.$t("share.share1")))]),n("v-uni-view",{staticStyle:{"margin-top":"18rpx"}},[t._v(t._s(t.$t("share.share2")))])],1),n("v-uni-view",{staticClass:"code"},[t._v(t._s(t.$t("share.share3"))+"："+t._s(t.shareinfo.code))]),n("v-uni-view",{staticClass:"inlink"},[n("v-uni-view",{staticClass:"txt1"},[t._v(t._s(t.$t("share.share4")))]),n("v-uni-view",{staticClass:"txt2"},[t._v(t._s(t.$t("share.share5")))]),n("v-uni-view",{staticClass:"copy"},[n("v-uni-view",{staticClass:"copytxt"},[t._v(t._s(t.copytxt))]),n("v-uni-view",{staticClass:"copybtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy.apply(void 0,arguments)}}},[t._v(t._s(t.$t("share.share6")))])],1)],1)],1)],1)},r=[]},"4b29":function(t,e,n){"use strict";var o=n("94d0"),i=n.n(o);i.a},"53c1":function(t,e,n){"use strict";n.r(e);var o=n("6f83"),i=n("46c9");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4b29");var a,s=n("f0c5"),u=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"58d9c21c",null,!1,o["a"],a);e["default"]=u.exports},"59ae":function(t,e,n){var o=n("842a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("42352458",o,!0,{sourceMap:!1,shadowMode:!1})},"6f83":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tki-qrcode"},[n("v-uni-canvas",{staticClass:"tki-qrcode-canvas",style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{"canvas-id":t.cid}}),n("v-uni-image",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],style:{width:t.cpSize+"px",height:t.cpSize+"px"},attrs:{src:t.result}})],1)},r=[]},"78a7":function(t,e,n){"use strict";var o=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,r=o(n("8f53")),a={name:"tki-qrcode",props:{cid:{type:String,default:"tki-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){var t=this;this._empty(this.val)?uni.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):i=new r.default({context:t,canvasId:t.cid,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText,text:t.val,size:t.cpSize,background:t.background,foreground:t.foreground,pdground:t.pdground,correctLevel:t.lv,image:t.icon,imageSize:t.iconSize,cbResult:function(e){t._result(e)}})},_clearCode:function(){this._result(""),i.clear()},_saveCode:function(){var t=this;""!=this.result&&uni.saveImageToPhotosAlbum({filePath:t.result,success:function(){uni.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){this.result=t,this.$emit("result",t)},_empty:function(t){var e=typeof t,n=!1;return"number"==e&&""==String(t)||"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){n._makeCode()}),100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){n._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?uni.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=a},"842a":function(t,e,n){var o=n("24fb"),i=n("1de5"),r=n("f425");e=o(!1);var a=i(r);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.invite[data-v-7c1a9caa]{display:flex;flex-direction:column;margin-top:%?50?%;align-items:center}.invite .img[data-v-7c1a9caa]{width:%?266?%;height:%?266?%;background-color:#f3f3f3;display:flex;align-items:center;justify-content:center}.invite .info[data-v-7c1a9caa]{margin-top:%?28?%;width:%?224?%;text-align:center;font-size:%?28?%;color:#03081a}.invite .code[data-v-7c1a9caa]{font-size:%?42?%;color:#d66a28;margin-top:%?47?%}.invite .inlink[data-v-7c1a9caa]{background-color:#cb5f1b;background-image:url('+a+");background-repeat:no-repeat;background-size:%?252?% %?267?%;background-position:%?419?% %?16?%;border-radius:%?53?%;width:%?578?%;padding:%?86?% %?58?% %?44?%;font-size:%?32?%;color:#fff;margin-top:%?109?%}.invite .inlink .txt1[data-v-7c1a9caa]{font-weight:700}.invite .inlink .txt2[data-v-7c1a9caa]{margin-top:%?35?%}.invite .inlink .copy[data-v-7c1a9caa]{background-color:#fff;border-radius:%?18?%;display:flex;align-items:center;padding:%?10?% %?14?%;justify-content:space-between;margin-top:%?86?%}.invite .inlink .copy .copytxt[data-v-7c1a9caa]{font-size:%?25?%;color:#000;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:%?300?%}.invite .inlink .copy .copybtn[data-v-7c1a9caa]{background-color:#d66a28;font-size:%?25?%;border-radius:%?18?%;padding:%?18?% %?39?%;font-weight:800}",""]),t.exports=e},"8f53":function(t,e,n){"use strict";n("cb29"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={};(function(){function t(t){var e,n,o;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),o=128+(63&t),[e,n,o])}function e(e){for(var n=[],o=0;o<e.length;o++)for(var i=e.charCodeAt(o),r=t(i),a=0;a<r.length;a++)n.push(r[a]);return n}function n(t,n){this.typeNumber=-1,this.errorCorrectLevel=n,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=e(t),this.make()}n.prototype={constructor:n,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+n][e+o]=0<=n&&n<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=o&&o<=4)},createQrcode:function(){for(var t=0,e=0,n=null,o=0;o<8;o++){this.makeImpl(o);var i=a.getLostPoint(this);(0==o||t>i)&&(t=i,e=o,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=a.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var o=t[e],i=t[n];if(null==this.modules[o][i])for(var r=-2;r<=2;r++)for(var s=-2;s<=2;s++)this.modules[o+r][i+s]=-2==r||2==r||-2==s||2==s||0==r&&0==s}},setupTypeNumber:function(t){for(var e=a.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var o=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=o,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=o}},setupTypeInfo:function(t,e){for(var n=i[this.errorCorrectLevel]<<3|e,o=a.getBCHTypeInfo(n),r=0;r<15;r++){var s=!t&&1==(o>>r&1);r<6?this.modules[r][8]=s:r<8?this.modules[r+1][8]=s:this.modules[this.moduleCount-15+r][8]=s;s=!t&&1==(o>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=s:r<9?this.modules[8][15-r-1+1]=s:this.modules[8][15-r-1]=s}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new d,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var o=0,i=this.utf8bytes.length;o<i;o++)t.put(this.utf8bytes[o],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(n.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(n.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,o=0,i=this.rsBlock.length/3,r=new Array,s=0;s<i;s++)for(var u=this.rsBlock[3*s+0],c=this.rsBlock[3*s+1],d=this.rsBlock[3*s+2],f=0;f<u;f++)r.push([d,c]);for(var h=new Array(r.length),g=new Array(r.length),v=0;v<r.length;v++){var p=r[v][0],m=r[v][1]-p;n=Math.max(n,p),o=Math.max(o,m),h[v]=new Array(p);for(s=0;s<h[v].length;s++)h[v][s]=255&t.buffer[s+e];e+=p;var y=a.getErrorCorrectPolynomial(m),w=new l(h[v],y.getLength()-1),b=w.mod(y);g[v]=new Array(y.getLength()-1);for(s=0;s<g[v].length;s++){var T=s+b.getLength()-g[v].length;g[v][s]=T>=0?b.get(T):0}}var C=new Array(this.totalDataCount),x=0;for(s=0;s<n;s++)for(v=0;v<r.length;v++)s<h[v].length&&(C[x++]=h[v][s]);for(s=0;s<o;s++)for(v=0;v<r.length;v++)s<g[v].length&&(C[x++]=g[v][s]);return C},mapData:function(t,e){for(var n=-1,o=this.moduleCount-1,i=7,r=0,s=this.moduleCount-1;s>0;s-=2){6==s&&s--;while(1){for(var u=0;u<2;u++)if(null==this.modules[o][s-u]){var l=!1;r<t.length&&(l=1==(t[r]>>>i&1));var c=a.getMask(e,o,s-u);c&&(l=!l),this.modules[o][s-u]=l,i--,-1==i&&(r++,i=7)}if(o+=n,o<0||this.moduleCount<=o){o-=n,n=-n;break}}}}},n.PAD0=236,n.PAD1=17;for(var i=[1,0,3,2],r={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},a={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(a.getBCHDigit(e)-a.getBCHDigit(a.G15)>=0)e^=a.G15<<a.getBCHDigit(e)-a.getBCHDigit(a.G15);return(t<<10|e)^a.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(a.getBCHDigit(e)-a.getBCHDigit(a.G18)>=0)e^=a.G18<<a.getBCHDigit(e)-a.getBCHDigit(a.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return a.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case r.PATTERN000:return(e+n)%2==0;case r.PATTERN001:return e%2==0;case r.PATTERN010:return n%3==0;case r.PATTERN011:return(e+n)%3==0;case r.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case r.PATTERN101:return e*n%2+e*n%3==0;case r.PATTERN110:return(e*n%2+e*n%3)%2==0;case r.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new l([1],0),n=0;n<t;n++)e=e.multiply(new l([1,s.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,o=0,i=0;i<e;i++)for(var r=0,a=t.modules[i][0],s=0;s<e;s++){var u=t.modules[i][s];if(s<e-6&&u&&!t.modules[i][s+1]&&t.modules[i][s+2]&&t.modules[i][s+3]&&t.modules[i][s+4]&&!t.modules[i][s+5]&&t.modules[i][s+6]&&(s<e-10?t.modules[i][s+7]&&t.modules[i][s+8]&&t.modules[i][s+9]&&t.modules[i][s+10]&&(n+=40):s>3&&t.modules[i][s-1]&&t.modules[i][s-2]&&t.modules[i][s-3]&&t.modules[i][s-4]&&(n+=40)),i<e-1&&s<e-1){var l=0;u&&l++,t.modules[i+1][s]&&l++,t.modules[i][s+1]&&l++,t.modules[i+1][s+1]&&l++,0!=l&&4!=l||(n+=3)}a^u?r++:(a=u,r>=5&&(n+=3+r-5),r=1),u&&o++}for(s=0;s<e;s++)for(r=0,a=t.modules[0][s],i=0;i<e;i++){u=t.modules[i][s];i<e-6&&u&&!t.modules[i+1][s]&&t.modules[i+2][s]&&t.modules[i+3][s]&&t.modules[i+4][s]&&!t.modules[i+5][s]&&t.modules[i+6][s]&&(i<e-10?t.modules[i+7][s]&&t.modules[i+8][s]&&t.modules[i+9][s]&&t.modules[i+10][s]&&(n+=40):i>3&&t.modules[i-1][s]&&t.modules[i-2][s]&&t.modules[i-3][s]&&t.modules[i-4][s]&&(n+=40)),a^u?r++:(a=u,r>=5&&(n+=3+r-5),r=1)}var c=Math.abs(100*o/e/e-50)/5;return n+=10*c,n}},s={glog:function(t){if(t<1)throw new Error("glog("+t+")");return s.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return s.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},u=0;u<8;u++)s.EXP_TABLE[u]=1<<u;for(u=8;u<256;u++)s.EXP_TABLE[u]=s.EXP_TABLE[u-4]^s.EXP_TABLE[u-5]^s.EXP_TABLE[u-6]^s.EXP_TABLE[u-8];for(u=0;u<255;u++)s.LOG_TABLE[s.EXP_TABLE[u]]=u;function l(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var o=0;o<t.length-n;o++)this.num[o]=t[o+n]}l.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<t.getLength();o++)e[n+o]^=s.gexp(s.glog(this.get(n))+s.glog(t.get(o)));return new l(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var o=new Array(e),i=0;i<e;i++)o[i]=this.get(i);while(o.length>=n){var r=s.glog(o[0])-s.glog(t.get(0));for(i=0;i<t.getLength();i++)o[i]^=s.gexp(s.glog(t.get(i))+r);while(0==o[0])o.shift()}return new l(o,0)}};var c=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function d(){this.buffer=new Array,this.length=0}n.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=c[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,o=0,i=0;i<n;i++){var r=e[3*i+0],a=e[3*i+2];o+=a*r}var s=t>9?2:1;if(this.utf8bytes.length+s<o||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=o;break}}},d.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[];o=function(t){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:t.canvasId,context:t.context,usingComponents:t.usingComponents,showLoading:t.showLoading,loadingText:t.loadingText},"string"===typeof t&&(t={text:t}),t)for(var e in t)this.options[e]=t[e];for(var o=null,i=(e=0,f.length);e<i;e++)if(f[e].text==this.options.text&&f[e].text.correctLevel==this.options.correctLevel){o=f[e].obj;break}e==i&&(o=new n(this.options.text,this.options.correctLevel),f.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:o}));var r=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},a=function(t){t.showLoading&&uni.showLoading({title:t.loadingText,mask:!0});for(var e=uni.createCanvasContext(t.canvasId,t.context),n=o.getModuleCount(),i=t.size,a=t.imageSize,s=(i/n).toPrecision(4),u=(i/n).toPrecision(4),l=0;l<n;l++)for(var c=0;c<n;c++){var d=Math.ceil((c+1)*s)-Math.floor(c*s),f=Math.ceil((l+1)*s)-Math.floor(l*s),h=r({row:l,col:c,count:n,options:t});e.setFillStyle(o.modules[l][c]?h:t.background),e.fillRect(Math.round(c*s),Math.round(l*u),d,f)}if(t.image){var g=function(e,n,o,i,r,a,s,u,l){e.setLineWidth(s),e.setFillStyle(t.background),e.setStrokeStyle(t.background),e.beginPath(),e.moveTo(n+a,o),e.arcTo(n+i,o,n+i,o+a,a),e.arcTo(n+i,o+r,n+i-a,o+r,a),e.arcTo(n,o+r,n,o+r-a,a),e.arcTo(n,o,n+a,o,a),e.closePath(),u&&e.fill(),l&&e.stroke()},v=Number(((i-a)/2).toFixed(2)),p=Number(((i-a)/2).toFixed(2));g(e,v,p,a,a,2,6,!0,!0),e.drawImage(t.image,v,p,a,a)}setTimeout((function(){e.draw(!0,(function(){setTimeout((function(){uni.canvasToTempFilePath({width:t.width,height:t.height,destWidth:t.width,destHeight:t.height,canvasId:t.canvasId,quality:Number(1),success:function(e){t.cbResult&&t.cbResult(e.tempFilePath)},fail:function(e){t.cbResult&&t.cbResult(e)},complete:function(){t.showLoading&&uni.hideLoading()}},t.context)}),t.text.length+100)}))}),t.usingComponents?0:150)};a(this.options)},o.prototype.clear=function(t){var e=uni.createCanvasContext(this.options.canvasId,this.options.context);e.clearRect(0,0,this.options.size,this.options.size),e.draw(!1,(function(){t&&t()}))}})();var i=o;e.default=i},"94b0":function(t,e,n){"use strict";n.r(e);var o=n("d127"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=i.a},"94d0":function(t,e,n){var o=n("204a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("a8f99c44",o,!0,{sourceMap:!1,shadowMode:!1})},cb29:function(t,e,n){var o=n("23e7"),i=n("81d5"),r=n("44d2");o({target:"Array",proto:!0},{fill:i}),r("fill")},d127:function(t,e,n){"use strict";var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("7de7")),r=o(n("53c1")),a={data:function(){return{shareinfo:{},copytxt:"",val:"",size:228,background:"#ffffff",foreground:"#000000",pdground:"#000000",icon:"../../static/logo.png",iconsize:20,lv:3,onval:!0,unit:"upx",loadMake:!0,src:"",showLoading:!0,title:"Hello"}},computed:{loadingText:function(){return this.$t("share.share7")}},components:{titleCom:i.default,tkiQrcode:r.default},onLoad:function(){this.getData()},methods:{copy:function(){uni.setClipboardData({data:this.copytxt,success:function(){}})},getData:function(){var t=this;this.$api.share({}).then((function(e){200==e.code&&(t.shareinfo=e.data,t.copytxt=e.data.url,t.val=e.data.url)}))},qrR:function(t){}}};e.default=a},df66:function(t,e,n){"use strict";var o=n("59ae"),i=n.n(o);i.a},f425:function(t,e,n){t.exports=n.p+"static/img/bannerimg.7b72ce1e.png"}}]);