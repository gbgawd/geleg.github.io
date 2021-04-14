var num_1 = window.prompt("Bodlogo_1 what is your number_1");
var num_2 = window.prompt("Bodlogo_1 what is your number_2");
var sum = 0;

while (num_1) {
    sum += num_1 % 10;
    num_1 = Math.floor(num_1 / 10);
}
while (num_2) {
    sum += num_2 % 10;
    num_2 = Math.floor(num_2 / 10);
}

window.alert("your number is " + sum);

var i = 0;
var isUpperCase = 0;
var character = "";
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var password = window.prompt("Bodlogo_2 what is your password");

if (password.length > 10) {
    while (i <= password.length) {
        character = password.charAt(i);

        if (character == character.toUpperCase()) {
            isUpperCase = 1;
            break;
        }
        i++;
    }
    if (isUpperCase) {
        if (format.test(password)) window.alert("Your password is strong");
        else window.alert("Your password is week");
    } else {
        window.alert("Your password is week");
    }
} else {
    window.alert("Your password is week");
}

var num_1 = window.prompt("Bodlogo_3 what is your number");
var primeArray = [];
var sum = 0;
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) if (n % i == 0) return false;
    return true;
}
// Function to print primes
function findPrime(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeArray.push(i);
            sum = sum + i;
        }
    }
}

findPrime(num_1);
window.alert(
    primeArray +
        "\n" +
        "Sum of the all prime numbers to " +
        num_1 +
        " is a " +
        sum
);

var sentence = window.prompt("Bodlogo_4 Enter a sentence");

var count_1 = 0;
var count_2 = 0;

function countWords(str) {
    str = str.split(" ");
    var n = sentence.split(" ").length;

    for (i = 0; i < n; i++) {
        if (
            str[i].indexOf("а") + 1 ||
            str[i].indexOf("о") + 1 ||
            str[i].indexOf("у") + 1
        )
            count_1++;
        else count_2++;
    }
}

countWords(sentence, count_1, count_2);
window.alert("Эг үг " + count_1 + "\nЭм үг " + count_2);

var floors = window.prompt("Enter number of floors");
var porch = window.prompt("Enter number of porches");
var doorCount = window.prompt("Enter number of doors in one floor");
var toot = window.prompt("Enter your tooot");

for (i = 0; i <= porch; i++) {
    if (doorCount * floors * i < toot && toot <= doorCount * floors * (i + 1)) {
        porch = i + 1;
        break;
    }
}

for (i = 0; i <= floors; i++) {
    if (porch * i * doorCount < toot && toot <= porch * (i + 1) * doorCount) {
        floors = i + 1;
        break;
    }
}

for (i = 1; i <= doorCount; i++) {
    if (floors * porch * doorCount - i == toot) {
        doorCount = doorCount - i;
        break;
    }
}

window.alert(
    "ORTS: " + porch + "\nDAVHAR: " + floors + "\nHAALGA: " + doorCount
);
