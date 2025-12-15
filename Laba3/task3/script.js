const ulElement = document.getElementById("list");
const inputElement = document.getElementById("text");
const butElement = document.getElementById("but");

but.onclick = function () {
    const newLi = document.createElement("li");
    newLi.textContent = inputElement.value;
    ulElement.appendChild(newLi);
    inputElement.value=' ';
}