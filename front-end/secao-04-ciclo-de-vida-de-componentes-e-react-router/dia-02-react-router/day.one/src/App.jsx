import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import { useState } from 'react';

function App() {
  const [estado, setEstado] = useState({
    name: 'Boas vindas',
    number: 0,
  });
  useEffect(() => {
    document.title = estado.name;
  }, [estado]);
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Home />
        </Route>
        {/* Aqui temos como fazer o Route, usando path para definir a url e componente para definir o componente. Assim dizemos que: quando o path for /about, irá renderizar o componente About. */}
        <Route exact path="/about" component={About} />
        <Route
          path="/about/:family"
          render={(props) => <About {...props} name="Fernando" />}
        />
        {/* abaixo temos outra forma de fazer esse Route path, usando o Componente Profile como children do Route */}
        <Route path="/profile">
          <Profile />
        </Route>
        <button
          onClick={() =>
            setEstado({
              name: `Você está conectado há ${estado.number}`,
              number: estado.number + 1,
            })
          }
        >
          Teste
        </button>
      </BrowserRouter>
    </div>
  );
}

export default App;
