import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import styles from '../styles/index';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import MainContainer from './MainContainer';
import Loading from '../components/Loading';

const ConfirmBattle = (props) => {
    return (
        props.isLoading === true
            ? <Loading speed={800} text={'Wait a moment'} />
            : <MainContainer>
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
            </MainContainer>
    )
};

ConfirmBattle.prototypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;