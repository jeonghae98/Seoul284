$(function () {
    $('.reservation-btn').on('click', function() {
        $('.detail').addClass('hidden');
        if ($(this).closest('.inside-tour').length) {
            $('.inside-tour').addClass('move-left');
        } else if ($(this).closest('.outside-tour').length) {
            $('.outside-tour').addClass('move-left');
        }
    });
});

