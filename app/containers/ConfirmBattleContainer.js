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

    componentDidMount () {
        const query = this.props.location.query;
        // fetch info from github

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