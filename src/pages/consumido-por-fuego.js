import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Redirect from '../../ui/Redirect';

function Page() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Consumido por fuego`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            Consumido por fuego - El Lugar Santísimo en la Ley Bíblica
          </h1>
        </div>
      </header>
      <Redirect to="/books/consumido-por-fuego-el-lugar-santisimo-en-la-ley-biblica" />
      <main>
        <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px', }}>
          <div className="row">
            <div className="col col--4">
            <div className={clsx('text--center')}>
              <img
                src='/img/consumido-or-fuego.png'
                alt='Consumido por fuego | Portada'
              />
            </div>
            </div>
            <div className="col col--8">
              <p>
                El trabajo de Joel es el pináculo en los esfuerzos por
                aplicar todo el consejo de Dios a toda la fe y la vida. Los críticos
                han recibido una respuesta amable pero completa, y sus objeciones al
                Principio de Cherem han demostrado ser defectuosas y bíblicamente insostenibles.
              </p>
              <p>
                El Dr. McDurmon articula claramente cómo el Principio Cherem es una clave
                para comprender la continuidad / discontinuidad de las leyes y las
                sanciones penales entre el Antiguo y el Nuevo Pacto. Demuestra con las
                Escrituras que aquellas cosas que fueron consagradas como "santísimas"
                (Cherem) y por lo tanto destruidas bajo la Ley del Antiguo Pacto se
                descontinúan (o se difieren a los tribunales del cielo)
                bajo el Evangelio. Si desea conocer las razones bíblicas por las que Dios
                destruyó algunos pueblos, posesiones y ciudades en el Antiguo Testamento,
                debe leer Consumido por Fuego. Da respuestas y más que eso, da una
                hermenéutica para interpretar qué leyes específicas de la Ley de Dios
                continúan y cuales se interrumpen dentro de la era del Nuevo Pacto.
              </p>
              <p>
                El libro en español solo abarca la primera parte del libro en Inglés.
                Esperemos en un futuro traducir la parte 2 y 3 del libro. Si desea comprar
                el libro en inglés lo puede encontrar <a href="https://www.amazon.com/Consuming-Fire-Holy-Holies-Biblical/dp/1078311242">aquí</a>.
              </p>

              <div className="row">
                <div className="col col--6">

                  <div className="card-demo">
                    <div className="card">
                      <div className="card__header">
                        <h3>Descargar PDF</h3>
                      </div>
                      <div className="card__body">
                        <p>
                          Para ver en computador o smartphone y fácil de imprimir
                        </p>
                      </div>
                      <div className="card__footer">
                        <Link
                          to='https://declaradojusto.files.wordpress.com/2020/12/consumido-por-fuego.pdf'
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
                <div className="card-demo">
                    <div className="card">
                      <div className="card__header">
                        <h3>Descargar Epub</h3>
                      </div>
                      <div className="card__body">
                        <p>
                          Para leer de una forma más fácil en el smartphone,
                          necesitaras un software especial para abrir archivos epub.
                        </p>
                      </div>
                      <div className="card__footer">
                        <Link
                          target="_blank"
                          to='/files/consumido-por-fuego-joel-mc-durmon.epub'
                          className='button button--secondary'
                          style={{width: '100%'}}
                        >
                          Descarga aquí
                        </Link>
                      </div>
                    </div>
                  </div>
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
