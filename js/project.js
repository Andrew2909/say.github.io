function addZero(num){
    if(num<=9){
        return '0'+num;
    }
    return num;
}

$('.section-bg2__inner').slick({
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    swipe: true,
    infinite: true,
    prevArrow: $('.arr-prev'),
    nextArrow: $('.arr-next'),
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
            breakpoint: 768,
            settings: {
              centerMode: false,
              slidesToShow: 1
            }
          }
      ]
});
let slick = $('.section-bg2__inner').slick('getSlick');

$('.slider-nav .current').html(addZero(slick.slideCount));
$('.section-bg2__inner').on('afterChange', function(event, slick, currentSlide){
    $('.slider-nav .current').html(addZero(currentSlide+1));
});

$('.js-nav-toggler').click(function(){
    $('.nav-burger .header__nav').toggleClass('shownav');
})
$('.bg1, .bg1 *').click(function(){
    $('.nav-burger .header__nav').addClass('shownav');
})
