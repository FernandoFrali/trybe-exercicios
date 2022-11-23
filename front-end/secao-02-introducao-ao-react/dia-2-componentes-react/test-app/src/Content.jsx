import React from 'react';

function Content({ object }) {
  const objArray = Object.entries(object);
  return (
    <div>
      <ul>
        {object.map((obj, index) => (
          <div key={index}>
            <li className="teste" key={obj.segunda}>
              {obj.segunda}
            </li>
            <li>{obj.terca}</li>
            <li>{obj.quarta}</li>
            <li>{obj.quinta}</li>
            <li>{obj.sexta}</li>
            <li>{obj.sabado}</li>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Content;
