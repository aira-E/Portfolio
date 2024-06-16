$(document).ready(function() {
    function setEqualHeight() {
        var maxHeight = 0;
        $('.tab-pane').css('height', 'auto');
        $('.tab-pane').each(function() {
            var height = $(this).outerHeight();
            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        $('.tab-pane').css('height', maxHeight + 'px');
    }
    
    function checkAndSetHeight() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            setEqualHeight();
        } else {
            $('.tab-pane').css('height', 'auto');
        }
    }
    
    checkAndSetHeight();
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
        checkAndSetHeight();
    });
    $(window).resize(function() {
        checkAndSetHeight();
    });
});