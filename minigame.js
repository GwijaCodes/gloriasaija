const player = document.querySelector('.player');
const block = document.querySelector('.block');
const board = document.querySelector('.board');
const progettiText = document.querySelector('#playGame');
const score = document.querySelector('#score');
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

const checkDeath = setInterval(function(){
    const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(blockLeft < 30 && blockLeft > 0 && playerTop >= 70){
        block.classList.remove('block-move')
        alert('Whoops!')
    }
}, 10);


function gameOn(){
    if(block.classList != 'block-move'){
        block.classList.add('block-move');
        block.style.animationPlayState = 'running';
        progettiText.innerHTML = '&#9654;';
        progettiText.style.transform = 'translateY(5px)'
    }
}

function gameOff(){
         block.style.animationPlayState = 'paused';
         progettiText.innerHTML = "&#10074;&#10074;";
         progettiText.style.color = '#D9D9D9';
        progettiText.style.transform = 'translateY(-1px)'

}

