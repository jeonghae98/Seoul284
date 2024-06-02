$(function () {
    $('.sec1 h2').hide()
    $('.sec1 p').hide()
    $(window).scroll(function() {
        let $scrollLeft = $(this).scrollLeft(); // 수평 스크롤바의 위치인식
        $('.left').text($scrollLeft);

        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

     
  
        
        if ($scrollTop < 500) {
            $('.sec1 h2').show()       
            $('.sec1 h2').stop().animate({ opacity: '0' }, 300);
            
        } else {
            $('.sec1 h2').show()
            $('.sec1 h2').stop().animate({ opacity: '1' }, 300);
        }
        if ($scrollTop < 500) {
            $('.sec1 p').stop().animate({ opacity: '0' }, 300);
        } else {
            $('.sec1 p').show()
            $('.sec1 p').stop().animate({ opacity: '1' }, 1000);
           
        }

        // if ($scrollTop < 100) {
        //     $('.sec1').stop().animate({ width: '0%', height: '300px' }, 300);
           
        // } else {
        //     $('.sec1').stop().animate({ width: '100%', height: '1000px' }, 1000);
           
        // }
/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

        if ($scrollTop < 1300) {
            $('.sec2 h2').stop().animate({ opacity: '0' }, 300);
        } else if ($scrollTop < 2000) {
            $('.sec2 h2').stop().animate({ opacity: '1' }, 300);
        }

        if ($scrollTop < 1300) {
            $('.sec2 p').stop().animate({ opacity: '0' }, 300);
        } else if ($scrollTop < 2000) {
            $('.sec2 p').stop().animate({ opacity: '1' }, 900);
        }

        // if ($scrollTop < 300) {
        //     $('.sec2').stop().animate({ width: '0%', height: '0px' }, 300);
        // } else {
        //     $('.sec2').stop().animate({ width: '100%', height: '1000px' }, 1000);
        // }  
        
        
        if ($scrollTop < 1700) {
            $('.slide1').stop().animate({ opacity: '0%' }, 300);
        } else {
            $('.slide1').stop().animate({ opacity: '100%'}, 1000);
        }  
    })

    
})

var mHtml = $("html");
var page = 0.525;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 1) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

