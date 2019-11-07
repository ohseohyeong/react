import React, { Component } from "react";
import logo from "./img/google_logo.png";
import menu from "./img/menu_icon.png";
import profile from "./img/profile_icon.png";
import searchbar from "./img/searchbar.png";
import { Button } from "react-bootstrap";

import "./App.scss";

class App extends Component {
  state = {
    searchContent: null
  };
  constructor(props) {
    super(props);
    document.title = "Google";
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEnterKey = e => {
    if (e.keyCode === 13) {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    const searchStr =
      "https://www.google.com/search?q=" + this.state.searchContent;
    window.location.href = searchStr;
  };

  render() {
    return (
      <div>
        <div className="Module-header-main">
          <a className="Module-header-content-text" href="/">
            Gmail
          </a>
          <a className="Module-header-content-text" href="/">
            이미지
          </a>
          <img src={menu} alt="" className="Module-header-content-img" />
          <img src={profile} alt="" className="Module-header-content-profile" />
        </div>
        <div className="Module-image-div">
          <img src={logo} alt="It's a google logo" className="Module-image" />
        </div>
        <div>
          <span className="Module-search">
            <img src={searchbar} alt="" className="Module-search-main" />
            <input
              className="Module-search-input"
              onKeyDown={this.handleEnterKey}
              onChange={this.handleChange}
              name="searchContent"
              value={this.state.searchContent}
            />
          </span>
        </div>
        <div className="Module-button-div">
          <Button
            size="sm"
            className="Module-button"
            variant="secondary"
            onClick={this.handleSearch}
          >
            Google 검색
          </Button>
          <span className="Module-button-blank" />
          <Button size="sm" className="Module-button" variant="secondary">
            I'm Feeling Lucky
          </Button>
        </div>
        <div className="Module-footer-main">
          <a className="Module-footer-korea">대한민국</a>
        </div>
        <div className="Module-footer-main-bottom">
          <a className="Module-footer-advert">광고</a>
          <a className="Module-footer-advert">비즈니스</a>
          <a className="Module-footer-advert">Google 정보</a>
          <a className="Module-footer-advert">검색의 원리</a>
          <span className="Module-footer-right">
            <a className="Module-footer-right-text">개인정보 처리방침</a>
            <a className="Module-footer-right-text">약관</a>
            <a className="Module-footer-right-text">설정</a>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
