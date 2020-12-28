'use strict';

const inputItem = document.querySelector('.input__item');
const fuck = document.querySelector('.added-item.one');

inputItem.addEventListener('keypress',(e)=>{
  if(e.key === 'Enter'){
    const addItemText = inputItem.value;
    document.querySelector('.added-item.one').innerHTML=
      `<div class="list__left">
      <button>
        <i class="fas fa-angle-left"></i>
        <span class="item__count">5</span>
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
    <div class="list__center">
      <span class="item">토마토</span>
    </div>
    <div class="list__right">
      <button>
        <div class="select-box"></div>
      </button>
      <button class="trash-btn">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>`;
  }

  const trashBtn = document.querySelector('.trash-btn');
  trashBtn.addEventListener('click', ()=>{
    document.querySelector('.added-item.one').removeChild(fuck.childNodes[0]);
    document.querySelector('.added-item.one').removeChild(fuck.childNodes[1]);
    document.querySelector('.added-item.one').removeChild(fuck.childNodes[2]);
  });

});




