import React from "react";

import "../styles/cursoDestacado.scss"

function CursoDestacado() {
  return (
    <section className="cursoDestacado">
      <figure className="cursoDestacadoImg">
        <img
          src="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2017/09/descarga-1.jpg?resize=307%2C164&ssl=1"
          alt=""
        />
      </figure>
      <div className="infoCursoDestacado">
        <p>
          Curso Online de Marketing Digital y Google Ads Clases en vivo, grupos
          reducidos con seguimiento personalizado. Duración : seis semanas Temas
          que abordaremos durante el curso Tendencias en marketing digital […]
        </p>
        <h2>Curso Online de Marketing Digital y Google Ads</h2>
      </div>
    </section>
  );
}

export default CursoDestacado;
