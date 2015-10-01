(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.6;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

    	// El valor a la derecha de speed es la posicion Y de la imagen
      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed + 900) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();