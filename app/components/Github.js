import React from 'react';

const HelloWorld = ({name}) => (
    <div>Hello {name}!</div>
);

const Link = ({children, href}) => {
  const changeURL = () => {
    window.location.replace(href);
  };

  return (
    <span
      style={{color: "blue", cursor: "pointer"}}
      onClick={changeURL}>
      {children}
    </span>
  )
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
    <Link href={`https://www.github.com/${username}`}>
      {username}
    </Link>
  </div>
);

const ProfileName = ({name}) => (
  <div>{name}</div>
);

export default Avatar;