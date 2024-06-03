$(function() {
    //===================== main =====================
    //--------------------- 공통 ---------------------
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
        var windowHeight = $(window).height();
        var windowMiddle = $(window).scrollTop() + windowHeight / 2;
    
        $('.content-txt').each(function() {
            var txtOffset = $(this).offset().top;
            if (windowMiddle > txtOffset && $(this).css('opacity') == 0) {
                $(this).addClass('visible');
            }
        });
    });

    // 초기 로드 시 가시성 확인
    $(window).scroll();
    
       

    // <sns 연결>
    $('.youtube .sns-img').click(function() {
        window.location.href = 'https://www.youtube.com/seoul284official'
    });

    $('.instagram .sns-img').click(function() {
        window.location.href = 'https://www.instagram.com/culturestationseoul284/'
    });

    $('.facebook .sns-img').click(function() {
        window.location.href = 'https://www.facebook.com/seoul284/?locale=ko_KR'
    });
});

