$(function () {
    // gnb 메뉴 토글
    $('.gnb-btn').click(function () {
        $('.mobile-nav').slideDown();
    });
    $('.gnb-close').click(function () {
        $('.mobile-nav').slideUp();
    });

    // 언어창 토글
    $('.lang-box').click(function () {
        $('.lang-box ul').stop().slideToggle(300);
    });

    // 메인비주얼 페이드효과
    $('.fade-banner').find('img:gt(0)').hide();
    let current = 0;
    setInterval(function () {
        let next = (current + 1) % 3;

        $('.fade-banner').find('img').eq(current).fadeOut(0);
        $('.fade-banner').find('img').eq(next).fadeIn(800);
        console.log(current, next);
        current = next;
    }, 5000);


    // $(function(){
    //     $(window).scroll(function(){
    //         let scrollPosition = $(window).scrollTop();
    //         console.log(scrollPosition);
    //         if( scrollPosition >= 100 ){
    //            $('#main-header').stop().slideDown(500);
    //         } else {
    //             $('#main-header').stop().slideUp(500);
    //         }
    //     });
    // });

    // 스크롤 업다운감지해서 헤더 숨기기
    $(function () {
        $(window).bind('mousewheel', function (event) {
            if (event.originalEvent.wheelDelta >= 0) {
                $('#main-header').slideDown();
            } else {
                $('#main-header').slideUp();
            }
        });

    });
});

