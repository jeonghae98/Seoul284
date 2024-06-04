$(function() {
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
});