import React, {PropTypes} from 'react';

import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers'

class ConfirmBattleContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            playersInfo: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    componentWillMount () {
        console.log('componentWillMount');
    }

    componentDidMount () {
        const query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then((players) => (
            this.setState({
                isLoading: false,
                playersInfo: [players[0], players[1]]
            })
        ))

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