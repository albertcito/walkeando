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
      title={`Entendiendo la Biblia en 90 Minutos`}
      description="¿Le gustaría aprender de qué se trata la Biblia,  pero encuentra el libro en sí un poco desalentador,  demasiado largo o no tiene idea de por dónde empezar? ">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            Entendiendo la Biblia en 90 Minutos
          </h1>
        </div>
      </header>
      <main>
        <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px', }}>
          <div className="row">
            <div className="col col--4">
            <div className={clsx('text--center')}>
              <img src='/img/biblia-90-minutos-portada.png' alt='Entendiendo la Biblia en 90 minutos | Portada' />
            </div>
            </div>
            <div className="col col--8">
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
              <p>
                Este libro a sido disponible gracias a que el autor Joel McDurmon 
                autorizo a publicarlo y permitir ser descargado gratuitamente.  
              </p>

              <div className="row">
                <div className="col col--6">

                  <div class="card-demo">
                    <div class="card">
                      <div class="card__header">
                        <h3>Descargar PDF</h3>
                      </div>
                      <div class="card__body">
                        <p>
                          Para ver en computador o smartphone
                        </p>
                      </div>
                      <div class="card__footer">
                        <Link
                          to='https://declaradojusto.files.wordpress.com/2020/08/entendiendo-la-biblia-en-90-minutos.pdf'
                          className='button button--secondary'
                          style={{width: '100%'}}
                        >
                          Descarga aquí
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col col--6">

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Page;
