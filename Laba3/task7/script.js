const formElement = document.getElementById("form");
const textElement = document.getElementById("text");
const emailElement = document.getElementById("email");
const errorElement = document.getElementById("error");

formElement.addEventListener("submit", function (event) {
    event.preventDefault();
    if (textElement.value === "" || emailElement.value === "") {
        errorElement.textContent = "Поле текста и почты пустые!!";
        errorElement.style.color = 'red';
    } else {
        errorElement.textContent = "Форма успешно отправлена (в консоль)!";
        errorElement.style.color = 'green';
        const formData = new FormData(formElement);
        formData.append('text', textElement.value);
        formData.append('email', emailElement.value);
        console.log("Данные формы:");
        for (let [key, value] of formData) {
            console.log(`${key}: ${value}`);
        }
    }
})






// JavaScript:
// ●
// Получите ссылки на <form>, поля ввода и <div> для сообщений.
// ●
// Добавьте обработчик события submit на форму.
// ●
// Внутри обработчика:
// ●
// Остановите стандартную отправку формы.
// ●
// Проверьте, не пустые ли текстовое поле и поле email.
// ●
// Если поле пустое, выведите сообщение об ошибке в divElement и покрасьте его в
// красный цвет.
// ●
// Если все поля заполнены, выведите в divElement "Форма успешно отправлена (в
// консоль)!" зеленым цветом и данные формы в консоль (используйте FormData для
// удобства).