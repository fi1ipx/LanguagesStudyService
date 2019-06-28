import React from 'react';
import Header from './components/header/header';
import Words from './components/words/words';
import Groups from './components/groups/groups';
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
                <Route exact path={"/groups"} component={Groups}/>
                <footer>
                    &nbsp;&copy; 2019 Language study service
                </footer>
            </BrowserRouter>
        );
}

export default App;
