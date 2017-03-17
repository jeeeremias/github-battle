import axios from 'axios'

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const param = `?client_id=${id}&client_secret=${sec}`;

function getUserInfo (username) {
    return axios.get('https://api.github.com/users/' + username + param)
}

const helpers = {
    getPlayersInfo: (players) => (
        axios.all(players.map((username) => (
            getUserInfo(username)
        ))).then((info) => (
            console.log('INFO', info)
        ))
    )
}

export default helpers;