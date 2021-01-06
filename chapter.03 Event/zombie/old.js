'use strict';

const gameBtn = document.querySelector('.game__button');
const mmss = document.querySelector('.game__timer');
const field = document.querySelector('.game__field');
const remainder = document.querySelector('.count__number');
const result = document.querySelector('.result');
let setTime = 9;
let btnCount = 0;
let playing = false;
let count = 9;

gameBtn.addEventListener('click', ()=>{
    createImg();
    replaceStyle();

   btnCount++;

   let fuck = setInterval((startTimer), 1000);

   function startTimer(){
    if(btnCount === 2){
        console.log("중지버튼으로 인한 종료")
       clearInterval(fuck);
       return;
    }
     mmss.innerHTML = `00:0${setTime}`;
     setTime--;

     if(setTime < 0){
         console.log("시간 제한으로 인한 종료");
         stopGame();
         clearInterval(fuck);
     }

    };
});

//좀비나 폭탄 클릭시 삭제,종료 이벤트
field.addEventListener('click', (event)=>{ 
    const id = event.target.dataset.id;
    if(id){
        const tobeDeleted = document.querySelector(`.zombie[data-id="${id}"`);
        tobeDeleted.remove();
        const audio = document.createElement('audio');
        audio.setAttribute('src', "sound/carrot_pull.mp3");
        audio.play();
    }
    remainder.innerHTML = `remainder : ${count}`;
    count--;
});


// 게임스토퍼
function stopGame(){
    result.style.visibility='visible';
    remainder.style.visibility='hidden';
    mmss.style.color='#000';
    gameBtn.innerHTML = `<img src="img/start.png" class="start" />`;
    gameBtn.style.background = '#000';
    const audio = document.createElement('audio');
        audio.setAttribute('src', "sound/alert.wav");
        audio.play();
};


//이미지 랜덤 포지션으로 10개 생성.
function createImg(){
    if(playing){
        return;
    }
    const arrays = [1,2,3,4,5,6,7,8,9,10];
    arrays.forEach(array=>{
        const zombie = document.createElement('img');
        zombie.setAttribute('data-id', array);
        zombie.setAttribute('src', "img/zombie.png");
        zombie.setAttribute('class', 'zombie');
        zombie.style.left = `${Math.floor(Math.random() * 94)}%`;
        zombie.style.bottom = `${Math.floor(Math.random() * 20)}%`;

        const bomb = document.createElement('img');
        bomb.setAttribute('data-id', array);
        bomb.setAttribute('src', "img/bomb.png");
        bomb.setAttribute('class', 'bomb');
        bomb.style.left = `${Math.floor(Math.random() * 94)}%`;
        bomb.style.bottom = `${Math.floor(Math.random() * 20)}%`;

        field.appendChild(zombie);
        field.appendChild(bomb);
    });
    playing = true;
};

//스타일 교체.
function replaceStyle(){
    remainder.style.visibility='visible';
    mmss.style.color='#FF1616';
    gameBtn.innerHTML = `<img src="img/stop.png" class="stop" />`;
    gameBtn.style.background = '#FF1616';
    const audio = document.createElement('audio');
    audio.setAttribute('src', "sound/bg.mp3");
    audio.play();
    
};