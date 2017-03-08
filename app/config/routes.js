import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import PromptComponent from '../containers/PromptContainer'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="playerOne" header="Player One" component={PromptComponent}/>
            <Route path="playerTwo/:playerOne" header="Player One" component={PromptComponent}/>
        </Route>
    </Router>
);

export default routes;