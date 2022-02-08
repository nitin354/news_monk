import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class News extends Component {

    article = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Kevin Draper, Chris Buckley",
            "title": "Olympics 2022 Live: Medals and Results From Day 1 - The New York Times",
            "description": "The host country finished first a short-track speedskating team event, and Norway won its first two golds. Shaun White said these Olympics would be his last competition.",
            "url": "https://www.nytimes.com/live/2022/02/04/sports/olympics-winter",
            "urlToImage": "https://static01.nyt.com/images/2022/02/05/multimedia/05olympics-briefing-promo-10am/05olympics-briefing-promo-10am-facebookJumbo.jpg",
            "publishedAt": "2022-02-05T16:18:22Z",
            "content": "Therese Johaug of Norway after winning the 15-kilometer womens skiathlon cross-country race at the National Cross-Country Center in Zhangjiakou.Credit...Doug Mills/The New York Times\r\nTherese Johaug … [+3862 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "USA TODAY Sports",
            "title": "Olympics 2022 Saturday updates, recap: USA bobsled star Elana Meyers Taylor out of COVID isolation - USA TODAY",
            "description": "The first medals of the 2022 Winter Olympics were handed out Saturday, but the Americans were unable to reach the podium in the first full day.",
            "url": "https://www.usatoday.com/story/sports/olympics/2022/02/04/winter-olympics-live-updates-medal-events/6665198001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/02/05/USAT/5b52f60a-6e17-4ae4-b221-f33c1460ad7e-AP_Germany_Bobsleigh_World_Cup.jpg?crop=4399,2474,x1,y440&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2022-02-05T15:56:18Z",
            "content": "The first medals of the 2022 Winter Olympics were handed out Saturday, but the Americans were unable to reach the podium in the first full day of events.\r\nThere were some positives on Saturday for Te… [+23645 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Audrey Conklin",
            "title": "Arizona Home Depot employee accused of replacing $400k with counterfeit bills - Fox News",
            "description": "U.S. Secret Service officials on Friday arrested an Arizona Home Depot employee accused of replacing nearly $400,000 worth of cash with counterfeit bills.",
            "url": "https://www.foxnews.com/us/arizona-home-depot-employee-counterfeit-bills",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/02/BeFunky-collage-19.jpg",
            "publishedAt": "2022-02-05T15:47:09Z",
            "content": "U.S. Secret Service officials on Friday arrested an Arizona Home Depot employee accused of replacing nearly $400,000 worth of cash with counterfeit bills.\r\nAgents arrested Adrian Jean Pineda after he… [+1811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Julia Fox Talks Drake Romance Rumors and Says They Didn't 'Really' Date - TMZ",
            "description": "Kanye West's GF Julia Fox is addressing reports that she once dated Drake ... she says \"nothing really happened\" ... the question, what does \"really\" mean?",
            "url": "https://www.tmz.com/2022/02/05/julia-fox-drake-dating-rumors-kanye-west-podcast/",
            "urlToImage": "https://imagez.tmz.com/image/51/16by9/2022/02/05/51324efc43ad45b090f0d0e61e13f43b_xl.jpg",
            "publishedAt": "2022-02-05T15:11:00Z",
            "content": "Kanye West's GF Julia Fox is addressing reports that she once dated Drake ... she says \"nothing really happened\" ... the question, what does \"really\" mean?\r\nJulia used her \"Forbidden Fruits\" podcast … [+697 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Jessica Bennett",
            "title": "Candace Owens defends Kanye West against Kim Kardashian: 'Kim is wrong' - Page Six",
            "description": "“Kim is wrong on this one,” the conservative commentator tweeted following Kim and Kanye’s public back-and-forth over daughter, North West, having access to TikTok.",
            "url": "https://pagesix.com/2022/02/05/candace-owens-defends-kanye-west-against-kim-kardashian/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/02/candace-comp.jpg?quality=90&strip=all&w=1200",
            "publishedAt": "2022-02-05T15:00:00Z",
            "content": "Candace Owens is backing up Kanye West in his attempt to restrict his children’s access to social media, a move ex, Kim Kardashian, deems unnecessary. \r\n“Kim is wrong on this one,” the conservative c… [+1945 chars]"
        }]

    constructor() {
        super();
        this.state = {
            article: this.article,
            loader: false,
            page:1
        }
    }


async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1";
    let data = await fetch(url);
    let parsedata = await data.json();

    this.setState({article: parsedata.articles,totalResults:parsedata.totalResults});
     
}

handlePrevNews = async () => {

    console.log("Left");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();

  this.setState({
    article : parsedata.articles,
    page : this.state.page - 1
  })

}


handleNextNews = async () => {

    if(Math.ceil(this.state.totalResults/20) < this.state.page+1){

    }else{

        console.log("Right");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
    
      this.setState({
        article : parsedata.articles,
        page : this.state.page + 1
      })

    }


    
}



    render() {
        return (
            <div className="container my-2">

                <div className="row" >
                    {this.state.article.map((element) => {
                        return<div className="col-md-4 my-2" key={element.url}>
                                <Newsitem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,60):""} url={element.url} imgurl={element.urlToImage} />
                            </div>
                    })}

                </div>

                <div className="container my-2 d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevNews} >Previous</button>
                <button disabled={Math.ceil(this.state.totalResults/20) < this.state.page+1} className="btn btn-dark" onClick={this.handleNextNews} >Next</button>

                </div>
            </div>

        )
    }
}

export default News;
