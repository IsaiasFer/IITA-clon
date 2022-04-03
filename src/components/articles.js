import React, { Component } from "react";
import Article from "./article";

import "../styles/articles.scss";

export default class ArticleSection extends Component {
  render() {
    return (
      <section className="articleSection">
        <Article
          title="Impresion 3D"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/MVIMG_20190710_143955.jpg?resize=570%2C350&ssl=1"
          description="Los invitamos a participar de este seminario libre y gratuito sobre impresión 3D que se dictara el 13 de Enero de 2020. Durante el seminario compartiremos los usos que se […]"
        />
        <Article
          title="Seminario de Impresion 3D"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/MVIMG_20190710_144211.jpg?resize=570%2C350&ssl=1"
          description="Los invitamos a participar de este seminario libre y gratuito sobre impresión 3D que se dictara el 13 de Enero de 2020. Durante el seminario compartiremos los usos que se […]"
        />
        <Article
          title="Curso de modelado e impresion 3D para niños"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/modelado-3d-para-niños.jpg?resize=570%2C350&ssl=1"
          description="En estas vacaciones 2020 desarrollá y potenciá la creatividad de tu hijo , dándole la posibilidad de conocer las nuevas tecnologías . En este taller aprenderá las herramientas del Blender […]"
        />
        <Article
          title="Seminario Robótica Enero 2020"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/IMG-20190719-WA0016.jpg?resize=570%2C350&ssl=1"
          description="Los invitamos a participar de este seminario libre y gratuito sobre robótica que se dictara el 14 de Enero de 2020. ¡No te pierdas esta oportunidad única de enterarte de […]"
        />
        <Article
          title="Curso de domótica Enero 2020"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/domotica-e1443200088612.jpg?resize=570%2C339&ssl=1"
          description="Aprendé a configurar un sistema de domótica de software libre y hardware libre que funciona en Raspberry Py y en Arduino y se integra con la mayoría de los dispositivos […]"
        />
        <Article
          title="Seminario Domótica 2020"
          imgUrl="https://i0.wp.com/iita.com.ar/salta/wp-content/uploads/sites/8/2019/12/IMG_9827.jpg?resize=570%2C350&ssl=1"
          description="Los invitamos a participar de este seminario libre y gratuito sobre domótica que se dictara el 14 de Enero de 2020. ¡No te pierdas esta oportunidad única! ¡Te esperamos! Reservar […]"
        />
      </section>
    );
  }
}
