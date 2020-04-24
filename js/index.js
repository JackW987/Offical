$(function(){
    // 巨幕高度
    var InlHeight=$(window).height();
    $('.banner').height(InlHeight);
    var caseScroll=$(".case-scroll").offset().top;
    var serviceScrollOne=$('.service-about-title').offset().top;
    var serviceScrollTwo=$('.service-show-banner').offset().top;
    var contactScrollTop=$('.contact-us-banner').offset().top;
    var cooperScrollTop=$('.cooperation-banner').offset().top;
    var contentHeight=$('.mask-content').height();
    var moveHeight=contentHeight/2-5;
    // 首页轮播判断
    // $('.mask-content').css({
    //     'marginTop':-moveHeight
    // })
    // $(window).resize(function(){
    //     var contentHeight=$('.mask-content').height();
    //     var moveHeight=contentHeight/2-5;
    //     $('.mask-content').css({
    //         'marginTop':-moveHeight
    //     })
    //     console.log('pass')
    // })
    $('.mask-content a').click(function(){
        var t=$(window).scrollTop();
        var p=$('.banner').height();
        var sum=p-62;
        $('body,html').animate({
            'scrollTop':sum
        },1000)
    })
    $(window).scroll(function(){
        var top=$(document).scrollTop();
        var height=$(window).height();
        var sum=top+height;
        if(sum>=caseScroll){
            $('.case-banner-box').addClass('animated');
        // 淡入
            $('.case-banner-box').addClass('fadeInUp');
        }
        if(sum>=serviceScrollOne){
            $('.service-about-title').addClass('animated');
            $('.service-about-title').addClass('fadeInUp');
            $('.service-about-p').addClass('animated');
            $('.service-about-p').addClass('fadeInUp');
        }
        if(sum>=serviceScrollTwo){
            $('.service-top-row').addClass('animated');
            $('.service-top-row').addClass('bounceInUp');
            $('.service-bottom-row').addClass('animated');
            $('.service-bottom-row').addClass('bounceInUp');
        }
        if(sum>=contactScrollTop){
            $('.contact-us-banner').addClass('animated');
            $('.contact-us-banner').addClass('fadeInUp');
        }
        if(sum>=cooperScrollTop){
            $('.cooperation-banner').addClass('animated');
            $('.cooperation-banner').addClass('fadeInUp');
        }
    })
})