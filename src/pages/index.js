import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Entendiendo la Biblia en 90 minutos</>,
    imageUrl: 'img/blog/child-reading-bible.jpg',
    description: (
      <>
        A veces es dificil entender las escrituras, muchas veces leemos y no entendemos
        lo que dice. Aquí tenemos GRATIS un libro que cuenta de que se trata la Biblia,
        cual es la diferencia entre el Antiguo y Nuevo testamento, quien es
        Jesús, que dice del fin del mundo y más.
      </>
    ),
    link: '/biblia-90-minutos',
  },
  {
    title: <>La Creación</>,
    imageUrl: 'img/blog/planeta-tierra-luna-sol.png',
    description: (
      <>
        Es una historia triste de como nuestros padres perdieron el inmenso capital
        que Dios les había entregado, empezando con la relación directa con Dios,
        la santidad del lugar y el beneficio de la tierra que producía todo tipo de
        material y era fácil de trabajar. De cómo perdimos la oportunidad de vivir
        en un lugar lleno de armonía y amor por nuestro prójimo, en la presencia de Dios.
      </>
    ),
    link: '/blog/economia-cristiana-creacion-indice-gary-north',
  },
  {
    title: <>Introducción a Cherem</>,
    imageUrl: 'img/blog/moises.png',
    description: (
      <>
        El concepto de acercarse al lugar santísimo de Dios aparece comenzando en el Edén y se repite en el tabernáculo, el templo, varios aspectos de la ley, la historia del antiguo Israel, todo a través de los profetas, y en las amenazas de una gran tribulación durante el últimos días del Antiguo Pacto, así como en las promesas de un futuro templo en el Nuevo Pacto.
      </>
    ),
    link: '/blog/introduccion-cherem',
  },
  {
    title: <>The Chosen es un serie realmente encantadora</>,
    imageUrl: 'img/blog/the-chosen-review.png',
    description: (
      <>
        Las novelas, los dramas y las películas tienen un papel importante
        que desempeñar en la comunicación del dogma, y ​​The Chosen es otro
        ejemplo perfecto de una historia en la que el dogma y el drama se
        apoyan mutuamente.
      </>
    ),
    link: '/blog/the-chosen-serie-realmente-encantadora/',
  },
  {
    title: <>Diez hechos básicos sobre el canon del NT que todo cristiano debe memorizar</>,
    imageUrl: 'img/blog/new-testament.png',
    description: (
      <>
       ¿Cómo se formo la Biblia? ¿Por qué esos libros y no otros? y ¿Qué pasa con los
       apocrifos? esto y más en esta fascinante serie
      </>
    ),
    link: '/blog/michael-kruger-diez-hechos-basicos-canon-nt-todo-cristiano-debe-memorizar/',
  },
  {
    title: <>El Estado desde una perspectiva Biblica</>,
    imageUrl: 'img/blog/el-estado.png',
    description: (
      <>
         Te has preguntado alguna vez ¿Qué dice la Biblia respecto al estado?
         ¿Qué áreas es permitido que el estado afecte a tu vida y a la vida de la sociedad?
         ¿Los impuestos son válidos? Muchas preguntas más y como estas son respondidas desde una perspectiva Biblia.
      </>
    ),
    link: '/blog/gary-north-el-estado-indice',
  },
  {
    title: <>Mi amigo musulman</>,
    imageUrl: 'img/blog/musuman-cristiano.png',
    description: (
      <>
        En 2017 estuve viviendo en una casa con muchos musulmanes, me hice amigo de uno
        de ellos y siempre teniamos conversaciones acerca de nuestra fe y diferencias. Te
        invito a leer mi experiencia y argumentos respecto al cristianismo y el islam.
      </>
    ),
    link: '/blog/mi-amigo-musulman/',
  },
  {
    title: <>La remanente que se mantuvo firme</>,
    imageUrl: 'img/blog/pray.jpg',
    description: (
      <>
        Esta es una historia inspiradora de la mayor crisis que vivió la Iglesia Anglicana
        de Canada entre dos fracciones quienes rechazaban la palabra de Dios y el
        remanente que se mantuvo fiel al evangelio y la palabra de Dios.
      </>
    ),
    link: '/blog/anglicanos-canada/',
  },
  {
    title: <>La pandemia de la soledad</>,
    imageUrl: 'img/blog/alone.png',
    description: (
      <>
        La soledad, según nos dicen los expertos en salud pública, está matando a
        tantos personas como obesidad y tabaquismo. Los estadounidenses están solos,
        los alemanes, los franceses bon vivant están solos, e incluso los escandinavos,
        las personas "más felices del mundo" también están solos. Te invito a leer este
        reportaje de como el declive de la familia ha destado esta oculta pandemia.
      </>
    ),
    link: '/blog/alone/',
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className={clsx('text--center')}>
          <Link to={useBaseUrl(link)}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </Link>
        </div>
      )}
      <h3>
        <Link
          to={useBaseUrl(link)}>
          {title}
        </Link>
      </h3>
      <p>
        {description} <Link
          to={useBaseUrl(link)}>
          Ver más ››
        </Link>
      </p>

    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Servimos al Reino de Dios, promoviendo el evangelio que restaura la relación entre Dios y su creación. El cual trae una nueva vida, paz, descanso y esperanza a las personas y brinda justicia al oprimido. Con el objetivo de llegar a una sociedad de personas que aman y se preocupan por su prójimo."
      image={useBaseUrl('/img/header-home.jpg')}
    >
      <header className={clsx(styles.heroBanner)}>
        <div className={clsx('container', styles.containerBanner)}>
          <h1 className={clsx('hero__title', styles.titleBanner)}>{siteConfig.title}</h1>
          <p className="hero__subtitle" style={{fontSize: 17, }}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <div className={clsx('container', styles.h2Body, styles.homeBody)}>
          <h2>Artículos Destacados</h2>
          <span className={clsx(styles.line_span)}></span>
          <Link
            to={useBaseUrl('/blog')}>
            Ver todos ››
          </Link>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
