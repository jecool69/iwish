function toggleMenu(){
    let container = document.querySelector('.parent-nav');
    let toggle = document.querySelector('.clicked', '.out');
    container.classList.toggle('active');
    toggle.classList.toggle('active');

}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
   document.querySelector('.main-header').style.top = "0";
  } else {
    document.querySelector('.main-header').style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}