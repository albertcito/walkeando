import React, { useEffect } from 'react';

const baseUrl = 'https://www.noteconformes.org';
const Redirect = ({ to = "" }) => {
  const url = `${baseUrl}/${to}`;

  useEffect(() => {
    window.location.href = url;
  }, []);

  return <div className="container redirect">
    Este sitio web sera descontinuado. Redireccionando a <a href={url}>www.noteconformes.com</a>
    <br />
    Redireccionando a <a href={url}>{url}</a>
  </div>;
}

export default Redirect;
