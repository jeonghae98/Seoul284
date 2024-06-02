$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
     // <공통 애니메이션>
     $('.news-title').css('opacity', '1');
     $('.search').css('opacity', '1');


     function Visibility() {  // 리스트 애니메이션
        $('.box').each(function() {
            var boxTop = $(this).offset().top;
            var boxBottom = boxTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (boxBottom > viewportTop && boxTop < viewportBottom) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }

    $(window).on('scroll resize', Visibility);
    $(window).trigger('scroll');



    // <상세페이지 연결>
    let i = 0;
    $('.box').each(function(i) {
        $(this).on('click', function() {
            let num = i + 1;

            window.location.href = `./news/news-detail-page_${num}.html`;
        })
    })

    
    //===================== footer =====================
    function updateFooterLogo() {
        var footerWindowWidth = $(window).width();

        if(footerWindowWidth < 768) {
            $('.footer-logo').html('<h2>문화역서울284</h2>');
        } else {
            $('.footer-logo').html('<h2>문화역<br>서울284</h2>');
        }
    }

    updateFooterLogo();

    $(window).resize(function() {
        updateFooterLogo();
    });

    
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});