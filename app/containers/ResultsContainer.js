import React from 'react';

import Results from '../components/Results';

class ResultsContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            scores: []
        };
    }

    componentDidMount () {
       console.log(this.props.location.state.playersInfo);
    }

    render () {
        return (
                <Results
                    isLoading={this.props.isLoading}
                    scores={this.state.scores}
                    playersInfo={this.props.location.state.playersInfo} />
        )
    }
}

export default ResultsContainer;