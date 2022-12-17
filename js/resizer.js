const container = document.getElementById('social_container');
const container_social = document.getElementById('social_container');
const info_block = document.querySelectorAll('social_container_section');
const logo = document.getElementById('portfolio_logo');
const tags = document.querySelector('.info_container');
const social = document.getElementById('social_container');

const defaultHeight = container.clientHeight;
const defaultWidth = container.clientWidth;

function adapt() {

  if (window.screen.width >= 650) {
    container.style.height = '130px';
    container.style.width = '100%';
    console.log(789);
  } else if (window.screen.width < 650 && window.screen.width > 350) {
    container.style.height= '260px';
    container.style.width = '280px';

    logo.style.top = '-250px';
    tags.style.top = 'calc(58% - 125px)';
    social.style.top = 'calc(58% - 125px)';
    console.log(123);
  } else if (window.screen.width <= 350) {
    container.style.height = '260px';
    container.style.width = '255px';
    container.social_container_section.style.margin = '3px 3px';

  }

  console.log(window.screen.availWidth);
};
//adapt();
//window.addEventListener('resize', adapt);
