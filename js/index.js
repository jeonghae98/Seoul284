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

        if(scrollPos > (lineOffset - windowHeight)) {
            
        }
    });
    // <animation>
    // css translate 속성을 이용해 움직이기

    // const $box = $('.content-box1');
    // const boxScrollWidth = $box.scrollWidth;  // 가려진 영역(스크롤 영역)을 포함한 요소의 가로 사이즈
    // const boxClientWidth = $box.clientWidth;  // 가려진 영역 제외한 현재 화면에 보이는 요소에 대한 가로 사이즈

    // let startX = 0;
    // let nowX = 0;
    // let endX =0;
    // let boxX = 0;

    // const getClientX = (e) => {  // 터치 이벤트인지 확인
    //     const isTouches = e.originalEvent.touches ? true : false;
    //     return isTouches ? e.originalEvent.touches[0].clientX : e.clientX;
    //   };

    //   const getTranslateX = () => {
    //     return parseInt($box.css('transform').split(/[^\-0-9]+/g)[5]);
    //   };

    //   const setTranslateX = (x) => {
    //     $box.css('transform', `translateX(${x}px)`);
    //   };


    //   const $event = () => {  // 이벤트 연결
    //     $box.on('mousedown', onScrollStart);
    //     $box.on('touchstart', onScrollStart);
    //     $box.on('click', onClick);
    //   };

    //   $event();


    //   const onScrollStart = (e) => {
    //     startX = getClientX(e);  // 스크롤을 시작했을 때 마우스 또는 터치한 지점을 startX 변수에 저장
    //     $(window).on('mousemove', onScrollMove);
    //     $(window).on('touchmove', onScrollMove);
    //     $(window).on('mouseup', onScrollEnd);
    //     $(window).on('touchend', onScrollEnd);

    //     console.log(startX);
    //   };

    //  const onScrollMove = (e) => {
    //     nowX = getClientX;
    //     setTranslateX(boxX + nowX - startX);  // boxX에 translateX 값이 저장되어 있으며, 스크롤 종료 이벤트 함수 안에서 할당함
    //  }


    // const $list = $('.content-box1');
    // const listScrollWidth = $list.get(0).scrollWidth;
    // const listClientWidth = $list.get(0).clientWidth;
    // let startX = 0;
    // let nowX = 0;
    // let endX = 0;
    // let listX = 0;

    // const getClientX = (e) => {
    //     const isTouches = e.touches ? true : false;
    //     return isTouches ? e.touches[0].clientX : e.clientX;
    // };
    
    // const getTranslateX = () => {
    //     const matrix = $list.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
    //     return parseInt(matrix[4]);
    // };
    
    // const setTranslateX = (x) => {
    //     $list.css('transform', `translateX(${x}px)`);
    // };

    // const bindEvents = () => {
    //     $list.off('mousedown touchstart', onScrollStart);
    //     $list.off('click', onClick);
        
    //     $list.on('mousedown touchstart', onScrollStart);
    //     $list.on('click', onClick);
    // };

    // const onScrollStart = (e) => {
    //     startX = getClientX(e);
    //     $(window).on('mousemove touchmove', onScrollMove);
    //     $(window).on('mouseup touchend', onScrollEnd);
    // };

    // const onScrollMove = (e) => {
    //     nowX = getClientX(e);
    //     setTranslateX(listX + nowX - startX);
    // };

    // const onScrollEnd = (e) => {
    //     endX = getClientX(e);
    //     listX = getTranslateX();
    //     if (listX > 0) {
    //         setTranslateX(0);
    //         $list.css('transition', 'all 0.3s ease');
    //         listX = 0;
    //     } else if (listX < listClientWidth - listScrollWidth) {
    //         setTranslateX(listClientWidth - listScrollWidth);
    //         $list.css('transition', 'all 0.3s ease');
    //         listX = listClientWidth - listScrollWidth;
    //     }
    
    //     $(window).off('mousemove touchmove', onScrollMove);
    //     $(window).off('mouseup touchend', onScrollEnd);
    
    //     setTimeout(() => {
    //         bindEvents();
    //         $list.css('transition', '');
    //     }, 300);
    // };

    // const onClick = (e) => {
    //     // 클릭 이벤트 처리
    // };
      


    
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
//   const slider = document.querySelector('.content-box1');
//   let isMouseDown = false;
//   let startX, scrollLeft;

