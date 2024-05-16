$(function() {
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });

    $(window).scroll(function() {
        var scrollPosition = $(this).scrollTop();
        var elementOffset = $('.main-intro').offset().top;
        var windowHeight = $(window).height();
        
        // console.log(elementOffset);
        // console.log(windowHeight);

        if (scrollPosition > (elementOffset - windowHeight)) {
            $('.main-intro .intro-line').animate({
                height: '1072px'
              }, 3000);
            
            
            //   $('.main-intro .year').animate({
            //     opacity: '1'
            //   }, 3000)
        }
    });


    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });
});