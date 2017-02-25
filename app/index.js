var USER_DATA = {
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

class ProfilePic extends React.Component {
    render () {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
};

class ProfileLink extends React.Component {
    render () {
        return (
            <div>
                <a href={'https://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
};

class ProfileName extends React.Component {
    render () {
        return (
            <div>{this.props.name}</div>
        )
    }
};

class Avatar extends React.Component {
    render () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
}

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
)