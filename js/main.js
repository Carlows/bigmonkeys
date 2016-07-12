(function () {
  $(document).ready(function () {
    setTypedScroll(
      ".section-whoweare", 
      ".weare", 
      ["Geeks.", 
       "Engineers.", 
       "Developers.", 
       "Code Monkeys."]);

    new WOW().init();
  });

  function setTypedScroll(sectionToScroll, blockToAnimate, phrases) {
    var triggered = false;

    $(window).scroll(function() {    
      if(isScrolledIntoView($(sectionToScroll)) && !triggered) {
        $(blockToAnimate).typed({
          strings: phrases,
          showCursor: true,
          typeSpeed: 100,
          backDelay: 1800,
          backSpeed: 50
        });

        triggered = true;
      }    
    });
  }
  
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
} ());