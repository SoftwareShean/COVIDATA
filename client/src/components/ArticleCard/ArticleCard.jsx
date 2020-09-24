import React, { Component } from "react";
import "./ArticleCard.css";
import "../../assets/IMG/AK.png";

export default class ArticleCard extends Component {
  state = {
      article: ""
  };
  setFormData = () => {
    let articleImage = this.props.data.multimedia[0].url
    this.setState({
      article: this.props.data.article, 
      articleImage: articleImage
    });
    console.log(this.state.article)
  };

  componentDidMount() {
    this.setFormData();
  }
  render() {
    const { data } = this.props;
    return (
      <a target='_blank' rel='noopener noreferrer' href={data.url}>
        <div className='article'>
          <img src={this.state.articleImage} alt={data.description} />
          <div className='articleData'>
            <h4>{data.title}</h4>
            <h6>{data.author}</h6>
          </div>
        </div>
      </a>
    );
  }
}
