$(document).ready(function() {
    // Accordion toggle
    $('.faq__accordion-button').on('click', function() {
        $(this).parent().toggleClass('active');
    });

    // Open modal
    $('[data-modal-target]').on('click', function() {
        const targetId = $(this).data('modal-target');
        $('#' + targetId).css('display', 'flex');
    });

    // Close modal
    $('[data-close]').on('click', function() {
        $(this).closest('.modal').css('display', 'none');
    });

    // Close modal on outside click
    $(window).on('click', function(e) {
        $('.modal').each(function() {
            if (e.target === this) {
                $(this).css('display', 'none');
            }
        });
    });

    // Handle check
    $('[data-check]').on('click', function() {
        const id = $(this).data('check');
        $('#' + id).prop('checked', true);
    });

    // Handle uncheck
    $('[data-uncheck]').on('click', function() {
        const id = $(this).data('uncheck');
        $('#' + id).prop('checked', false);
    });

    // product modal slider

    $(".prdModal_slider").owlCarousel({
        items:1,
        dots:true,
        nav:false
    })
});