import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import PromptComponent from '../containers/PromptContainer';
import ConfirmBattleContainer from '../containers/ConfirmBattleContainer';
import ResultsContainer from '../containers/ResultsContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="playerOne" header="Player One" component={PromptComponent}/>
            <Route path="playerTwo/:playerOne" header="Player Two" component={PromptComponent}/>
            <Route path="battle" component={ConfirmBattleContainer}/>
            <Route path="results" component={ResultsContainer}/>
        </Route>
    </Router>
);

export default routes;