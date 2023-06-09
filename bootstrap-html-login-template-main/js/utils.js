function addTar(data) {
            var tar = $("<tr>").append(
                $("<th>", {
                    "scope": "row",
                    "html": "#"
                }),
                $("<td>", {
                    "html": data.name
                }),
                $("<td>", {
                    "html": data.sex
                }),
                $("<td>", {
                    "html": data.tel
                }),
                $("<td>", {
                    "html": data.address
                }),
                $("<td>", {
                    "html": data.birth
                }),
                $("<td>", {
                    "html": data.academy
                }),
                $("<td>", {
                    "html": data.specialize
                })
            )
            return tar
        }
function retainReq(url) {
        var params = new Object();
        if ( url.indexOf( "?" ) != -1 ) {
            var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                params[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return params
}