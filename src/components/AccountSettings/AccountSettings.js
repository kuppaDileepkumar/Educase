import React from 'react';
import './index.css';

const AccountSettings = () => {
  return (
    <div className="account-container">
      <h2 className="account-title">Account Settings</h2>
      <div className="account-info">
        <div className="profile-image-container">
          <img
            className="profile-image"
            src="./pick.jpeg"
            alt="profile"
          />
          <div className="camera-icon">
            <img
              src="./camera.jpg"
              alt="camera"
            />
          </div>
        </div>
        <div className="profile-details">
          <p className="name">Marry Doe</p>
          <p className="email">Marry@Gmail.Com</p>
          <p className="description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
