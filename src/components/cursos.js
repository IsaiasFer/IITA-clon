import React from "react";
import Curso from "./curso";
import "../styles/curso.scss";

class SeccionCursos extends React.Component {
  componentDidMount() {
    let courseCard = document.querySelectorAll(".curso");
    let courses = [...courseCard];
    console.log("acabo de empezar");

    courses.forEach(function (card) {
      card.addEventListener("mouseover", function () {
        console.log("estas haciedo over we");
      });
    });
  }
  render() {
    return (
      <section className="cursosSection">
        <Curso
          title="Robótica"
          description="Abiertas las inscripciones para cursos regulares 2021 y para cursos de robótica con arduino, robótica para docentes y domótica. Cursos de robótica para todas las edades. Consulta por horarios en ..."
          img="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/M_photo3-e1419655274803.jpg?resize=270%2C250&ssl=1"
        />
        <Curso
          title="Marketing Digital"
          description="CURSO DE MARKETING DIGITAL ON LINE Nueva modalidad de cursos on-line con clases en vivo, grupos reducidos y seguimiento personalizado. Próxima fecha de inicio Mayo 2021 Cupos limitados. Inscribite ahora ..."
          img="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/Social-Media-Marketing.png?resize=270%2C250&ssl=1"
        />
        <Curso
        
          title="Contacto"
          description="Para solicitar información sobre contenido de los cursos, fechas de inicio y para reservar tu lugar te invitamos a acercarte a nuestras oficinas en calle Buenos Aires 135, oficina 102 en la ciudad de ..."
          img="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2014/12/contacto-1.jpg?resize=270%2C250&ssl=1"
        />
      </section>
    );
  }
}

export default SeccionCursos;
