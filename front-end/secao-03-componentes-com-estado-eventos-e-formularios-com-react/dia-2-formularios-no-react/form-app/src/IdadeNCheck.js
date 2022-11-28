import React from 'react';

function IdadeNCheck({ handleChange }) {
  return (
    <>
      <label>Idade:</label>
      <select name="idade" onChange={handleChange}>
        <option>Choose one:</option>
        <option value="menos14">Menos de 14</option>
        <option value="menos18">Menos de 18</option>
        <option value="maior18">Maior de 18</option>
      </select>
      <input type="checkbox" onChange={handleChange} name="checkbox"></input>
    </>
  );
}

export default IdadeNCheck;
