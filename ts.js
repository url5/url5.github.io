

        $(document).ready(function() {
            function getQueryVariable(variable) {
				var query = window.location.search.substring(1);
				var vars = query.split("&");
				for (var i = 0; i < vars.length; i++) {
					var pair = vars[i].split("=");
					if (pair[0] == variable) {
						return pair[1];
					}
				}
				return (false);
			}
            
            var u = getQueryVariable('u');
            $.ajax({
                url: "https://dwz.chuai6.cn/github.php?act=geturl&u="+u,
                type: "get",
                dataType: "json",
                success: function(result) {
                    if (result.code == 1 &&result.pattern>2) {
                        $('#Zl').html('<iframe width="100%" id="rid" src="' + result.url + '" frameborder="0"></iframe>');
                        
                    } else {
                        $('#Zl').html('<iframe width="100%" height="100%" id="rid" src="' + result.url + '" frameborder="0"></iframe>');
                    }
		   if (result.code == 1 &&result.pattern<3) {
		   	 window.location =result.url;
		   }
                },
                error: function(data) {
                    $('#Zl').html('<iframe width="100%" height="100%" id="rid" src="https://www.baidu.com" frameborder="0"></iframe>');
                }
            });
        });
       
       