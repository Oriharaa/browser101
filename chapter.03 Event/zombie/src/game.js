'use strict';

import Field from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
    win: 'win',
    lose: 'lose',
    cancel: 'cancel',
});




// Builder Pattern
export default class GameBuilder {
    gameDuration(duration){
        this.gameDuration = duration;
        return this;
    }

    zombieCount(num){
        this.zombieCount = num;
        return this;
    }

    bombCount(num){
        this.bombCount = num;
        return this;
    }

    build(){
        return new Game(
            this.gameDuration, 
            this.zombieCount,
            this.bombCount
        );
    }
}


class Game {
    constructor(gameDuration, zombieCount, bombCount) {
        this.gameDuration = gameDuration;
        this.zombieCount = zombieCount;
        this.bombCount = bombCount;

        this.gameTimer = document.querySelector('.game__timer');
        this.gameScore = document.querySelector('.game__score');
        this.gameBtn = document.querySelector('.game__button');
    
        this.gameBtn.addEventListener('click', ()=>{
            if(this.started){
                this.stop();
            }else {
                this.start();
            }
        });

        this.started = false;
        this.score = 0;
        this.timer = undefined;

        this.gameField = new Field(zombieCount, bombCount);
        this.gameField.setClickListener(this.onItemClick);
    }

    onItemClick = (item) => {
        if(!this.started){
            return;
        }
        if(item === 'zombie'){
            this.score++;
            this.updateScoreBoard();
            if(this.score === this.zombieCount){
                this.finish(true);
            }
        }else if(item === 'bomb'){
            this.finish(false);
        }
    };

    setGameStopListener(onGameStop){
        this.onGameStop = onGameStop;
    };


    start(){
        this.started = true;
        this.initGame();
        this.showStopButton();
        this.showTimerAndScore();
        this.startGameTimer();
        sound.playBgm();
    
    };

    stop(){
        this.started = false; 
        this.stopGameTimer();
        this.hideGameButton();
        sound.playAlert();
        sound.stopBgm();
        this.onGameStop && this.onGameStop(Reason.cancel);
    };

    finish(win){
        this.started = false;
        if(win){
            sound.playWin();
        }else {
            sound.playBug();
            this.hideGameButton();
        }
        this.stopGameTimer();
        sound.stopBgm();
        this.onGameStop && this.onGameStop(win ? Reason.win : Reason.lose);
    };


    initGame(){
        this.score = 0;
        this.gameScore.innerTEXT = `remainder : ${this.zombieCount}`;
        this.gameField.init();
    };
    
    showStopButton(){
        this.gameBtn.innerHTML = `<img src="img/stop.png" class="stop" />`;
        this.gameBtn.style.background = '#FF1616';
        this.gameBtn.style.visibility = 'visible';
    };
    
    showTimerAndScore(){
        this.gameTimer.style.color = '#FF1616';
        this.gameTimer.style.visibility = 'visible';
        this.gameScore.style.visibility = 'visible';
    };
    
    startGameTimer(){
        let remainingTimeSec = this.gameDuration;
        this.updateTimerText(remainingTimeSec);
        this.timer = setInterval(()=>{
            if(remainingTimeSec <= 0){
                clearInterval(this.timer);
                this.finish(this.score === this.zombieCount);
                return;
            }
            this.updateTimerText(--remainingTimeSec);
        }, 1000);
    };
    
    stopGameTimer(){
        clearInterval(this.timer);
    };
    
    hideGameButton() {
        this.gameBtn.style.visibility = 'hidden';
      }
    
    
    updateTimerText(time){
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.gameTimer.innerHTML = `0${minutes}:${seconds}`;
    };
    
    
    
    updateScoreBoard() {
        this.gameScore.innerText = `Remainder ㅡ> ${this.zombieCount - this.score}`;
      }
    


}