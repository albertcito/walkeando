import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Page() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            Entendiendo la Biblia en 90 Minutos
          </h1>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>Pronto !</h2>
          <p>
            ¿Le gustaría aprender de qué se trata la Biblia, 
            pero encuentra el libro en sí un poco desalentador, 
            demasiado largo o no tiene idea de por dónde empezar? 
            Entonces "Entender la Biblia en 90 minutos" está escrito solo para usted. 
            Este libro está diseñado para explicar los conceptos básicos de cómo 
            se compone la Biblia, qué contiene cada una de sus partes, 
            cómo encajan como un todo y qué significa todo. 
            Ya sea que esté mirando de afuera hacia adentro, 
            con ganas de aprender de qué se trata el texto 
            clave de la fe cristiana, o si estás en el interior deseando aprender 
            los conceptos básicos de lo que dice y significa la Biblia, 
            este libro satisfará tus necesidades perfectamente. 
            Servirá igualmente a personas interesadas de todos los antecedentes 
            religiosos, sin fe o nuevos conversos. También puede funcionar para 
            escuelas dominicales básicas y otros entornos educativos cristianos. 
            Para los cristianos, "la Biblia" es "el libro". Es el libro de todos los libros, 
            el libro más importante que existe. La mayoría de los que lo leen en serio lo 
            encuentran desafiante y reconfortante, trascendente y accesible, 
            imponente e íntimo, aterrador y seguro, exigente y generoso, 
            transformador y reafirmante. Ciertamente no te arrepentirás del 
            tiempo que dedicas a aprender al respecto. Este libro le ayudará a 
            comprender el panorama general de toda la Biblia, en sus partes 
            y como un todo, de la manera más eficiente posible. El lector medio 
            debería poder leerlo todo en sólo unos 90 minutos.
            </p>
        </div>
      </main>
    </Layout>
  );
}

export default Page;
