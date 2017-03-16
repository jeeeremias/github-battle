import React, {PropTypes} from 'react';

import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            playersInfo: []
        };
    }

    componentWillMount () {
        console.log('componentWillMount');
    }

    componentDidMount () {
        const query = this.props.location.query;
        // fetch info from github

    }

    componentWillReceiveProps () {
        console.log('componentWillReceiveProps');
    }

    componentWillUnmount () {
        console.log('componentWillUnmount');
    }

    render () {
        return (
            <ConfirmBattle 
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}/>
        )
    }
};

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer;