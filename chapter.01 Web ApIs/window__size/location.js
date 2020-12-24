"use strict";

let selected = document.querySelector('.selected');
let myDOMRect = new DOMRect();

selected.addEventListener('click', printMouse);
selected.addEventListener('mousemove', moveMouse, false);

function printMouse(e){
  console.log(`Page: ${e.pageX}, ${e.pageY}`);
  console.log(`Client: ${e.clientX}, ${e.clientY}`)
  console.log(selected.getBoundingClientRect());
};

function moveMouse(e){
  selected.innerHTML = `Page: ${e.pageX}, ${e.pageY} <br />
                         Client: ${e.clientX}, ${e.clientY}`;
}

