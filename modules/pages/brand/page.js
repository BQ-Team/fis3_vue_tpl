/**
 * Created by zyc on 2016/7/30.
 */
define(function (require, exports, module) {
    var basePage = require('basePage');
    var util = require("util");
    module.exports =Vue.extend({
        mixins: [basePage],
        html: $(__inline("./page.html")),
        title: "材料选择",
        //数据
        data: function(){
            return {

            }
        },
        //组件init 仅执行一次
        ready: function () {

        },
        attached: function () {

        },
        detached: function () {

        },
        methods: {
            showMsg: function (item, index, e) {
                item.id = index;
                this.showPage("pages/list", item);
                this.selectIndex = index;
            }

        }
    })
});


