class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            nick: '',
            message: ''
        };
    }

    handleSend() {
        // do nothing if message is empty
        if (!this.state.message){
            return
        }
        if (!this.state.nick){
            return
        }
        this.props.postMessage({
            nick: this.state.nick,
            message: this.state.message
        });
        document.getElementsByTagName('textarea')[0].value = '';
        this.state.message = '';
    }

    render() {
        const { nick, message } = this.state;

        return <form>
            <input
                value={nick}
                type="text"
                onChange={e => this.setState({nick: e.target.value})}
            />
            <br/>
            <textarea
                value={message}
                onChange={e => this.setState({message: e.target.value})}
            >
                </textarea>
            <br/>
            <input
                type="button"
                value="отправить незамедлительно"
                onClick={() => this.handleSend()}
            />
        </form>;
    }
}
