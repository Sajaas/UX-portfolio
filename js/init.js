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
  // $('#modal').modal();
  // $('#modal').modal('open');
  $('.fixed-action-btn').floatingActionButton();
  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  $('.hover').mouseenter(function() {
    $('.text').css("visibility","visible");
  });
  $('.collapsible').collapsible();
  $('.parallax').parallax();
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});

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
