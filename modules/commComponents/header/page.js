/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    module.exports = Vue.extend({
        title: "首页",
        template:__inline("./page.html"),
        data: function () {
            return {
                msg: 'hello'
            }
        },
        ready:function(){
            util.logger.log(this.$options.title ,"，初始化完成");
        },
        attached:function(){
            util.logger.log(this.$options.title ,"，进入");
        },
        detached:function(){
            util.logger.log(this.$options.title ,"，离开");
        },
        methods: {
            showMsg: function () {
               alert(this.msg);
            }
        }
    });
});
