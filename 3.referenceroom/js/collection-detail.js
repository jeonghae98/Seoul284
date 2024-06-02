$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
    function Visibility() {  // 리스트 애니메이션
        $('.collec-image-desc-box').each(function() {
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



    // <이미지 변경>
    $('.other-images img').on('click', function() {
        var mainImg = $('.main-image img');
        var clickedImg = $(this);

        var mainSrc = mainImg.attr('src');
        var clickedSrc = clickedImg.attr('src');

        mainImg.attr('src', clickedSrc);
        clickedImg.attr('src', mainSrc);
    });
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