// svolgimento con addClass / removeClass
function showMenu(){
  $(".hamburger-menu").addClass("active");
}

function hideMenu(){
  $(".hamburger-menu").removeClass("active");
}


// svolgimento con SHOW/HIDE
// function showMenu(){
//   $(".hamburger-menu").show();
// }
//
// function hideMenu(){
//   $(".hamburger-menu").hide();
// }


// function init(){
//   $(".header-right > a").click(showMenu);
//   $(".close").click(hideMenu);
// }
//
// init();


// VERSIONE COMPRESSA CON TOGGLE
function toggleMenu(){
  $(".hamburger-menu").toggleClass("active");
}

function init(){
  $(".header-right > a, .close").click(toggleMenu);
}

init();
