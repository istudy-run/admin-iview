(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212dd124"],{"1b7c":function(e,r,t){e.exports=t.p+"img/qq.2cf4276d.svg"},"9f11":function(e,r,t){e.exports=t.p+"img/wx.c69ec08c.svg"},a806:function(e,r,t){e.exports=t.p+"img/wb.cbf658a0.svg"},dc3f:function(e,r,t){"use strict";t.r(r);var s=function(){var e=this,r=e._self._c;return r("div",{class:e.prefixCls},[r("div",{class:"".concat(e.prefixCls,"-header")}),r("div",{class:"".concat(e.prefixCls,"-container")},[r("div",{class:"".concat(e.prefixCls,"-container-top")},[r("div",{class:"".concat(e.prefixCls,"-container-logo")},[r("img",{attrs:{src:t("f66a"),alt:"logo"}})]),r("article",{class:"".concat(e.prefixCls,"-typography")},[r("h1",[e._v("iView Admin")]),r("div",{class:"".concat(e.prefixCls,"-typography")},[e._v("基于 iView Admin 2.0、ViewUI 4.0 的中台前端/设计解决方案")])])]),r("div",{class:"".concat(e.prefixCls,"-container-form")},[r("Form",{ref:"form",attrs:{model:e.form,rules:e.rule},nativeOn:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.handleSubmit.apply(null,arguments)}}},[r("FormItem",{attrs:{prop:"userName"}},[r("Input",{attrs:{size:"large",placeholder:"请输入用户名"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-contact-outline"}})]},proxy:!0}]),model:{value:e.form.userName,callback:function(r){e.$set(e.form,"userName",r)},expression:"form.userName"}})],1),r("FormItem",{attrs:{prop:"password"}},[r("Input",{attrs:{size:"large",type:"password",placeholder:"请输入密码"},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("Icon",{attrs:{type:"ios-lock-outline"}})]},proxy:!0}]),model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),r("div",{class:"".concat(e.prefixCls,"-container-auto-login")},[r("Checkbox",{attrs:{size:"large"}},[e._v("自动登录")]),r("a",{attrs:{href:""}},[e._v("忘记密码")])],1),r("div",{class:"".concat(e.prefixCls,"-container-submit")},[r("Button",{attrs:{type:"primary",size:"large",long:""},nativeOn:{click:function(r){return e.handleSubmit.apply(null,arguments)}}},[e._v("登录")])],1)],1)],1),r("div",{class:"".concat(e.prefixCls,"-container-other")},[r("span",[e._v("其它登录方式")]),r("img",{attrs:{src:t("9f11"),alt:"微信"}}),r("img",{attrs:{src:t("1b7c"),alt:"QQ"}}),r("img",{attrs:{src:t("a806"),alt:"微博"}}),r("router-link",{class:"".concat(e.prefixCls,"-container-register"),attrs:{to:"/register"}},[e._v("注册账户")])],1)]),r("GlobalFooter")],1)},a=[],n=t("5530"),o=(t("14d9"),t("2f62")),i=t("cd4a"),c="ivu-admin-login",l={name:"Login",components:{GlobalFooter:i["b"]},data:function(){return{prefixCls:c,form:{userName:"admin",password:"admin"},rule:{userName:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["handleLogin","getUserInfo"])),{},{handleSubmit:function(){var e=this;this.$refs.form.validate((function(r){r&&e.handleLogin(e.form).then((function(r){e.getUserInfo().then((function(r){e.$router.push({name:e.$config.homePageName})}))}))}))}})},p=l,u=t("2877"),f=Object(u["a"])(p,s,a,!1,null,null,null);r["default"]=f.exports}}]);