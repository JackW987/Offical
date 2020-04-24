$(function(){
    $(window).scroll(function(){
        // 导航栏样式
        var navTop=$(document).scrollTop();
        if(navTop>=100){
            $('.top-nav').addClass('nav-scroll');
        }
        if(navTop<=100){
            $('.top-nav').removeClass('nav-scroll');
        }
    })
})