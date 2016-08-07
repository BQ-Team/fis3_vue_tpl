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
                bannerList: [],
                shopList: [],
                page: 1
            }
        },
        ready: function () {
            var self = this;
            //
            util.ajaxRequest({
                url: "services/getBannerList",
                success: function (d) {
                    self.bannerList = d.data;
                    Vue.nextTick(function () {
                        self.iSliderInit();
                    });
                }
            });

            self.droploadInit();
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            //
            iSliderInit: function () {
                var self = this;
                var list = $.map(self.bannerList, function (url) {
                    return {content: url};
                });
                var slider = new iSlider({
                    dom: self.$el.getElementsByClassName("iSlider-wrapper")[0],
                    data: list,
                    isLooping: 1,
                    isOverspread: 1,
                    animateTime: 800,
                    plugins: ['dot']
                });

            },
            droploadInit: function () {
                var self = this;
                $(self.$el).dropload({
                    loadUpFn: function (dropload) {
                        console.log("下拉");
                        self.getStoreAddress(true, dropload);
                    },
                    loadDownFn: function (dropload) {
                        console.log("上拉");
                        self.getStoreAddress(false, dropload);
                    }
                });
            },
            getStoreAddress: function (isReload, dropload) {
                var self = this;
                if (isReload)self.page = 1;
                util.ajaxRequest({
                    url: "serevers/shopList",
                    data: {
                        page: self.page
                    },
                    success: function (d) {
                        if (isReload) {
                            self.shopList = d.data;
                        } else {
                            self.shopList = self.shopList.concat(d.data);
                        }
                        if (!isReload) {
                            self.page++;
                        }
                        setTimeout(function () {
                            if (!d.data || d.data.length == 0)dropload.noData();//显示暂无数据
                            dropload.resetload();//重置上拉下拉控件
                        }, 1000);
                    }
                });
            },
            goDetail: function (item) {
                this.$parent.showPage("pages/detail", item.id);
            }
        }
    });
});