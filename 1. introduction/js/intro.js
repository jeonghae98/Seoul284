$(function() {

   

  

    $(window).scroll(function() {
        let $scrollTop = $(this).scrollTop(); // 수직 스크롤바의 위치인식
        console.log($scrollTop);

        // $('.line-circle').stop().slideDown(1000);
        // $('.line-circle').hide();
        // if ($scrollTop < 500) {
        //     $('.vertical-dotted-line').slideUp(1000);
        // } else {
        //     $('.vertical-dotted-line').slideDown(1000);
        // }

        // if ($scrollTop < 570) {
        //     $('.vertical-dotted-line2').slideUp(1000);
        // } else {
        //     $('.vertical-dotted-line2').slideDown(1000);
        // }

        // if ($scrollTop < 1000) {
        //     $('.vertical-dotted-line .outer-cicle').fadeOut(1000);
        // } else {
        //     $('.vertical-dotted-line .outer-cicle').fadeIn(1000);
        // }

        // if ($scrollTop < 1500) {
        //     $('.vertical-dotted-line img').fadeOut(1000);
        // } else {
        //     $('.vertical-dotted-line img').fadeIn(1000);
        // }
        
    });
});