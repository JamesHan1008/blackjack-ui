import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Navigation";
import Error from "./Error";
import DealerManagement from "./DealerManagement";
import Game from "./Game";

require("dotenv").config();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={ Game } exact />
                        <Route path="/dealers" component={ DealerManagement } />
                        <Route component={ Error } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
