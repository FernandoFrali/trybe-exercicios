import React from 'react';
import { Link } from 'react-router-dom';

function About(props) {
  return (
    <div>
      <h1>
        Prazer, me chamo: {props.name}, da família {props.match.params.family}
      </h1>
      <Link to="/">Voltar para a home</Link>
    </div>
  );
}

export default About;
