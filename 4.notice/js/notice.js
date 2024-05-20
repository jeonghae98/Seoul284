$(function() {
    //===================== header =====================
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });



    //===================== main =====================
    $('.list:eq(0)').on('click', function() {
        window.location.href = './recruitment/detail-page_05.html';
    });

    
    //===================== footer =====================
    $('.fixed-menu a').click(function(e) {
        e.preventDefault();
        $('html').animate({ scrollTop: 0 }, 500)
    });
});