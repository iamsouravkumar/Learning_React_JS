import React, { Component } from 'react'
import NewsCard from './NewsCard'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1aea08ccff5446ce9dd715767eff7343&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    nextClick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1aea08ccff5446ce9dd715767eff7343&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

    }
    prevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1aea08ccff5446ce9dd715767eff7343&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (<div className='container'>
            <h1 className='my-4'>GetNews - Top Headlines</h1>
            <div className='row'>
                {this.state.articles.map((element) => {
                    return <div className='col-md-4' key={element.url}>
                        <NewsCard title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
            </div>
            <div className='container d-flex justify-content-between mb-2 my-2'>
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevClick}>&larr;Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.nextClick}>&rarr;Next</button>
            </div>
        </div>
        )
    }
}

export default News