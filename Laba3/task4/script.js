let count = 0;
const counterElement = document.getElementById("counter");
const butElement = document.getElementById("but");
butElement.onclick = function () {
    count++;
    counterElement.textContent = `Счетчик: ${count}`;
}

