$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
        var elementOffset = $('.main-intro').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        // console.log(elementOffset);
        // console.log(windowHeight);

        if (scrollPosition > (elementOffset - windowHeight)) {
            if(windowWidth <768 ) {  // 모바일 버전
                $('.main-intro .intro-line').animate({
                    height: '1072px'
                  }, 3000);
            } else {  // pc 버전
                $('.main-intro .intro-line').animate({
                    height: '1417px'
                  }, 3000);
            }
            
            
            //   $('.main-intro .year').animate({
            //     opacity: '1'
            //   }, 3000)
        }

        if(windowWidth <768) {
            $('.main-collection-text').html('문화역서울284의<br>소장품을 구경해보세요.');
        } else {
            $('.main-collection-text').html('문화역서울284의 소장품을<br>구경해보세요.');
        }
    });


    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });



    //===================== footer =====================
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});