import React from 'react';

const ConfirmBattle = ({isLoading}) => {
    return (
        isLoading === true
            ? <p>LOADING!</p>
            : <p>CONFIRM BATTLE!</p>
    )
};

export default ConfirmBattle;