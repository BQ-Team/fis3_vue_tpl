///**
// * Created by zyc on 2016/6/20.
// * base页面模块
// */
define(function (require, exports, module) {
    var util = require("util");
    module.exports = Vue.extend({
        title: "",
        props: ['params'],
        data: function () {

        },
        ready:function(){
            util.logger.log(this.$options.title ,"，初始化完成");
        },
        attached:function(){
            util.logger.log(this.$options.title ,"，进入");

        },
        detached:function(){
            util.logger.log(this.$options.title ,"，离开");
        }
    });
});