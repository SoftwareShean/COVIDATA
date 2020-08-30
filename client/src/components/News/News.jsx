import React, { Component } from "react";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import './News.css'
import {newsDisplay} from './News.js'

export default class News extends Component {
    async componentDidMount() {
        let topStories = await newsDisplay();
        this.setState({ topStories: topStories })
    }

    state = {
        topStories: ''
    }

    render() {
      const {topStories} = this.state
    return (
      <div className='news component'>
        <h1>Top News</h1>
        <div className='carosel'>
                {topStories &&
                    topStories.map((article) => (<ArticleCard data={article} key={article.title}/>))
                }
        </div>
      </div>
    );
  }
}
