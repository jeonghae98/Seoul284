$(function() {
    $(window).scroll(function() {
         
      
        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

        if($(window).width() <= 768) {
            // mobile only code
            if ($scrollTop < 200) {
                $('.sec1').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec1').stop().animate({ opacity: '1' }, 300);
            }

            if ($scrollTop < 600) {
                $('.sec2').stop().animate({ opacity: '0' }, 300);
            } else {
                $('.sec2').stop().animate({ opacity: '1' }, 300);
            }
                
            if ($scrollTop < 700) {
                $('.img-box').stop().animate({ marginTop: '1000px' }, 500);
            } else {
                $('.img-box').stop().animate({ marginTop: '0px' }, 500);
            }

            if ($scrollTop < 1100) {
                $('.sec3').stop().animate({ opacity: '0' }, 700);
            } else {
                $('.sec3').stop().animate({ opacity: '1' }, 700);
            }


            if ($scrollTop < 1400) {
                $('.vission').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission').stop().animate({ opacity: '1'  }, 1000);
            }

            if ($scrollTop < 1500) {
                $('.vission2').stop().animate({ opacity: '0' }, 1000);
            } else {
                $('.vission2').stop().animate({ opacity: '1'  }, 1000);
            }
        } else {
    
        if ($scrollTop < 200) {
            $('.sec1').stop().animate({ opacity: '0' }, 100);
            $('.plus').stop().animate({ opacity: '0' }, 1000);
            $('.plus').stop().animate({ marginTop: '-200px' }, 300);
        } else {
            $('.sec1').stop().animate({ opacity: '1' }, 100);
            $('.plus').stop().animate({ opacity: '1' }, 1000);
            $('.plus').stop().animate({ marginTop: '0px' }, 500);
        }

        if ($scrollTop < 200) {
            $('.sec2').stop().animate({ opacity: '0' }, 300);
            $('.plus2').stop().animate({ opacity: '0' }, 1000);
            $('.plus2').stop().animate({ marginTop: '-200px' }, 300);
        } else {
            $('.sec2').stop().animate({ opacity: '1' }, 200);
            $('.plus2').stop().animate({ opacity: '0' }, 1000);
            $('.plus2').stop().animate({ marginTop: '0px' }, 700);
        }

        if ($scrollTop < 200) {
            $('.sec3').stop().animate({ opacity: '0' }, 300);
        } else {
            $('.sec3').stop().animate({ opacity: '1' }, 300);
        }

        if ($scrollTop < 1200) {
            $('.vission').stop().animate({ opacity: '0' }, 1000);
        } else {
            $('.vission').stop().animate({ opacity: '1'  }, 500);
        }

        if ($scrollTop < 1800) {
            $('.vission2').stop().animate({ opacity: '0' }, 1000);
        } else {
            $('.vission2').stop().animate({ opacity: '1'  }, 500);
        }
        }

        
    })
});