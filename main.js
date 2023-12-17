'use strict';

let answer = document.querySelector('.top input');
let write = document.querySelector('.write');
let mid = document.querySelector('.mid');
let bottom = document.querySelector('.bottom');
let equals = document.querySelector('.equals');
let multiply = document.querySelector('.multiply');
let divide = document.querySelector('.divide');
let subtract = document.querySelector('.subtract');
let add = document.querySelector('.add');


function adder(){
    for(let i=0;i<=1000;i++){
        let addnumbers=`<button style='width:${Math.floor(Math.random()*23)+18}px;height:${Math.floor(Math.random()*23)+15}px;position:relative;' class='numnum' data-status="active" data-motion="1">${i}</button>`;
        
        mid.insertAdjacentHTML('beforeend',addnumbers);
    }
};

mid.addEventListener('click',function(e){
    if(e.target.getAttribute('data-status') == "active"){
        write.innerText = write.innerText + e.target.innerText;
        answer.value = '';
        e.target.dataset.status = "inactive";
        e.target.classList.add("blurr");
    };
});



bottom.addEventListener('click',function(e){
    if(e.target.classList.contains('equals')){
        if(write.innerText != ''){
            answer.value='Thinking......Chalchulating...';
            write.innerText = '';

            let numnums = document.querySelectorAll('.numnum');

            for(let i=0;i<=1000;i++){
                numnums[i].dataset.status = "active";
                numnums[i].classList.remove("blurr");
            }
        }
    }else{
        if(!e.target.classList.contains('bottom')){
            answer.value = '';
            write.innerText = write.innerText + e.target.innerText;
        }
    }
});

adder();

function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function moveAround(){
    let numnums = document.querySelectorAll('.numnum');

    while(true){
        for(let i=0;i<=1000;i++){
            if(numnums[i].getAttribute('data-motion') == "1"){
                numnums[i].style.left=`${Math.floor(Math.random()*21)}px`;
                numnums[i].style.top=`${Math.floor(Math.random()*21)}px`;
                numnums[i].dataset.motion = "0";
            }else{
                numnums[i].style.right=`${Math.floor(Math.random()*21)}px`;
                numnums[i].style.bottom=`${Math.floor(Math.random()*21)}px`;
                numnums[i].dataset.motion = "1";
            }

            numnums[i].style.transform=`rotate(${Math.floor(Math.random()*361)}deg)`;
            numnums[i].style.background=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
            mid.style.background=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        };

        await sleep(400);
    };
};

moveAround();