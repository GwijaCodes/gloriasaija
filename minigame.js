const player = document.querySelector('.player');
const block = document.querySelector('.block');
const skills = document.querySelector('#skills')
const board = document.querySelector('.board');
const rat = document.querySelector('#rat');

board.addEventListener('click', jump);

function jump(){
    if(player.classList != 'jump'){
    player.classList.add('jump');
        rat.src = './imgs/0000.png';
    setTimeout(function(){
        player.classList.remove('jump');
        rat.src = './imgs/ratrun.gif';
    }, 600)
    }
}

function ouch(){
      rat.style.filter = 'sepia(66%) brightness(77%) hue-rotate(304deg) saturate(319%) contrast(182%)'
     
    setTimeout(function(){
        rat.style.filter = 'none'
    }, 600)
}

const checkDeath = setInterval(function(){
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 30 && blockLeft > 0 && playerTop >= 70){
        block.classList.remove('block-move')
        jump();
        ouch();
    }
}, 10);


let blockSkins = [
    './imgs/html.svg',
    './imgs/css.svg',
    './imgs/js.svg',
    './imgs/blender.svg',
    './imgs/adobe.svg',
]

let skinIndex = 0;

block.addEventListener('animationiteration', changeSkin, false)

function changeSkin(){
    skills.src = blockSkins[skinIndex];
    skinIndex >= 4 ? skinIndex = 0 : skinIndex++
}

function gameOn(){
    if(block.classList != 'block-move'){
        block.classList.add('block-move');
        block.style.animationPlayState = 'running';
    }
}

window.onload = function(){
}

function gameOff(){
         block.style.animationPlayState = 'paused';
}

