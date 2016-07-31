define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    module.exports = Vue.extend({
        title: "详情",
        mixins: [basePage],
        template: __inline("./page.html"),
        data: function () {
            return {
                isUseBalance:false
            }
        },
        ready: function () {
            /*this.changeEvent();*/
        },
        attached: function () {

            util.logger.log(this.title+" 進入,參數", this.params);
        },
        detached: function () {

        },
        methods: {
            showSelectCity: function () {
                this.showDialog("pages/selectPayType",{},"bottom");
            },
            changeEvent:function(e){

                this.isUseBalance = !this.isUseBalance;
            }
        }

    });
});