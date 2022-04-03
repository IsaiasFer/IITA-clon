import React from "react";

class Curso extends React.Component {
  render(props) {
    return (
      <div className="curso">
        <div className="cursoImgContainer">
          <div className="courseContainer">
            <a className="courseLink"></a>
            <img
              className="cursoImg"
              src={this.props.img}
              alt=""
            />
          </div>
        </div>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.description}
        </p>
        <button className="infoBtn">Mas información</button>
      </div>
    );
  }
}

export default Curso;
