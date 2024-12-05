

let input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Ask a question';
document.body.appendChild(input);

let button = document.createElement('button');
button.textContent = 'Submit';
document.body.appendChild(button);

let div = document.createElement('div');

let ball = document.createElement('img');
ball.setAttribute('src', 'img6/ball.png');
ball.classList.add('ball');

let res = document.createElement('p');
res.classList.add('res');
res.textContent = ' ';
div.appendChild(ball);
div.appendChild(res);

document.body.appendChild(div);

let arr = ['Yes', 'No', 'Maybe later', 'Not now', 'Never', 'Of course'];

button.addEventListener('click', () =>{
        let randomIndex = Math.floor(Math.random() * arr.length); 
        let randRes = arr[randomIndex]

        if (!input.value){
            res.innerHTML = 'error';
        }
        else{
        res.innerHTML = randRes;
        }
        
});
