const URL = 'http://localhost:3000';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            nick: '',
            message: '',
            serverMessages: []
        };
        setInterval(this.getMessages.bind(this), 1000);
        }
    }
        postMessage()
    {
        // метод отправки сообщения
        let xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.send(JSON.stringify({
            nick: this.state.nick,
            message: this.state.message
        }));

        xhr.onload = () => {
            if (xhr.status !== 200) {
                console.error('Ошибка!');
            } else {
                this.drawMessages(xhr.response);
            }
        };

        xhr.onerror = function() {
            console.log('Запрос не удался');
        };
    };

    getMessages()
    {
        // метод получения сообщений
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status != 200) {
                console.error('Ошибка!');
            } else {
                this.drawMessages(xhr.response);
            }
        };
    };

    drawMessages(response)
    {
        // метод отрисовки сообщений
        const newServerMessages = JSON.parse(response);
        const existingIds = this.serverMessages.map(message => message.id);
        for (let serverMessage of newServerMessages) {
            if (!existingIds.includes(serverMessage.id)) {
                this.messages.innerHTML += `<ul><b>${serverMessage.nick}:</b> ${serverMessage.message}</ul>`;
            }
        }
        this.serverMessages = newServerMessages;
    };
