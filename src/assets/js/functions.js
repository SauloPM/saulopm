$(window).on("load", function() {
    
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
});