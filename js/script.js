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
    document.getElementById('numbers').style.display = 'none';
    let user_numbers = [];
    for (let i = 0; i < 5; i++) {
        user_numbers.push(prompt('inserisci il tuo numero'));
    }
}, 5000);
