import React, { Component } from 'react';
import { render } from 'react-dom';
import RecoArticles from './RecoArticles';


class Root extends Component {
  render() {
    let comProps = {
      theme: 'light',
      apiParams: {
        url: 'http://localhost:9000/api/v1/posts',
        params: {cid: 11, limit: 5, order: 'createdAt'}
      }
    };
    return (
      <RecoArticles {...comProps} />
    )
  }
}

render(<Root />, document.getElementById('root'));
