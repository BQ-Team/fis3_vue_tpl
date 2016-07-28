/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        title: "详情",
        mixins: [basePage],
        template: __inline("./page.html"),
        data: function () {
            return {

            }
        },
        ready: function () {

        },
        attached: function () {

            util.logger.log(this.$options.title+" 進入,參數", this.params);
        },
        detached: function () {

        },
        methods: {
            showMsg: function () {

            }
        }
    });
});
