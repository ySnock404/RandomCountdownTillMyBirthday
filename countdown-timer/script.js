const diasEl = document.getElementById('dias'); 
const horasEl = document.getElementById('horas'); 
const minsEl = document.getElementById('mins'); 
const segsEl = document.getElementById('segs'); 

const aniversario = '4 Nov 2021';

function countdown() {
    const aniversarioDate = new Date(aniversario);
    const currentDate = new Date();
    
    const todossegundos = (aniversarioDate - currentDate) / 1000;

    const dias = Math.floor(todossegundos / 3600 / 24);
    const horas = Math.floor(todossegundos / 3600) % 24;
    const minutos = Math.floor(todossegundos / 60) % 60;
    const segundos = Math.floor(todossegundos) % 60;

    console.log(dias, horas, minutos, segundos);

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatTime(horas);
    minsEl.innerHTML = formatTime(minutos);
    segsEl.innerHTML = formatTime(segundos);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000)