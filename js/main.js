(function () {
  $(document).ready(function () {
    $(".weare").typed({
      strings: ["Geeks.", "Engineers.", "Developers.", "Code Monkeys."],
      showCursor: true,
      typeSpeed: 100,
      backDelay: 1800,
      backSpeed: 50
    });

    new WOW().init();
  });
} ());