/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    var store = require("store");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "选择城市",
        template: __inline("./page.html"),
        data: function () {
            return {
                shopAddress: store.shopAddress,
                Address: 1,
                item:{}
            }
        },
        ready: function () {
            var self = this;
        },
        attached: function () {
            this.Address  = this.params.Address;
        },
        detached: function () {

        },
        methods: {
            select: function (key) {
                var self = this;
                if (key)self.Address = key;
                if(key){
                    setTimeout(function () {
                        self.hideDialog();
                        self.params.ok(self.Address);//调用函数
                    }, 300);
                }else{
                    self.hideDialog();
                }
            }
        }
    });
});
