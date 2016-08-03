define(function (require, exports, module) {
    var util = require("util");
    var basePage = require("basePage");
    var store = require("store");
    module.exports = Vue.extend({
        title: "详情",
        mixins: [basePage],
        template: __inline("./page.html"),
        data: function () {
            return {
                isUseBalance: false,
                buyNumber: 1,
                selectDistribution: 1,
                item:{},
                Address:1
            }
        },
        filters: {
            distributionFormat:function(value){
                return store.distributionType[value];
            },
            shopAddressFormat:function(value){
                return store.shopAddress[value];
            }
        },
        ready: function () {

        },
        attached: function () {
            var self=this;
            util.ajaxRequest({
                url: "shop/submitOrders",
                data: {
                    page: 1
                },
                success: function (i) {
                    self.item = i.data;
                }
            });
            util.logger.log(this.title + " 進入,參數", this.params);
        },
        detached: function () {

        },
        methods: {
            DstributionType: function () {
                var self = this;
                this.showDialog("pages/selectPayType", {
                    selectDistribution:self.selectDistribution,
                    ok:function(newKey){
                        self.selectDistribution = newKey;
                    }
                }, "bottom");
            },
            selectAddress: function () {
                var self = this;
                this.showDialog("pages/selectCity", {
                    Address:self.Address,
                    ok:function(newKey){
                        self.Address = newKey;
                    }
                }, "bottom");
            },
            changeEvent: function (e) {
                this.isUseBalance = !this.isUseBalance;
            },
            reduce: function () {
                if( this.buyNumber>1){
                    this.buyNumber--;
                }
            },
            plus: function () {
                this.buyNumber++;
            }
        }
    });
});

