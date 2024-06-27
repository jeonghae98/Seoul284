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

    var carousel = $('.carousel');
    var Items = $('.exhibition-list a');

    /* -----------스크롤 바------------ */

        const $scrollbarThumb = $('.scrollbar-thumb');
        const $exhibitionList = $('.fin-exhibition');
        const $scrollbarTrack = $('.scrollbar-track');
    
        // Exhibition list scroll event
        $exhibitionList.on('scroll', function() {
            const scrollPercentage = $exhibitionList.scrollTop() / ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
            if ($(window).width() < 768) { // Mobile
                const thumbLeft = scrollPercentage * ($scrollbarTrack.width() - $scrollbarThumb.outerWidth());
                $scrollbarThumb.css('left', thumbLeft + 'px');
            } else { // Desktop
                const thumbTop = scrollPercentage * ($scrollbarTrack.height() - $scrollbarThumb.outerHeight());
                $scrollbarThumb.css('top', thumbTop + 'px');
            }
        });
    
        // Scrollbar thumb drag event
        $scrollbarThumb.on('mousedown touchstart', function(e) {
            e.preventDefault();
            const thumbHeight = $scrollbarThumb.outerHeight();
            const thumbWidth = $scrollbarThumb.outerWidth();
            const trackHeight = $scrollbarTrack.height();
            const trackWidth = $scrollbarTrack.width();
            const startX = e.pageX || e.originalEvent.touches[0].pageX;
            const startY = e.pageY || e.originalEvent.touches[0].pageY;
            const startTop = parseFloat($scrollbarThumb.css('top'));
            const startLeft = parseFloat($scrollbarThumb.css('left'));
    
            $(document).on('mousemove.thumb touchmove.thumb', function(e) {
                e.preventDefault();
                if ($(window).width() < 768) { // Mobile
                    const moveX = e.pageX || e.originalEvent.touches[0].pageX;
                    const deltaX = moveX - startX;
                    let newLeft = startLeft + deltaX;
    
                    if (newLeft < 0) newLeft = 0;
                    if (newLeft > trackWidth - thumbWidth) newLeft = trackWidth - thumbWidth;
    
                    $scrollbarThumb.css('left', newLeft + 'px');
    
                    const scrollPercentage = newLeft / (trackWidth - thumbWidth);
                    const newScrollTop = scrollPercentage * ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
                    $exhibitionList.scrollTop(newScrollTop);
                } else { // Desktop
                    const moveY = e.pageY || e.originalEvent.touches[0].pageY;
                    const deltaY = moveY - startY;
                    let newTop = startTop + deltaY;
    
                    if (newTop < 0) newTop = 0;
                    if (newTop > trackHeight - thumbHeight) newTop = trackHeight - thumbHeight;
    
                    $scrollbarThumb.css('top', newTop + 'px');
    
                    const scrollPercentage = newTop / (trackHeight - thumbHeight);
                    const newScrollTop = scrollPercentage * ($exhibitionList[0].scrollHeight - $exhibitionList.outerHeight());
                    $exhibitionList.scrollTop(newScrollTop);
                }
            });
    
            $(document).on('mouseup.thumb touchend.thumb', function() {
                $(document).off('.thumb');
            });
    
            return false; // Prevent text selection
        });
    
    
    
    




   /* --------------캐러셀 시도1-------------------- */

    /* function applyStyles() {
        let $container = $('.fin-exhibition');
        let $anchors = $container.find('.exhibition-list a');
        let containerHeight = $container.height();
        let containerTop = $container.offset().top;
        let scrollTop = $container.scrollTop();

        $anchors.each(function(index, element) {
            let $element = $(element);
            let elementOffsetTop = $element.offset().top - containerTop + scrollTop;
            let elementCenter = elementOffsetTop + $element.outerHeight() / 2;
            let containerCenter = scrollTop + containerHeight / 2;
            let distance = Math.abs(containerCenter - elementCenter);
            let scale = Math.max(1 - distance / 500, 0.8);
            let opacity = Math.max(1 - distance / 250, 0.5);

            $element.css({
                'transform': `scale(${scale})`,
                'opacity': opacity
            });
        });
    }

    $('.fin-exhibition').on('scroll', function() {
        applyStyles();
    });

    // Initial call to set styles on page load
    applyStyles(); */




/* -------------------후 처리------------------------ */

    // function update() {
    //     if ($('.toggle-right').is(':checked')) {
            
    //     }
    // }
    // update();

    // $('input[type="radio"]').change(function() {
    //     update();
    // });



    

});

