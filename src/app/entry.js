import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/ArticleList';
import defaultConfigs from './defaultConfigs.json';
import './styles/index.css';

export default
class WSCNSideRecommend {
    constructor(config) {
        this.config = Object.assign({}, defaultConfigs, config);
    }

    init(el) {
        ReactDOM.render(
            <ArticleList config={this.config} />,
            el
        );
    }
}

window.WSCNSideRecommend = WSCNSideRecommend;
