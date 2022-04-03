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

    let autoCarrousel=setInterval(() => {
      plusSlides(1)
    }, 5000);

    function moveSlide(direccion){
      clearInterval(autoCarrousel);
      direccion==="next" ? plusSlides(1) : plusSlides(-1)
    }

/*     function next(){
      plusSlides(1)
    }
    function prev(){
      plusSlides(-1)
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
      .addEventListener("click", () => moveSlide("prev"));
    document
      .querySelector(".next")
      .addEventListener("click", () => moveSlide("next"));
}
  render() {
    return (
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img alt="cursos_robotica" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/MG_9406-e1419651290394.jpg?resize=1592%2C450&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="marketing_digital"  src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/Social-Media-Marketing.png?w=900&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="diseño_web" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/dise%C3%B1o_web-e1419652271660.jpg?w=599&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="impresion_3d" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2015/10/Printer.jpg?w=460&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="domotica_seguridad" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/000634216-e1419653389556.jpg?w=599&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="energia_renovable" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/Solar_Panels1.jpg?resize=1280%2C450&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="diseño_sistemas" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/2e2d6af-e1419651647988.png?w=645&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="cloud_computing" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/cloud-computing-symbol-in-sky-e1419652402949.png?w=379&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="open_software" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/op1.png?resize=1600%2C450&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="seguridad_informatica" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/5965-itsec2_1-e1419653175151.jpg?w=579&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="tecnologia_agro" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/IntelliScout-750x487-e1419653934969.jpg?w=749&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="educacion" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/edu.jpg?w=680&ssl=1" />
        </div>
        <div className="mySlides fade">
          <img alt="soft_skills" src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2015/08/aviso-para-web-curso-dise%C3%B1ando-tu-futuro.png?resize=802%2C450&ssl=1" />
        </div>

        <button alt="" className="prev">&#10094;</button>
        <button alt="" className="next">&#10095;</button>
      </div>
    );
  }
}

export default Carousel;
