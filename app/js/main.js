$(function() {


  $(".product-card__star").rateYo({
    rating: 5,
    spacing: "3px",
    starWidth: "15px"
  });

  $('.week-product__slider').slick({
    prevArrow: '<button class="week-product__arrow week-product__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="week-product__arrow week-product__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.block-head__arrows'
  });

  $('.followers__slider').slick({
    prevArrow: '<button class="followers__arrow week-product__arrow week-product__arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow: '<button class="followers__arrow week-product__arrow week-product__arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
    appendArrows: '.followers__arrows',
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  let mixer = mixitup('.new-product__columns');

  new SimpleBar(document.getElementById('scroll-1'));

});
