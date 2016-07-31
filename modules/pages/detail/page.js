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
                cityCode: "100002",
                dateTime: "",
                inputMoney:100.12
            }
        },
        filters:{
            'cityFormat': function (value) {
                var store = require("store");   //引用
                var item = store.cityData.filter(function (city) {
                    return city.code == value;
                });
                return item ? item[0].name : ""; //三元
            }
        },
        ready: function () {

        },
        attached: function () {
            util.logger.log(this.title + " 進入,參數", this.params);

        },
        detached: function () {

        },
        methods: {
            showSelectCity: function () {
                var self = this;
                this.showDialog("pages/selectCity", {
                    city: self.cityCode,
                    ok: function (newCity) {
                        self.cityCode = newCity;
                    }
                }, "bottom");
            }

        }
    });
});
