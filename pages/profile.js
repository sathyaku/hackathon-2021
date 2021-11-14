import React from 'react';

const Profile = () => {
  return (
    <div className="container">
      <h1> Welcome to Profile </h1>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1ch;
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
