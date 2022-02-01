$(document).ready(function(){
  $('#collapse-navbar').click(function(){
      $('.collapse').toggle("slide");
      $('.content').toggle();
      $('.arrow').toggle();
  });
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $('#searchbutton').click(function(){
      $('#searchplace').toggle("slideleft");
  });
});

