 
let button = document.getElementById("button"); 
let tryAgainButton = document.getElementById("try-again"); 
let attempt = document.getElementById('attempt');
const rounds = 3;
let res = document.getElementById('res');
const icnH = 106, icnC = 9, icnArr = [0, 0, 0], icnT = 60;
let current = 0;
let slots = document.querySelector(".lines");

window.onload = () => {
    let usname = prompt('enter your name:');

    if (usname) {
        document.getElementById('username').innerHTML = usname;
    } else {
        document.getElementById('username').innerHTML = 'Player';
    }
};

let spin = (line, offset = 0) => {
    let random = (offset + 2) * icnC + Math.floor(Math.random() * icnC);
    let bgPosY = parseInt(window.getComputedStyle(line).backgroundPositionY);

    let targetBgPos = bgPosY + random * icnH;
    let normPos = targetBgPos%(icnH*icnC);

    return new Promise((resolve) => {
        line.style.transition = `${8 + random * icnT}ms`;
        line.style.backgroundPositionY = `${targetBgPos}px`;   
        setTimeout(() => {
            line.style.transition = "none";
            line.style.backgroundPositionY = `${normPos}px`; 
            resolve(random%icnC);     
        }, 8 + random * icnT); 
    });
};

button.addEventListener('click', () => {
    let lines = document.querySelectorAll(".line");
    Promise
    .all([...lines].map((line, index) => spin(line, index)))
    .then((random) => {
        random.forEach((random, index) => {
            icnArr[index] = (icnArr[index] + random)%icnC;
        });
        if(icnArr[0] == icnArr[1] && icnArr[1] == icnArr[2]){
            res.innerHTML = 'You win!';
            res.style.display = "block";
            slots.classList.add("win");
            setTimeout(() => {
                slots.classList.remove("win")
            }, 3000);
        }
        if(current == 3){
            res.innerHTML = 'You lose!';
            res.style.display = "block";
            slots.classList.add("lose");
            setTimeout(() => {
                slots.classList.remove("lose")
            }, 3000);
        }
    });
    current++;
    attempt.style.display = 'block';
    attempt.innerHTML = `attempt ${current} of ${rounds}`;
    if (current == rounds) {
        res.style.display = 'block';
        button.style.display = 'none';
        tryAgainButton.style.display = 'block';
    }
});

tryAgainButton.addEventListener('click', () => {
    button.style.display = 'block';
    tryAgainButton.style.display = 'none';
    current = 0;
    attempt.style.display = 'none';
    res.innerHTML = '';
    icnArr.fill(0);
    let lines = document.querySelectorAll(".line");
    lines.forEach((element) => {
        element.style.backgroundPositionY = 0;
        element.style.transition = '1s ease';
        
    })
});




