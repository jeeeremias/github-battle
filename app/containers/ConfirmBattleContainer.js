import React, {PropTypes} from 'react';

import ConfirmBattle from '../components/ConfirmBattle'

class ConfirmBattleContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            playerInfo: []
        };
    }

    render () {
        return (
            <ConfirmBattle/>
        )
    }
};

ConfirmBattleContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ConfirmBattleContainer;