import React, { Component } from "react";
import ArticleCard from "../ArticleCard/ArticleCard.jsx";
import './News.css'
import {newsDisplay} from './News.js'

export default class News extends Component {
  state = {
    articles: ''
  }
  
  async componentDidMount() {
    let topStories = await newsDisplay();
    this.setState({ articles: topStories })
    console.log(this.state.articles)
    }

    state = {
        topStories: ''
    }

    render() {
      const {articles} = this.state
    return (
      <div className='news component'>
        <h1>Top News</h1>
        <div className='carosel'>
                {articles &&
                    articles.map((article) => (<ArticleCard data={article} key={article.title}/>))
                }
        </div>
      </div>
    );
  }
}
