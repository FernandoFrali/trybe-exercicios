import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function About(props) {
  const location = useLocation();
  return (
    <div>
      <h1>
        Prazer, me chamo: {location.state.nome}, da família{' '}
        {props.match.params.family}, e tenho {location.state.idade}
      </h1>
      <Link to="/">Voltar para a home</Link>
    </div>
  );
}

export default About;
