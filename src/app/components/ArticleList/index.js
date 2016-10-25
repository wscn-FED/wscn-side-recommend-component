import React from 'react';
import axios from 'axios';
import Icon from '#/components/Icon';
import Loading from '#/components/Loading';
import formatTime from '../../utils';

class ArticleList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const self = this;
    const {config} = this.props;
    axios({
      method: 'GET',
      url: config.api.url,
      params: config.api.params
    }).then(res => {
      if (res.status === 200) {
        self.setState({
          articles: res.data.results
        });
      }
    });
  }

  clickUserLink(e, url) {
    e.preventDefault();
    e.stopPropagation();
    window.open(url);
  }

  renderList(list) {
    return list.map(item =>
        (
            <a className="wscnSideRecommend-list-item" target="_blank" href={item.url + '?from=wscnSideRecommend'}
               rel="noopener noreferrer">
              <img className="wscnSideRecommend-list-image" src={item.imageUrl + '?imageView2/1/w/200/h/200'}
                   alt={item.title}/>
              <div className="wscnSideRecommend-list-info">
                <div className="wscnSideRecommend-list-info-title">{item.title}</div>
                <div className="wscnSideRecommend-list-user-wrap">
                  <div className="wscnSideRecommend-user-link"
                       onClick={(e) => this.clickUserLink(e, item.user.url)}>
                    <img className="wscnSideRecommend-user-avatar" src={item.user.avatar + '?imageView2/1/w/20/h/20'}
                         alt={item.user.username}/>
                    <span className="wscnSideRecommend-username">{item.user.screenName}</span>
                  </div>
                  <div className="wscnSideRecommend-list-time">
                    <Icon symbolId="wscnSideRecommend-time"/>
                    {formatTime(item.createdAt)}
                  </div>
                </div>
              </div>
            </a>
        )
    );
  }

  render() {
    const state = this.state;
    const {config} = this.props;
    return (
        <div className="wscnSideRecommend-container">
          <div className="wscnSideRecommend-title">
            <span className="wscnSideRecommend-logo-container"><Icon symbolId="wscnSideRecommend-logo"/></span>
            <span>{config.title}</span>
          </div>
          {(state.articles && state.articles.length > 0)
              ? this.renderList(this.state.articles)
              : <Loading className="news-loading"/>
          }
        </div>
    );
  }
}

export default ArticleList;
