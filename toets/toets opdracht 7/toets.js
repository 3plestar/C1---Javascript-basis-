let itemNumber = 1;
document.querySelector(".button").onclick = function(){
    while(itemNumber<50){
        document.querySelector(".container").innerHTML += `<div class='container__item'>${itemNumber}</div>`;
        itemNumber++
    }
}