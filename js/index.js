$(function() {
    $('#mobile-menu').click(function() {
        $(this).toggleClass('active');
    });

    $(".circle-text").html(function() {
        return $(this).text().split("").map((char, i) => `<span style="transform:rotate(${i * 15}deg)">${char}</span>`).join("");
    });
});