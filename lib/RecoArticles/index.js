import React, { Component } from 'react';
import axios from 'axios';
import './theme.css';

class SideArticles extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    const self = this;
    let { apiParams } = this.props;
    axios({
      method: 'GET',
      url: apiParams.url,
      params: apiParams.params
    }).then(res => {
      if (res.status === 200) {
        self.setState({
          articles: res.data.results
        })
      }
    })
  }
  formatTime(timestamp) {
    timestamp = parseInt(timestamp, 10);
    let date = new Date(timestamp*1000);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay() + 1;
    return `${year}.${month}.${day}`;
  }
  clickUserLink(e, url) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = url;
  }
  renderList(list) {
    return list.map(item => {
      return (
        <li className="list-item" key={item.id}>
          <a href={item.url}>
            <img src={item.imageUrl} alt={item.title} className="list-image"/>
            <div className="list-info">
              <div className="info-inner">
                <h3 className="info-title">{item.title}</h3>
                <div className="user-wrap">
                  <div href={item.user.url} className="user-link" onClick={(e) => this.clickUserLink(e, item.user.url)}>
                    <img src={item.user.avatar} alt={item.user.username} className="user-avatar"/>
                    <span className="username">{item.user.screenName}</span>
                  </div>
                  <span className="time">{this.formatTime(item.createdAt)}</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      )
    });
  }
  render() {
    let { theme } = this.props;
    let containerStyle = `list-container ${theme}`;
    if (this.state.articles && this.state.articles.length > 0) {
      return (
        <ul className={containerStyle}>
          {this.renderList(this.state.articles)}
        </ul>
      )
    } else {
      return (
        <ul className={containerStyle}>
          <div className="loading-tip">loading data...</div>
        </ul>
      )
    }
  }
}

export default SideArticles;
