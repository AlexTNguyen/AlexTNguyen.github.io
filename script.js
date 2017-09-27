window.addEventListener("hashchange", function() { scrollBy(0, -45) });

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-white";
}

$(window).scroll(function(){
    $(".background1 .title").css("opacity", 1 - $(window).scrollTop() / 350);
  });

$(document).ready(function() {
  showDivs(slideIndex);
  console.log($('.active').width());
  var width = Math.abs(($('.active').width() - $('#marker').width())/2);
  var top = $('.active').offset().top + 28; 
  var left = $('.active').offset().left + width;
  $('#marker').css({top: top, left: left});
  
  
});

$('li').click( function() { 
    $('.active').removeClass('active');
    $(this).addClass('active');
    var top = $(this).offset().bottom;
    var width = ($(this).width() - $('#marker').width())/2;
    var left = $(this).offset().left + width;
    $('#marker').stop().animate( { top: 28, left: left  }, 500 );
});

$('li:first').trigger('mouseover');
$('#marker').fadeIn();



