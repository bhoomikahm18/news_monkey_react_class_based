import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem.jsx'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: []
    }
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
                  title="my title"
                  discription="abcd" 
                  imageUrl={item.urlToImage}/>
              </div>)
            }))
            }
          </div>
        }

      </div>
    )
  }
}

export default News