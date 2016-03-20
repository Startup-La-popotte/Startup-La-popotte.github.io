toggleSlide = function() {
    var active = $("#slider ul li.active");
    var next   = active.next();
    if (next.length === 0) {
        next = $('#slider ul li:first');
    }

    active.removeClass('active animated fadeIn');
    next.addClass('active animated fadeIn');
}
setInterval(toggleSlide, 1500);
