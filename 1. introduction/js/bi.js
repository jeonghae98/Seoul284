$(function() {
    $(window).scroll(function() {
        let $scrollLeft = $(this).scrollLeft(); // 수평 스크롤바의 위치인식


        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

        if ($scrollTop < 600) {
            $('.sec2-title h2').stop().animate({ opacity: '0' }, 300);
        } else {
            $('.sec2-title h2').stop().animate({ opacity: '1' }, 300);
        }

        if ($scrollTop < 600) {
            $('.sec2-title p').stop().animate({ opacity: '0' }, 300);
        } else {
            $('.sec2-title p').stop().animate({ opacity: '1' }, 300);
        }

        if ($scrollTop < 900) {
            $('.img-box').stop().animate({ marginTop: '1000px' }, 1000);
        } else {
            $('.img-box').stop().animate({ marginTop: '0px' }, 1000);
        }

        if ($scrollTop < 1500) {
            $('.sec3').stop().animate({ opacity: '0' }, 1000);
        } else {
            $('.sec3').stop().animate({ opacity: '1' }, 1000);
        }
        

        if ($scrollTop < 2300) {
            $('.color').stop().animate({ opacity: '0', height: '0px' }, 1000);
        } else {
            $('.color').stop().animate({ opacity: '1' ,height: '600px' }, 1000);
        }


        
    })
});