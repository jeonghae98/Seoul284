$(function() {
    //===================== header =====================
    //--------------------- 모바일 ---------------------
    var mobile = $('#mobileBar');
    
    mobile.on('click', function() {
        var mainMenu = $('#mainMenu');

        // <햄버거 메뉴 -> X 모양>
        mobile.toggleClass('active');  
        
        
        // <search 없애기>
        $('.search').toggleClass('hide');



        // <모바일 메뉴>
        mainMenu.toggleClass('active');
        
        if ($('.main-menu').hasClass('active')) {
            $('body').addClass('stop-scroll');
            $('.main-menu').css({
                'display': 'block',
                'position': 'fixed',
                'top': '12vh',
                'right': 0,
                'borderTop': '1px solid #dbdbdb',
                'width': '100%',
                'height': '100%',
                'background-color': '#fff'
            });
        } else {
            $('body').removeClass('stop-scroll');
            $('.main-menu').css('display', 'none');
        }
        
        // #sub-menu 나오게 하기
        $('.gnb-title').on('click', function(e) {
            e.preventDefault();
        
            var $parentLi = $(this).parent('li');  // 클릭된 메뉴의 부모 li 요소 찾기
        
            $parentLi.find('.sub-menu').stop().slideToggle(500);  // 클릭된 메뉴의 하위 메뉴를 슬라이드 토글
        
            $('.gnb li').not($parentLi).find('.sub-menu').stop().slideUp(500);  // 다른 모든 하위 메뉴를 슬라이드 업
        
        
            // #gnb-title 눌렀을 때 모습
            $('.gnb-title').removeClass('highlight');  // 모든 .gnb-title 요소에서 highlight 클래스 제거
    
            if (!$(this).hasClass('highlight')) {
                $(this).addClass('highlight');
            }  // 클릭한 요소의 현재 상태에 따라 highlight 클래스 추가 또는 제거
           
        });
        

        // #sub-menu 눌렀을 때 모습
        $('.sub-menu a').click(function() {
            $('.sub-menu a').css({  
                'color': '',
                'textDecoration': ''
            });
    
    
            $(this).css({  
                'color': '#000',
                'textDecoration': 'underline'
            });
        });
    });



    //--------------------- PC ---------------------
    // $('.gnb-title').hover(function() {
    //     // 마우스가 올라갔을 때 서브메뉴를 내림
    //     $(this).next('.sub-menu').stop().slideDown(500);
    // }, function() {
    //     // 마우스가 벗어났을 때 서브메뉴를 올림
    //     $(this).next('.sub-menu').stop().slideUp(500);
    // });
    var pcWindowWidth = $(window).width() > 768;
    var $subMenu = $('.gnb-title').next('.sub-menu');

    if (pcWindowWidth) {
        $('.gnb-title').hover(function() {
            // 마우스가 올라갔을 때 서브메뉴를 내림
            $subMenu.stop().slideDown(500);
            $subMenu.addClass('active');
            $('.sub-menu > li > a').css('padding', '10px 0');
        });

        $('.gnb').hover(function() {
            // gnb 내부에서는 아무것도 하지 않음
        }, function() {
            // 마우스가 gnb 영역을 벗어났을 때 모든 서브메뉴를 올림
            $('.sub-menu').stop().slideUp(500);
        });
    }






    //===================== main =====================
    

    
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

    
    //--------------------- fixed-menu ---------------------
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});

