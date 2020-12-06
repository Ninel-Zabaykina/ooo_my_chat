import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegistrationView from './views/RegistrationView';
import ChatView from './views/ChatView';
import BabyMop from './components/BabyMop';

class App extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/login" component={LoginView} />
                    <Route path="/registration" component={RegistrationView} />
                    <Route path="/chat" component={ChatView} />
                    <Route path="/baby" component={BabyMop} />

                    <Redirect from="/" to="/login" />
                </Switch>
            </>
        );
    }
}

export default App;
