$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
    // <menu-list 현재 페이지에 hover 고정>
    
      



    // <fixed-number 부분 상세페이지 연결>
    let i = 0;
    $('.list:eq(0)').click(function() {
        window.location.href = `./notice/ntc-detail-page_10.html`;
    });


    $('.list:eq(1)').click(function() {
        window.location.href = `./notice/ntc-detail-page_09.html`;
    });




    // <list-number 부분 상세페이지 연결>
    $('.ntc-list').each(function(i) {
        $(this).on('click', function() {

            let num = 10 - i;
            window.location.href = `./notice/ntc-detail-page_0${num}.html`;

            if(i === 0) {
                window.location.href = `./notice/ntc-detail-page_10.html`;
            }

        });
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