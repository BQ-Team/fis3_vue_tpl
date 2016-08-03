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
                url: "shop/Order",
                data: {
                    page: 1
                },
                success: function (i) {
                    self.item = i.data;
                }
            });
            util.logger.log(this.title+" 進入,參數", this.params);
        },
        detached: function () {

        },
        methods: {
            viewDetails: function () {
                var self = this;
                this.showDialog("pages/AccountDetail", {
                    Address:self.Address,
                    ok:function(newKey){
                        self.Address = newKey;
                    }
                }, "bottom");
            },
            showMsg: function () {

            }
        }
    });
});
var b={
    status:1,
    errorMsg:"",
    data:{
        servicePoint:"上海虹桥服务点",serviceCode:"8945 2912",state:"未使用",tel:"17712900654"
    }
}
