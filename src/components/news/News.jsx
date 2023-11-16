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
      this.setState({
        ...this.state,
        articles: data.articles,
        totalArticles: data.totalResuls,
        loading: false
      });
    });
  }
  async handleNextClick() {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bd002a1cf4f64969a8819fcbfe3a190f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`);
    let data = await res.json();
    this.setState({
        articles: this.state.articles.concat(data.articles),
        loading: false,
        page: this.state.page + 1,
        totalArticles: data.totalResults
    });
  }

  render() {
    console.log(this.state.articles);
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>

        {(this.state.loading != true) &&
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
          <button type='button' className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Privious</button>
          <button type='button' className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr; </button>
        </div>

      </div>
    )
  }
}

export default News