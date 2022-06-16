new WOW().init();
$(document).ready(function() {
  // Валидация
  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Еще символов {0}")
      },
      email: "Укажите корректный email",
      phone: "Заполните поле"
    }
  });
  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2
      },
      phone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Еще символов {0}")
      },
      phone: "Заполните поле"
    }
  });
  // Маска телефона
  $('.phone').mask('+7 (999) 999-99-99');
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
      breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
}); 