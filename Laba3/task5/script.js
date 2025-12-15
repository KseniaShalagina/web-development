const imglList = ['image/gors.webp', 'image/les.webp', 'image/sea.webp']
const imgElement = document.getElementById("image");
const butElement = document.getElementById("but");
let currentImageIndex = 0;
butElement.onclick = function () {
    imgElement.src = imglList[currentImageIndex];
    currentImageIndex++;
    if (currentImageIndex >= imglList.length) {
        currentImageIndex = 0;
    }

}