import React from "react";
import Carousel from "../components/carrusel";
import SeccionCursos from "../components/cursos";
import '../styles/home.scss'

class Home extends React.Component {
  render() {
    return (
      <>
      <Carousel/>
      <SeccionCursos/>
      </>
    );
  }
}

export default Home;
