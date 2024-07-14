function genreateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function createArrayNumbers() {
    let numbers = [];
    while (numbers.length < 5) {
        let num = genreateRandomNumber();
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}

let random_numbers = createArrayNumbers();

document.getElementById('numbers').innerHTML = random_numbers;

setTimeout(function () {
    document.getElementById('numbers').innerHTML = '';

}, 5000);

setTimeout(function () {
    let user_numbers = [];
    for (let i = 0; i < 5; i++) {
        user_numbers.push(parseInt(prompt('inserisci il tuo numero')));
    }
    let guessed = [];
    for (let i = 0; i < 5; i++) {
        if (random_numbers.includes(user_numbers[i])) {
            guessed.push(user_numbers[i]);
        }
    }
    document.getElementById('numbers').innerHTML = `Hai indovinato ${guessed.length} numeri. Sono i seguenti ${guessed}`;

}, 6000);
