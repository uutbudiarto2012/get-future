const menuOpenGf = document.querySelector('._menu_toggle');
const menuClose = document.querySelector('.closeMenu');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const mainNav = document.querySelector('._main_nav');

menuOpenGf.addEventListener('click',function(){
  menuMobile.classList.add('show')
  body.classList.add('noScroll')
})
menuClose.addEventListener('click',function(){
  menuMobile.classList.remove('show')
  body.classList.remove('noScroll')
})

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll > 60){
    mainNav.classList.add('navBg')
  }else{
    mainNav.classList.remove('navBg')
  }
});

const popupChat = document.querySelector('.popupChat');
const directChat = document.querySelector('.direct-chat');
const closePopup = document.querySelector('.closePopup');
directChat.addEventListener('mouseenter',function(){
  popupChat.classList.remove('hidden')
})
closePopup.addEventListener('click',function(){
  popupChat.classList.add('hidden')
})

$('.sliderDetail').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:3000,
  speed: 500,
  fade: true,
  cssEase: 'linear'  
})