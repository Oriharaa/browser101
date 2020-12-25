"use strict";

const buttonList = document.querySelector('.button-list');
const angry = document.querySelector('.emo__angry');
const asleep = document.querySelector('.emo__asleep');
const crying = document.querySelector('.emo__crying');

buttonList.addEventListener('click', (e)=>{
  const target = e.target;
  switch(target.dataset.category){
    case 'asleep' : asleep.scrollIntoView({behavior:'smooth', block:'center'});
                      break;
    case 'crying' : crying.scrollIntoView({behavior:'smooth', block:'center'});
                      break;
    case 'angry'  : angry.scrollIntoView({behavior:'smooth', block:'center'});
                      break;
    case 'arrow-up' : window.scrollTo({top:0, behavior:'smooth'});
                      break;
  }
});