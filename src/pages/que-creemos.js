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
      title={`Qué creemos`}
      description="Nuestras bases de fé">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            ¿Qué Creemos?
          </h1>
        </div>
      </header>
      <main>
        <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px', }}>
          <p>
           Reconocemos como “superior autoridad a la Voluntad de Dios, 
           expresada en las Santas Escrituras, siendo todas estas inspiradas 
           por Dios. Además, reconocemos como autoritativo en cuestiones de Fe, 
           pero subordinados a las Santas Escrituras, los tres Credos Históricos, 
           conocidos como “De los Apóstoles”, “Niceno” y “De Atanasio”.
          </p>
          <h3>Declaración de Fe</h3>
          <p>
            <b>1.</b>	La unidad del Padre, Hijo y Espíritu Santo en la Divinidad.<br />
            <b>2.</b>	La soberanía de Dios en la creación, revelación, redención y juicio final.<br />
            <b>3.</b>	La Inspiración Divina y entera confiabilidad en las Sagradas Escrituras tal cual fueron dadas originalmente y su autoridad suprema en todo asunto de fe y conducta.<br />
            <b>4.</b>	La pecaminosidad y culpa universal de todos los hombres desde la caída que los sujeta a la ira y condenación de Dios.<br />
            <b>5.</b>	La redención de la culpa, pena, dominio y corrupción del pecado, solamente mediante la muerte expiatoria del Señor Jesucristo.<br />
            <b>6.</b>	La resurrección corporal del Señor Jesucristo de entre los muertos y su ascensión a la diestra de Dios el Padre.<br />
            <b>7.</b>	La presencia y poder del Espíritu Santo en la obra de la regeneración.<br />
            <b>8.</b>	La justificación del pecador por la gracia de Dios y solo mediante la fe.<br />
            <b>9.</b>	La permanencia y obra del Espíritu Santo en el creyente.<br />
            <b>10.</b>	La única Iglesia Universal que es el cuerpo de Cristo y a la cual pertenecen todos los creyentes verdaderos.<br />
            <b>11.</b>	El retorno personal del Señor Jesucristo.<br />
          </p>
          
        </div>
      </main>
    </Layout>
  );
}

export default Page;
