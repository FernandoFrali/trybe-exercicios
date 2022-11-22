import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    const name = <h1 className="HelloWorld">Fernando</h1>;
    const para = <p>Muito dedicado!</p>;
    const skills = <h2>Minhas habilidades:</h2>;
    const list = (
      <ul className="ulzada">
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Testes assíncronos (JEST)</li>
      </ul>
    );
    return (
      <div className="Divzada">
        {name} {para} {skills} {list}
      </div>
    );
  }
}

export default HelloWorld;
