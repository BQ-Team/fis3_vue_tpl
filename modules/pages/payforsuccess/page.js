
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
                item:{}
            }
        },
        ready: function () {

        },
        attached: function () {
            var self=this;
            util.ajaxRequest({
                url: "shop/paySuccess",
                data: {
                    page: 1
                },
                success: function (e) {
                    self.item = e.data;
                }
            });
            util.logger.log(this.title+" 進入,參數", this.params);
        },
        detached: function () {

        },
        methods: {
            showMsg: function () {

            }
        }
    });
});
