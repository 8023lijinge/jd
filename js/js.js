/*** Created by Áõ³¿ on 2017/5/25.*/


$(window).scroll(
    function(){
        var a=$(window).scrollTop();
        if(a>=100){
            $(".header").css("background","rgba(255,0,0,0.7)");
        }
        if(a<100){
            $(".header").css("background","none");
            }
    }

)
