import React, {PropTypes} from 'react';

const puke = (obj) => (
    <pre>{JSON.stringify(obj, 2, " ")}</pre>
)

const Results = (props) => (
    <div>
        Results: {puke(props)}
    </div>
);

Results.protoTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

export default Results;