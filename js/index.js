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
        var scrollPos = $(window).scrollTop();
        var lineOffset = $('.info-line1').offset().top;
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        const contentBox1 =  $('.content-box1');
        const contentBox2 =  $('.content-box2');

        if( windowWidth > 768 ) {
            if(scrollPos <= (lineOffset - windowHeight)) {
                // contentBox1.css('animation', 'none');
                // contentBox2.css('animation', 'none');
            } else {
                // contentBox1.css('animation', 'moveBox1 4s ease-in-out forwards');
                // contentBox2.css('animation', 'moveBox2 4s ease-in-out forwards');
                }
            moveAnimation();
        } else {
            // <animation>
            const contentBox = $('.content-box1'); // 변경해야 할 요소 선택

            // 스크롤 시작 시 justify-content 해제
            contentBox.on('scroll', function() {
                $(this).css('justify-content', 'initial'); // justify-content 해제
            });


            function addCenterEffectToSecondElement() {
                const secondElement = $('.content-box2').children().eq(1).find('.txt-box');
                secondElement.addClass('center');
            }

            function delaySlideTransition() {
                setTimeout(() => {
                    const sliderInner = $('.content-box2');
                    const firstItem = sliderInner.children().eq(0);
                    sliderInner.append(firstItem);
                    
                    // center 클래스 제거 및 추가
                    const centerElement = $('.center');
                    const nextCenterElement = sliderInner.children().eq(1).find('.txt-box');
                    nextCenterElement.addClass('center');
                    centerElement.removeClass('center');
                }, 3000);
            }
            addCenterEffectToSecondElement();
            setInterval(delaySlideTransition, 3000);
        }
       

        
        function moveAnimation() {
            // contentBox1.hover(function() {
            //     $(this).css("animation-play-state","paused");
            //     contentBox2.css("animation-play-state","paused");
            // }, function() {
            //     $(this).css("animation-play-state","running");
            //     contentBox2.css("animation-play-state","running");
            // });

            // contentBox2.hover(function() {
            //     $(this).css("animation-play-state","paused");
            //     contentBox1.css("animation-play-state","paused");
            // }, function() {
            //     $(this).css("animation-play-state","running");
            //     contentBox1.css("animation-play-state","running");
            // });

            // const contentBox1 = $('.content-box1');
            // const contentBox2 = $('.content-box2');
            // const inform = $('.inform-content-box');
            // const initialTranslateY1 = -1370;
            // const finalTranslateY1 = 1370;
            // const initialTranslateY2 = 1370;
            // const finalTranslateY2 = -1370;
            // const distance1 = Math.abs(finalTranslateY1 - initialTranslateY1);
            // const distance2 = Math.abs(finalTranslateY2 - initialTranslateY2);

            // $(window).on('scroll', function() {
            //     const scrollTop = $(this).scrollTop();
            //     const informOffset = inform.offset().top;
            //     const informHeight = inform.outerHeight();
            //     const windowHeight = $(window).height();

            //     if (scrollTop + windowHeight > informOffset && scrollTop < informOffset + informHeight) {
            //         const scrollFraction = (scrollTop + windowHeight - informOffset) / (informHeight + windowHeight);
            //         const translateY1 = initialTranslateY1 + scrollFraction * distance1;
            //         const translateY2 = initialTranslateY2 - scrollFraction * distance2;
            //         contentBox1.css('transform', `translateY(${translateY1}px)`);
            //         contentBox2.css('transform', `translateY(${translateY2}px)`);
            //     } else if (scrollTop >= informOffset + informHeight) {
            //         contentBox1.css('transform', `translateY(${finalTranslateY1}px)`);
            //         contentBox2.css('transform', `translateY(${finalTranslateY2}px)`);
            //     } else {
            //         contentBox1.css('transform', `translateY(${initialTranslateY1}px)`);
            //         contentBox2.css('transform', `translateY(${initialTranslateY2}px)`);
            //     }
            // });

            const contentBox1 = $('.content-box1');
            const contentBox2 = $('.content-box2');
            const initialTranslateY1 = -1370;
            const finalTranslateY1 = 1370;
            const initialTranslateY2 = 1370;
            const finalTranslateY2 = -1370;
            const distance1 = Math.abs(finalTranslateY1 - initialTranslateY1);
            const distance2 = Math.abs(finalTranslateY2 - initialTranslateY2);
            const mainInform = $('.main-inform');

            $(window).on('scroll', function() {
                const scrollTop = $(this).scrollTop();
                const informOffset = mainInform.offset().top;
                const informHeight = mainInform.outerHeight();
                const windowHeight = $(window).height();

                if (scrollTop + windowHeight > informOffset && scrollTop < informOffset + informHeight) {
                    // 애니메이션이 실행되는 동안 .main-inform을 고정
                    mainInform.addClass('fixed');

                    const scrollFraction = (scrollTop + windowHeight - informOffset) / (informHeight + windowHeight);
                    const translateY1 = initialTranslateY1 + scrollFraction * distance1;
                    const translateY2 = initialTranslateY2 - scrollFraction * distance2;
                    contentBox1.css('transform', `translateY(${translateY1}px)`);
                    contentBox2.css('transform', `translateY(${translateY2}px)`);

                    // 애니메이션 완료 후 .main-inform의 고정 해제
                    setTimeout(function() {
                        mainInform.removeClass('fixed');
                    }, 3000); // 애니메이션 지속 시간 (여기서는 3초로 가정)
                } else if (scrollTop >= informOffset + informHeight) {
                    // inform이 화면을 벗어난 경우 .main-inform 고정 해제
                    mainInform.removeClass('fixed');
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



// window.onload = function() {
//     // 요소 & 사이즈
//     const list = document.querySelector('.content-box2');
//     const listScrollWidth = list.scrollWidth;
//     const listClientWidth = list.clientWidth;
//     // 이벤트마다 갱신될 값
//     let startX = 0;
//     let nowX = 0;
//     let endX = 0;
//     let listX = 0;

//     const getClientX = (e) => {
//         if (!e) return 0; // e 객체가 없으면 0을 반환하도록 수정
//         const isTouches = e.touches ? true : false;
//         return isTouches ? e.touches[0].clientX : e.clientX;
//     };
    
    
//     const getTranslateX = () => {
//         return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
//     };
    
//     const setTranslateX = (x) => {
//         list.style.transform = `translateX(${x}px)`;
//     };

//     const bindEvents = () => {
//         list.addEventListener('mousedown', onScrollStart);
//         list.addEventListener('touchstart', onScrollStart);
//         list.addEventListener('click', onClick);
//     };

//     const onScrollStart = (e) => {
//         startX = getClientX(e);
//         window.addEventListener('mousemove', onScrollMove);
//         window.addEventListener('touchmove', onScrollMove);
//         window.addEventListener('mouseup', onScrollEnd);
//         window.addEventListener('touchend', onScrollEnd);
//     };

//     const onScrollMove = (e) => {
//         nowX = getClientX(e);
//         setTranslateX(listX + nowX - startX);
//     };

//     const onScrollEnd = (e) => {
//         if (e === undefined) return; // 이벤트 객체가 없는 경우 함수를 종료합니다.
    
//         endX = getClientX(e);
//         listX = getTranslateX();
//         if (listX > 0) {
//             setTranslateX(0);
//             list.style.transition = `all 0.3s ease`;
//             listX = 0;
//         } else if (listX < listClientWidth - listScrollWidth) {
//             setTranslateX(listClientWidth - listScrollWidth);
//             list.style.transition = `all 0.3s ease`;
//             listX = listClientWidth - listScrollWidth;
//         }
      
//         window.removeEventListener('mousedown', onScrollStart);
//         window.removeEventListener('touchstart', onScrollStart);
//         window.removeEventListener('mousemove', onScrollMove);
//         window.removeEventListener('touchmove', onScrollMove);
//         window.removeEventListener('mouseup', onScrollEnd);
//         window.removeEventListener('touchend', onScrollEnd);
//         window.removeEventListener('click', onClick);
      
//         setTimeout(() => {
//             bindEvents();
//             list.style.transition = '';
//         }, 300);
//     };

//     const onClick = (e) => {
//         // 클릭 이벤트 처리 (필요에 따라 구현)
//     };

//     bindEvents();
// };


// window.onload = function() {
//     // 요소 & 사이즈
//     const contentBoxes = document.querySelectorAll('.content-box1, .content-box2');
    
//     contentBoxes.forEach(list => {
//         const listScrollWidth = list.scrollWidth;
//         const listClientWidth = list.clientWidth;
//         // 이벤트마다 갱신될 값
//         let startX = 0;
//         let nowX = 0;
//         let endX = 0;
//         let listX = 0;

//         const isMobileDevice = () => {
//             return window.innerWidth <= 768; // 모바일 화면 너비 임계값 (768px 이하)
//         };

//         const getClientX = (e) => {
//             if (!e) return 0; // e 객체가 없으면 0을 반환하도록 수정
//             const isTouches = e.touches ? true : false;
//             return isTouches ? e.touches[0].clientX : e.clientX;
//         };

//         const getTranslateX = () => {
//             return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]) || 0;
//         };

//         const setTranslateX = (x) => {
//             list.style.transform = `translateX(${x}px)`;
//         };

//         const bindEvents = () => {
//             list.addEventListener('mousedown', onScrollStart);
//             list.addEventListener('touchstart', onScrollStart);
//             list.addEventListener('click', onClick);
//         };

//         const onScrollStart = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             startX = getClientX(e);
//             window.addEventListener('mousemove', onScrollMove);
//             window.addEventListener('touchmove', onScrollMove);
//             window.addEventListener('mouseup', onScrollEnd);
//             window.addEventListener('touchend', onScrollEnd);
//         };

//         const onScrollMove = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             nowX = getClientX(e);
//             setTranslateX(listX + nowX - startX);
//         };

//         const onScrollEnd = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             endX = getClientX(e);
//             listX = getTranslateX();
//             if (listX > 0) {
//                 setTranslateX(0);
//                 list.style.transition = `all 0.3s ease`;
//                 listX = 0;
//             } else if (listX < listClientWidth - listScrollWidth) {
//                 setTranslateX(listClientWidth - listScrollWidth);
//                 list.style.transition = `all 0.3s ease`;
//                 listX = listClientWidth - listScrollWidth;
//             }

//             window.removeEventListener('mousemove', onScrollMove);
//             window.removeEventListener('touchmove', onScrollMove);
//             window.removeEventListener('mouseup', onScrollEnd);
//             window.removeEventListener('touchend', onScrollEnd);

//             setTimeout(() => {
//                 list.style.transition = '';
//             }, 300);
//         };

//         const onClick = (e) => {
//             // 클릭 이벤트 처리 (필요에 따라 구현)
//         };

//         bindEvents();
//     });
// };

// window.onload = function() {
//     // 요소 & 사이즈
//     const contentBoxes = document.querySelectorAll('.content-box1, .content-box2');
    
//     contentBoxes.forEach(list => {
//         const listScrollWidth = list.scrollWidth;
//         const listClientWidth = list.clientWidth;
//         // 이벤트마다 갱신될 값
//         let startX = 0;
//         let nowX = 0;
//         let listX = 0;

//         const isMobileDevice = () => {
//             return window.innerWidth <= 768; // 모바일 화면 너비 임계값 (768px 이하)
//         };

//         const getClientX = (e) => {
//             if (!e) return 0; // e 객체가 없으면 0을 반환하도록 수정
//             const isTouches = e.touches ? true : false;
//             return isTouches ? e.touches[0].clientX : e.clientX;
//         };

//         const getTranslateX = () => {
//             const style = getComputedStyle(list);
//             const matrix = new WebKitCSSMatrix(style.transform);
//             return matrix.m41;
//         };

//         const setTranslateX = (x) => {
//             list.style.transform = `translateX(${x}px)`;
//         };

//         const bindEvents = () => {
//             list.addEventListener('mousedown', onScrollStart);
//             list.addEventListener('touchstart', onScrollStart);
//             list.addEventListener('click', onClick);
//         };

//         const onScrollStart = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             startX = getClientX(e);
//             window.addEventListener('mousemove', onScrollMove);
//             window.addEventListener('touchmove', onScrollMove);
//             window.addEventListener('mouseup', onScrollEnd);
//             window.addEventListener('touchend', onScrollEnd);
//         };

//         const onScrollMove = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             nowX = getClientX(e);
//             setTranslateX(listX + nowX - startX);
//         };

//         const onScrollEnd = (e) => {
//             if (!isMobileDevice()) return; // 모바일이 아닌 경우 이벤트 무시
//             if (e === undefined) return; // 이벤트 객체가 없는 경우 함수를 종료합니다.
//             const endX = getClientX(e);
//             listX = getTranslateX();
//             if (listX > 0) {
//                 setTranslateX(0);
//                 list.style.transition = `all 0.3s ease`;
//                 listX = 0;
//             } else if (listX < listClientWidth - listScrollWidth) {
//                 setTranslateX(listClientWidth - listScrollWidth);
//                 list.style.transition = `all 0.3s ease`;
//                 listX = listClientWidth - listScrollWidth;
//             }

//             window.removeEventListener('mousemove', onScrollMove);
//             window.removeEventListener('touchmove', onScrollMove);
//             window.removeEventListener('mouseup', onScrollEnd);
//             window.removeEventListener('touchend', onScrollEnd);

//             setTimeout(() => {
//                 list.style.transition = '';
//             }, 300);
//         };

//         const onClick = (e) => {
//             // 클릭 이벤트 처리 (필요에 따라 구현)
//         };

//         bindEvents();
//     });
// };

// window.onload = function() {
//     const sliderInner = document.querySelector('.content-box2');

//     function addCenterEffectToSecondElement() {
//         const secondElement = sliderInner.children[1].querySelector('.txt-box');;
//         secondElement.classList.add('center');
//     }

//     function delaySlideTransition() {
//         setTimeout(() => {
//             const firstItem = sliderInner.firstElementChild;
//             sliderInner.removeChild(firstItem);
//             sliderInner.appendChild(firstItem);
            
//             // center 클래스 제거 및 추가
//             const centerElement = document.querySelector('.center');
//             const nextCenterElement = sliderInner.children[1].querySelector('.txt-box');
//             nextCenterElement.classList.add('center');
//             centerElement.classList.remove('center');
//         }, 3000);
//     }
//     addCenterEffectToSecondElement();
    
//     setInterval(delaySlideTransition, 3000);
// }