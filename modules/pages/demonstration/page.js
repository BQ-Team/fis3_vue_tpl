
/**
 * Created by zyc on 2016/6/11.
 */

define(function (require, exports, module) {
    var util = require("util");
    var baseDialogPage = require("baseDialogPage");
    var store = require("store");
    module.exports = Vue.extend({
        mixins: [baseDialogPage],
        title: "",
        template: __inline("./page.html"),
        data: function () {
            return {
                bannerList:[]
            }
        },
        ready: function () {
            var self = this;
            util.ajaxRequest({
                url: "services/getBannerList",
                success: function (d) {
                    self.bannerList = d.data;
                    Vue.nextTick(function () {
                        self.iSliderInit();
                    });
                }
            });
        },
        attached: function () {

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
                    plugins: [ 'zoompic',{zoomFactor: 3}]
                });
            },
            heid:function(){
                var self = this;
                self.hideDialog();
            }

        }
    });
});
