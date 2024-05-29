$(function() {
    //===================== header =====================
    // $('#mobile-menu').click(function() {
    //     $(this).toggleClass('active');
    //     // $('#main-menu').addClass('move');
    // });

    var mobile = $('#mobileBar');
    var mainMenu = $('#mainMenu');
    
    mobile.on('click', function() {
        mainMenu.toggleClass('active');
        mobile.toggleClass('active');
    });

    
    // $('.gnb .gnb-title').on('mouseover', function() {
    //     $('.gnb .sub-menu').addclass('sub-menu-hover');
    // })



    //===================== main =====================
        //--------------------- main 공통 ---------------------
        $(".circle-text").html(function() {
            return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
        });


    //--------------------- intro ---------------------
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
        var elementOffset = $('.main-intro').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        // console.log(elementOffset);
        // console.log(windowHeight);

        if (scrollPosition > (elementOffset - windowHeight)) {
            if(windowWidth < 768 ) {  // 모바일 버전
                // <배경 사진>
             $('.intro-bg-img')
                .css({
                    'opacity': 1,
                    'background-position-y': '500px'
                });

                // <선>
                // $('.main-intro .intro-line').animate({
                //     height: '1020px'
                //   }, 3000);

            } else {  // pc 버전
                // <배경 사진>
                $('.intro-bg-img')
                .css({
                    'opacity': 1,
                    'background-position-y': '600px'

                });

                // <선>
                $('.main-intro .intro-line').animate({
                    height: '1472px'
                  }, 3000);
            }
            
            // 모바일, pc 공통
             // <txt>
             $('.year').css('opacity', 1);

            //  $('.first-circle').css('opacity', 1);

             $('.intro-title')
             .css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });

             $('.intro-text')
             .css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });
            
            
             //--- 버튼 ---
             $('.intro-btn').css('opacity', 1);
             
        }
    });

    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    
    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         if(windowWidth < 768 ) {  // 모바일 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1020px'
    //             }, 3000, function() {
    //                 var introLineHeight = $('.intro-line').height();
    //                 var firstCirclePosition = $('.first-circle').offset().top;
    
    //                 if (introLineHeight > firstCirclePosition) {
    //                     $('.first-circle').css('display', 'block');
    //                 }
    //             });
    //         } else {  // pc 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1472px'
    //             }, 3000, function() {
    //                 var introLineHeight = $('.intro-line').height();
    //                 var firstCirclePosition = $('.first-circle').offset().top;
    
    //                 if (introLineHeight > firstCirclePosition) {
    //                     $('.first-circle').css('display', 'block');
    //                 }
    //             });
    //         }
    //     }
    // });
    
    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    //     var introLineHeight;
    
    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         if(windowWidth < 768 ) {  // 모바일 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1020px'
    //             }, {
    //                 duration: 3000,
    //                 step: function(now, fx) {
    //                     introLineHeight = now;
    //                     if (introLineHeight > 40) { // 일정 길이 이상이면 원을 표시
    //                         $('.first-circle').css('display', 'block');
    //                     }
    //                 }
    //             });
    //         } else {  // pc 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1472px'
    //             }, {
    //                 duration: 3000,
    //                 step: function(now, fx) {
    //                     introLineHeight = now;
    //                     if (introLineHeight > 40) { // 일정 길이 이상이면 원을 표시
    //                         $('.first-circle').css('display', 'block');
    //                     }
    //                 }
    //             });
    //         }
    //     }
    // });
    

    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    
    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         var targetHeight;
    //         if(windowWidth < 768 ) {  // 모바일 버전
    //             targetHeight = '1020px';
    //         } else {  // pc 버전
    //             targetHeight = '1472px';
    //         }
    
    //         $('.main-intro .intro-line').animate({
    //             height: targetHeight
    //         }, {
    //             duration: 3000,
    //             step: function(now, fx) {
    //                 var introLineHeight = $(this).height();
    //                 if (introLineHeight > 40) { // 일정 길이 이상이면 원을 표시
    //                     $('.first-circle').css('display', 'block');
    //                 }
    //             }
    //         });
    //     }
    // });
    

    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    //     var introLineHeight = $('.intro-line').height();
    //     var firstCircle = $('.first-circle').offset().top;

    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         if(windowWidth < 768 ) {  // 모바일 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1020px'
    //               }, 3000);

    //               if (introLineHeight > firstCircle) {
    //                 $('.first-circle').css('display', 'block');
    //               }
    //         } else {  // pc 버전
    //             $('.main-intro .intro-line').animate({
    //                 height: '1472px'
    //               }, 3000);

    //               if (introLineHeight > firstCircle) {
    //                 $('.first-circle').css('display', 'block');
    //               }
    //         }
    //     }
    // });

    // $(window).scroll(function() {
    //     var scrollPosition = $(this).scrollTop();  
    //     var elementOffset = $('.main-intro').offset().top;
    //     var windowHeight = $(window).height();
    //     var windowWidth = $(window).width();
    
    //     if (scrollPosition > (elementOffset - windowHeight)) {
    //         if(windowWidth < 768 ) {  
    //             $('.main-intro .intro-line').animate({
    //                 height: '1020px'
    //               }, 3000);
    //         } else {  
    //             $('.main-intro .intro-line').animate({
    //                 height: '1472px'
    //               }, 3000);
    //         }
    
    //         // 원이 나타나도록 표시
    //         $('.main-intro .first-circle, .main-intro .second-circle').fadeIn();
    //     }
    // });
    

        // ****intro-btn*****
        $('.intro-btn').click(function() {
            window.location.href = '.././1. introduction/intro.html'
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




    //--------------------- exhibition ---------------------
    $(window).scroll(function() {
        animateScroll();

        function animateScroll() {
            var scrollPos = $(this).scrollTop();
            var windowHeight = $(window).height();
            var windowMiddle = scrollPos + windowHeight / 2;
            var mainWindowWidth = $(window).width();


            $('.exhibition-content .ex').each(function() {
                var $img = $(this).find('.ex-img > img');
                var imgOffset = $img.offset().top;
                
                if (windowMiddle > imgOffset && $img.css('opacity') == 0) {
                    if(mainWindowWidth < 786) {
                        $img.animate({
                            opacity: 1
                        }, 1300);

                        $(this).find('.ex-txt .title').animate({
                            opacity: 1
                        }, 1300);
                    } else {
                        $img.css({
                            'opacity': '1',
                            'transform': 'translateX(0)'
                        });
        
                        $(this).find('.ex-txt .title').animate({
                            opacity: 1
                        }, 1300);
                    }
                }

            });
        }  // animateScroll
    }); 
    

    //--------------------- inform ---------------------
    function chgBox() {
        var informWindowWidth = $(window).width();
    
        if (informWindowWidth < 768) {
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

