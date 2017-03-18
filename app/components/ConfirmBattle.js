import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import styles from '../styles/index';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';

function puke (object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
    return (
        props.isLoading === true
            ? <p>LOADING!</p>
            : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player 1">
                        <UserDetails info={props.playersInfo[0]}/>
                    </UserDetailsWrapper>
                    <div>
                        <UserDetailsWrapper header="Player 2">
                            <UserDetails info={props.playersInfo[1]}/>
                        </UserDetailsWrapper>
                    </div>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12" style={styles.space}>
                        <button className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                            Initiate Battle
                        </button>
                    </div>
                    <div className="col-sm-12" style={styles.space}>
                        <Link to="/playerOne">
                            <button className="btn btn-lg btn-danger" onClick={props.onInitiateBattle}>
                                Reselect Players
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
};

ConfirmBattle.prototypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;