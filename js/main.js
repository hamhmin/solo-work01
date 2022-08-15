$(function(){
    // gnb 메뉴 토글
    $('.gnb-btn').click(function(){
        $('.mobile-nav').slideDown();
    });
    $('.gnb-close').click(function(){
        $('.mobile-nav').slideUp();
    });
    
    // 언어창 토글
    $('.lang-box').click(function(){
        $('.lang-box ul').stop().slideToggle(300);
        });
        
    });