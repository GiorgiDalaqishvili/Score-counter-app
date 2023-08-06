let numbersEl = document.getElementById("numbers")
let guestEl = document.getElementById("guest-numbers")
let count = 0
let counts = 0

function plusOne() {
    count = count + 1
    numbersEl.textContent = count
}

function plusTwo() {
    count = count + 2
    numbersEl.textContent = count
}

function plusThree() {
    count = count + 3
    numbersEl.textContent = count
}

function plusOnee() {
    counts = counts + 1
   guestEl.textContent = counts
}


function plusTwoo() {
    counts = counts + 2
   guestEl.textContent = counts
}

function plusThreee() {
    counts = counts + 3
   guestEl.textContent = counts
}


