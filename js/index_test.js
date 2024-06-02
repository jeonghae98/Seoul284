$(function() {
    //===================== header =====================
    var mobile = $('#mobileBar');
    var mainMenu = $('#mainMenu');
    
    mobile.on('click', function() {
        mainMenu.toggleClass('active');
        mobile.toggleClass('active');
    });

    //===================== main =====================
        //--------------------- main 공통 ---------------------
        $(".circle-text").html(function() {
            return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
        });


    //--------------------- intro ---------------------
    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    //     // console.log(elementOffset);
    //     // console.log(windowHeight);

    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         if(windowWidth <768 ) {  // 모바일 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1020px'
    //               }, 3000);
    //         } else {  // pc 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1472px'
    //               }, 3000);
    //         }
    //     }
    // });

        // ****intro-btn*****
        $('.intro-btn').click(function() {
            window.location.href = '.././1. introduction/intro.html'
        });


        function chgBox() {
            var mainWindowWidth = $(window).width();
        
            if (mainWindowWidth < 768) {
                $('.content-box1').insertAfter('.content-box2');
                const notice1 = $('.content-box1 .notice-content1').clone();
                $('.content-box1 .notice-content1').remove();
                $('.content-box2').append(notice1);
        
                const news3 = $('.content-box2 .news-content3').clone();
                $('.content-box2 .news-content3').remove();
                $('.content-box1').append(news3); 
            } else {
                // 768 이상이면 원상복귀
                $('.content-box1').insertBefore('.content-box2');

                const notice1 = $('.content-box2 .notice-content1').clone();
                $('.content-box2 .notice-content1').remove();
                $('.content-box1').append(notice1)
                notice1.insertAfter('.news-content1');
        
                const news3 = $('.content-box1 .news-content3').clone();
                $('.content-box1 .news-content3').remove();
                $('.content-box2').append(news3);
                news3.insertAfter('.notice-content2');

            }
        }
        
        $(document).ready(function() {
            chgBox(); // 페이지 로드 시 실행
        });
        
        // 윈도우 크기가 변경될 때마다 chgBox 함수 호출
        $(window).resize(function() {
            chgBox();
        });
        
        


    //--------------------- collection ---------------------
    function updateCollectionTxt() {
        var mainWindowWidth = $(window).width();

        if(mainWindowWidth < 768) {
            $('.collection-text').html('<p>문화역서울284의<br>소장품을 구경해보세요.</p>');
        } else {
            $('.collection-text').html('<p>문화역서울284의 소장품을<br>구경해보세요.</p>');
        }
    }

    updateCollectionTxt();

    $(window).resize(function() {
        updateCollectionTxt();
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
    })

    
    //--------------------- fixed-menu ---------------------
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});

