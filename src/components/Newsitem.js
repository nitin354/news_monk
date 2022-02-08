import React, { Component } from 'react';

export class Newsitem extends Component {



    render() {
        let { title, description, imgurl,url } = this.props

        return (<div className="card" style={{ width: "18rem" }}>
            <img src={imgurl?imgurl :"https://imagez.tmz.com/image/9e/16by9/2022/02/06/9e747e0c9a4048568e3da8f4e41bf17f_xl.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read more</a>
            </div>
        </div>)

    }
}

export default Newsitem;
