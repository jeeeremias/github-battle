const USER_DATA = {
    name: 'Jeremias Pereira',
    username: 'jeeeremias',
    image: 'https://avatars0.githubusercontent.com/u/9812493?v=3&s=460'
}

import React from 'react';
import ReactDOM from'react-dom';

class HelloWorld extends React.Component {
    render () {
        return (
            <div>
                Hello {this.props.name}!
            </div>
        )
    }
};

const Avatar = ({ name, username, image }) => {
  return (
    <div>
      <ProfilePic imageUrl={image} />
      <ProfileName name={name} />
      <ProfileLink username={username} />
    </div>
  )
};

const ProfilePic = ({imageUrl}) => (
  <img src={imageUrl} style={{height: 100, width: 100}} />
);

const ProfileLink = ({username}) => (
  <div>
    <a href={`https://www.github.com/${username}`}>
      {username}
    </a>
  </div>
);

const ProfileName = ({name}) => (
  <div>{name}</div>
);

ReactDOM.render(
  <Avatar { ...USER_DATA } />,
  document.getElementById('app')
);