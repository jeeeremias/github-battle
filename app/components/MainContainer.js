import React from 'react';

import styles from '../styles/index';

const MainContainer = ({children}) => (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
        {children}
    </div>
)

export default MainContainer;