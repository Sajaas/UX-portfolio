(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  }); // end of document ready
})(jQuery); // end of jQuery name space

//modal show only during first session
if(!sessionStorage.getItem('firstVisit')){
  sessionStorage.setItem('firstVisit','1'); }
  else{
    sessionStorage.setItem('firstVisit', '0'); }
$(function(){
  if (sessionStorage.getItem('firstVisit') ==="1"){
    $('#modal').modal();
    $('#modal').modal('open');
    $(".modal").css('display', 'inline') }
$("#modal").click(function(){ $(".modal").hide(); }); });

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('.fixed-action-btn').floatingActionButton();
  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  $('.hover').mouseenter(function() {
    $('.text').css("visibility","visible");
  });
  $('.collapsible').collapsible();
  $('.parallax').parallax();
  $('.collapsible').collapsible();
  $('.tabs').tabs();
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true,
  });});
  autoplay();
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 15000);
    }

function readMore() {
  var placeholder = document.getElementById("placeholder");
  var moreText = document.getElementById("readMore");
  var btnText = document.getElementById("readBtn");
  var arrowBtn = document.getElementById("arrowBtn")

  if (placeholder.style.display === "none") {
    placeholder.style.display = "inline";
    btnText.innerHTML = "Show favorites";
    arrowBtn.innerHTML = "keyboard_arrow_down";
    moreText.style.display = "none";
  } else {
    placeholder.style.display = "none";
    btnText.innerHTML = "Hide favorites";
    arrowBtn.innerHTML = "keyboard_arrow_up";
    moreText.style.display = "inline";
  }
}

function seeMore() {
  var placeholderSometimes = document.getElementById("placeholderSometimes");
  var moreText = document.getElementById("seeMore");
  var btnText = document.getElementById("seeBtn");

  if (placeholderSometimes.style.display === "none") {
    placeholderSometimes.style.display = "inline";
    btnText.innerHTML = "More tools";
    moreText.style.display = "none";
  } else {
    placeholderSometimes.style.display = "none";
    btnText.innerHTML = "Hide more tools";
    moreText.style.display = "inline";
  }
}

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}
;
function showList() {
  var x = document.getElementById("show-list");
  if (x.style.display !== "block") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("icons-list");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
}
