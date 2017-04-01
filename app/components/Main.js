import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../main.css';

const Main = ({children, location}) => (
    <div>
        <ReactCSSTransitionGroup
            transitionName='appear'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            {React.cloneElement(children, {key: location.pathname})}
        </ReactCSSTransitionGroup>
    </div>
);

export default Main;