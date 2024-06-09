$(function() {
    //===================== main =====================
    //--------------------- 공통 ---------------------
    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });

    // var mainVideoHeight = $('.main-video').height();

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > mainVideoHeight - 100) {
    //         $('html, body').animate({
    //             scrollTop: $('.main-intro').offset().top
    //         }, 800);
    //     }
    // });

    //--------------------- intro ---------------------
    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop(); 
        var elementOffset = $('.main-intro').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();

        if (scrollPosition > (elementOffset - windowHeight)) {
            if(windowWidth < 768 ) { 
             $('.intro-bg-img').css({
                    'opacity': 1,
                    'background-position-y': '500px'
                });
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
            else { 
                $('.intro-bg-img').css({
                    'opacity': 1,
                    'background-position-y': '600px'
                });
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
             $('.intro-title').css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });
             $('.intro-text').css({
                 'opacity': 1,
                 'transform': 'translateX(0)'
             });
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
        var mainWindowWidth = $(window).width();

        if (scrollPos <= (exTitleTop - windowHeight)) {
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
                    $img.stop().css({
                        'transform': 'translateX(50px)',
                            'opacity': 0,
                            'transition': 'transform 0.5s opacity 0.5s'
                    });
                    $('.exhibition2').find('.ex-img > img').stop().css({
                        'transform': 'translateX(-50px)',
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
        else {
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
        const contentBox1 =  $('.content-box1');
        const contentBox2 =  $('.content-box2');
        
        if (informWindowWidth < 768) {
            const notice1 = $('.content-box1 .notice-content1').clone();
            const news3 = $('.content-box2 .news-content3').clone();
            
            contentBox1.insertAfter('.content-box2');

            $('.content-box1 .notice-content1').remove();
            contentBox2.append(notice1);
    
            $('.content-box2 .news-content3').remove();
            contentBox1.append(news3); 
        } else {
            const notice = $('.content-box2 .notice-content1').clone();
            const news = $('.content-box1 .news-content3').clone();
            
            contentBox1.insertBefore('.content-box2');

            $('.content-box2 .notice-content1').remove();
            contentBox1.append(notice)
            notice.insertAfter('.news-content1');
    
            $('.content-box1 .news-content3').remove();
            contentBox2.append(news);
            news.insertAfter('.notice-content2');
        }
    }

    chgBox(); 

    $(window).resize(function() {
        chgBox();
    });



    $(window).scroll(function() {
        var windowWidth = $(window).width();

        if( windowWidth > 768 ) {
            moveAnimation();
        } else {
            // <animation>
            const contentBox = $('.content-box1, .content-box2'); // 변경해야 할 요소 선택

            // 스크롤 시작 시 justify-content 해제
            contentBox.on('scroll', function() {
                $(this).css('justify-content', 'initial'); // justify-content 해제
            });


            // function addCenterEffectToSecondElement() {
            //     const secondElement = $('.content-box2').children().eq(1).find('.txt-box');
            //     secondElement.addClass('center');
            // }

            // function delaySlideTransition() {
            //     setTimeout(() => {
            //         const sliderInner = $('.content-box2');
            //         const firstItem = sliderInner.children().eq(0);
            //         sliderInner.append(firstItem);
                    
            //         // center 클래스 제거 및 추가
            //         const centerElement = $('.center');
            //         const nextCenterElement = sliderInner.children().eq(1).find('.txt-box');
            //         nextCenterElement.addClass('center');
            //         centerElement.removeClass('center');
            //     }, 3000);
            // }
            // addCenterEffectToSecondElement();
            // setInterval(delaySlideTransition, 3000);
        }
       

        
        function moveAnimation() {
            const contentBox1 = $('.content-box1');
            const contentBox2 = $('.content-box2');
            const initialTranslateY1 = -1370;
            const finalTranslateY1 = 1370;
            const initialTranslateY2 = 1370;
            const finalTranslateY2 = -1370;
            const distance1 = Math.abs(finalTranslateY1 - initialTranslateY1);
            const distance2 = Math.abs(finalTranslateY2 - initialTranslateY2);
            const informBox = $('.inform-content-box');

            $(window).on('scroll', function() {
                const scrollTop = $(this).scrollTop();
                const informOffset = informBox.offset().top;
                const informHeight = informBox.outerHeight();
                const windowHeight = $(window).height();

                if (scrollTop + windowHeight > informOffset && scrollTop < informOffset + informHeight) {
                    const scrollFraction = (scrollTop + windowHeight - informOffset) / (informHeight + windowHeight);
                    const translateY1 = initialTranslateY1 + scrollFraction * distance1;
                    const translateY2 = initialTranslateY2 - scrollFraction * distance2;
                    contentBox1.css('transform', `translateY(${translateY1}px)`);
                    contentBox2.css('transform', `translateY(${translateY2}px)`);

                } else if (scrollTop >= informOffset + informHeight) {
                    contentBox1.css('transform', `translateY(${finalTranslateY1}px)`);
                    contentBox2.css('transform', `translateY(${finalTranslateY2}px)`);
                } else {
                    contentBox1.css('transform', `translateY(${initialTranslateY1}px)`);
                    contentBox2.css('transform', `translateY(${initialTranslateY2}px)`);
                }
            });
        }
    });

    
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

