import React from "react";

import "../styles/carousel.scss";

class Carousel extends React.Component {
  componentDidMount() {
    var slideIndex = 1;
    showSlides(slideIndex);
    

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
/*     function currentSlide(n) {
      showSlides((slideIndex = n));
    } */

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }
    document
      .querySelector(".prev")
      .addEventListener("click", () => plusSlides(-1));
    document
      .querySelector(".next")
      .addEventListener("click", () => plusSlides(1));
}
  

  render() {
    return (
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img alt="" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/op1.png?zoom=2&resize=1600%2C450&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt=""  src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/IntelliScout-750x487-e1419653934969.jpg?w=749&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/edu.jpg?w=680&ssl=1" />
        </div>

        <button alt="" className="prev">&#10094;</button>
        <button alt="" className="next">&#10095;</button>
      </div>
    );
  }
}

export default Carousel;
