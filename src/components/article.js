import React, { Component } from "react";

export default class Article extends Component {
  render(props) {
    return (
      <div className="article">
        <div className="articleInfo">
          <div className="description">
            <p>{this.props.description}</p>
          </div>
          <figure className="articleImgContainer">
            <img className="articleImg" src={this.props.imgUrl} alt="" />
          </figure>
        </div>
        <h3 className="articleTitle">{this.props.title}</h3>
      </div>
    );
  }
}
