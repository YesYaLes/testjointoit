import React from "react";
import "./PageLayout.css";

const PageLayout = ({ children }) => {
  return (
    <div className="PageLayout">
      <div className="LeftMenu">
        <div className="LeftMenuHeader">
          <h1 className="HeaderName">IMPEKABLE</h1>
        </div>
        <ul className="LeftMenuButtonsBlock">
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Home
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Dashboard
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Inbox.png" className="LeftMenuButtonImg"></img>
            Inbox
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Products
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Invoices
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Customers
          </li>
          <li className="LeftMenuButton">
            <img alt="IMG" src="/Home.png" className="LeftMenuButtonImg"></img>
            Chat Room
          </li>
          <li className="LeftMenuButton LeftMenuButtonActive">
            <div className="LeftMenuButtonActiveLine" />
            <img
              alt="IMG"
              src="/Calendar.png"
              className="LeftMenuButtonImg"
            ></img>
            Calendar
          </li>
          <li className="LeftMenuButton">
            <img
              alt="IMG"
              src="/HelpCenter.png"
              className="LeftMenuButtonImg"
            ></img>
            Help Center
          </li>
          <li className="LeftMenuButton">
            <img
              alt="IMG"
              src="/Settings.png"
              className="LeftMenuButtonImg"
            ></img>
            Settings
          </li>
        </ul>
      </div>
      <div className="RightBlock">
        <div className="TopMenu">
          <div className="TopMenuSearchBlock">
            <img
              alt="IMG"
              src="/icon_search.png"
              className="TopMenuSearchBlockIMG"
            />
            <label>Search transactions, invoices or help</label>
          </div>
          <div className="TopMenuControlsBlock">
            <div className="TopMenuControlsBlockButtons">
              <img
                alt="IMG"
                src="/SupportIcon.png"
                className="TopMenuControlsBlockButtonsImg"
              />
              <img
                alt="IMG"
                src="/Message.png"
                className="TopMenuControlsBlockButtonsImg"
              />
              <img
                alt="IMG"
                src="/Bell.png"
                className="TopMenuControlsBlockButtonsImg"
              />
            </div>
            <div className="TopMenuControlsBlockLine" />
            <div className="TopMenuControlsBlockLineUserInfoBlock">
              <label>John Doe</label>
              <img alt="IMG" src="/Arrow.png" />
              <img alt="IMG" src="/Avatar.png" />
            </div>
          </div>
        </div>
        <div className="InformationBlock">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
