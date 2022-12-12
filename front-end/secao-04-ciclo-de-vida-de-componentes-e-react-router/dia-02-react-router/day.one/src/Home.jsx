import React from 'react';
import { Link, useHistory, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

function Home() {
  const history = useHistory();
  const logado = false;
  const [estado, setEstado] = useState({
    nome: 'Fernando',
    idade: '21 anos',
  });

  return (
    <div>
      <h1>Homepage</h1>
      <Route exact path="/">
        {logado ? <Redirect to="/profile" /> : <Redirect to="/" />}
      </Route>
      <button
        type="button"
        onClick={() => history.push('/about/Oliveira', estado)}
      >
        Teste de botão
      </button>
    </div>
  );
}

export default Home;
