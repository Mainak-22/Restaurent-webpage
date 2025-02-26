$(document).ready(function () {
    $('#hamburger').click(function(){
        // Target the <i> tag inside #hamburger
        $(this).find('i').toggleClass('fa-bowl-food fa-times');
        
        // Toggle the menu visibility
        $('.navbar').toggleClass('show');
    });

    $(window).on('load scroll', function(){
        $('#hamburger').find('i').removeClass('fa-times').addClass('fa-bowl-food');
        $('.navbar').removeClass('show');
    });
    // ✅ Image Reveal on Scroll
    $(window).on("scroll", function () {
        let aboutImage = $('.about .image');
        if (aboutImage.length) { // Ensure element exists
            let scrollPosition = $(window).scrollTop();
            let imageOffset = aboutImage.offset().top - $(window).height() + 100;

            if (scrollPosition > imageOffset) {
                aboutImage.addClass('show'); // Add class when in view
            }
        }
    });

    // ✅ Dish Filtering Logic
    $('.controls .buttons').click(function () {
        $(this).toggleClass('buttons-active'); // Allow multiple buttons to be active

        let activeFilters = $('.controls .buttons.buttons-active').map(function () {
            return $(this).attr('data-filter').toLowerCase(); // Convert filter to lowercase
        }).get();

        if (activeFilters.length === 0 || activeFilters.includes('all')) {
            $('.dish .img').fadeIn(400); // Show all if "all" is selected or nothing is active
        } else {
            $('.dish .img').each(function () {
                let itemClasses = $(this).attr('class').toLowerCase().split(' '); // Convert class to lowercase
                if (activeFilters.some(filter => itemClasses.includes(filter))) {
                    $(this).fadeIn(400);
                } else {
                    $(this).fadeOut(400);
                }
            });
        }
    });
});
