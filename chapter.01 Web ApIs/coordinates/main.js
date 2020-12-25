"use strict";

const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const horozintal = document.querySelector('.horozintal');
const vertical = document.querySelector('.vertical');


document.addEventListener('mousemove', (event)=>{
  horozintal.style.top = `${event.clientY}px`;
  vertical.style.left=`${event.clientX}px`;
  target.style.top = `${event.clientY}px`;
  target.style.left = `${event.clientX}px`;
  tag.style.top = `${event.clientY}px`;
  tag.style.left = `${event.clientX}px`;
  tag.innerHTML = `${event.clientX}px, ${event.clientY}px`;
  
});