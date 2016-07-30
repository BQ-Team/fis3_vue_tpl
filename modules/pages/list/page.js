/**
 * Created by zyc on 2016/6/11.
 */
define(function (require, exports, module) {
    var basePage = require('basePage');
    var util = require("util");
    module.exports =Vue.extend({
        mixins: [basePage],
        html: $(__inline("./page.html")),
        title: "材料选择",
        //数据
        data: function(){
            return {

            }
        },
        //组件init 仅执行一次
        ready: function () {

        },
        attached: function () {

        },
        detached: function () {

        },

    })
});


