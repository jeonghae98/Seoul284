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
    
    
    
     // <모바일 search>
     const searchBox = $('#search-box');
     function toggleSearchBox() {
         if (searchBox.css('display') === 'none') {
             searchBox.css('display', 'block');
         } else {
             searchBox.css('display', 'none');
         }
     }
 
     if ($(window).width() < 768) {
         searchBox.css('display', 'none');
         $('.menu-list > .search > img').click(toggleSearchBox);
     } else {
         searchBox.css('display', 'block');
     }
 
     $(window).resize(function () {  // 창의 크기 변경 이벤트 처리
         if ($(window).width() < 768) {
             searchBox.css('display', 'none');
             $('.menu-list > .search > img').off('click').on('click', toggleSearchBox);
         } else {
             searchBox.css('display', 'block');
             $('.menu-list > .search > img').off('click');
         }
     });
    
    
    // <상세페이지 연결>
    let i = 0;
    const $list = $('.list');

    $list.each(function(i) {
        $(this).on('click', function() {
            let num = i + 1;
            window.location.href = `./contest/contest-detail-page_0${num}.html`;
        });
    });
});