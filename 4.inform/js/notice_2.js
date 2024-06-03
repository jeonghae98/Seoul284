$(function() {
    //===================== main =====================
    // <공통 애니메이션>
    $('.inform-title').css('opacity', '1');
    $('.menu-list').css('opacity', '1');

    function Visibility() {  // 리스트 애니메이션
        $('.list').each(function() {
            var listTop = $(this).offset().top;
            var listBottom = listTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (listBottom > viewportTop && listTop < viewportBottom) {
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

    $('.ntc-list').each(function(i) {
        $(this).on('click', function() {

            let num = 2 - i;
            window.location.href = `./notice/ntc-detail-page_0${num}.html`;

        });
    });
});