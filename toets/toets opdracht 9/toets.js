let itemNumber = 1;
document.querySelector(".button").onclick = function(){
    let randomNumber = [];
    for(i=0;i<49;i++){
       randomNumber[i] = Math.floor(Math.random()*900)+100;
       document.querySelector(".container").innerHTML += `<div class='container__item'>${randomNumber[i]}</div>`;
    }
}