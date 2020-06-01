import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Signin} />
                    <Route path={"/home"} component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;