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
                        self.iSliderInit();
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
            iSliderInit:function(){
                var self = this;
                var list =  $.map(self.bannerList,function(url){
                    return {content:url};
                });
                var S = new iSlider({
                    dom: self.$el.getElementsByClassName("iSlider-wrapper")[0],
                    data: list,
                    isLooping: 1,
                    isOverspread: 1,
                    animateTime: 800, // ms
                    plugins: ['dot', 'zoompic',{zoomFactor: 3}]
                });
            },
            showMsg: function () {

            }
        }
    });
});
