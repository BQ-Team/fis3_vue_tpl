/**
 * Created by zyc on 2016/6/9.
 */
//入口模块
define(function (require, exports, module) {

    // 通过 require 引入依赖
    var util = require("util");//通用函数

    //全局公共组件
    var components = [
        "/modules/components/header/page"
    ];
    require.async(components, function () {

        // 创建全局跟组件app
        var app = new Vue({
            el: 'body',
            data: function () {
                return {
                    currentView: "",
                    pageParams: undefined
                };
            },
            components: {}
        });

        //地址和参数转换成hashUrl
        function dataToUrl(url, param) {
            param = typeof param == "object" ? encodeURIComponent(JSON.stringify(param)) : param;
            return '{0}/{1}'.format(url, param);
        }

        //路由模块跳转请求
        function routeRequire(moudle, page, data) {
            util.logger.log("加载模块：{0}/{1}  ,参数：{2}".format(moudle, page, data));
            var moduleJs = "./modules/{0}/{1}/page.js".format(moudle, page);
            var moduleUrl = "{0}/{1}".format(moudle, page);
            //加载动态数据，需用async
            require.async([moduleJs], function (mod) {
                app.currentView = moduleUrl;
                app.pageParams = !data ? undefined : JSON.parse(decodeURIComponent(data));
                if (!app.$options.components[moduleUrl]) {
                    app.$options.components[moduleUrl] = mod;
                }
            });
        };

        //路由配置
        var routesConfig = {
            "/:moudle/:page/?((\w|.)*)": {
                before: function (moudle, page, data) {

                },
                on: function (moudle, page, data) {
                    //记录当前模块
                    sessionStorage.setItem("currentMoudleHash", location.hash.substr(1));
                    //解析加载当前模块
                    routeRequire(moudle, page, data);
                }
            }
        };

        var router = new Router(routesConfig);
        var homePage = sessionStorage.getItem("currentMoudleHash") || "/pages/home";
        router.setRoute(homePage);//设置默认首页
        router.init();//路由初始化

        //跳转页面
        app.showPage = function (url, param) {
            router.setRoute(dataToUrl(url, param));

        };

        /**
         * 加載彈出框页面
         * @url 模块path 例如pages/page3
         * @data 参数
         * @position 弹出框口位置，枚举值：center、top、bottom .默认为center
         */
        app.showDialogPage = function (url, data, position) {
            util.logger.log("加载弹出模块：{0}  ,参数：{1}".format(url, data));
            var positionCssClass = {
                top: "positionTop",
                center: "positionCenter",
                bottom: "positionBottom"
            };
            var cssClass = positionCssClass[position] || "positionCenter";
            var moduleJs = "./modules/{0}/page.js".format(url);
            //加载动态数据，需用async
            require.async([moduleJs], function (mod) {
                mod.show = true;//显示
                mod.positionCss = cssClass;
                window.currentDialogModule = mod;//保存当前模块
            });
        }
    });
});
