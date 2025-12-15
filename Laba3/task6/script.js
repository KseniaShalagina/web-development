const listElement = document.getElementById("list");
const butElement = document.getElementById("but");

butElement.onclick = function () {
    let lastChild = listElement.lastElementChild;

    if (lastChild) {
        listElement.removeChild(lastChild);
    }
}