import React, { Component } from 'react';
import Newsitem from './Newsitem';

import loder from '../loadern.gif';

export class News extends Component {

    article = [];

    constructor() {
        super();
        this.state = {
            article: this.article,
            loader: true,
            page:1
        }
    }


async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1";
    let data = await fetch(url);
    let parsedata = await data.json();
    

    setTimeout(() => this.setState({article: parsedata.articles,totalResults:parsedata.totalResults,loader:false}), 2000); 
    //this.setState({article: parsedata.articles,totalResults:parsedata.totalResults,loader:false});
     
}

handlePrevNews = async () => {

   // console.log("Left");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({
        article : parsedata.articles,
        page : this.state.page - 1
    })

}


handleNextNews = async () => {

        //console.log("Right");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f639a9c6417b472ba6c24967cdbde4b1&page=${this.state.page + 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedata = await data.json();
    
      this.setState({
        article : parsedata.articles,
        page : this.state.page + 1
      })
    
}



    render() {
        return (
            <div className="container my-2">

            {this.state.loader?<div className="row"><div className="col-md-4 my-2"></div><div className="col-md-4 my-2"><img src={loder} className="text-center my-4" /></div><div className="col-md-4 my-2"></div></div>:<><div className="row" >
            
                    {this.state.article.map((element) => 
                       <div className="col-md-4 my-2" key={element.url}>
                                <Newsitem title={element.title?element.title.slice(0,44):""} description={element.description?element.description.slice(0,60):""} url={element.url} imgurl={element.urlToImage} />
                            </div>
                    )}
                </div>
                <div className="container my-2 d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevNews} >Previous</button>
                <button disabled={Math.ceil(this.state.totalResults/20) < this.state.page+1} className="btn btn-dark" onClick={this.handleNextNews} >Next</button>
                </div></>}
            </div>
        )
    }
}

export default News;
