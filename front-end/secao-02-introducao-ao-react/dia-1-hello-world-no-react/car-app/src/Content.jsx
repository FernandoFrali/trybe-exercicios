import React from 'react';

function Content({ cars }) {
  return (
    <ul className="mega-ul">
      {cars.map(({ carro, ano, estado, sell }) => {
        if (carro === 'Marea') {
          return (
            <li key={carro} className="liz">
              <p>{`Carro RUIM ${sell}, estado: ${estado}, versão ${ano}`}</p>
            </li>
          );
        } else if (sell === 'vendido') {
          return (
            <li key={carro} className="vendido">
              <p>{`Carro ${carro} ${sell}, estado: ${estado}, versão ${ano}`}</p>
            </li>
          );
        }
        return (
          <li key={carro} className="liz">
            <p>{`Carro ${carro} ${sell}, estado: ${estado}, versão ${ano}`}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Content;
