import React from "react";
import Curso from "./curso";
import '../styles/curso.scss'

function SeccionCursos() {
  return (
    <section className="cursosSection">
      <Curso />
      <Curso />
      <Curso />
    </section>
  );
}

export default SeccionCursos;
