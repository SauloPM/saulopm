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

  $(document).on("mouseover", "#proyectos .proyecto", function() {
    
    $(this).find(".caption").animate({ opacity: 1 }, 250);

    setTimeout(() => {
      $(this).find(".caption .titulo").animate({ opacity: 1 }, 250);
    }, 350);

    setTimeout(() => {
      $(this).find(".caption .herramientas").animate({ opacity: 1 }, 250);
    }, 650);

  });

  $(document).on("mouseleave", "#proyectos .proyecto", function() {
    
    $(this).find(".caption .herramientas").animate({ opacity: 0 }, 250);

    setTimeout(() => {
      $(this).find(".caption .titulo").animate({ opacity: 0 }, 250);
    }, 350);

    setTimeout(() => {
      $(this).find(".caption").animate({ opacity: 0 }, 250);
    }, 650);

  });

});