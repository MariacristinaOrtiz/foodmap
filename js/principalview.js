$(document).ready(function() {
  // declaración de variables
  var rutaLocal = '../assets/imgs/';
  // selección de elementos y guardados en variables
  var $inputSearch = $('#search-for');
  var $divContainer = $('.content-search');
  var $generalImage = $('#general-img');
  // funciones para los eventos
  function inputEventOne(event) {
    if ($(this).val() === '') {
      $generalImage.fadeIn('slow');
    } else {
      $generalImage.fadeOut('slow');
    }
  }
  function inputEventTwo(event) {
    $.each(restaurants, function(key, val) {
      if ($inputSearch.val() === key) {
        for (var i in val) {
          $divContainer.append('<figure class = "col-xs-6 food"><img class = "image-responsive" src = ' + rutaLocal + val[i].url + ' ></figure>');
        }
      } else if ($inputSearch.val() === '' || $inputSearch.val() === 'comida ') {
        var $figureFood = $('.food');
        $figureFood.remove();
      }
    });
  }
  // eventos
  $inputSearch
    .on('keyup', inputEventOne)
    .on('keyup', inputEventTwo);
});
