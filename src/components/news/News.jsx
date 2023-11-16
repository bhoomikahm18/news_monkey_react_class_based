import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem.jsx'

export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      loading: true,
      page: 1,
      totalArticles: 0
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4db083447ccd4921831926d5eecbc2fc"
    ).then(res => res.json()).then(data => {
      this.setState({ articles: data.articles });
    });
  }

  render() {
    console.log(this.state.articles);
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {(this.state.articles.length != 0) &&
          <div className='row'>
            {(this.state.articles.map((item, index) => {
              return (<div className='col-md-4' key={index}>
                <NewsItem
                  title={item.title}
                  discription={item.description}
                  imageUrl={item.urlToImage} />
              </div>)
            }))
            }
          </div>
        }
        <div className='container d-flex justify-content-between'>
          <button type='button' className='btn btn-dark'>&larr; Privious</button>
          <button type='button' className='btn btn-dark'> Next &rarr; </button>
        </div>

      </div>
    )
  }
}

export default News