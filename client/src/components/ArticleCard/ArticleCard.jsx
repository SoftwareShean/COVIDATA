import React, { Component } from "react";
import "./ArticleCard.css";
import "../../assets/IMG/AK.png";

export default class ArticleCard extends Component {
  state = {
      article: ""
  };
  setFormData = () => {
    this.setState({
        article: this.props.data.article
        // key: this.props.data.article.title
    });
  };

  componentDidMount() {
    this.setFormData();
  }
  render() {
    const { data } = this.props;
    return (
        <a target="_blank" href={data.url}><div className='article'>
        <img src={data.urlToImage} alt={data.description} />
        <div className='articleData'>
          <h4>{data.title}</h4>
          <h6>{data.author}</h6>
        </div>
      </div></a>
    );
  }
}
