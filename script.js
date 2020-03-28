// создаем переменные элментов
var controlsField = document.querySelector('.controls-field');

var controlsBtn = document.querySelector('.controls-btn');

var result = document.querySelector('.result');

// нажимаем на кнопку Создать
controlsBtn.addEventListener('click', function () {
    var columnCount = Number(controlsField.value);

    if (!columnCount) {
        alert('Введите количество колонок')
    } else {
        var columns = '';

        for (var i = 1; i <= columnCount; i++) {
            columns += `<div class="column" style="width: ${100 / columnCount}%">${i}</div>`
        }

        result.innerHTML = columns;
    }
});
