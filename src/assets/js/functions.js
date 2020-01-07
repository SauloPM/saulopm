$(window).on("load", function(){
    
  // WOW
  new WOW({
      mobile: false
  }).init();  

  // ––––––––––––––– //
  //     SPINNER     //
  // ––––––––––––––– //

  hideSpinner();

  function hideSpinner () {
    $("#preloader .spinner").fadeOut(500, function () {
        $("#preloader").delay(500).fadeOut(500);
        setTimeout(function () { $("body").css("overflow", "visible"); }, 500);
    });
  }

  // ––––––––––––––––– //
  //     PROYECTOS     //
  // ––––––––––––––––– //

  $(document).on("mouseover", "a#proyectos .proyecto .caption:not(.visible)", function() {

    var caption      = $(this);
    var titulo       = $(this).find(".titulo");
    var herramientas = $(this).find(".herramientas");
    
    caption.animate({ opacity: 1 }, 250);

    setTimeout(() => {
      titulo.animate({ opacity: 1 }, 250);
    }, 350);

    setTimeout(() => {
      herramientas.animate({ opacity: 1 }, 250);
    }, 650);

    setTimeout(() => {
      caption.addClass("visible");
    }, 750);

  });

  $(document).on("mouseleave", "a#proyectos .proyecto .caption.visible", function() {

    var caption      = $(this);
    var titulo       = $(this).find(".titulo");
    var herramientas = $(this).find(".herramientas");

    herramientas.animate({ opacity: 0 }, 250);

    setTimeout(() => {
      titulo.animate({ opacity: 0 }, 250);
    }, 350);

    setTimeout(() => {
      caption.animate({ opacity: 0 }, 250);
    }, 650);

    setTimeout(() => {
      caption.removeClass("visible");
    }, 750);
  });
});