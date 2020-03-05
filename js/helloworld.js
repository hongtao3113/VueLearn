$(function () {
    new Vue({
        el: "#box",
        data: {
            description: "VueLearn",
            htmlCode: "<h3>菜鸟教程</h3>",
            use: false,
            url: "http://www.baidu.com",
            seen:true
        },
        methods: {
            getEmail: function (param) {
                return param;
            },
            getMessage: function () {
                window.wxc.xcConfirm("走啊，树哥", window.wxc.xcConfirm.typeEnum.info);
            }
        }
    });
})