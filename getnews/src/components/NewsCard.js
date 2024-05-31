import React, { Component } from 'react'

export class NewsCard extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
          <img src={!imageUrl ? "https://img.etimg.com/thumb/msid-110535246,width-1200,height-630,imgsize-267022,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body"> <h5 className='card-title'>{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsCard