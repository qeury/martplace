$(function() {

  $(".card__star").rateYo({
    rating: 5,
    spacing: "3px",
    starWidth: "15px"
  });

  $('.week-prod__card').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/right.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/left.png" alt=""></button>'
  });

  let mixer = mixitup('.new-prod__card');

});
