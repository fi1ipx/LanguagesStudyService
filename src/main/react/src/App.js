import React from 'react';
import Header from './components/header/header';
import Words from './components/words/words';
import Examples from './components/examples/examples';
import Practice from './components/examples/practice';
import { BrowserRouter, Route } from "react-router-dom";

function App() {

        return (
            <BrowserRouter>
                <Header/>
                <Route exact path={"/"} component={Words}/>
                <Route exact path={"/example"} component={Examples}/>
                <Route exact path={"/practice/:id"} component={Practice}/>
            </BrowserRouter>
        );
}

export default App;
