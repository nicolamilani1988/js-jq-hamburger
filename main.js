// function showMenu(){
//   $(".hamburger-menu").addClass("active");
// }
//
// function hideMenu(){
//   $(".hamburger-menu").hide();
// }
//
// function init(){
//   $(".header-right > a").click(showMenu);
//   $(".close").click(hideMenu);
// }

function showMenu(){
  $(".hamburger-menu").toggle();
}

function hideMenu(){
  $(".hamburger-menu").hide();
}

function init(){
  $(".header-right > a").click(showMenu);
  $(".close").click(hideMenu);
}

init();
