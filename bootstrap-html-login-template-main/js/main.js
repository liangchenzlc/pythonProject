$(function (){
            $("#selectAll").on("click", (e) => {
            $("#inputUsername").val("")
            $("#inputAddress").val("")
            $("#inputSpecialize").val("")
            $.ajax({
            method: "get",
            url: "http://localhost/main/",
            async: true,
            success: (res) => {
                res = JSON.parse(res)
                if(res.status== 200) {
                    for(var i = 0; i < res.data.length; i++ ) {
                        $("tbody").append(addTar(res.data[i]))
                    }
                }
            }
        })
        })
        // 根据用户名查询
        $("#selectUsername").on("click", (e) => {
            var keywords= $("#inputUsername").val()
            if(keywords == '') return;
            $("#inputAddress").val("")
            $("#inputSpecialize").val("")
            $.ajax({
                method: "get",
                url: "http://localhost/select/name/",
                data: {
                    "keywords": keywords
                },
                success: (res) => {
                    res = JSON.parse(res)
                    if(res.status == 200) {
                        $("tbody").empty()
                        for(var i = 0; i < res.data.length; i++ ) {
                            $("tbody").append(addTar(res.data[i]))
                        }
                    }
                }
            })
        })
        // 根据地区查询
        $("#selectAddress").on("click", (e) => {
            var keywords= $("#inputAddress").val()
            if(keywords == '') return;
            $("#inputUsername").val("")
            $("#inputSpecialize").val("")
            $.ajax({
                method: "get",
                url: "http://localhost/select/address/",
                data: {
                    "keywords": keywords
                },
                success: (res) => {
                    res = JSON.parse(res)
                    console.log(res)
                    if(res.status == 200) {
                        $("tbody").empty()
                        for(var i = 0; i < res.data.length; i++ ) {
                            $("tbody").append(addTar(res.data[i]))
                        }
                    }
                }
            })
        })
         // 根据专业查询
        $("#selectSpecialize").on("click", (e) => {
            var keywords= $("#inputSpecialize").val()
            if(keywords == '') return;
            $("#inputAddress").val("")
            $("#inputUsername").val("")
            $.ajax({
                method: "get",
                url: "http://localhost/select/specialize/",
                data: {
                    "keywords": keywords
                },
                success: (res) => {
                    res = JSON.parse(res)
                    console.log(res)
                    if(res.status == 200) {
                        $("tbody").empty()
                        for(var i = 0; i < res.data.length; i++ ) {
                            $("tbody").append(addTar(res.data[i]))
                        }
                    }
                }
            })
        })
        $("#layout").on("click", (e) => {
            localStorage.removeItem("userName")
            localStorage.removeItem("passWord")
            localStorage.removeItem("check2")
            localStorage.removeItem("check1")
            location = "login.html"
        })
})