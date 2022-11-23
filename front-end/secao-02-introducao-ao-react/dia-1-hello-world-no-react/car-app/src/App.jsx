import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
const cars = [
  {
    carro: 'Gol',
    ano: 2000,
    estado: 'usado',
    sell: 'à venda',
  },
  {
    carro: 'Marea',
    ano: 2004,
    estado: 'usado',
    sell: 'à venda',
  },
  {
    carro: 'Onix',
    ano: 2020,
    estado: 'novo',
    sell: 'à venda',
  },
  {
    carro: 'Onix',
    ano: 2018,
    estado: 'usado',
    sell: 'vendido',
  },
];

const cars2 = [
  {
    carro: 'HB20',
    ano: 2012,
    estado: 'novo',
    sell: 'vendido',
  },
  {
    carro: 'Fusca',
    ano: 1955,
    estado: 'usado',
    sell: 'à venda',
  },
  {
    carro: 'Chevette',
    ano: 2020,
    estado: 'novo',
    sell: 'vendido',
  },
  {
    carro: 'Lamborghini',
    ano: 2018,
    estado: 'usado',
    sell: 'à venda',
  },
];
function App() {
  return (
    <div>
      <Header title="Catálogo 1" />
      <Content cars={cars} />
      <Header title="Catálogo 2" />
      <Content cars={cars2} />
    </div>
  );
}

export default App;
