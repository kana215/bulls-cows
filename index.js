
function generateRandomNumber () {
    let firstNumber = Math.floor(Math.random()*8) + 1;
    let secondNumber = Math.floor(Math.random()*9);
    let thirdNumber = Math.floor(Math.random()*9);
    
    while(firstNumber === secondNumber){
        secondNumber = Math.floor(Math.random() * 9);
    }
    
    while(firstNumber === thirdNumber || secondNumber === thirdNumber){
        thirdNumber = Math.floor(Math.random() * 9);
    }

    return String(firstNumber) + String(secondNumber) + String(thirdNumber);
    
}

generateRandomNumber();

let popytki = 10;
let byki = 0;
let korovy = 0;

prompt("Введите ваше число дорогой пользователь...");


