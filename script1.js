let uScore = document.getElementById("u-score");
let cScore = document.getElementById("c-score");
let uVal = document.getElementById("u-val");
let cVal = document.getElementById("c-val"); 
let button = document.getElementById("button"); 
let tryAgainButton = document.getElementById("try-again"); 
let res = document.getElementById("res");

button.addEventListener("click", () =>{
    uVal.innerHTML = Math.floor(Math.random() * 21);
    cVal.innerHTML = Math.floor(Math.random() * 21);

    let uValNum = parseInt(uVal.textContent);
    let cValNum = parseInt(cVal.textContent);

    if (uValNum>cValNum) {
        uScore.textContent = parseInt(uScore.innerHTML) + 1;
      } else if(uValNum<cValNum){
        cScore.textContent = parseInt(cScore.innerHTML) + 1;
      } 

    if (parseInt(uScore.textContent) == 3){
        setTimeout(() => {
            res.textContent = "You won!";
            res.style.display = "block";
            button.style.display = "none";
            tryAgainButton.style.display = "block";
        }, 300);
        tryAgainButton.style.display = "block";
    } else if (parseInt(cScore.textContent) == 3) {
        setTimeout(() => {
            res.textContent = "You lose!";
            res.style.display = "block";
            button.style.display = "none";
            tryAgainButton.style.display = "block";
        }, 300);
    }

    tryAgainButton.addEventListener("click", () => {
        uScore.textContent = "0";
        cScore.textContent = "0";
        uVal.innerHTML = "0";
        cVal.innerHTML = "0";
        tryAgainButton.style.display = "none";
        res.style.display = "none";
        button.style.display = "block";
    }); 
}
);