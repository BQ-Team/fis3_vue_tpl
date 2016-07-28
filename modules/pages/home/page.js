/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        mixins: [basePage],
        title: "首页",
        template: __inline("./page.html"),
        data: function () {
            return {
                list: [],
                selectIndex: -1
            }
        },
        ready: function () {
            var self = this;
            util.ajaxRequest({
                url: "services/getStoreAddress",
                data: {
                    page: 1
                },
                success: function (d) {
                    self.list = d.data;
                }
            });

        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            showMsg: function (item, index, e) {
                item.id = index;
                this.showPage("pages/detail", item);
                this.selectIndex = index;
            }
        }
    });
});
