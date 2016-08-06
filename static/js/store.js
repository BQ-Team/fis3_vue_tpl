/**
 * Created by zyc on 2016/7/15.
 */
define(function (require, exports, module) {

    module.exports = {

        loginUser: {},
        //保险分类
        baoxianType: {
            1: "A保险",
            2: "B保险",
            3: "C保险"
        },
        //全国城市数据
        cityData: [
            {code: "100001", name: "北京", citys: []},
            {code: "100002", name: "上海", citys: []},
            {code: "100003", name: "深圳", citys: []},
            {code: "100004", name: "重庆", citys: []}
        ]

    };

});