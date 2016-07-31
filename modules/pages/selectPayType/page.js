/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "选择方式",
        template: __inline("./page.html"),
        data: function () {
            return {
              useHome:false,
              useStore:true
            }
        },
        ready: function () {
            var self = this;

        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            select: function () {
                this.hideDialog();
            },
            changeEvent:function(e){
                this.useHome=!this.useHome;
                this.useStore=!this.useStore;
            }
        }
    });
});
