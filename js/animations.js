const COLOR_WHITE = '#dbdbdb';
const COLOR_GRAY = '#888';
const COLOR_GRAY_LIGHT = '#4c4c4c';
const COLOR_GRAY_DARK = '#333';

const MIN_DISPLAY_WIDTH = 450;

function startAnim() {
  const logo = document.getElementById('portfolio_logo');
  const mask = document.getElementById('mask_content');

  gsap.fromTo('.portfolio_logo', 1,
    {css: {scale: 2, top: '-100px'}},
    {css: {scale: 1, top: 0}, ease: Expo.easeOut});

  gsap.fromTo('.mask_content', 1,
    {css: {opacity: 1}},
    {css: {opacity: 0}, ease: Linear.easeIn});

  gsap.fromTo('.welcome_container', 1.5,
    {css: {scale: 1.5}},
    {css: {scale: 1}, ease: Expo.easeOut});

  gsap.fromTo('.portfolio_about', 1.5,
    {css: {scale: 1.5}},
    {css: {scale: 1}, ease: Expo.easeOut});

  gsap.fromTo('#nav_toggle-button', 1.5,
    {css: {opacity: 0}},
    {css: {opacity: 1}, ease: Sine.easeOut});


  setTimeout(function() {
    mask.style.zIndex = 0;

    if (screen.width > MIN_DISPLAY_WIDTH) {
      gsap.fromTo('.spine-target', 1.5,
        {css: {scale: 2, opacity: 0}},
        {css: {scale: 1, opacity: 1}, ease: Expo.easeOut});

      gsap.fromTo('.spine', 3,
        {css: {top: '50vh', opacity: 0}},
        {css: {top: '45vh', opacity: 1}, ease: Expo.easeOut});
    }
  }, 1600);
}

function openMenuOld() {
  const menu = document.getElementById('nav');
  const button = document.getElementById('nav_toggle-button')
  const menu_logo = document.getElementById('nav_show-icon')
  let isOpen = false;
  let isAvailable = true;
  let debug = true;

  button.addEventListener('click', event => {

    menu.style.display = 'block';
    menu_logo.style.display = 'flex';

    if (debug == true) {
      console.log(isAvailable);
    }

    if (isAvailable == true) {
      if (isOpen == true) {

        menu_logo.style.display = 'flex';

        gsap.fromTo('.nav', 0.3,
          {css: {scaleX: 1, scaleY: 1, left: '50.1%', top: '50.1%'}},
          {css: {scaleX: 0.045, scaleY: 0.1, left: '50%', top: '40px'}, ease: Power1.easeIn});

        gsap.fromTo('#nav_toggle-button', 0.3,
          {css: {opacity: '1'}},
          {css: {opacity: '0'}, ease: Power1.easeInOut});

        gsap.fromTo('.nav_show-icon', 0.5,
          {css: {opacity: '0'}},
          {css: {opacity: '1'}, ease: Linear, delay: 0.2});

        gsap.fromTo('#nav_toggle-button', 0.1,
          {css: {opacity: '0'}},
          {css: {opacity: '1'}, ease: Power1.easeInOut, delay: 0.25});
        
        gsap.fromTo('.nav', 0.5,
          {css: {opacity: 1}},
          {css: {opacity: 0}, ease: Power1.easeInOut, delay: 0.4});      

        isAvailable = false;

        if (debug == true) {
          console.log('isAvailable = false');
        } 

        setTimeout(function () {
          menu_logo.style.display = 'flex';
          isOpen = false;
          isAvailable = true;

          if (debug == true) {
            console.log(isAvailable);
          }

        }, 900);

      } else {

        gsap.fromTo('.nav', 0.3,
            {css: {scaleX: 0.05, scaleY: 0.1, left: '50%', top: '40px', opacity: 1}},
            {css: {scaleX: 1, scaleY: 1, left: '50%', top: '50%'}, ease: Power1.easeOut});

        button.style.opacity = 0;

        gsap.fromTo('#nav_toggle-button', 0.4,
            {css: {opacity: '0'}},
            {css: {opacity: '1'}, ease: Power1.easeInOut});

        gsap.fromTo('.nav_show-icon', 0.2,
            {css: {opacity: '1'}},
            {css: {opacity: '0'}, ease: Power1.easeInOut});
      
        isAvailable = false

        if (debug == true) {
          console.log('isAvailable = false');
        } 

        setTimeout(function () {
          menu_logo.style.display = 'none';
          isOpen = true;
          isAvailable = true;

          if (debug == true) {
            console.log(isAvailable);
          } 

        }, 400);
      };
    };
  });
};

function openMenu() {
  const menu = document.getElementById('nav');
  const button = document.getElementById('nav_toggle-button');
  const welcome_screen = document.getElementById('welcomescreen_frame');
  const home_page = document.getElementById('home_page');

  button.addEventListener('click', event => {
    console.log(123);
    menu.style.top = 0;
    welcome_screen.style.transform = 'translateY(75px)';
    home_page.style.transform = 'translateY(75px)';
  })
}


var controller = new ScrollMagic.Controller();

function animateObjects(Trigger, ProjectName, ProjectDate, ProjectDescr) {

  if (screen.width > MIN_DISPLAY_WIDTH) {
    var tween = new TimelineMax()
      .fromTo(ProjectName, 0.35,
        {fontSize: "1em", color: COLOR_GRAY},
        {fontSize: "2em", color: COLOR_WHITE, yoyo: true, ease: Power1.easeInOut})
      .fromTo(ProjectDate, 0.35,
        {marginLeft: 0, fontSize: "1em", letterSpacing: "0rem"},
        {marginLeft: "5px", fontSize: "1.5em", letterSpacing: ".1rem", yoyo: true, ease: Power1.easeInOut, delay: -0.25})
      .fromTo(ProjectDescr, 0.35,
        {marginTop: "0px", fontSize: "1em", color: COLOR_GRAY_DARK},
        {marginTop: "10px", fontSize: "1.15em", color: COLOR_GRAY_LIGHT, yoyo: true, ease: Power1.easeInOut, delay: -0.5}
    );
  } else {
    var tween = new TimelineMax()
      .fromTo(ProjectName, 0.35,
        {color: COLOR_GRAY},
        {color: COLOR_WHITE, yoyo: true, ease: Power1.easeInOut})
      .fromTo(ProjectDescr, 0.35,
        {color: COLOR_GRAY_DARK},
        {color: COLOR_GRAY_LIGHT, yoyo: true, ease: Power1.easeInOut, delay: -0.5}
      );
  }

  var scene = new ScrollMagic.Scene({
    triggerElement: Trigger,

  })
  .setTween(tween) // trigger a TweenMax.to tween
  .offset(45)
  .addTo(controller);
}

function translateIDs() {
  var arr = document.querySelectorAll('[id^="the"]');
  
  for (i = 0; i < arr.length; i++) {
        animateObjects(arr[i], arr[i + 1], arr[i + 2], arr[i + 3]);
        i = i + 3
    }
}

translateIDs();
startAnim();
// openMenuOld();

