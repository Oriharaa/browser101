"use strice";

const screenSize = document.querySelector('.window__screen');
const outerSize = document.querySelector('.window__outer');
const innerSize = document.querySelector('.window__inner');
const documentSize = document.querySelector('.window__document');

window.addEventListener('resize', ()=>{
  sizingWindow();
});

function sizingWindow(){
  screenSize.innerHTML =`window.screen: ${window.screen.width}, ${window.screen.height}`;
  outerSize.innerHTML =`window.outer: ${window.outerWidth}, ${window.outerHeight}`;
  innerSize.innerHTML =`window.inner: ${window.innerWidth}, ${window.innerHeight}`;
  documentSize.innerHTML =`documentclientWidth: ${document.documentElement.clientWidth},
                                                ${document.documentElement.clientHeight}`;
};

sizingWindow();