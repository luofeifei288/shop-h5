(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-login"],{1714:function(t,n,i){"use strict";i.r(n);var e=i("ca81"),a=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=a.a},"2a90":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("title-com",{attrs:{isshow:!1,bgcolor:t.bgcolor}}),e("v-uni-view",{staticClass:"logo"},[e("v-uni-image",{attrs:{src:i("ba8b"),mode:""}})],1),e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"name"},[e("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.$t("login.login1"))+":")]),e("v-uni-view",{staticClass:"nameinp",staticStyle:{display:"flex"}},[e("el-select",{attrs:{value_key:"label",area:t.area,options:t.options},model:{value:t.area,callback:function(n){t.area=n},expression:"area"}}),e("v-uni-input",{staticStyle:{width:"66%"},attrs:{type:"number",maxlength:"11",placeholder:t.$t("login.login1_1")},model:{value:t.phone,callback:function(n){t.phone=n},expression:"phone"}})],1)],1),e("v-uni-view",{staticClass:"name possword"},[e("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.$t("login.login2"))+":")]),e("v-uni-view",{staticClass:"nameinp"},[e("v-uni-input",{attrs:{type:"text",password:!0,maxlength:"16",placeholder:t.$t("login.login2_1")},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1)],1),e("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between","margin-top":"30rpx"}},[e("v-uni-view",{staticClass:"switch"},[e("v-uni-switch",{staticStyle:{transform:"scale(0.7)"},attrs:{color:"#D66A28",checked:t.isRemember},on:{change:function(n){arguments[0]=n=t.$handleEvent(n),t.switch1Change.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"jzmm"},[t._v(t._s(t.$t("login.login3")))])],1),e("v-uni-view",{staticClass:"setpoword",staticStyle:{height:"1"}},[e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toUrl("zc")}}},[t._v(t._s(t.$t("login.login4")))])],1)],1),e("v-uni-view",{staticClass:"btn"},[e("v-uni-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.login.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.login6")))])],1),e("v-uni-view",{staticClass:"findpass"},[e("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toUrl("zh")}}},[t._v(t._s(t.$t("login.login5")))])],1)],1)],1)},o=[]},"5b2e":function(t,n,i){var e=i("9f1c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("80f38976",e,!0,{sourceMap:!1,shadowMode:!1})},"9f1c":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-43209c47]{background-color:#e8eee4}.logo[data-v-43209c47]{display:flex}.logo uni-image[data-v-43209c47]{width:%?210?%;height:%?182?%;margin:%?215?% auto %?133?%}.box[data-v-43209c47]{margin:0 %?78?%}.name[data-v-43209c47]{display:flex;align-items:center;justify-content:space-between;margin-bottom:%?37?%;padding-bottom:%?37?%;border-bottom:%?2?% solid hsla(0,0%,43.9%,.22)}.name .txt[data-v-43209c47]{font-size:%?26?%;font-weight:700;min-width:%?150?%;max-width:%?150?%;color:#d66a28}.name .nameinp[data-v-43209c47]{width:%?438?%;height:%?78?%;box-shadow:0 %?2?% %?6?% rgba(0,0,0,.16);border-radius:%?20?%;margin-left:%?44?%}.name .nameinp uni-input[data-v-43209c47]{height:%?78?%;width:80%;text-indent:%?21?%}.possword[data-v-43209c47]{margin-top:%?67?%}.switch[data-v-43209c47]{display:flex;align-items:center;font-size:%?28?%;font-weight:700}.switch .jzmm[data-v-43209c47]{color:#d66a28;font-size:%?26?%}.setpoword[data-v-43209c47]{font-size:%?26?%;font-weight:700;color:#d66a28;text-decoration:underline}.btn uni-button[data-v-43209c47]{width:%?440?%;height:%?86?%;font-weight:700;margin-top:%?120?%;background-color:#d66a28;border-radius:%?20?%;font-size:%?28?%;line-height:%?86?%}.findpass[data-v-43209c47]{text-align:right;font-weight:700;font-size:%?26?%;margin-top:%?58?%;color:#d66a28;text-decoration:underline}.ep-picker-box[data-v-43209c47]{min-width:%?110?%;margin-left:%?10?%;background-color:initial}[data-v-43209c47] .ep-input-box{border:none}[data-v-43209c47] .ep-input-box .label-item{min-height:%?80?%}body.?%PAGE?%[data-v-43209c47]{background-color:#e8eee4}',""]),t.exports=n},ca81:function(t,n,i){"use strict";var e=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e(i("7d9a")),o=e(i("7de7")),s={components:{elSelect:a.default,titleCom:o.default},data:function(){return{phone:"",password:"",isRemember:!0,loading:!1,area:"",options:[{value:"1",label:"54"}],bgcolor:{"background-color":"#e8eee4"}}},onLoad:function(){var t=this;uni.getStorage({key:"userinfo",success:function(n){t.isRemember=!0,t.phone=n.data.phone,t.password=n.data.password},fail:function(t){this.isRemember=!1}}),this.area=this.options[0].label,this.goIndex()},methods:{goIndex:function(){var t=this;uni.getStorage({key:"token",success:function(n){t.$api.valiToken({token:n.data}).then((function(t){t.data.valid&&uni.switchTab({url:"../main/index"})}))}})},switch1Change:function(t){this.isRemember=t.detail.value,0==t.detail.value&&uni.removeStorage({key:"userinfo"})},toUrl:function(t){"zc"==t?uni.navigateTo({url:"./register"}):"zh"==t&&uni.navigateTo({url:"./findpassword"})},login:function(){if(this.phone&&this.password){this.isRemember&&uni.setStorage({key:"userinfo",data:{phone:this.phone,password:this.password}});var t=this;uni.getStorage({key:"token",success:function(n){var i=this;t.$api.valiToken({token:n.data}).then((function(n){n.data.valid?uni.switchTab({url:"../main/index"}):t.loginfun.apply(i)}))},fail:function(){t.loginfun.apply(this)}})}else uni.showToast({title:this.$t("login.login7"),icon:"none"})},loginfun:function(){var t=this;this.$api.passwordLogin({area_code:this.area,tel:this.phone,pwd:this.password}).then((function(n){t.loading=!0,200==n.code?uni.setStorage({key:"token",data:n.data.token,success:function(){this.loading=!1,uni.switchTab({url:"../main/index"})}}):(t.loading=!1,uni.showToast({title:n.msg,icon:"none"}))}))}}};n.default=s},ccfe:function(t,n,i){"use strict";i.r(n);var e=i("2a90"),a=i("1714");for(var o in a)"default"!==o&&function(t){i.d(n,t,(function(){return a[t]}))}(o);i("ed27");var s,c=i("f0c5"),l=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"43209c47",null,!1,e["a"],s);n["default"]=l.exports},ed27:function(t,n,i){"use strict";var e=i("5b2e"),a=i.n(e);a.a}}]);