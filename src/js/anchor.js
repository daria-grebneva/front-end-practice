function scrollToBlock()
{
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(".recent-works").offset().top
    }, 1000);
}

$(window).on('load', function ()
{
    $('.anchor').on('click', scrollToBlock)
});