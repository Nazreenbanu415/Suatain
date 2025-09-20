const goSorry = document.getElementById('goSorry');
const goBack = document.getElementById('goBack');
const home = document.getElementById('home');
const sorry = document.getElementById('sorryPage');

function show(elToShow, elToHide){
  elToHide.classList.add('fade-exit');
  setTimeout(()=>{
    elToHide.classList.add('hidden');
    elToHide.classList.remove('fade-exit');
    elToShow.classList.remove('hidden');
    elToShow.classList.add('fade-enter');
    setTimeout(()=>elToShow.classList.remove('fade-enter'),450);
  },260);
}

goSorry.addEventListener('click', ()=> show(sorry, home));
goBack.addEventListener('click', ()=> show(home, sorry));

function makeHearts(container, count){
  container.innerHTML = '';
  for(let i=0;i<count;i++){
    const h = document.createElement('div');
    h.className = 'heart';
    const size = Math.random()*24 + 12;
    const left = Math.random()*100;
    const delay = -(Math.random()*6).toFixed(2) + 's';
    const dur = (6 + Math.random()*6).toFixed(2) + 's';
    h.style.width = size + 'px';
    h.style.height = size + 'px';
    h.style.left = left + '%';
    h.style.setProperty('--dur', dur);
    h.style.animationDelay = delay;

    const colors = ['#ff6fa3','#ff8fb3','#ffc0d9','#ff4d94','#ffd6e5'];
    const color = colors[Math.floor(Math.random()*colors.length)];

    h.innerHTML = `<svg viewBox="0 0 32 29"><path d="M23.6 0c-2.4 0-4.3 1.7-4.6 3.9C17.1 1.7 15.2 0 12.8 0 9.2 0 6.6 2.6 6.6 6 6.6 12.3 16 17.6 16 17.6s9.4-5.3 9.4-11.6C25.4 2.6 22.8 0 19.2 0z" fill="${color}"/></svg>`;
    container.appendChild(h);
  }
}

const heartsHome = document.getElementById('heartsHome');
const heartsSorry = document.getElementById('heartsSorry');

makeHearts(heartsHome, 40);
makeHearts(heartsSorry, 50);

setInterval(()=>{
  makeHearts(heartsHome, 50);
  makeHearts(heartsSorry, 50);
},8000);
