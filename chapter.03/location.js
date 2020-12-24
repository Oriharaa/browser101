"use strict";
const special = document.querySelector('.special');

const scroll__by = document.querySelector('.scroll__by');
const scroll__to = document.querySelector('.scroll__to');
const scroll__into = document.querySelector('.scroll__into');

const buttons = document.querySelectorAll('button');
for(const button of buttons){
  button.addEventListener('click',()=>{
    if(button.className === 'scroll__by'){
      window.scrollBy({top:100, behavior: 'smooth'});
    }else if(button.className === 'scroll__to'){
      window.scrollTo(0, 100);
    }else if(button.className === 'scroll__into'){
      special.scrollIntoView();
    }
  });
};
