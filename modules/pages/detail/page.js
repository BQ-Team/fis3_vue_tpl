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
                bannerList: [],
                item:{}
            }
        },
        ready: function () {
            var self=this;
            util.ajaxRequest({
                url: "detail/bannerlist",
                success: function (d) {
                    self.bannerList = d.data;
                    Vue.nextTick(function () {
                        self.swiperInit();
                    });
                }
            });
        },
        attached: function () {
            var self=this;
            util.ajaxRequest({
                url: "shop/shopDetail",
                data: {
                    page: 1
                },
                success: function (i) {
                    self.item = i.data;
                }
            });

        },
        detached: function () {

        },
        methods: {
            swiperInit: function () {
                new Swiper(".swiper-container", {
                    direction: "horizontal",
                    loop: true,
                    autoplay: 3000,
                    autoplayDisableOnInteraction: false,
                    pagination: ".swiper-pagination"
                });
            },
            showMsg: function () {

            }
        }
    });
});
