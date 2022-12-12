import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Profile from './Profile';

class App extends React.Component {
  render() {
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
