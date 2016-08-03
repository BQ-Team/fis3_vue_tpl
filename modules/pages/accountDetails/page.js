/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    var store = require("store");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "选择方式",
        template: __inline("./page.html"),
        data: function () {
            return {
                distributionType: store.distributionType,
                selectDistribution: 1,
                item:{}
            }
        },
        ready: function () {
            var self = this;

        },
        attached: function () {

            this.selectDistribution  = this.params.selectDistribution;
        },
        detached: function () {

        },
        filters:{

        },
        methods: {
            select: function (key) {
                var self = this;
                if (key)self.selectDistribution = key;
                if(key){
                    setTimeout(function () {
                        self.hideDialog();
                        self.params.ok(self.selectDistribution);//调用函数
                    }, 300);
                }else{
                    self.hideDialog();
                }
            },
            changeEvent: function (e) {

            }
        }
    });
});
