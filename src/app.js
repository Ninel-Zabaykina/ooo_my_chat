import React from 'react';
import Form from './components/Form';
import MessagesList from './components/MessagesList';
import BabyMop from './components/BabyMop';

const URL = 'http://localhost:3000';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            serverMessages: []
        };
        setInterval(this.getMessages.bind(this), 1000);
    }

    postMessage(newMessage) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.send(JSON.stringify({
            nick: newMessage.nick,
            message: newMessage.message
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
    }

    getMessages() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status !== 200) {
                console.error('Ошибка!');
            } else {
                this.drawMessages(xhr.response);
            }
        };
    }

    drawMessages(response) {
        const newServerMessages = JSON.parse(response);
        this.setState({serverMessages: newServerMessages});
    }

    render() {
        const {serverMessages } = this.state;
        return <BabyMop>
            <h1>Чат</h1>
            <img src="images/Baby-Mop1.jpg" style={{width: "200px"}}/>
            <BabyMop/>
            <Form postMessage={(newMessage) => this.postMessage(newMessage)}/>
            <MessagesList messages={serverMessages}/>
        </>
    }

}

export default App;