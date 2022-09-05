let cookiesEaten = document.getElementById('cookies');
let jouerBtn = document.getElementById('jouer');
let counter = document.getElementById('counter');
let cookieBtn = document.getElementById('cookie-btn');
let playBtn = document.getElementById('play');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

playBtn.disabled = false; // play button not disabled at the start
stopBtn.disabled = true; // stop btn disabled at the begining
let temp = Number(counter.innerHTML);
let canPlay = false;

//start play event
playBtn.addEventListener('click', () => {
    canPlay = true;
    stopBtn.disabled = false;
    playBtn.disabled = true;
})

//play and add cookie 
cookieBtn.addEventListener('click', () => {
    if (canPlay) {
        temp += 1;
        counter.innerHTML = temp;
        addEatenCookie();
    }
})

//stop playing event
stopBtn.addEventListener('click', ()=>{
    canPlay = false;
    stopBtn.disabled = true;
    playBtn.disabled = false;
})

//reset counter event
resetBtn.addEventListener('click', ()=>{
    counter.innerHTML = 0;
    temp = 0;
    cookiesEaten.innerHTML = '';
})

//add a cookie eaten each 100 iteration
function addEatenCookie() {
    if (temp % 100 === 0) {
        var img = document.createElement('img');
        img.src = 'images/cookieeaten.png';
        cookiesEaten.appendChild(img);

    }
}


