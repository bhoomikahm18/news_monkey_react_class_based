import React, { Component } from 'react'
import NewsItem from '../newsItem/NewsItem.jsx'

export class News extends Component {
  render() {
    return (
        <div className='container my-3'>
          <h2>NewsMonkey - Top Headlines</h2>
          <div className='row'>
            <div className='col-md-4'>
              <NewsItem title="my title" discription="abcd" />
            </div>
            <div className='col-md-4'>
              <NewsItem title="my title" discription="abcd" />
            </div>
            <div className='col-md-4'>
              <NewsItem title="my title" discription="abcd" />
            </div>
          </div>
        </div>
    )
  }
}

export default News