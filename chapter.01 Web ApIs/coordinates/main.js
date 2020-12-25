"use strict";

const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const horozintal = document.querySelector('.horozintal');
const vertical = document.querySelector('.vertical');


window.addEventListener('load', ()=>{
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event)=>{
    const posX = event.clientX;
    const posY = event.clientY;
    
    horozintal.style.transform =`translateY(${posY}px)`;
    vertical.style.transform=`translateX(${posX}px)`;
    target.style.transform=`translate(${posX-targetHalfWidth}px, ${posY-targetHalfHeight}px)`;
    tag.style.transform=`translate(${posX+20}px, ${posY+20}px)`;
    tag.innerHTML=`${posX}px, ${posY}px`;
  });
});
