'use strict';

$('.in-border').on('focus', function() {
  $('.red').addClass("in-border-focus"); // remove error text
});

$('.in-border').on('blur', function() {
  let uname = $(this).val();
  if(uname.length > 5) {
    $('.in-border').removeClass("in-border-red"); // remove red border
    } else {
      $('.red').removeClass("in-border-focus"); // add error text
    }
});

$('.input-radio').on('click', function() {
    $('.radio1').addClass("input-radio-check"); // add radio checked
  })

$('.button-one').mouseenter(function() {
  $(this).addClass("hover-one");
  });

$('.button-one').mouseleave(function() {
  $(this).removeClass("hover-one");
});

$('.button-two').mouseenter(function() {
  $(this).addClass("hover-two");
  });

$('.button-two').mouseleave(function() {
  $(this).removeClass("hover-two");
});
