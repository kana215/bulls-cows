// Math.floor() = округление
// Math.random() = случайное число


function generateRandomNumber() {
    // Создаем 3 переменные let чтобы они могли меняться.
    let firstNumber = Math.floor(Math.random() * 8) + 1;
    let secondNumber = Math.floor(Math.random() * 9);
    let thirdNumber = Math.floor(Math.random() * 9);

    // Проверка на повторение 1 и 2 чисел
    while (firstNumber === secondNumber) {
        secondNumber = Math.floor(Math.random() * 9);
    }

    // Проверка на повторение 1 и 2 и 3 чисел
    while (firstNumber === thirdNumber || secondNumber === thirdNumber) {
        thirdNumber = Math.floor(Math.random() * 9);
    }

    return String(firstNumber) + String(secondNumber) + String(thirdNumber);

}

const randomNumber = generateRandomNumber()
console.log(randomNumber);

let popytki = 10;


while (popytki !== 0) {
    let byki = 0;
    let korovy = 0;


    const userInput = console.log("Введите ваше число дорогой пользователь...");

    console.log("Пользователь ввел число: ", userInput);


    if (userInput === randomNumber) {
        console.log("Ура, вы победили!");
        break;
    }
    // число загаданное программой = generateRandomNumber() 432
    // число введеное пользователем = userInput; 123
    // сравнить эти числа:

    let genFirst = Math.floor(Number(randomNumber) / 100)
    let userFirst = Math.floor(Number(userInput) / 100)
    let genSecond = Math.floor(Number(randomNumber) % 100 / 10)
    let userSecond = Math.floor(Number(userInput) % 100 / 10)
    let genThird = Math.floor(Number(randomNumber) % 10)
    let userThird = Math.floor(Number(userInput) % 10)

    if (genFirst === userFirst) {
        byki++;
    }
    if (genSecond === userSecond) {
        byki++;
    }
    if (genThird === userThird) {
        byki++;
    }

    if (userFirst === genSecond || userFirst === genThird) {
        korovy++
    }
    if (userSecond === genThird || userSecond === genFirst) {
        korovy++
    }
    if (userThird === genSecond || userThird === genFirst) {
        korovy++
    }

    popytki--;

    console.log("byki-", byki);
    console.log("korovy-", korovy);
    console.log("p-", popytki);

    if (popytki === 0) {
        console.log("Попытки закончились :(");

    }
}