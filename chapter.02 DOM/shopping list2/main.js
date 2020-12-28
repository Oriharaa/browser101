'use strict';

const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const items = document.querySelector('.items');

/**
 * 
 */
function onAdd(){
    // 1. 사용자가 입력한 텍스트를 받아옴.
    const text = input.value;
    input.focus();
    if(text === ''){
        return;
    }

    // 2. 새로운 아이템을 만듬 (텍스트 + 삭제 버튼)
    const fuck = createItem(text);

    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(fuck);
    
    // 4.스크롤링
    fuck.scrollIntoView({block:'center', behavior:'smooth'});

    // 4. 인풋을 초기화 한다.
    input.value ='';
    input.focus();
};

/**
 * 
 */
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const trashBtn = document.createElement('button');
    trashBtn.setAttribute('class', 'item__delete');
    trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow);
    });

    const divider = document.createElement('div');
    divider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(trashBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    return itemRow;
};



addBtn.addEventListener('click', ()=>{
    onAdd();
})

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        onAdd();
    }
});