const USER_DATA = {
    name: 'Jeremias Pereira',
    username: 'jeeeremias',
    image: 'https://avatars0.githubusercontent.com/u/9812493?v=3&s=460'
}

import React from 'react'
import {Link} from 'react-router'

import Avatar from './Github'
import styles from '../styles/index'

const Home = () => (
    <div>
        <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
            <h1>GitHub Battle</h1>
            <p className='lead'>
                Some fancy motto
            </p>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-success'>
                    Get Started
                </button>
            </Link>
        </div>
    </div>
);

export default Home;