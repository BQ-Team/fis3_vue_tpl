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
                shopList: []
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
                        self.swiperInit();
                    });
                }
            });

            util.ajaxRequest({
                url: "serevers/shopList",
                data: {
                    page: 1
                },
                success: function (e) {
                    self.shopList = e.data;
                   /* Vue.nextTick(function () {
                        self.droploadInit();
                    });*/
                }
            });
        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            //
            swiperInit: function () {
                  new Swiper(".swiper-container", {
                    direction: "horizontal",
                    loop: true,
                    autoplay: 3000,
                    autoplayDisableOnInteraction: false,
                    pagination: ".swiper-pagination"
                });
            },

            droploadInit: function () {
                var self = this;
                self.$parent.dropload({
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
                if (isReload)self.data.page = 1;
                util.ajaxRequest({
                    url: "services/getStoreAddress",
                    data: {
                        page: self.data.page
                    },
                    success: function (d) {
                        self.dataBind(".storeItemTpl", d.data, ".storeListBox", isReload);//模板，数据，目标，
                        dropload.resetload();//重置上拉下拉控件
                        if (!isReload) {
                            self.data.page++;
                        }
                    }
                });
            },
            goDetail: function (item) {
                this.$parent.showPage("pages/detail", item.id);
            }
        }
    });
});
