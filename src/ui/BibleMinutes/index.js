import React from 'react';
import clsx from 'clsx';
import styles from '../../pages/styles.module.css';

const BibleMinutes = () => (
  <div class={clsx("avatar alert alert--secondary item shadow--lw", styles.avatar, styles.book)}>
    <span class={clsx("badge badge--success", styles.freeBook)}>
      <a href="/biblia-90-minutos">
        Descarga el libro gratis
      </a>
    </span>
    <a
      className="avatar__photo-link avatar__photo avatar__photo--lg"
      href="/biblia-90-minutos"
    >
      <img
        alt="Entendiendo la Biblia en 90 minutos"
        src="/files/bible-studying.png"
      />
    </a>
    <div className="avatar__intro">
      <h4 className="avatar__name">
        <a href="/biblia-90-minutos">
          Entendiendo la Biblia en 90 minutos
        </a>
      </h4>
      <small className="avatar__subtitle">
        Cual es la diferencia entre el Antiguo y Nuevo Testamento,
        quien es Jesús, que dice del fin del mundo y más.
      </small>
    </div>
  </div>
);
export default BibleMinutes;