//   slider.addEventListener('mousedown', (e) => {
//     isMouseDown = true;
//     slider.classList.add('active');

//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
//   });
  
//   slider.addEventListener('mouseleave', () => {
//     isMouseDown = false;
//     slider.classList.remove('active');
//   });
  
//   slider.addEventListener('mouseup', () => {
//     isMouseDown = false;
//     slider.classList.remove('active');
//   });

//   slider.addEventListener('mousemove', (e) => {
//     if (!isMouseDown) return;

//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 1;
//     slider.scrollLeft = scrollLeft - walk;
//   });
// }

// window.onload = function() {
//     // 요소 & 사이즈
//     const list = document.querySelector('.content-box1');
//     const listScrollWidth = list.scrollWidth;
//     const listClientWidth = list.clientWidth;
//     // 이벤트마다 갱신될 값
//     let startX = 0;
//     let nowX = 0;
//     let endX = 0;
//     let listX = 0;

//     const getClientX = (e) => {
//         const isTouches = e.touches ? true : false;
//         return isTouches ? e.touches[0].clientX : e.clientX;
//       };
      
//       const getTranslateX = () => {
//         return parseInt(getComputedStyle(list).transform.split(/[^\-0-9]+/g)[5]);
//       };
      
//       const setTranslateX = (x) => {
//         list.style.transform = `translateX(${x}px)`;
//       };

//       const bindEvents = () => {
//         list.addEventListener('mousedown', onScrollStart);
//         list.addEventListener('touchstart', onScrollStart);
//         list.addEventListener('click', onClick);
//       };
//       bindEvents();

//       const onScrollStart = (e) => {
//         startX = getClientX(e);
//         window.addEventListener('mousemove', onScrollMove);
//         window.addEventListener('touchmove', onScrollMove);
//         window.addEventListener('mouseup', onScrollEnd);
//         window.addEventListener('touchend', onScrollEnd);
//       };

//       const onScrollMove = (e) => {
//         nowX = getClientX(e);
//         setTranslateX(listX + nowX - startX);
//       };
//       const onScrollEnd = (e) => {
//         endX = getClientX(e);
//         listX = getTranslateX();
//         if (listX > 0) {
//           setTranslateX(0);
//           list.style.transition = `all 0.3s ease`;
//           listX = 0;
//         } else if (listX < listClientWidth - listScrollWidth) {
//           setTranslateX(listClientWidth - listScrollWidth);
//           list.style.transition = `all 0.3s ease`;
//           listX = listClientWidth - listScrollWidth;
//         }
      
//         window.removeEventListener('mousedown', onScrollStart);
//         window.removeEventListener('touchstart', onScrollStart);
//         window.removeEventListener('mousemove', onScrollMove);
//         window.removeEventListener('touchmove', onScrollMove);
//         window.removeEventListener('mouseup', onScrollEnd);
//         window.removeEventListener('touchend', onScrollEnd);
//         window.removeEventListener('click', onClick);
      
//         setTimeout(() => {
//           bindEvents();
//           list.style.transition = '';
//         }, 300);
//       };
// }


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
//     let slider = document.querySelector(".inform-content-box");
//     let innerSlider = document.querySelector(".content-box1");
//     let pressed = false;
//     let startx;
//     let x;

//     slider.addEventListener("mousedown", e => {
//     pressed = true
//     startx = e.offsetX - innerSlider.offsetLeft
//     slider.style.cursor = "grabbing"
//     });

//     slider.addEventListener("mouseenter", () => {
//     slider.style.cursor = "grab"
//     });

//     slider.addEventListener("mouseup", () => {
//     slider.style.cursor = "grab"
//     });

//     window.addEventListener("mouseup", () => {
//     pressed = false
//     });

//     slider.addEventListener("mousemove", e => {
//     if (!pressed) return
//     e.preventDefault();
//     x = e.offsetX;

//     innerSlider.style.left = `${x - startx}px`;
//     checkboundary();
//     });

//     function checkboundary() {
//     let outer = slider.getBoundingClientRect();
//     let inner = innerSlider.getBoundingClientRect();

//     if (parseInt(innerSlider.style.left) > 0) {
//         innerSlider.style.left = "0px"
//     } else if (inner.right < outer.right) {
//         innerSlider.style.left = `-${inner.width - outer.width}px`
//     }
//     } 
// }