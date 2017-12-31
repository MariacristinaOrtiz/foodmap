$(document).ready(function() {
  // DECLARACION DE VARIABLES
  var rutaLocal = '../assets/imgs/';
  // SELECCION DE ELEMENTOS GUARDADOS EN VARIBALES
  var $inputSearch = $('#search-for');
  var $divContainer = $('.content-search');
  var $generalImage = $('#general-img');
  // seleccion de elementos del modal
  var $restaurant = $('#restaurant');
  var $map = $('#map');
  var $website = $('#website');
  var $indications = $('#indications');
  var $address = $('#address');
  var $phone = $('#phone');
  var $reservations = $('#reservation');
  var $close = $('#close');
  // ...........FUNCIONES PARA LOS EVENTOS KEYUP............
  // FUNCIÓN PRIMERA: para DESAPARECER la imagen general
  function inputEventOne(event) {
    if ($(this).val() === '') {
      $generalImage.fadeIn('slow');
    } else {
      $generalImage.fadeOut('slow');
    }
  }
  // FUNCIÓN SEGUNDA: para FILTRAR LAS IMAGENES(restaurants) y mostral el modal por restaurant
  function inputEventTwo(event) {
    $.each(restaurants, function(key, val) {
      if ($inputSearch.val() === key) {
        for (var i in val) {
          $divContainer.append('<figure class = "col-xs-6 col-sm-4 food"><img class = "image-responsive"  src = ' + rutaLocal + val[i].url + ' alt = ' + val[i].url + ' data-toggle="modal" data-target="#myModal"></figure>');
        }
      } else if ($inputSearch.val() === '' || $inputSearch.val() === 'comida ') {
        $('.food').remove();
      }
    });
    // EVENTO MOUSEOVER: Dentro de la FUNCION SEGUNDA donde se creó la etiqueta "figure".
    var $figureFood = $('.food');
    $figureFood.each(function(i, val) {
      $figureFood.children().on('mouseover', function() {
        $(this).eq(i).children().fadeTo(800, 0.25);
        $(this).eq(i).children().fadeTo(800, 1);
      });
    });
    // EVENTO CLICK PARA AGREGAR MODAL: Dentro de la FUNCION SEGUNDA donde se creó la etiqueta "figure".
    $figureFood.each(function(i, el) {
      $figureFood.eq(i).on('click', function() {
        $.each(restaurants, function(key, val) {
          if ($figureFood.eq(i).children().attr('alt') === val[i].url) {
            $restaurant.text(val[i].name);
            $map.html(val[i].map);;
            $address.text(val[i].address);
            $phone.text(val[i].phone);
            $indications.attr('href', val[i].indications);
            $website.attr('href', val[i].website);
            $reservations.attr('href', val[i].reservations);
          }
        });
      });
    });
  }
  // ......FUNCION PARA EVENTO CLICK: Al cerrar el modal(click) se volvera a la vidta principal............
  function closeModalEvent() {
    window.location.href = 'principalview.html';
  };
  // EVENTOS
  // Evento que llama a las FUNCIONES 'PRIMERA Y SEGUNDA'
  $inputSearch
    .on('keyup', inputEventOne)
    .on('keyup', inputEventTwo);
  // Evento que llama a la 'FUNCION PARA EL EVENTO CLICK'
  $close
    .on('click', closeModalEvent);
});
