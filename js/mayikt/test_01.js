$(function () {
    new Vue({

        el: "#vueObj",
        data: {
            myName: "王凯",
            myUrl: "<a href='http://www.baidu.com'>百度一下</a>",
            seen: false
        },
        methods: {
            myAlert: function () {
                alert("myAlert");
            },
            myVmodel: function () {
                this.seen = true;
            },
            postRequest: function () {
                axios.post('http://www.hbisscm.com/scm-std-web/api/ticket/open/queryListByCID.htm', {
                        name: ""
                    }
                ).then(function (value) {
                    console.log("请求成功：" + value);
                }).catch(function (reason) {
                    console.log("请求失败：" + reason);
                })
            },
            getRequest: function () {
                axios.get('http://localhost:8888/toAddFact?code=1'
                ).then(function (value) {
                    console.log("请求成功：" + value.data);
                }).catch(function (reason) {
                    console.log("请求失败：" + reason);
                })
            }
        }


    });
});