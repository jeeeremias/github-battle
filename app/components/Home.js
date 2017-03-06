const USER_DATA = {
    name: 'Jeremias Pereira',
    username: 'jeeeremias',
    image: 'https://avatars0.githubusercontent.com/u/9812493?v=3&s=460'
}

import React from 'react'
import Avatar from './Github'

const Home = () => (
    <div>
        Hello from Home!
        <Avatar {...USER_DATA}/>
    </div>
);

export default Home;