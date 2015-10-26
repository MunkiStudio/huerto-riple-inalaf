/* jshint devel:true */
'use strict';

$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    //Llamamos a la clase .nombre y la mueve con translate. Donde el 1º valor corresponde a horizontal y el 2º a vertical
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

  });