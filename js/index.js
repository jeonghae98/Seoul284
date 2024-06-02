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
            $('.logo-gnb-rightmenu').addClass('active');
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
            $('.fixed-menu').css('display', 'none');
        } else {
            $('body').removeClass('stop-scroll');
            $('.logo-gnb-rightmenu').removeClass('active');
            $('.main-menu').css('display', 'none');
            $('.fixed-menu').css('display', 'block');

            // $('.gnb').removeClass('active');
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
            }  
           
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
    var pcWindowWidth = $(window).width() > 768;

    if (pcWindowWidth) {
        $("#mainMenu > ul > li").hover(
            function () {
                $("#mainMenu").addClass("active");
            },
            function () {
                $("#mainMenu").removeClass("active");
            }
        );
        $("#mainMenu > ul > li:first-child > a").focusin(function () {
            $("#mainMenu").addClass("active");
        });
        $("#mainMenu li:last-child li:last-child a").focusout(function () {
            $("#mainMenu").removeClass("active");
        });
        $("#mainMenu > ul > li > a").focusin(function () {
            $(this).parent().addClass("active");
        });
        $("#mainMenu li li:last-child a").focusout(function () {
            $("#mainMenu > ul > li").removeClass("active");
        });
    }




    
    //===================== main =====================
    //--------------------- main 공통 ---------------------
    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });



    //--------------------- intro ---------------------
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
        var elementOffset = $('.main-intro').offset().top;
        var colLineOffset = $('.collection-line').offset().top;
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
                $('.main-intro .intro-line').animate({
                    height: '1020px'
                  }, 3000);

                setTimeout(function() {
                    $('.first-circle').delay(700).fadeIn();
                }, 300);

                setTimeout(function() {
                    $('.second-circle').delay(1200).fadeIn();
                }, 300);
            } 
            else {  // pc 버전
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

                setTimeout(function() {
                    $('.first-circle').delay(1000).fadeIn();
                }, 300);

                setTimeout(function() {
                    $('.second-circle').delay(1500).fadeIn();
                }, 300);

            }
            
            // 모바일, pc 공통
             // <txt>
             $('.year').css('opacity', 1);
             $('.now-year').css('opacity', 1);

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
    

    // ****intro-btn*****
    $('.intro-btn').click(function() {
        window.location.href = '.././1.introduction/intro.html'
    });
        
    //--------------------- collection ---------------------
    // <title>
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


    // <line&text>
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();  // 수직 스크롤바의 위치 인식
        var colOffset = $('.main-collection').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if(scrollPosition > (colOffset - windowHeight)) {
            if(windowWidth > 768) {
                $('.collection-line').animate({
                    height: '1238px'
                  }, 2000);
    
                $('.main-collection-list').css('opacity', '1');
            }


            // <공통>
            $('.main-collection-row-line').animate({
                width: '100%'
            }, 2000);
            $('.collection-title').css('opacity', '1');
            $('.collection-text').css('opacity', '1');
            $('.col-btn').css('opacity', '1');
            $('.collection-image').css('opacity', '1');
        }
    }); 
    
    
    // ****intro-btn*****
    $('.col-btn').click(function() {
        window.location.href = '.././3.referenceroom/collection.html'
    });


    //--------------------- exhibition ---------------------
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var exTitleTop = $('.exhibition-title').offset().top;
        var windowHeight = $(window).height(); 
        var scrollLimit = exTitleTop - windowHeight; // 초기화할 스크롤 위치
        var mainWindowWidth = $(window).width();
 
        // console.log(scrollPos);
        // console.log(scrollLimit);
      

        if (scrollPos <= scrollLimit) {  // 애니메이션 초기화
            
            $('.exhibition-content .ex').each(function() {
                var $img = $(this).find('.ex-img img');
                var $title = $(this).find('.ex-txt .title');
                if(mainWindowWidth < 768) {
                    $img.stop().css({
                        'opacity': 0,
                        'transition': 'opacity 0.5s'
                    });

                    $title.stop().css({
                        'opacity': 0,
                        'transition': 'opacity 0.5s'
                    });
                } else {
                    $('.exhibition1').find('.ex-img > img').stop().css({
                        'transform': 'translateX(50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s opacity 0.5s'
                    });  
        
                    $('.exhibition2').find('.ex-img > img').stop().css({
                        'transform': 'translateX(-50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s opacity 0.5s'
                    });
        
                    $('.exhibition3').find('.ex-img > img').stop().css({
                        'transform': 'translateX(50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s opacity 0.5s'
                    });
        
                    $('.exhibition4').find('.ex-img > img').stop().css({
                        'transform': 'translateX(50px)',
                        'opacity': 0,
                        'transition': 'transform 0.5s opacity 0.5s'
                    });

                    $title.stop().css({
                        'opacity': 0,
                        'transition': 'opacity 0.5s'
                    });
                }
            });
        }
        else {  // 애니메이션 실행
            animateScroll();
        }
    });
    
    function animateScroll() {
        var windowHeight = $(window).height();
        var windowMiddle = $(window).scrollTop() + windowHeight / 2;
        var mainWindowWidth = $(window).width();
        $('.exhibition-title').css('opacity', '1');
    
        $('.exhibition-content .ex').each(function() {
            var $img = $(this).find('.ex-img > img');
            var imgOffset = $img.offset().top;
    
            if (windowMiddle > imgOffset && $img.css('opacity') == 0) {
                if (mainWindowWidth < 768) {
                    $img.animate({
                        opacity: 1
                    }, 1300);
    
                    $(this).find('.ex-txt .title').animate({
                        opacity: 1
                    }, 500);
                } else {
                    $img.css({
                        'opacity': '1',
                        'transform': 'translateX(0)'
                    });
    
                    $(this).find('.ex-txt .title').animate({
                        opacity: 1
                    }, 500);
                }
            }
        });
    }
    


    
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

    chgBox(); 

    
    // 윈도우 크기가 변경될 때마다 chgBox 함수 호출
    $(window).resize(function() {
        chgBox();
    });

    // <animation>
    // $(window).on('scroll', function() {

    //     function moveBox() {
    //         var informWindowWidth = $(window).width();
    //         var $scrollTop = $(window).scrollTop();
    //         var informOffset = $('.inform').offset().top;
            
    //         if($scrollTop > informOffset) {
    //             if (informWindowWidth < 768) {
               
    //             } else {
    //                $('.content-box1').css({
    //                     'top': '1400px'
    //                })
    //             }
    //         }
            
    //     }

    //     moveBox();
    // });
    // var $owl = $('.content-box1');

    // $owl.children().each(function(index) {
    //     $(this).attr('data-position', index); 
    // });

    // $owl.owlCarousel({
    //     center: true,
    //     loop: true,
    //     items: 3,
    //     startPosition: 1 // 처음 로드 시 2번 아이템이 가운데 오도록 설정
    // });

    // $(document).on('click', '.content-box1 > div', function() {
    //     var index = $(this).parent().attr('data-position');
    //     $owl.trigger('to.content-box1', index);
    // });


    // ****info-btn*****
    $('.info-btn').click(function() {
        window.location.href = '.././4.inform/notice.html'
    });

    //--------------------- sns ---------------------
       $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        var snsOffset = $('.main-sns').offset().top;
        var windowHeight = $(window).height(); 
        var scrollLimit = snsOffset - windowHeight; // 초기화할 스크롤 위치

        if(scrollPos > scrollLimit) {
            $('.left-txt').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });

            $('.right-txt').css({
                'opacity': 1,
                'transform': 'translateX(0)'
            });
        }

       });


    // <sns 연결>
    $('.youtube .sns-img').click(function() {
        window.location.href = 'https://www.youtube.com/seoul284official'
    });

    ('.instagram .sns-img').click(function() {
        window.location.href = 'https://www.instagram.com/culturestationseoul284/'
    });

    ('.facebook .sns-img').click(function() {
        window.location.href = 'https://www.facebook.com/seoul284/?locale=ko_KR'
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

