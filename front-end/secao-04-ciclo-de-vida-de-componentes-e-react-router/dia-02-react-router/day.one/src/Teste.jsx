import React from 'react';

function Teste(props) {
  return (
    <div>
      <h1>{props.children}</h1>
      <h2>{props.children}</h2>
      <h3>{props.children}</h3>
      <p>{props.teste}</p>
    </div>
  );
}

export default Teste;
