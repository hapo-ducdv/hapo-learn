$(document).ready(function () {
  $('.feedback-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  $('.btn-close-msg').click(function() {
    $('#messenger-show', this).removeClass('chatbox');
  });

  $('.btn-close-msg').click(function() {
    $('#messenger-show').slideUp();
  });

  $('.logo-messenger').click(function() {
    $('#messenger-show').slideDown('chatbox');
  });
});
