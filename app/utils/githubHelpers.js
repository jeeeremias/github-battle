import axios from 'axios'

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
    // fetch repos
}

function getTotalStars (stars) {
    // calcular all the stars that the user has
}

function getPlayersData (player) {
    // get repos
    // get totalStars
    // return object with that data
}

function calculateScores (players) {
    // return an array, after doing some fancy algorithms to determinate a winner
}

const helpers = {
    getPlayersInfo: (players) => (
        axios.all(players.map((username) => (
            getUserInfo(username)
        ))).then((info) => (
            info.map((user) => (
                user.data
            ))
        )).catch((err) => (
            console.warn('Error in getPlayersInfo', err)
        ))
    ),

    battle: (players) => {

    }
};

export default helpers;