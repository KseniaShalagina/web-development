const divElement = document.getElementById("divBlok");
const butElement = document.getElementById("but");

butElement.onclick = function () {
    divElement.classList.toggle('none');
}
