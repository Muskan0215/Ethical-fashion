$(document).ready(function(){
  $('#collapse-navbar').click(function(){
      $('.collapse').toggle("slide");
      $('.content').toggle();
      $('.arrow').toggle();
  });
});


$(document).ready(function(){
  $('#searchbutton').click(function(){
      $('#searchplace').toggle("slideleft");
  });
});