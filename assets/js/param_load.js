;(function($, window, undefined){

	"use strict";

	$(document).ready(function()
	{
        // 加载参数
        var Ajax = function () {
            $.getJSON ("../assets/config.json", function (data) {
                console.log(data);
                // main_menu 侧边加载
                $.each (data["main_menu"]["nolist"], function (i, item)
                {
                    var txt1="<li>\
                                <a href=\"#"+ item.href +"\" class=\"smooth\">\
                                    <i class=\""+ item.icon +"\"></i>\
                                    <span class=\"title\">"+ item.title +"</span>\
                                </a>\
                            </li>";    
                    $(".main-menu").append(txt1)
                });
                
                $.each (data["main_menu"]["list"], function (i, item)
                {
                    var menu_ul = $("<ul></ul>")
                    var menu_li = $("<li></li>")
                    var menu_li_a = "<a>\
                                        <i class=\""+ item.icon +"\"></i>\
                                        <span class=\"title\">"+ item.title +"</span>\
                                    </a>"
                    menu_li.append(menu_li_a)

                    $.each (data["main_menu"]["list"][i]["data"], function (i, item)
                    {
                        var menu_ul_li_a = "<li>\
                                                <a href=\"#"+ item.href +"\" class=\"smooth\">\
                                                    <span class=\"title\">"+ item.title +"</span>\
                                                </a>\
                                            </li>"
                        menu_ul.append(menu_ul_li_a)
                    });
                    menu_li.append(menu_ul)
                    console.log(menu_li)
                    $(".main-menu").append(menu_li)
                });
            });
        }();
    });
})(jQuery, window);
