import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="NavbarContainer">
      <div className="leftContainer">
        <a href="/">
          <img src="/logo.png" className="LogoImage" />
        </a>
        <a href="/">
          <img src="/home.png" className="homeImage" />
        </a>
        <a href="/">
          <img src="/theme.png" className="themeImage" />
        </a>
        <a href="/">
          <img src="/menu.png" className="menuImage" />
        </a>
        <div className="searchbarContanier">
          <img src="/search.png" className="searchImage" />
          <input placeholder="Search"></input>
        </div>
      </div>
      <div className="rightContainer">
        <img src="/contacts.png" className="contactImage" />
        <img src="/messages.png" className="messageImage" />

        <img src="/notification.png" className="notificationImage" />
        <div className="profileContainer">
          <img src="/profile.png" className="profileImage" />
          <h4>Prashanth</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
