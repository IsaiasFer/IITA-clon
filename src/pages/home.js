import React from "react";
import ArticleSection from "../components/articles";
import Carousel from "../components/carrusel";
import CursoDestacado from "../components/cursoDestacado";
import SeccionCursos from "../components/cursos";
import '../styles/home.scss'

class Home extends React.Component {
  render() {
    return (
      <>
      <Carousel/>
      <SeccionCursos/>
      <CursoDestacado/>
      <ArticleSection/>
      </>
    );
  }
}

export default Home;
