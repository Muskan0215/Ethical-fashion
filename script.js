$(document).ready(function(){
  $('#collapse-navbar').click(function(){
      $('.collapse').show(function(){
        $('.collapse').css({display:"flex"});
      });
  });
});

$(function() {
  AOS.init({
    duration:2000,
    easing: 'ease-in-out-back',
  });
});

$(document).ready(function(){
  $('.close-button').click(function(){
      $('.collapse').hide("slow");
  });
});

$(document).ready(function(){
  $(".body1 .collapse li a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $(".arrow-div p a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});


