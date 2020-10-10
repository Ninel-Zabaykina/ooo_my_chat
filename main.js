document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const input = document.getElementById('input');
    const messages = document.getElementById('messages');
    button.addEventListener('click', function() {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000');
        xhr.send(JSON.stringify({
            nick: nick.value,
            message: message.value
        }));

        xhr.onload = function() {
            if (xhr.status != 200) {
                console.error('Ошибка!');
            } else {
                console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
                console.log(JSON.parse(xhr.response));
            }
        };

        xhr.onprogress = function(event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total} байт`);
            } else {
                console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
            }

        };

        xhr.onerror = function() {
            console.log('Запрос не удался');
        };
    });
    setInterval(function() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.error('Ошибка!');
            } else {
                const serverMessages = JSON.parse(xhr.response);
                messages.innerHTML = '';
                for (let serverMessage of serverMessages) {
                    messages.innerHTML += `<ul><b>${serverMessage.nick}:</b> ${serverMessage.message}</ul>`;
                }
            }
        };
    }, 1000);
});