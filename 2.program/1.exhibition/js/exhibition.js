$(function () {
    $('#toggle-on').on('click', tabmenu);
    function tabmenu() {
        $('.fin-exhibition').hide();
        $('.now-exhibition').fadeIn(1000);
        $('.scrollbar').hide();
        $('.scrollbar').fadeIn();
    }

    $('#toggle-off').on('click', tabmenu2);
    function tabmenu2() {
        $('.fin-exhibition').fadeIn(1000);
        $('.now-exhibition').hide();
        $('.scrollbar').hide();
        $('.scrollbar').fadeIn();
    }

    function update() {
        if ($('.toggle-right').is(':checked')) {
            
        }
    }
    update();

    $('input[type="radio"]').change(function() {
        update();
    });



    

});

