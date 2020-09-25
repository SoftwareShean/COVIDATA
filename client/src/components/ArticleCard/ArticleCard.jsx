import React, { Component } from "react";
import "./ArticleCard.css";
import Spinner from 'react-bootstrap/Spinner'

export default class ArticleCard extends Component {
  state = {
    image: false,
    title: "",
    description: "",
    url: "",
  };

  setFormData = async () => {
    const { articleData } = this.props;
    let articleImage = articleData.multimedia;
    let articleDescription = articleData.description;
    let articleTitle = articleData.title;
    let articleURL = articleData.url;
    if (articleImage !== null) {
      this.setState({
        title: articleTitle,
        description: articleDescription,
        image: articleImage[0].url,
        url: articleURL,
        tags: "#NEWS",
      });
    } else {
      this.setState({
        title: articleTitle,
        description: articleDescription,
        image:
          "https://static01.nyt.com/vi-assets/images/share/1200x675_nameplate.png",
        url: articleURL,
        tags: "#NEWS",
      });
    }
  };

  componentDidMount = async () => {
    this.setFormData();
  };

  render() {
    const { articleData } = this.props;
    const { url, title, image } = this.state;
    return (
      <>
        {image ? (
          <a target='_blank' rel='noopener noreferrer' href={url}>
            <div className='article'>
              <img src={image} alt={articleData.description} />
              <div className='articleData'>
                <h4>{title}</h4>
              </div>
            </div>
          </a>
        ) : (
          <Spinner animation='grow' />
        )}
      </>
    );
  }
}
