import React from 'react';
import clsx from 'clsx';
import styles from '../../pages/styles.module.css';

const ConsumidoPorFuego = () => (
  <div className={clsx("avatar alert alert--secondary item shadow--lw", styles.avatar, styles.book)}>
    <span className={clsx("badge badge--success", styles.freeBook)}>
      <a href="/consumido-por-fuego">
        Descarga el libro gratis
      </a>
    </span>
      <a
        className="avatar__photo-link avatar__photo avatar__photo--lg"
        href="/consumido-por-fuego"
      >
        <img
          alt="Entendiendo la Biblia en 90 minutos"
          src="/files/bird-fire.png"
        />
      </a>
      <div className="avatar__intro">
        <h4 className="avatar__name">
          <a href="/consumido-por-fuego">
          Consumido por Fuego
        </a>
        </h4>
        <small className="avatar__subtitle">
          El lugar santisimo, la inaccesible
          prescencia de Dios, desde el AT al NT. Donde estaba la prescencia
          de Dios antes y ahora?
        </small>
      </div>
  </div>
);
export default ConsumidoPorFuego;